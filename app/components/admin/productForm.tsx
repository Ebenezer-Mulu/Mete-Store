"use client";

import { useState, useEffect } from "react";

export default function ProductForm({ product, onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setSlug(product.slug);
      setDescription(product.description);
      setPrice(product.price);
      setStock(product.stock);
      setCategoryId(product.categoryId);
      setImages(product.images || []);
    }
  }, [product]);

  // ✅ MULTIPLE IMAGE UPLOAD
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files: File[] = Array.from(e.target.files);

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/diferhyqk/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      console.log("Cloudinary response:", data);

      if (data?.secure_url) {
        setImages((prev) => [...prev, data.secure_url]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = product ? "PUT" : "POST";
      const url = product ? `/api/product/${product.id}` : "/api/product";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          slug,
          description,
          price: parseFloat(price),
          stock: parseInt(stock),
          categoryId: parseInt(categoryId),
          images,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save product");
      }

      // ✅ Close popup after success
      onSuccess?.();

      // ✅ Optional reset form
      if (!product) {
        setName("");
        setSlug("");
        setDescription("");
        setPrice("");
        setStock("");
        setCategoryId("");
        setImages([]);
      }
    } catch (error) {
      console.error(error);
      alert("Error saving product");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[500px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* NAME */}
          <input
            type="text"
            placeholder="Product Name"
            className="w-full border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* SLUG */}
          <input
            type="text"
            placeholder="Slug"
            className="w-full border p-2"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            className="w-full border p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* PRICE */}
          <input
            type="number"
            placeholder="Price"
            className="w-full border p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          {/* STOCK */}
          <input
            type="number"
            placeholder="Stock"
            className="w-full border p-2"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <select
            className="w-full border p-2"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select Category</option>

            {categories.map((cat: any) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* MULTIPLE IMAGE UPLOAD */}
          <input type="file" multiple onChange={handleImageUpload} />

          {/* IMAGE PREVIEW */}
          <div className="flex gap-2 flex-wrap">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>

          <div className="flex justify-between pt-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              {product ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

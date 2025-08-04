"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    status: "",
    images: [""], // 💡 Change from 'image' to 'images' (array of strings)
    categoryId: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...form.images];
    updatedImages[index] = value;
    setForm((prev) => ({ ...prev, images: updatedImages }));
  };

  const addImageField = () => {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const removeImageField = (index: number) => {
    const updatedImages = form.images.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, images: updatedImages }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          image: form.images, // ✅ Send images array as 'image' field
        }),
      });

      if (res.ok) {
        setMessage("Product added successfully!");
        setForm({
          name: "",
          slug: "",
          description: "",
          price: "",
          status: "",
          images: [""],
          categoryId: "",
        });
      } else {
        setMessage("Failed to add product.");
      }
    } catch (error) {
      setMessage("Error submitting product.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-25">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="slug"
          placeholder="Product Slug"
          value={form.slug}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="status"
          placeholder="Product Status"
          value={form.status}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        {/* 🖼 Multiple Image Inputs */}
        <div>
          <label className="block font-semibold mb-2">Image URLs</label>
          {form.images.map((url, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                value={url}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder={`Image URL ${index + 1}`}
                className="w-full p-2 border rounded"
                required
              />
              {form.images.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImageField(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-blue-600 hover:underline text-sm mt-1"
          >
            + Add another image
          </button>
        </div>

        <input
          name="categoryId"
          placeholder="Category ID"
          value={form.categoryId}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Add Product"}
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}

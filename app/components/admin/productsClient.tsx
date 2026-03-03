"use client";

import { useState } from "react";
import ProductForm from "./productForm";
import ProductTable from "./productTable";

export default function ProductClient({ products, categories }: any) {
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  async function handleDelete(id: number) {
    const confirmDelete = confirm("Delete this product?");
    if (!confirmDelete) return;

    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    window.location.reload();
  }

  function handleEdit(product: any) {
    setEditingProduct(product);
    setOpen(true);
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto px-6 py-12 mt-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Products</h2>

        <button
          onClick={() => {
            setEditingProduct(null);
            setOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          + Add Product
        </button>
      </div>

      {/* ✅ TABLE COMPONENT */}
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white w-[600px] p-6 rounded-xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <ProductForm
              product={editingProduct}
              onClose={() => setOpen(false)}
              onSuccess={undefined}
            />
          </div>
        </div>
      )}
    </div>
  );
}

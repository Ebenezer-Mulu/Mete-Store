"use client";

import { useState } from "react";
import CategoryForm from "./categoryForm";
import CategoryTable from "./categoryTable";

export default function CategoriesClient({ categories }: any) {
  const [showForm, setShowForm] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-6 py-12 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Categories Management</h1>

        <button
          onClick={() => {
            setEditCategory(null);
            setShowForm(!showForm);
          }}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          + Add New Category
        </button>
      </div>

      {showForm && (
        <CategoryForm
          category={editCategory}
          onClose={() => setShowForm(false)}
        />
      )}

      <CategoryTable
        categories={categories}
        onEdit={(category: any) => {
          setEditCategory(category);
          setShowForm(true);
        }}
      />
    </div>
  );
}

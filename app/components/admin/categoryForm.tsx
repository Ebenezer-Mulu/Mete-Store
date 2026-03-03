"use client";

import { createCategory } from "app/admin/category/action";
import { useTransition, useEffect } from "react";

export default function CategoryForm({
  category,
  onClose,
}: any) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h2 className="text-xl font-bold">
        {category ? "Edit Category" : "Add Category"}
      </h2>

      <form
        action={(formData) => {
          startTransition(async () => {
            await createCategory(formData);

            // ✅ Close popup after success
            onClose?.();
          });
        }}
        className="space-y-4"
      >

        <input
          name="name"
          defaultValue={category?.name || ""}
          placeholder="Category Name"
          className="w-full border p-2 rounded"
          required
        />

        <div className="flex justify-end space-x-3">

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            disabled={isPending}
            className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Category"}
          </button>

        </div>

      </form>
    </div>
  );
}
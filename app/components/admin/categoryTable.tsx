"use client";

import { deleteCategory } from "app/admin/category/action";

export default function CategoryTable({ categories, onEdit }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <table className="w-full text-center">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category: any) => (
            <tr key={category.id} className="border-t">
              <td className="p-3">{category.name}</td>

              <td className="py-4 px-4 align-middle">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <button
                    onClick={() => onEdit(category)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

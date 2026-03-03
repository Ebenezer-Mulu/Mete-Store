"use client";

import { deleteProduct } from "app/admin/products/action";

export default function ProductTable({ products, onEdit }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-hidden">
      <table className="w-full text-center border-separate border-spacing-y-3">
        <thead className="bg-gray-100">
          <tr className="text-gray-700">
            <th className="py-4 px-4">Name</th>
            <th className="py-4 px-4">Slug</th>
            <th className="py-4 px-4">Description</th>
            <th className="py-4 px-4">Price (ETB)</th>
            <th className="py-4 px-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: any) => (
            <tr
              key={product.id}
              className="bg-gray-50 hover:bg-gray-100 transition shadow-sm rounded-xl"
            >
              {/* NAME */}
              <td className="py-4 px-4 align-middle">{product.name}</td>

              {/* SLUG */}
              <td className="py-4 px-4 text-gray-500 align-middle">
                {product.slug}
              </td>

              {/* DESCRIPTION */}
              <td className="py-4 px-4 text-sm text-gray-500 max-w-xs truncate align-middle">
                {product.description}
              </td>

              {/* PRICE */}
              <td className="py-4 px-4 font-semibold align-middle">
                {product.price} ETB
              </td>

              {/* ACTIONS */}
              <td className="py-4 px-4 align-middle">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <button
                    onClick={() => onEdit(product)}
                    className="bg-blue-500 hover:bg-blue-600 transition text-white px-3 py-1 rounded w-20 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded w-20 text-sm"
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

"use server"


import prisma from "app/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createProduct(formData: FormData) {

  await prisma.product.create({
    data: {
      name: formData.get("name") as string,
      slug: (formData.get("name") as string).toString().toLowerCase().replace(/\s+/g, "-"),
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      categoryId: Number(formData.get("categoryId")),
      image: []
    }
  })

  revalidatePath("/admin/products")
}

export async function deleteProduct(id: number) {

  await prisma.product.delete({
    where: { id }
  })

  revalidatePath("/admin/products")
}
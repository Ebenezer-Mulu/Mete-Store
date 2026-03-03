"use server";

import prisma from "app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  await prisma.category.create({
    data: {
      name: formData.get("name") as string,
    },
  });

  revalidatePath("/admin/categories");
}

export async function deleteCategory(id: number) {
  await prisma.category.delete({
    where: { id },
  });

  revalidatePath("/admin/categories");
}

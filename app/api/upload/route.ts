import { NextResponse } from "next/server"
import cloudinary from "@/lib/cloudinary"

export async function POST(req: Request) {

  try {

    const formData = await req.formData()
    const file = formData.get("file") as File

    const buffer = Buffer.from(await file.arrayBuffer())

    const result = await new Promise((resolve, reject) => {

      cloudinary.uploader.upload_stream(
        {
          folder: "ecommerce_products"
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)

    })

    return NextResponse.json(result)

  } catch (error) {

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    )
  }
}
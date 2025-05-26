import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const result = await sql`
      INSERT INTO category (name)
      VALUES (${body.name})
      RETURNING *;
    `;

    return new Response(JSON.stringify(result.rows[0]), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create category" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
}

// CREATE TABLE category (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL
// );



// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const body = await request.json();

//   try {
//     const newCategory = await prisma.category.create({
//       data: {
//         name: body.name,
//       },
//     });

//     return new Response(JSON.stringify(newCategory), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       status: 201,
//     });
//   } catch (error) {
//     console.error("Error creating category:", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to create category" }),
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         status: 500,
//       }
//     );
//   }
// }

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed categories first
  await prisma.category.createMany({
    data: [
      { id: 1, name: "Sunglasses" },
      { id: 2, name: "Watches" },
    ],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      {
        name: "KINGSEVEN Men’s Sunglasses Polarized",
        slug: "kingseven-mens-sunglasses-polarized",
        description:
          "KINGSEVEN Brand Classic Pilot Men’s Sunglasses Polarized UV400 HD Lens Luxury Retro Driving Glasses Large Frame Eyewear",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/cXyQCWfY/1.jpg",
          "https://i.ibb.co/B2BVFKkx/2.jpg",
          "https://i.ibb.co/sv6SgnRS/3.jpg",
          "https://i.ibb.co/5gRVB1v3/4.jpg",
        ],
      },
      {
        id: 3,
        name: "KINGSEVEN New Brand Design Men's Glasses ",
        slug: "kingseven-new-brand-design-mens-glasses",
        description:
          "KINGSEVEN New Brand Design Men's Glasses Polarized Sunglasses  Integrated Lens Fashion Eyewear Oculos de sol",
        image: [
          "https://i.ibb.co/4R9GPgDN/1.jpg",
          "https://i.ibb.co/CKGn7M4K/2.jpg",
          "https://i.ibb.co/3y9DRdSX/4.jpg",
        ],
        price: 2600,
        createdAt: "2025-05-20T20:18:34.521Z",
        categoryId: 1,
      },
      {
        name: "POLASUP 1pc Men's Metal Punk Sunglasses",
        slug: "POLASUP-1pc-Men's-Metal-Punk-Sunglasses",
        description:
          "POLASUP 1pc Men's Metal Punk Sunglasses, Fashionable Glasses, Cyberpunk Heavy Metal Glossy Retro Unique Glasses, Suitable For Summer, All Seasons, Outdoor Use",
        price: 2400,
        categoryId: 1,
        image: [
          "https://i.ibb.co/k2pLHGwk/1.jpg",
          "https://i.ibb.co/27q4fhgR/2.jpg",
          "https://i.ibb.co/5Xxm0h0K/3.jpg",
          "https://i.ibb.co/JW7KNXB3/4.jpg",
        ],
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed data created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

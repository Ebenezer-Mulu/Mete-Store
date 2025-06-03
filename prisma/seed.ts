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
        name: "Couple Watch ",
        slug: "Black-and-White-Silicon-Strap-Couple-Watch",
        description:
          "4pcs Black & White Silicon Strap Couple Watch Set With Alloy Heart Chain Bracelet",
        price: 2600,
        categoryId: 2,
        image: [
          " https://i.ibb.co/VptWN0fp/1.jpg",
          "https://i.ibb.co/4nCGxK4L/2.jpg",
          "https://i.ibb.co/pvC1w2cy/3.jpg",
          "https://i.ibb.co/YT4typcV/4.jpg",
        ],
      },
      {
        name: "Couple Quartz Watches",
        slug: "Couple-Quartz-Watches",
        description:
          "Couple Stainless Steel Strap Fashionable Simple Diamond-Studded Dial Quartz Watches + Heart Beaded Bracelet Set (4pcs/Set) As A Gift For Students Returning To School",
        price: 3400,
        categoryId: 2,
        image: [
          "https://i.ibb.co/BHSnfq4j/1.jpg",
          "https://i.ibb.co/QjfTRzKn/2.jpg",
          "https://i.ibb.co/qYQcybSG/3.jpg",
          "https://i.ibb.co/Qjqhsc1Z/4.jpg",
          "https://i.ibb.co/LD3d1jtb/5.jpg",
          "https://i.ibb.co/27x1zRYc/6.jpg",
        ],
      },
      {
        name: "Unisex Plano Lenses",
        slug: "Unisex-Plano-Lenses",
        description:
          "1pc Fashionable Unisex Plano Lenses Square Metal Eyeglasses Frame With High-End Classic Retro Style Eyebrow Details Clear Glasses Accessories",
        price: 1800,
        categoryId: 2,
        image: [
          "https://i.ibb.co/CsMcGmR0/1.jpg",
          "https://i.ibb.co/QvFcKNmb/2.jpg",
          "https://i.ibb.co/SwN0gFzY/3.jpg",
          "https://i.ibb.co/LzxQWH28/4.jpg",
          "https://i.ibb.co/7x1NTg2T/5.jpg",
          "https://i.ibb.co/pvn5YCYN/6.jpg",
        ],
      },
      {
        name: "Heart Quartz Watch ",
        slug: "Heart-Quartz-Watch",
        description:
          "4pcs/Set Fashion Cute Firework Heart Quartz Watch + Heart Bracelet Set For Women",
        price: 2800,
        categoryId: 2,
        image: [
         "https://i.ibb.co/N2rZ78nY/1.jpg",
"https://i.ibb.co/j9B0GqQ5/2.jpg",
"https://i.ibb.co/RkFJsvbZ/3.jpg",
"https://i.ibb.co/DPZCvNdH/4.jpg"
        ],
      },
      {
        name: "Polarized Fashionable Eyeglasses ",
        slug: "Polarized-Fashionable-Eyeglasses",
        description:
          "1pc Polarized Fashionable Eyeglasses Frame For Driving, Fishing, Outdoor Activities",
        price: 1800,
        categoryId: 1,
        image: [
          "https://i.ibb.co/RTgHNjY6/1.jpg",
          "https://i.ibb.co/9mHZBJYK/2.jpg",
          "https://i.ibb.co/Kx1Q3qv3/3.jpg",
        ],
      },
      {
        name: "Retro Rimless Glasses ",
        slug: "Retro-Rimless-Glasses",
        description:
          "Retro Rimless Glasses for Men Steampunk Sunglasses for Women Sun Glasses Female Fashion Eyeglasses Vintage UV400 Shades Goggles",
        price: 1800,
        categoryId: 1,
        image: [
          "       https://i.ibb.co/ymrwSz0C/1.jpg",
          "https://i.ibb.co/7JtnCsM6/2.jpg",
          "https://i.ibb.co/YBcfKXnY/3.jpg",
        ],
      },

      {
        name: "Round Hip Hop ",
        slug: "Round-Hip-Hop",
        description:
          "Retro Metal Geometric Round Hip Hop Party Decor Fashion Eyeglasses Set Glasses Shades",
        price: 1600,
        categoryId: 1,
        image: [
          " https://i.ibb.co/nsM1q1ff/1.jpg",
          "https://i.ibb.co/LDtHrJty/2.jpg",
          "https://i.ibb.co/wFZdpLDk/3.jpg",
          "https://i.ibb.co/yFqyJz7j/4.jpg",
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

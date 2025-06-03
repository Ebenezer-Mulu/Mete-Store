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
        name: "Geometric Photochromic Glasses",
        slug: "Geometric-Photochromic-Glasses",
        description:
          "1pc Men Geometric Fashion Photochromic Glasses For School Life Daily Clothing Accessories Casual Shades Accessories Beach Accessories Glasses Shades Looks Street Style And Suit For Sweater Jacket Sweatshirt Hoodie Leather Pants And Cargo Pants",
        price: 2100,
        categoryId: 2,
        image: [
          " https://i.ibb.co/q3Y2t5sq/1.jpg",
          "https://i.ibb.co/gnzHgsf/2.jpg",
          "https://i.ibb.co/wNMDwDrj/3.jpg",
          "https://i.ibb.co/mk9ypCd/4.jpg",
          "https://i.ibb.co/3mFjCt8w/5.jpg",
        ],
      },
      {
        name: "Classic Retro Half Frame",
        slug: "Retro-Half-Frame",
        description:
          "1pc Classic Retro Half Frame High-Definition Student Eyeglasses Clear Glasses Accessories",
        price: 1800,
        categoryId: 1,
        image: [
          " https://i.ibb.co/RpxHc86n/1.jpg",
          "https://i.ibb.co/Z6DQFyNz/2.jpg",
          "https://i.ibb.co/DDd46z8K/3.jpg",
          "https://i.ibb.co/LXJY9T4w/4.jpg",
          "https://i.ibb.co/Fk9GkGnm/5.jpg",
        ],
      },
      {
        name: "Unisex Plano Lenses",
        slug: "Unisex-Plano-Lenses",
        description:
          "1pc Fashionable Unisex Plano Lenses Square Metal Eyeglasses Frame With High-End Classic Retro Style Eyebrow Details Clear Glasses Accessories",
        price: 1800,
        categoryId: 1,
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
        name: "KINGSEVEN Men's Glasses ",
        slug: "kingseven-new-brand-design-mens-glasses",
        description:
          "KINGSEVEN New Brand Design Men's Glasses Polarized Sunglasses  Integrated Lens Fashion Eyewear Oculos de sol",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/4R9GPgDN/1.jpg",
          "https://i.ibb.co/CKGn7M4K/2.jpg",
          "https://i.ibb.co/3y9DRdSX/4.jpg",
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

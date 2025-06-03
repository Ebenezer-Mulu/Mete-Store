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
          "https://i.ibb.co/DPZCvNdH/4.jpg",
        ],
      },
      {
        name: "Pablo Raez ",
        slug: "Pablo-Raez-1pc-Man-Watch-Business-Wristwatch",
        description:
          "Pablo Raez 1pc Man Watch Business Wristwatch For Man SUS304 Stainless Steel Silver IPS Case Luxury Black Soft & Comfortable Microfiber Leather Fashion Big Dial With Date 50M Waterproof Brand New Male Quartz Wristwatch Sports Casual Clock Nice Gifts For Friend Or Family Father Presents Fit For Daily Life/Work/Party Decorations Dress Watch",
        price: 3400,
        categoryId: 2,
        image: [
          " https://i.ibb.co/8nfXDDQD/photo-2025-04-15-10-43-25.jpg",
          "https://i.ibb.co/0jRGgYPJ/photo-2025-04-15-10-43-39.jpg",
          "https://i.ibb.co/FqstKz4b/photo-2025-04-15-10-43-45.jpg",
          "https://i.ibb.co/Zz7NfqHP/photo-2025-04-15-10-43-51.jpg",
          "https://i.ibb.co/chc8d2rW/photo-2025-04-15-10-43-57.jpg",
          "https://i.ibb.co/QFhHypfJ/photo-2025-04-15-10-44-01.jpg",
          "https://i.ibb.co/BHCKHzhC/photo-2025-04-15-10-44-05.jpg",
          "https://i.ibb.co/nq5vyYBL/photo-2025-04-15-10-44-11.jpg",
          "https://i.ibb.co/Mk3jc5z6/photo-2025-04-15-10-44-15.jpg",
          "https://i.ibb.co/xtFtGrcn/photo-2025-04-15-10-44-20.jpg",
        ],
      },
      {
        name: "Quartz Wrist Watch ",
        slug: "Quartz-Wrist-Watch",
        description:
          "Men's Stainless Steel Band Fashion Calendar Quartz Wrist Watch As A Gift For Students Returning To School",
        price: 1900,
        categoryId: 2,
        image: [
          "https://i.ibb.co/Ngh5V0h6/photo-2025-04-15-10-46-59.jpg",
          "https://i.ibb.co/spsD4r18/photo-2025-04-15-10-47-03.jpg",
          "https://i.ibb.co/vvCkBgsj/photo-2025-04-15-10-47-09.jpg",
          "https://i.ibb.co/6cjyf0vQ/photo-2025-04-15-10-47-13.jpg",
          "https://i.ibb.co/yFtLQWc1/photo-2025-04-15-10-47-17.jpg",
          "https://i.ibb.co/LDytc9P3/photo-2025-04-15-10-47-20.jpg",
        ],
      },
      {
        name: "30pcs Rings",
        slug: "30pcs-Elegant-And-Luxurious-Eyelash",
        description:
          "30pcs Elegant And Luxurious Eyelash Wave Rhinestone-Inlaid Triangle Stacked Joint Rings For Women, Fashionable And High-Grade Ring Set Suitable For Daily Wear",
        price: 1900,
        categoryId: 4,
        image: [
          "https://i.ibb.co/dTsKsWP/1.jpg",
          "https://i.ibb.co/SXWJWLFL/2.jpg",
          "https://i.ibb.co/fdGg7Qv0/3.jpg",
          "https://i.ibb.co/h5qQY4g/4.jpg",
          "https://i.ibb.co/d4bLBQQf/5.jpg",
        ],
      },
      {
        name: "30pcs Ring Set",
        slug: "30pcs-Ring-Set",
        description: "30pcs LOVE Diamond Heart Leaf Ring Set",
        price: 1900,
        categoryId: 4,
        image: [
          "https://i.ibb.co/B57Q7J0D/1.jpg",
          "https://i.ibb.co/vCTcj9QN/2",
          "https://i.ibb.co/k2MR2dkq/3.jpg",
          "https://i.ibb.co/8LGYrx4c/4.jpg",
        ],
      },
      {
        name: "11Pairs Faux Pearl",
        slug: "11Pairs-Faux-Pearl",
        description: "11Pairs/Set Faux Pearl & Heart Decor Earrings Valentines",
        price: 1500,
        categoryId: 3,
        image: [
          "https://i.ibb.co/qM9zKf9R/1.jpg",
          "https://i.ibb.co/hRzj32j0/2.jpg",
          "https://i.ibb.co/204WxT5q/3.jpg",
          "https://i.ibb.co/s9fXvDDv/4.jpg",
          "https://i.ibb.co/ZnmXtmB/5.jpg",
          "https://i.ibb.co/v4zNPfXD/6.jpg",
        ],
      },
      {
        name: "15Pairs-Pearl-Earing",
        slug: "15pair-Pearl-Effect-Resin-Metal-Earring",
        description: "15pair Pearl Effect Resin Metal Earring Assortment",
        price: 1500,
        categoryId: 3,
        image: [
          "https://i.ibb.co/qM9zKf9R/1.jpg",
          "https://i.ibb.co/hRzj32j0/2.jpg",
          "https://i.ibb.co/204WxT5q/3.jpg",
          "https://i.ibb.co/s9fXvDDv/4.jpg",
          "https://i.ibb.co/ZnmXtmB/5.jpg",
          "https://i.ibb.co/v4zNPfXD/6.jpg",
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

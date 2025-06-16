import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { id: 1, name: "Sunglasses" },
      { id: 2, name: "Watches" },
      { id: 3, name: "Earings" },
      { id: 4, name: "Rings" },
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
          "https://i.ibb.co/VptWN0fp/1.jpg",
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
          "https://i.ibb.co/8nfXDDQD/photo-2025-04-15-10-43-25.jpg",
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
      {
        name: "Double Bridge Glasses",
        slug: "Double-Bridge-Square-Frame-Glasses",
        description:
          "1pc Metal Double Bridge Square Frame Glasses, Fashionable Men's Outdoor Personalized Small Frame Eyeglasses",
        price: 2100,
        categoryId: 1,
        image: [
          "https://i.ibb.co/Xr7KM1Hb/1.jpg",
          "https://i.ibb.co/Kxfpyxx2/2.jpg",
          "https://i.ibb.co/7NdHHk91/3.jpg",
        ],
      },
      {
        name: "Photochromic Sunglasses",
        slug: "1pc-Men-And-Women-Fashion-Glasses",
        description:
          "1pc Men And Women Fashion Glasses, Business Style Glasses Frames Men And Women Fashion Glasses, Can Be Used Indoor And Outdoor, Suitable For Driving Fishing Hiking Cycling Running Golf Everyday Use, Multiple Colors Available (Black Glasses, Brown Glasses, Blue Glasses) For Summer Beach Vacation,Outdoor,Travel",
        price: 2100,
        categoryId: 1,
        image: [
          "https://i.ibb.co/VW69KDmk/1.jpg",
          "https://i.ibb.co/chPX6Mpt/2.jpg",
        ],
      },
      {
        name: "Oval Decorative Glasses",
        slug: "Oval-Decorative-Glasses",
        description:
          "Vintage Oval Decorative Glasses For Women Small Metal Frame Fashion Glasses Ladies Decorative Glasses Beach Accessories For Women Glasses Shades For Summer Beach Vacation,Outdoor,Travel",
        price: 1700,
        categoryId: 1,
        image: [
          "https://i.ibb.co/4wXFtwVH/1.jpg",
          "https://i.ibb.co/dvNWb8q/2.jpg",
          "https://i.ibb.co/bgcj8LSH/3.jpg",
          "https://i.ibb.co/mr4svB6j/4.jpg",
        ],
      },
      {
        name: "Geometric Photochromic Glasses",
        slug: "Geometric-Photochromic-Glasses",
        description:
          "1pc Men Geometric Fashion Photochromic Glasses For School Life Daily Clothing Accessories Casual Shades Accessories Beach Accessories Glasses Shades Looks Street Style And Suit For Sweater Jacket Sweatshirt Hoodie Leather Pants And Cargo Pants",
        price: 2100,
        categoryId: 1,
        image: [
          "https://i.ibb.co/q3Y2t5sq/1.jpg",
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
          "https://i.ibb.co/RpxHc86n/1.jpg",
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
          "https://i.ibb.co/ymrwSz0C/1.jpg",
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
          "https://i.ibb.co/nsM1q1ff/1.jpg",
          "https://i.ibb.co/LDtHrJty/2.jpg",
          "https://i.ibb.co/wFZdpLDk/3.jpg",
          "https://i.ibb.co/yFqyJz7j/4.jpg",
        ],
      },
      {
        name: "Boss Hugo Boss",
        slug: "Boss-Hugo-Boss",
        description:
          "Boss sunglasses combine modern elegance with precision craftsmanship, offering sharp style and reliable UV protection.Perfect for confident, sophisticated looks that stand out effortlessly",
        price: 2400,
        categoryId: 1,
        image: [
          "https://i.ibb.co/TBQzfbGz/1.jpg",
          "https://i.ibb.co/60qMmHdd/2.jpg",
        ],
      },
      {
        name: "Cartier sunglasses",
        slug: "Cartier-sunglasses",
        description:
          "Cartier sunglasses redefine luxury with exquisite detailing and flawless craftsmanship.Designed for those who value sophistication and timeless style.",
        price: 2500,
        categoryId: 1,
        image: [
          "https://i.ibb.co/QF8VdYTg/1.jpg",
          "https://i.ibb.co/KzhMkKp7/2.jpg",
          "https://i.ibb.co/jvS9m0gG/3.jpg",
          "https://i.ibb.co/NnKMnhmr/4.jpg",
          "https://i.ibb.co/XxB2kxty/5.jpg",
          "https://i.ibb.co/6cRT0GYc/6.jpg",
          "https://i.ibb.co/gMY15fN9/7.jpg",
          "https://i.ibb.co/HL7VcqJF/8.jpg",
          "https://i.ibb.co/M55kwtrC/9.jpg",
        ],
      },
      {
        name: "Celine sunglasses",
        slug: "Celine-sunglasses",
        description:
          "Celine sunglasses blend bold minimalism with Parisian elegance for a distinct high-fashion look.Crafted with premium materials, they offer timeless style and everyday luxury.",
        price: 2200,
        categoryId: 1,
        image: [
          "https://i.ibb.co/N25rGxvr/1.jpg",
          "https://i.ibb.co/6pLMD7Z/2.jpg",
        ],
      },
      {
        name: "Dior sunglasses",
        slug: "Dior-sunglasses",
        description:
          "Dior sunglasses fuse cutting-edge design with luxurious sophistication for a bold fashion statement.Expertly crafted, they offer standout style and flawless UV protection.",
        price: 2500,
        categoryId: 1,
        image: [
          "https://i.ibb.co/Fb3WFkXQ/1.jpg",
          "https://i.ibb.co/XkkJd2dq/2.jpg",
          "https://i.ibb.co/SXFbN2FW/3.jpg",
          "https://i.ibb.co/zWrgy7pC/4.jpg",
          "https://i.ibb.co/4Z7qKTqr/5.jpg",
          "https://i.ibb.co/bg1cHHMy/6.jpg",
          "https://i.ibb.co/bY0ffVc/7.jpg",
        ],
      },
      {
        name: "Dita sunglasses",
        slug: "Dita sunglasses",
        description:
          "Dita sunglasses embody precision, luxury, and bold craftsmanship with every frame.Designed for those who appreciate detail, durability, and elevated style.",
        price: 2400,
        categoryId: 1,
        image: [
          "https://i.ibb.co/tw8k16y5/1.jpg",
          "https://i.ibb.co/hxyhwy1T/2.jpg",
        ],
      },
      {
        name: "Gucci sunglasses",
        slug: "Gucci_sunglasses",
        description:
          "Gucci sunglasses showcase bold, iconic designs infused with Italian luxury and flair.Perfect for those who want to make a stylish, confident statement every day.",
        price: 2500,
        categoryId: 1,
        image: [
          "https://i.ibb.co/cKzr87J0/1.jpg",
          "https://i.ibb.co/p6S2gJ8Q/2.jpg",
          "https://i.ibb.co/NQQKhrn/3.jpg",
          "https://i.ibb.co/VFvnVjB/4.jpg",
          "https://i.ibb.co/bMGpm7DW/5.jpg",
          "https://i.ibb.co/TDxSG5Mg/6.jpg",
          "https://i.ibb.co/sJjdFsDK/7.jpg",
        ],
      },
      {
        name: "Lacoste sunglasses",
        slug: "Lacoste_sunglasses",
        description:
          "Lacoste sunglasses combine sporty elegance with classic French style for a fresh, versatile look.Durable and comfortable, they’re perfect for active lifestyles and everyday wear.",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/FkXNs1Nh/1.jpg",
          "https://i.ibb.co/ymwW2rhW/2.jpg",
        ],
      },
      {
        name: "Maybach sunglasses",
        slug: "Maybach_sunglasses",
        description:
          "Maybach sunglasses define luxury with impeccable craftsmanship and sophisticated design.They deliver unmatched elegance and comfort for the discerning style connoisseur.",
        price: 2500,
        categoryId: 1,
        image: [
          "https://i.ibb.co/whD4qkwK/1.jpg",
          "https://i.ibb.co/nsxvvwv3/2.jpg",
          "https://i.ibb.co/tpLwKkjd/3.jpg",
          "https://i.ibb.co/27539GnV/4.jpg",
          "https://i.ibb.co/tpGcmtJv/5.jpg",
          "https://i.ibb.co/tTRTNKq1/6.jpg",
        ],
      },
      {
        name: "Miu Miu sunglasses",
        slug: "Miu-Miu-sunglasses",
        description:
          "Miu Miu sunglasses bring playful, edgy designs with a touch of youthful elegance.Perfect for those who love bold fashion with a fun, modern twist.",
        price: 2400,
        categoryId: 1,
        image: [
          "https://i.ibb.co/rRrSVyNQ/1.jpg",
          "https://i.ibb.co/TD5fdf5X/2.jpg",
          "https://i.ibb.co/xSGNyT91/3.jpg",
          "https://i.ibb.co/Dg98XCP0/4.jpg",
          "https://i.ibb.co/2YRLh1g9/5.jpg",
          "https://i.ibb.co/4RdJhNF9/6.jpg",
          "https://i.ibb.co/jPmjz3J0/7.jpg",
        ],
      },
      {
        name: "Montblanc sunglasses",
        slug: "Montblanc_sunglasses",
        description:
          "Montblanc sunglasses combine refined craftsmanship with timeless, understated luxury.Designed for professionals who appreciate elegance and superior quality.",
        price: 2400,
        categoryId: 1,
        image: [
          "https://i.ibb.co/93SQf4jj/1.jpg",
          "https://i.ibb.co/qMK0KCbN/2.jpg",
          "https://i.ibb.co/S4xWXnGg/3.jpg",
          "https://i.ibb.co/Vc7h9P3C/4.jpg",
          "https://i.ibb.co/9kmYx7hT/5.jpg",
          "https://i.ibb.co/xtdDrdhd/6.jpg",
          "https://i.ibb.co/TBNcZ1g9/7.jpg",
        ],
      },
      {
        name: "Prada sunglasses",
        slug: "Prada_sunglasses",
        description:
          "Prada sunglasses blend innovative design with sophisticated Italian craftsmanship.They offer bold style and exceptional comfort for a modern, luxurious look.",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/v6TNNgxd/1.jpg",
          "https://i.ibb.co/XkbGMbqR/2.jpg",
          "https://i.ibb.co/4ny8Q4cv/3.jpg",
          "https://i.ibb.co/R4hyYL0W/4.jpg",
          "https://i.ibb.co/tp98F9d9/5.jpg",
          "https://i.ibb.co/sdLg3b6M/6.jpg",
          "https://i.ibb.co/MxyYn82K/7.jpg",
        ],
      },
      {
        name: "Rayban sunglasses",
        slug: "Rayban_sunglasses",
        description:
          "Ray-Ban sunglasses deliver classic, iconic style paired with reliable UV protection.Built for everyday wear, they offer timeless appeal and lasting comfort.",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/ycBgvkLX/1.jpg",
          "https://i.ibb.co/XZCLFQcm/2.jpg",
          "https://i.ibb.co/Mx4xJRbc/3.jpg",
          "https://i.ibb.co/ZnbDwp1/5.jpg",
          "https://i.ibb.co/B2N6qgRm/6.jpg",
        ],
      },
      {
        name: "Ray-Ban Tech",
        slug: "Ray-Ban_Tech_sunglasses",
        description:
          "Ray-Ban Tech combines iconic style with cutting-edge technology for enhanced performance.Featuring advanced lenses and lightweight frames, they deliver superior clarity and comfort.",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/wN8zS45C/1.jpg",
          "https://i.ibb.co/4gVSGWvN/2.jpg",
          "https://i.ibb.co/sd3TwY3k/3.jpg",
          "https://i.ibb.co/9HM5Skh4/6.jpg",
        ],
      },
      {
        name: "Versace sunglasses",
        slug: "Versace_sunglasses",
        description:
          "Versace sunglasses fuse bold Italian glamour with striking, luxurious designs.Perfect for those who want to make a powerful, fashion-forward statement.",
        price: 2600,
        categoryId: 1,
        image: [
          "https://i.ibb.co/3yGhSpdh/1.jpg",
          "https://i.ibb.co/mFhFZXw4/2.jpg",
          "https://i.ibb.co/zWs7KfWc/3.jpg",
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

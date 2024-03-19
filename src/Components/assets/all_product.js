import p1_img from "./product_1.jpg";
import p2_img from "./product_2.jpg";
import p3_img from "./product_3.jpg";
import p4_img from "./product_4.jpg";
import p5_img from "./product_5.webp";
import p6_img from "./product_6.webp";
import p7_img from "./product_7.jpg";
import p8_img from "./product_8.webp";
import p9_img from "./product_9.jpg";
import p10_img from "./product_10.jpg";
import p11_img from "./product_11.webp";
import p12_img from "./product_12.webp";
import p13_img from "./uncharted4.png";
import p14_img from "./product_14.jpg";
import p15_img from "./product_15.jpg";
import p16_img from "./product_16.webp";
import p17_img from "./product_17.webp";
import p18_img from "./product_18.avif";
import p19_img from "./product_19.jpg";
import p20_img from "./product_20.avif";
import p21_img from "./product_21.avif";
import p22_img from "./dota2.png";
import p23_img from "./zootycoon.png";
import p24_img from "./aoe.png";
import p25_img from "./crusaderkings.png";
import p26_img from "./civilization.png";
import p27_img from "./daysgone.png";
import p28_img from "./spiderRem.png";
import p29_img from "./dragon.png";
import p30 from "./halo.png";
import p31 from "./forza.png";
import p32 from "./gears.png";
import p33 from "./sot.png";
import p34 from "./ori.png";
import p35 from "./sod2.png";
import p36 from "./quantum.png";

let all_product = [
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    image: p1_img,
    genre: "Action role-playing",
    new_price: 750.0,
    old_price: 2000.5,
    // description:
    developer: "CD Projekt Red",
    release_date: "May 19, 2015",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "Microsoft Windows",
      "Nintendo Switch",
    ],
    category: "pc",
    rating: 9.8,
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    image: p2_img,
    genre: "Action-adventure",
    new_price: 850.0,
    old_price: 1900.5,
    // description:
    developer: "Rockstar Studios",
    release_date: "October 26, 2018",
    platforms: ["PlayStation 4", "Xbox One", "Microsoft Windows"],
    category: "pc",
    rating: 9.7,
  },
  {
    id: 3,
    name: "The Legend of Zelda: Breath of the Wild",
    image: p3_img,
    genre: "Action-adventure",
    new_price: 650.0,
    old_price: 1800.5,
    // description:
    developer: "Nintendo EPD",
    release_date: "March 3, 2017",
    platforms: ["Nintendo Switch", "Wii U"],
    category: "pc",
    rating: 9.5,
  },
  {
    id: 4,
    name: "Super Mario Odyssey",
    image: p4_img,
    genre: "Platformer",
    new_price: 750.0,
    old_price: 1300.5,
    // description:
    developer: "Nintendo EPD",
    release_date: "October 27, 2017",
    platforms: ["Nintendo Switch"],
    category: "pc",
    rating: 9.7,
  },
  {
    id: 5,
    name: "The Last of Us Part II",
    image: p5_img,
    genre: "Action-adventure",
    new_price: 950.0,
    old_price: 2200.5,
    // description:
    developer: "Naughty Dog",
    release_date: "June 19, 2020",
    platforms: ["PlayStation 4"],
    category: "pc",
    rating: 9.5,
  },
  {
    id: 6,
    name: "God of War",
    image: p6_img,
    genre: "Action-adventure",
    new_price: 850.0,
    old_price: 1800.5,
    // description:
    developer: "Santa Monica Studio",
    release_date: "April 20, 2018",
    platforms: ["PlayStation 4"],
    category: "pc",
    rating: 9.7,
  },
  {
    id: 7,
    name: "Cyberpunk 2077",
    image: p7_img,
    genre: "Action role-playing",
    new_price: 1000.0,
    old_price: 2500.5,
    // description:
    developer: "CD Projekt Red",
    release_date: "December 10, 2020",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "Microsoft Windows",
      "Google Stadia",
    ],
    category: "pc",
    rating: 7.2,
  },
  {
    id: 8,
    name: "Persona 5",
    image: p8_img,
    genre: "Role-playing",
    new_price: 600.0,
    old_price: 1500.5,
    // description:
    developer: "Atlus",
    release_date: "April 4, 2017",
    platforms: ["PlayStation 4", "PlayStation 3"],
    category: "ps",
    rating: 9.3,
  },
  {
    id: 9,
    name: "Bloodborne",
    image: p9_img,
    genre: "Action role-playing",
    new_price: 750.0,
    old_price: 1300.5,
    // description:
    developer: "FromSoftware",
    release_date: "March 24, 2015",
    platforms: ["PlayStation 4"],
    category: "ps",
    rating: 9.1,
  },
  {
    id: 10,
    name: "Dark Souls III",
    image: p10_img,
    genre: "Action role-playing",
    new_price: 750.0,
    old_price: 1200.5,
    // description:
    developer: "FromSoftware",
    release_date: "March 24, 2016",
    platforms: ["PlayStation 4", "Xbox One", "Microsoft Windows"],
    category: "ps",
    rating: 9.0,
  },
  {
    id: 11,
    name: "The Elder Scrolls V: Skyrim",
    image: p11_img,
    genre: "Action role-playing",
    new_price: 700.0,
    old_price: 1250.5,
    // description:
    developer: "Bethesda Game Studios",
    release_date: "November 11, 2011",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "Microsoft Windows",
      "Nintendo Switch",
    ],
    category: "ps",
    rating: 9.3,
  },
  {
    id: 12,
    name: "Grand Theft Auto V",
    image: p12_img,
    genre: "Action-adventure",
    new_price: 950.0,
    old_price: 2200.5,
    // description:
    developer: "Rockstar North",
    release_date: "September 17, 2013",
    platforms: [
      "PlayStation 4",
      "PlayStation 3",
      "Xbox One",
      "Xbox 360",
      "Microsoft Windows",
    ],
    category: "ps",
    rating: 9.5,
  },
  {
    id: 13,
    name: "Uncharted 4: A Thief's End",
    image: p13_img,
    genre: "Action-adventure",
    new_price: 750.0,
    old_price: 1400.5,
    // description:
    developer: "Naughty Dog",
    release_date: "May 10, 2016",
    platforms: ["PlayStation 4"],
    category: "ps",
    rating: 9.6,
  },
  {
    id: 14,
    name: "Horizon Zero Dawn",
    image: p14_img,
    genre: "Action role-playing",
    new_price: 800.0,
    old_price: 1400.5,
    // description:
    developer: "Guerrilla Games",
    release_date: "February 28, 2017",
    platforms: ["PlayStation 4", "Microsoft Windows"],
    category: "ps",
    rating: 9.0,
  },
  {
    id: 15,
    name: "Ghost of Tsushima",
    image: p15_img,
    genre: "Action-adventure",
    new_price: 850.0,
    old_price: 1600.5,
    // description:
    developer: "Sucker Punch Productions",
    release_date: "July 17, 2020",
    platforms: ["PlayStation 4"],
    category: "ps",
    rating: 9.3,
  },
  {
    id: 16,
    name: "Final Fantasy VII Remake",
    image: p16_img,
    genre: "Action role-playing",
    new_price: 750.0,
    old_price: 2000.5,
    // description:
    developer: "Square Enix",
    release_date: "April 10, 2020",
    platforms: ["PlayStation 4"],
    category: "ps",
    rating: 9.0,
  },
  {
    id: 17,
    name: "Minecraft",
    image: p17_img,
    genre: "Sandbox, survival",
    new_price: 550.0,
    old_price: 1100.5,
    // description:
    developer: "Mojang Studios",
    release_date: "November 18, 2011",
    platforms: ["Multiple"],
    category: "xbox",
    rating: 9.0,
  },
  {
    id: 18,
    name: "Fortnite",
    image: p18_img,
    genre: "Battle royale, sandbox",
    new_price: 500.0,
    old_price: 1000.5,
    // description:
    developer: "Epic Games",
    release_date: "July 25, 2017",
    platforms: ["Multiple"],
    category: "xbox",
    rating: 8.5,
  },
  {
    id: 19,
    name: "Among Us",
    image: p19_img,
    genre: "Party, social deduction",
    new_price: 350.0,
    old_price: 900.5,
    // description:
    developer: "Innersloth",
    release_date: "June 15, 2018",
    platforms: ["Android", "iOS", "Microsoft Windows"],
    category: "xbox",
    rating: 9.0,
  },
  {
    id: 20,
    name: "Overwatch",
    image: p20_img,
    genre: "First-person shooter",
    new_price: 1000.0,
    old_price: 500.5,
    // description:
    developer: "Blizzard Entertainment",
    release_date: "May 24, 2016",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "Microsoft Windows",
      "Nintendo Switch",
    ],
    category: "xbox",
    rating: 8.5,
  },
  {
    id: 21,
    name: "Call of Duty: Modern Warfare",
    image: p21_img,
    genre: "First-person shooter",
    new_price: 750.0,
    old_price: 1700.5,
    // description:
    developer: "Infinity Ward",
    release_date: "October 25, 2019",
    platforms: ["PlayStation 4", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 9,
  },
  {
    id: 22,
    name: "Dota 2",
    image: p22_img, // You can provide the image URL
    genre: "MOBA (Multiplayer Online Battle Arena)",
    new_price: 0,
    old_price: 0, // Not applicable (Dota 2 is free-to-play)
    developer: "Valve Corporation",
    release_date: "July 9, 2013", // Dota 2 was officially released
    platforms: ["Microsoft Windows"], // Also available on macOS and Linux
    category: "pc",
    rating: 9,
  },
  {
    id: 23,
    name: "Zoo Tycoon Definitive Edition",
    image: p23_img, // You can provide the image URL
    genre: "Simulation",
    new_price: 1299.99,
    old_price: 1499.99,
    developer: "Frontier Developments",
    release_date: "October 31, 2017", // Release date may vary depending on the platform
    platforms: ["Microsoft Windows"], // Also available on Xbox consoles
    category: "pc",
    rating: 8,
  },
  {
    id: 24,
    name: "Age of Empires III: Definitive Edition",
    image: p24_img, // You can provide the image URL
    genre: "Real-time strategy",
    new_price: 1199.99,
    old_price: 1139.99,
    developer: "Forgotten Empires, Tantalus Media, Wicked Witch",
    release_date: "October 15, 2020", // Release date may vary depending on the platform
    platforms: ["Microsoft Windows"], // Also available on Xbox consoles
    category: "pc",
    rating: 8,
  },
  {
    id: 25,
    name: "Crusader Kings III",
    image: p25_img, // You can provide the image URL
    genre: "Grand strategy",
    new_price: 1149.99,
    old_price: 1159.99,
    developer: "Paradox Interactive",
    release_date: "September 1, 2020",
    platforms: ["Microsoft Windows"], // Also available on macOS and Linux
    category: "pc",
    rating: 9,
  },
  {
    id: 26,
    name: "Sid Meier's Civilization VI",
    image: p26_img, // You can provide the image URL
    genre: "Turn-based strategy",
    new_price: 39.99,
    old_price: 59.99,
    developer: "Firaxis Games",
    release_date: "October 21, 2016", // Release date may vary depending on the platform
    platforms: ["Microsoft Windows"], // Also available on macOS, Linux, iOS, Nintendo Switch, PlayStation 4, Xbox One
    category: "pc",
    rating: 9,
  },
  {
    id: 27,
    name: "Days Gone",
    image: p27_img, // You can provide the image URL
    genre: "Action-adventure",
    new_price: 39.99,
    old_price: 59.99,
    developer: "Bend Studio",
    release_date: "April 26, 2019",
    platforms: ["PlayStation 4"],
    category: "ps",
    rating: 8,
  },
  {
    id: 28,
    name: "Spider-Man Remastered",
    image: p28_img, // You can provide the image URL
    genre: "Action-adventure",
    new_price: 49.99,
    old_price: 69.99,
    developer: "Insomniac Games",
    release_date: "November 12, 2020",
    platforms: ["PlayStation 5"],
    category: "ps",
    rating: 9,
  },
  {
    id: 29,
    name: "The Legend of Dragoon",
    image: p29_img, // You can provide the image URL
    genre: "Role-playing",
    new_price: 1114.99,
    old_price: 1314.99, // The Legend of Dragoon Remastered is a new release
    developer: "SCE Japan Studio",
    release_date: "December 2, 1999 (Original release) / TBA (Remastered)",
    platforms: ["PlayStation"],
    category: "ps",
    rating: 8,
  },
  {
    id: 30,
    name: "Halo Infinite",
    image: p30, // You can provide the image URL
    genre: "First-person shooter",
    new_price: 1159.99,
    old_price: 1659.99, // Halo Infinite doesn't have an old price
    developer: "343 Industries",
    release_date: "December 8, 2021",
    platforms: ["Xbox Series X/S", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 9,
  },
  {
    id: 31,
    name: "Forza Horizon 5",
    image: p31, // You can provide the image URL
    genre: "Racing",
    new_price: 1259.99,
    old_price: 1699.99, // Forza Horizon 5 doesn't have an old price
    developer: "Playground Games",
    release_date: "November 9, 2021",
    platforms: ["Xbox Series X/S", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 9,
  },
  {
    id: 32,
    name: "Gears 5",
    image: p32, // You can provide the image URL
    genre: "Third-person shooter",
    new_price: 39.99,
    old_price: 59.99,
    developer: "The Coalition",
    release_date: "September 10, 2019",
    platforms: ["Xbox Series X/S", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 8,
  },
  {
    id: 33,
    name: "Sea of Thieves",
    image: p33, // You can provide the image URL
    genre: "Action-adventure",
    new_price: 1239.99,
    old_price: 1449.99,
    developer: "Rare",
    release_date: "March 20, 2018",
    platforms: ["Xbox Series X/S", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 8,
  },
  {
    id: 34,
    name: "Ori and the Will of the Wisps",
    image: p34, // You can provide the image URL
    genre: "Platform-adventure",
    new_price: 1129.99,
    old_price: 1599.99, // Ori and the Will of the Wisps doesn't have an old price
    developer: "Moon Studios",
    release_date: "March 11, 2020",
    platforms: ["Xbox Series X/S", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 9,
  },
  {
    id: 35,
    name: "State of Decay 2",
    image: p35, // You can provide the image URL
    genre: "Survival",
    new_price: 1429.99,
    old_price: 1839.99,
    developer: "Undead Labs",
    release_date: "May 22, 2018",
    platforms: ["Xbox Series X/S", "Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 8,
  },
  {
    id: 36,
    name: "Quantum Break",
    image: p36, // You can provide the image URL
    genre: "Action-adventure, third-person shooter",
    new_price: 2239.99,
    old_price: 2359.99,
    developer: "Remedy Entertainment",
    release_date: "April 5, 2016",
    platforms: ["Xbox One", "Microsoft Windows"],
    category: "xbox",
    rating: 8,
  },
];

export default all_product;

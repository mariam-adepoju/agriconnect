import { assets } from "@/assets/asset";

export const articles: Record<BlogCategory, Article[]> = {
  tech: [
    {
      title: "5 Digital Tools Every Nigerian Farmer Should Be Using in 2025",
      time: "10-15 Minutes read",
      description:
        "Digital tools are transforming farming in Nigeria by helping farmers make faster, smarter, and more profitable decisions.",
      author: "Musa Aliyu",
      date: "February, 2025",
      image: assets.digitaltools,
    },
    {
      title: "How Mobile Phones Are Changing the Way Farmers Trade",
      time: "10-15 Minutes read",
      description:
        "Mobile phones have completely transformed how farmers trade by giving them instant access to buyers and market information.",
      author: "Musa Aliyu",
      date: "February, 2025",
      image: assets.smarttrade,
    },
  ],
  business: [
    {
      title:
        "Everything You Need to Know About Sourcing Fresh Tomatoes in Bulk",
      time: "10-15 Minutes read",
      description:
        "Fresh tomatoes are one of the most in-demand produce items, but sourcing them in bulk requires knowing the right seasons and trusted suppliers.",
      author: "Adewale Adegoke",
      date: "January, 2025",
      image: assets.tomatoes,
    },
    {
      title: "How Cooperatives Can Boost Farmer Negotiation Power in Nigeria",
      time: "10-15 Minutes read",
      description:
        "Cooperatives help farmers negotiate better prices by pooling their produce and sharing market information.",
      author: "Bunmi Alonge",
      date: "April, 2025",
      image: assets.cooperativeboast,
    },
  ],
  farm: [
    {
      title: "How to Choose the Right Seeds for Your Soil Type in Nigeria",
      time: "10-15 Minutes read",
      description:
        "Choosing the right seeds starts with understanding your soil type—whether it's sandy, loamy, or clay—because each crop grows best in specific conditions.",
      author: "Adewale Adegoke",
      date: "January, 2025",
      image: assets.rightsoil,
    },
  ],
};

export const blogCategories = [
  { id: "tech", name: "Tech", count: articles.tech.length },
  { id: "business", name: "Business", count: articles.business.length },
  { id: "farm", name: "Farm Education", count: articles.farm.length },
] as const;

export const categories: Category[] = [
  { id: 1, name: "Protein", imageUrl: assets.protein },
  { id: 2, name: "Vegetables", imageUrl: assets.vegetable },
  { id: 3, name: "Grains", imageUrl: assets.grains },
  { id: 4, name: "Nuts", imageUrl: assets.nuts },
  { id: 5, name: "Fruits", imageUrl: assets.fruits },
  { id: 6, name: "Roots & Tubers", imageUrl: assets.roots },
];

export const sellers: Seller[] = [
  {
    id: 1,
    name: "Ogunrunu Ashim",
    location: "Osun, Nigeria",
    avatar: assets.ibrahim,
  },
  {
    id: 2,
    name: "Agrip Farm",
    location: "Lagos, Nigeria",
    avatar: assets.kehinde,
  },
  {
    id: 3,
    name: "Twin Farm",
    location: "Osun, Nigeria",
    avatar: assets.twin,
  },
  {
    id: 4,
    name: "Aisha Yusuf",
    location: "Lagos, Nigeria",
    avatar: assets.aisha,
  },
  {
    id: 5,
    name: "Kunle Adeyemi",
    location: "Oyo, Nigeria",
    avatar: assets.kunle,
  },
  {
    id: 6,
    name: "Lade Farm",
    location: "Oyo, Nigeria",
    avatar: assets.lade,
  },
];
export const products: Product[] = [
  // --- Category 1: Protein ---
  {
    id: 101,
    name: "Chicken Breast",
    categoryId: 1,
    price: 3800, // Was 8.99 (USD equivalent) -> now ~₦3,800 per kg/pack
    imageUrl: assets.chickenbreast,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Corporate",
    seller: sellers[5],
    reviews: [
      {
        reviewerName: "Adebayo K.",
        rating: 5,
        description: "Excellent quality and very tender. Perfect for grilling.",
      },
    ],
    description:
      "Boneless, skinless, lean protein sourced locally for freshness. Ideal for grilling, frying, or shredding.",
  },
  {
    id: 102,
    name: "Salmon Fillet",
    categoryId: 1,
    price: 7500,
    imageUrl: assets.salmonfillet,
    condition: "Frozen",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Chioma E.",
        rating: 4,
        description: "Good size and flavor, but took a while to thaw properly.",
      },
    ],
    description:
      "Individually frozen, rich in Omega-3 fatty acids. A delicious and healthy source of protein.",
  },
  {
    id: 103,
    name: "Tofu Block",
    categoryId: 1,
    price: 1200, // Was 3.5 -> now ~₦1,200 (specialized processed food)
    imageUrl: assets.tofu,
    condition: "Processed",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Femi O.",
        rating: 5,
        description:
          "Firm texture, great for stir-fries. Highly recommend this brand.",
      },
    ],
    description:
      "Extra firm tofu, perfect for absorbing marinades and holding its shape in stir-fries and curries.",
  },
  {
    id: 104,
    name: "Kidney Beans (Bag)",
    categoryId: 1,
    price: 1800,
    imageUrl: assets.kidneybeans,
    condition: "Dried",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Ngozi I.",
        rating: 4,
        description: "Clean and quick to cook. A staple for my soups.",
      },
    ],
    description:
      "A 1kg bag of dried red kidney beans. A protein and fiber powerhouse, great for chilis and soups.",
  },
  {
    id: 105,
    name: "Ground Beef (Lean)",
    categoryId: 1,
    price: 3200, // Was 7.25 -> now ~₦3,200 per kg/pack
    imageUrl: assets.beef,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Tunde B.",
        rating: 3,
        description: "A little fatty for 'lean', but still decent for burgers.",
      },
    ],
    description:
      "85% lean ground beef, perfect for meatballs, tacos, and homemade patties. Freshly prepared.",
  },
  {
    id: 106,
    name: "Eggs (Dozen)",
    categoryId: 1,
    price: 2500, // Was 4.0 -> now ~₦2,500 per dozen (reflecting current high costs)
    imageUrl: assets.eggs,
    condition: "Fresh",
    location: "Osun",
    sellerType: "Corporate",
    seller: sellers[2],
    reviews: [
      {
        reviewerName: "Aisha M.",
        rating: 5,
        description: "Farm fresh and great quality. Yolk color is excellent.",
      },
    ],
    description:
      "One dozen large, white, grade-A eggs. A versatile source of protein for any meal.",
  },

  // --- Category 2: Vegetables ---
  {
    id: 201,
    name: "Carrot (Bunch)",
    categoryId: 2,
    price: 500, // Was 1.2 -> now ~₦500 per bunch
    imageUrl: assets.carrot,
    condition: "Organic",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Kunle D.",
        rating: 5,
        description: "Sweet and crunchy. The kids love these for snacks.",
      },
    ],
    description:
      "A fresh bunch of organic carrots. Sweet, crunchy, and excellent for snacking or cooking.",
  },
  {
    id: 202,
    name: "Broccoli Crown",
    categoryId: 2,
    price: 1500, // Was 2.5 -> now ~₦1,500 (premium vegetable)
    imageUrl: assets.brocolli,
    condition: "Fresh",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Sade P.",
        rating: 4,
        description: "Very fresh, no yellowing at all. Cooked up nicely.",
      },
    ],
    description:
      "One large, fresh broccoli crown. A nutrient-dense vegetable, great steamed or roasted.",
  },
  {
    id: 203,
    name: "Spinach ",
    categoryId: 2,
    price: 800, // Was 3.0 -> now ~₦800 per large bag
    imageUrl: assets.spinach,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Jide T.",
        rating: 5,
        description:
          "Large, dark green leaves. Perfect for smoothies and stews.",
      },
    ],
    description:
      "A large bag of fresh spinach leaves. Versatile for salads, cooking, or boosting smoothies.",
  },
  {
    id: 204,
    name: "Bell Peppers (3-Pack)",
    categoryId: 2,
    price: 1800, // Was 4.5 -> now ~₦1,800 for the pack (high value)
    imageUrl: assets.bellpepper,
    condition: "Fresh",
    location: "Lagos",
    sellerType: "Individual",
    seller: sellers[3],
    reviews: [
      {
        reviewerName: "Amara G.",
        rating: 4,
        description:
          "Good variety of colors. A bit smaller than expected, though.",
      },
    ],
    description:
      "A mix of three fresh bell peppers (red, yellow, green). Perfect for stir-fries and stuffing.",
  },
  {
    id: 205,
    name: "Lettuce",
    categoryId: 2,
    price: 600, // Was 1.75 -> now ~₦600 per head
    imageUrl: assets.lettuce,
    condition: "Organic",
    location: "Osun",
    sellerType: "Corporate",
    seller: sellers[2],
    reviews: [
      {
        reviewerName: "Chinedu Z.",
        rating: 5,
        description:
          "Crisp and fresh. Held up well in the refrigerator for a week.",
      },
    ],
    description:
      "One head of crisp, organic romaine lettuce. The foundation for a fresh, crunchy salad.",
  },
  {
    id: 206,
    name: "Tomatoes",
    categoryId: 2,
    price: 450, // Was 0.99 (low price) -> now ~₦450 per standard measure/small pack
    imageUrl: assets.tomatoes,
    condition: "Fresh",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Kemi L.",
        rating: 3,
        description: "Some were slightly bruised on arrival. Flavor is okay.",
      },
    ],
    description:
      "A selection of fresh, ripe red tomatoes. Essential for sauces, salads, and garnishes.",
  },

  // --- Category 3: Grains ---
  {
    id: 301,
    name: "Brown Rice",
    categoryId: 3,
    price: 3200, // Was 5.5 -> now ~₦3,200 (premium rice, per small bag)
    imageUrl: assets.brownrice,
    condition: "Dried",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Bode A.",
        rating: 5,
        description: "Consistently high quality. Cooks perfectly every time.",
      },
    ],
    description:
      "A bag of whole-grain brown rice. A nutty, fibrous, and healthy alternative to white rice.",
  },
  {
    id: 302,
    name: "Maize (Bag)",
    categoryId: 3,
    price: 2100, // Was 3.99 -> now ~₦2,100 per standard bag/measure
    imageUrl: assets.maize,
    condition: "Dried",
    location: "Oyo",
    sellerType: "Corporate",
    seller: sellers[5],
    reviews: [
      {
        reviewerName: "Folake R.",
        rating: 4,
        description: "Excellent for making cornmeal. Good value for money.",
      },
    ],
    description:
      "A large bag of dried maize kernels. Perfect for grinding into flour or using as feed.",
  },
  {
    id: 303,
    name: "Millet",
    categoryId: 3,
    price: 3500, // Was 6.75 -> now ~₦3,500 (higher value grain)
    imageUrl: assets.millet,
    condition: "Dried",
    location: "Lagos",
    sellerType: "Individual",
    seller: sellers[3],
    reviews: [
      {
        reviewerName: "Uche O.",
        rating: 5,
        description: "Very clean grain. Ideal for my gluten-free recipes.",
      },
    ],
    description:
      "Premium dried millet grain. A gluten-free and nutritious grain suitable for porridges and side dishes.",
  },
  {
    id: 304,
    name: "Wheat (Bag)",
    categoryId: 3,
    price: 2000, // Was 3.2 -> now ~₦2,000 per standard bag/measure
    imageUrl: assets.wheat,
    condition: "Dried",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Segun M.",
        rating: 4,
        description: "Freshly milled. Makes great whole-wheat bread.",
      },
    ],
    description:
      "A bag of dried whole wheat grain. Essential for baking, milling, or boiling as a cereal.",
  },
  {
    id: 305,
    name: "Oats",
    categoryId: 3,
    price: 1500, // Was 1.99 -> now ~₦1,500 (per small pack)
    imageUrl: assets.oat,
    condition: "Dried",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Funke K.",
        rating: 5,
        description: "Quick-cooking and wholesome. My go-to breakfast.",
      },
    ],
    description:
      "Rolled oats, perfect for quick breakfast porridge, baking, and making granola. Rich in fiber.",
  },
  {
    id: 306,
    name: "White Rice (Bag)",
    categoryId: 3,
    price: 1800, // Was 2.5 -> now ~₦1,800 per standard bag/measure
    imageUrl: assets.whiterice,
    condition: "Processed",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Dara S.",
        rating: 3,
        description:
          "Standard white rice. Cooks a bit sticky if you don't rinse well.",
      },
    ],
    description:
      "Long-grain white rice, a classic kitchen staple. Fluffy texture when cooked properly.",
  },

  // --- Category 4: Nuts ---
  {
    id: 401,
    name: "Almonds (Roasted)",
    categoryId: 4,
    price: 5500, // Was 9.5 -> now ~₦5,500 (premium imported nut, per standard pack)
    imageUrl: assets.almondnut,
    condition: "Processed",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Leke V.",
        rating: 5,
        description: "Perfectly roasted and lightly salted. Very fresh.",
      },
    ],
    description:
      "Lightly roasted and salted almonds. A crunchy, protein-packed snack.",
  },
  {
    id: 403,
    name: "Cashew Nuts",
    categoryId: 4,
    price: 6500, // Was 11.2 -> now ~₦6,500 (high-value local nut, per standard pack)
    imageUrl: assets.cashewnut,
    condition: "Organic",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Ifeanyi B.",
        rating: 4,
        description: "High quality, but a few broken pieces in the bag.",
      },
    ],
    description:
      "Raw, organic cashew nuts. Creamy texture, great for snacking or making nut milk.",
  },
  {
    id: 404,
    name: "Peanut Butter (Jar)",
    categoryId: 4,
    price: 2200, // Was 4.0 -> now ~₦2,200 per standard jar
    imageUrl: assets.peanutbutter,
    condition: "Processed",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Zainab H.",
        rating: 5,
        description: "Smooth and rich flavor. No added sugar which is a plus!",
      },
    ],
    description:
      "A jar of smooth, all-natural peanut butter. High protein and perfect for toast or baking.",
  },
  {
    id: 405,
    name: "Tiger Nuts",
    categoryId: 4,
    price: 4500, // Was 13.5 -> now ~₦4,500 (often higher priced due to niche market/use)
    imageUrl: assets.tigernut,
    condition: "Dried",
    location: "Lagos",
    sellerType: "Corporate",
    seller: sellers[1],
    reviews: [
      {
        reviewerName: "Musa W.",
        rating: 4,
        description: "Great for making 'Kunu Aya'. They soaked well.",
      },
    ],
    description:
      "Dried tiger nuts, a source of fiber and resistant starch. Commonly used to make horchata or 'Kunu Aya'.",
  },
  {
    id: 406,
    name: "Ground Nuts",
    categoryId: 4,
    price: 3000, // Was 10.0 -> now ~₦3,000 (per standard measure/pack)
    imageUrl: assets.groundnut,
    condition: "Processed",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Obi C.",
        rating: 5,
        description: "Freshly roasted and perfectly salted. Highly addictive.",
      },
    ],
    description:
      "Roasted and lightly salted groundnuts (peanuts). A classic, satisfying, high-protein snack.",
  },

  // --- Category 5: Fruits ---
  {
    id: 501,
    name: "WaterMelon (Single)",
    categoryId: 5,
    price: 1500, // Was 0.5 -> now ~₦1,500 (for a single, average-sized melon)
    imageUrl: assets.watermelon,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Tolu O.",
        rating: 5,
        description: "Sweet, juicy, and perfectly ripe. A summer must-have.",
      },
    ],
    description:
      "One large, whole watermelon. Extremely hydrating and sweet, perfect for hot weather.",
  },
  {
    id: 502,
    name: "Banana (Bunch)",
    categoryId: 5,
    price: 800, // Was 0.3 -> now ~₦800 per bunch
    imageUrl: assets.banana,
    condition: "Fresh",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Yemi G.",
        rating: 4,
        description:
          "Mostly green, which is great for long storage. They ripened evenly.",
      },
    ],
    description:
      "A bunch of 5-7 bananas, rich in potassium. A great snack or addition to smoothies.",
  },
  {
    id: 503,
    name: "Mango (basket)",
    categoryId: 5,
    price: 2800, // Was 3.75 -> now ~₦2,800 per basket (reflecting seasonal variation)
    imageUrl: assets.mango,
    condition: "Organic",
    location: "Lagos",
    sellerType: "Individual",
    seller: sellers[3],
    reviews: [
      {
        reviewerName: "Danjuma F.",
        rating: 5,
        description: "Incredible sweetness and flavor. Worth the price!",
      },
    ],
    description:
      "A basket of sweet, organic Ataulfo mangoes. Soft, non-fibrous flesh with intense tropical flavor.",
  },
  {
    id: 504,
    name: "Orange (Single)",
    categoryId: 5,
    price: 150, // Was 0.75 -> now ~₦150 per single orange
    imageUrl: assets.orange,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Bisi A.",
        rating: 4,
        description: "Very juicy, but the skin was a little thick.",
      },
    ],
    description:
      "A single large, navel orange. Bursting with Vitamin C, great for juice or eating whole.",
  },
  {
    id: 505,
    name: "Pawpaw (Single)",
    categoryId: 5,
    price: 1800, // Was 4.25 -> now ~₦1,800 per single large pawpaw
    imageUrl: assets.pawpaw,
    condition: "Fresh",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Emeka I.",
        rating: 5,
        description:
          "Large size and perfectly ripe flesh. Excellent for breakfast.",
      },
    ],
    description:
      "One large, ripe pawpaw (papaya). Soft, sweet tropical fruit with digestive benefits.",
  },
  {
    id: 506,
    name: "Avocado",
    categoryId: 5,
    price: 700, // Was 1.5 -> now ~₦700 per piece
    imageUrl: assets.avocado,
    condition: "Organic",
    location: "Lagos",
    sellerType: "Individual",
    seller: sellers[3],
    reviews: [
      {
        reviewerName: "Hadiza N.",
        rating: 3,
        description: "Had a few dark spots inside, but the rest was creamy.",
      },
    ],
    description:
      "One Hass avocado, perfect for mashing into guacamole or slicing on toast. Rich in healthy fats.",
  },

  // --- Category 6: Roots & Tubers ---
  {
    id: 601,
    name: "Sweet Potatoes (Bag)",
    categoryId: 6,
    price: 1500, // Was 3.0 -> now ~₦1,500 per small bag/measure
    imageUrl: assets.sweetpotatoes,
    condition: "Fresh",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Gbenga M.",
        rating: 5,
        description: "Very sweet and clean. Roast beautifully in the oven.",
      },
    ],
    description:
      "A bag of fresh, orange sweet potatoes. Great source of Vitamin A and perfect for roasting or mashing.",
  },
  {
    id: 602,
    name: "Garlic",
    categoryId: 6,
    price: 800, // Was 2.5 -> now ~₦800 per bulb
    imageUrl: assets.garlic,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Nnamdi K.",
        rating: 4,
        description: "Large cloves with a strong, fresh aroma.",
      },
    ],
    description:
      "A fresh bulb of garlic. Essential for seasoning and adding depth of flavor to savory dishes.",
  },
  {
    id: 603,
    name: "Ginger Root",
    categoryId: 6,
    price: 600, // Was 1.5 -> now ~₦600 per standard piece/measure
    imageUrl: assets.ginger,
    condition: "Organic",
    location: "Lagos",
    sellerType: "Individual",
    seller: sellers[3],
    reviews: [
      {
        reviewerName: "Zola A.",
        rating: 5,
        description: "Very potent and fresh. Excellent for teas and cooking.",
      },
    ],
    description:
      "Fresh, organic ginger root. Known for its strong aroma and beneficial properties in teas and meals.",
  },
  {
    id: 604,
    name: "Onions (Bag)",
    categoryId: 6,
    price: 1000, // Was 2.0 -> now ~₦1,000 per small bag/measure
    imageUrl: assets.onions,
    condition: "Dried",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Ibrahim R.",
        rating: 4,
        description: "Good quality, stored well. A few small ones in the bag.",
      },
    ],
    description:
      "A large bag of dried white onions. A foundational aromatic ingredient for almost any dish.",
  },
  {
    id: 605,
    name: "Cassava",
    categoryId: 6,
    price: 300, // Was 0.75 -> now ~₦300 per standard tuber
    imageUrl: assets.cassava,
    condition: "Dried",
    location: "Osun",
    sellerType: "Individual",
    seller: sellers[0],
    reviews: [
      {
        reviewerName: "Lola E.",
        rating: 5,
        description: "Perfect for making garri. Very high yield.",
      },
    ],
    description:
      "Dried cassava root, a major staple food. Can be processed into flour, garri, or eaten boiled.",
  },
  {
    id: 606,
    name: "Yams",
    categoryId: 6,
    price: 2500, // Was 3.5 -> now ~₦2,500 per large tuber
    imageUrl: assets.yam,
    condition: "Fresh",
    location: "Oyo",
    sellerType: "Individual",
    seller: sellers[4],
    reviews: [
      {
        reviewerName: "Chisom D.",
        rating: 5,
        description:
          "Large, firm, and excellent flavor when boiled. Will buy again!",
      },
    ],
    description:
      "One large, fresh yam tuber. A cultural staple, often boiled, fried, or pounded for Fufu.",
  },
];

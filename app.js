const ingredientKnowledgeBase = [
  {
    key: "high fructose corn syrup",
    aliases: ["hfcs", "fructose syrup", "corn syrup"],
    severity: 18,
    reason: "High added-sugar load associated with metabolic risk when consumed often.",
    alternative: "Unsweetened options or products sweetened with whole-fruit ingredients.",
  },
  {
    key: "caramel color",
    aliases: ["caramel colouring", "e150d"],
    severity: 10,
    reason:
      "Some classes may contain processing byproducts like 4-MEI depending on manufacturing method.",
    alternative: "Products colored naturally with spices or no color additives.",
  },
  {
    key: "sodium nitrite",
    aliases: ["nitrite", "curing salt"],
    severity: 14,
    reason:
      "Used in processed meats; high intake patterns are linked to increased chronic disease risk.",
    alternative: "Fresh proteins or uncured products with minimal preservatives.",
  },
  {
    key: "potassium benzoate",
    aliases: ["benzoate", "e212"],
    severity: 9,
    reason:
      "Preservative often found in acidic drinks; may be a marker of ultra-processed formulation.",
    alternative: "Fresh beverages with no synthetic preservatives.",
  },
  {
    key: "sodium benzoate",
    aliases: ["e211"],
    severity: 9,
    reason:
      "Common preservative; excessive reliance on preserved beverages may reduce overall diet quality.",
    alternative: "Short-ingredient drinks stored refrigerated.",
  },
  {
    key: "bht",
    aliases: ["butylated hydroxytoluene"],
    severity: 12,
    reason:
      "Synthetic antioxidant used for shelf life; many consumers prefer avoiding highly processed stabilizers.",
    alternative: "Products preserved with tocopherols (vitamin E) or simpler formulas.",
  },
  {
    key: "msg",
    aliases: ["monosodium glutamate", "flavor enhancer 621"],
    severity: 6,
    reason:
      "Generally recognized as safe, but can indicate heavy flavor engineering in ultra-processed foods.",
    alternative: "Foods flavored with herbs, spices, and whole ingredients.",
  },
  {
    key: "natural flavors",
    aliases: ["flavorings", "flavouring"],
    severity: 7,
    reason:
      "Umbrella term with low transparency; often hides complex processed flavor systems.",
    alternative: "Products listing specific spices or fruit extracts.",
  },
  {
    key: "artificial flavor",
    aliases: ["artificial flavors", "artificial flavour"],
    severity: 10,
    reason: "Signals heavy sensory engineering rather than whole-food flavor sources.",
    alternative: "Products with whole-food flavor cues and short labels.",
  },
  {
    key: "aspartame",
    aliases: ["acesulfame potassium", "ace-k", "sucralose"],
    severity: 12,
    reason:
      "Non-nutritive sweeteners can be useful for sugar reduction, but may maintain high sweetness conditioning.",
    alternative: "Unsweetened beverages or lightly sweetened products.",
  },
];

const brandHealthDatabase = [
  {
    name: "Coca-Cola",
    aliases: ["coke", "coca cola"],
    score: 41,
    image: "./assets/brand-soda.svg",
    verdict: "High concern profile",
    confidence:
      "Portfolio is heavily weighted toward sweetened and ultra-processed beverages.",
    concerns: [
      "Frequent use of added sugars, acids, and flavor systems in flagship drinks.",
      "Many products prioritize shelf stability over whole-food nutrition quality.",
    ],
    alternatives: [
      "Olipop or Poppi style lower-sugar soda alternatives.",
      "Unsweetened sparkling water brands like LaCroix or Spindrift.",
    ],
  },
  {
    name: "Kellogg's",
    aliases: ["kelloggs", "kellogg"],
    score: 52,
    image: "./assets/brand-cereal.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Mixed portfolio with some fortified options, but many cereals are highly processed and sugar-forward.",
    concerns: [
      "Frequent refined grains and added sugars in mainstream cereal lines.",
      "Additives and flavor enhancers are common in convenience products.",
    ],
    alternatives: [
      "Cascadian Farm, Nature's Path, or plain oats with fruit and nuts.",
      "Muesli and minimally sweetened whole-grain breakfast options.",
    ],
  },
  {
    name: "Nestle",
    aliases: ["nestlé", "nescafe"],
    score: 48,
    image: "./assets/brand-snacks.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Very broad portfolio; quality varies widely from coffee/water products to heavily processed snacks.",
    concerns: [
      "Large exposure to confectionery and sweetened products in many markets.",
      "Ultra-processed convenience categories remain a core business segment.",
    ],
    alternatives: [
      "Smaller brands focused on short-ingredient snacks.",
      "Single-origin coffee and unsweetened dairy or plant options.",
    ],
  },
  {
    name: "Chobani",
    aliases: ["chobani greek yogurt"],
    score: 78,
    image: "./assets/brand-yogurt.svg",
    verdict: "Low concern profile",
    confidence:
      "Many core products emphasize protein and simpler dairy ingredients, though flavored lines vary in sugar.",
    concerns: [
      "Flavored varieties can still include significant added sugars.",
      "Some products use natural flavors and stabilizers depending on line.",
    ],
    alternatives: [
      "Unsweetened Greek yogurt with fruit added at home.",
      "Plain skyr or kefir with minimal ingredients.",
    ],
  },
  {
    name: "Annie's",
    aliases: ["annies"],
    score: 72,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Generally cleaner ingredient positioning than conventional packaged competitors, with some processed tradeoffs.",
    concerns: [
      "Still a packaged-food brand with sodium and refined carbs in some items.",
      "Health halo can mask differences between product lines.",
    ],
    alternatives: [
      "Whole-food pantry staples for homemade versions.",
      "Brands with short labels and no artificial additives.",
    ],
  },
  {
    name: "Hu Kitchen",
    aliases: ["hu", "hu chocolate"],
    score: 76,
    image: "./assets/brand-snacks.svg",
    verdict: "Low concern profile",
    confidence:
      "Niche chocolate and snacks with simpler ingredient lists than mass-market candy, though still treat-category calories.",
    concerns: [
      "Chocolate and snack lines remain energy-dense; easy to overconsume.",
      "Some items use coconut sugar or similar; still counts as added sugar.",
    ],
    alternatives: [
      "Dark chocolate with very high cacao and minimal ingredients.",
      "Homemade trail mix with nuts and unsweetened dried fruit.",
    ],
  },
  {
    name: "Lesser Evil",
    aliases: ["lesser evil popcorn", "lesserevil"],
    score: 74,
    image: "./assets/brand-snacks.svg",
    verdict: "Low concern profile",
    confidence:
      "Better-for-you popcorn and puffs with organic positioning and fewer artificial additives than mainstream chips.",
    concerns: [
      "Still packaged snacks; sodium and refined carbs vary by SKU.",
      "Oil and seasoning blends can add saturated fat depending on flavor.",
    ],
    alternatives: [
      "Air-popped popcorn with your own spices.",
      "Roasted chickpeas or nuts for crunch.",
    ],
  },
  {
    name: "Simple Mills",
    aliases: ["simple mills crackers", "simplemills"],
    score: 77,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Almond- and seed-forward baking mixes and crackers marketed around whole-food ingredients.",
    concerns: [
      "Baked goods are still calorie-dense; nut flours add fat calories quickly.",
      "Some products use gums or starches for texture.",
    ],
    alternatives: [
      "Homemade crackers from oats, seeds, and minimal oil.",
      "Whole-grain rice cakes with nut butter.",
    ],
  },
  {
    name: "Primal Kitchen",
    aliases: ["primal kitchen mayo", "primal"],
    score: 75,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Condiments and bars positioned on avocado oil, collagen, and cleaner label claims versus standard sauces.",
    concerns: [
      "Keto-forward items can be high in fat and sodium for flavor.",
      "Sweetened bars and dressings still need label reading.",
    ],
    alternatives: [
      "Olive oil and vinegar for salads.",
      "Plain Greek yogurt as a dip base.",
    ],
  },
  {
    name: "Magic Spoon",
    aliases: ["magic spoon cereal"],
    score: 68,
    image: "./assets/brand-cereal.svg",
    verdict: "Moderate concern profile",
    confidence:
      "High-protein cereal alternative with strong macro marketing; formulation is engineered versus traditional grains.",
    concerns: [
      "Uses alternative sweeteners and protein isolates common in specialty cereals.",
      "Price and processing intensity are higher than plain oats.",
    ],
    alternatives: [
      "Plain oats plus protein powder or Greek yogurt on the side.",
      "Muesli with nuts and seeds for natural protein.",
    ],
  },
  {
    name: "Olipop",
    aliases: ["oli pop", "olipop soda"],
    score: 71,
    image: "./assets/brand-soda.svg",
    verdict: "Low concern profile",
    confidence:
      "Prebiotic soda category with much lower sugar positioning than classic colas, though still a flavored beverage.",
    concerns: [
      "Fiber and botanical blends can affect digestion differently person to person.",
      "Still a discretionary drink versus water or tea.",
    ],
    alternatives: [
      "Unsweetened sparkling water with citrus.",
      "Homemade ginger tea with a touch of honey.",
    ],
  },
  {
    name: "Poppi",
    aliases: ["poppi soda", "poppi prebiotic"],
    score: 70,
    image: "./assets/brand-soda.svg",
    verdict: "Low concern profile",
    confidence:
      "Apple cider vinegar forward sodas with lower sugar than traditional soft drinks; brand sits in functional beverage niche.",
    concerns: [
      "Acidity and sweeteners vary by flavor; check each label.",
      "Marketing can oversell gut benefits versus whole-food fiber.",
    ],
    alternatives: [
      "Diluted ACV in water if you enjoy the profile.",
      "Kombucha with low sugar if fermented drinks fit your routine.",
    ],
  },
  {
    name: "Miyoko's Creamery",
    aliases: ["miyokos", "miyoko butter", "miyoko creamery"],
    score: 73,
    image: "./assets/brand-yogurt.svg",
    verdict: "Low concern profile",
    confidence:
      "Plant-based butter and cheese alternatives focused on cultured and nut-forward recipes versus highly hydrogenated spreads.",
    concerns: [
      "Plant cheeses remain fat- and sodium-dense like dairy counterparts.",
      "Allergen labels matter for cashew or coconut bases.",
    ],
    alternatives: [
      "Hummus or mashed avocado on toast.",
      "Small-batch nut cheeses with short ingredient lists.",
    ],
  },
  {
    name: "Banza",
    aliases: ["banza pasta", "banza chickpea"],
    score: 76,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Chickpea-based pasta that boosts protein and fiber versus refined white pasta for the same meal occasions.",
    concerns: [
      "Some shapes include rice or pea blends; read each box.",
      "Legume pasta can be gassy for sensitive digestive systems.",
    ],
    alternatives: [
      "Lentil or whole-wheat pasta.",
      "Zucchini noodles mixed half-and-half with regular pasta.",
    ],
  },
  {
    name: "Partake Foods",
    aliases: ["partake cookies", "partake"],
    score: 72,
    image: "./assets/brand-snacks.svg",
    verdict: "Low concern profile",
    confidence:
      "Allergy-friendly cookies and mixes built for top-9 free positioning; helpful niche for sensitive households.",
    concerns: [
      "Cookies remain treats; sugar content varies by product.",
      "Alternative flours can be refined starches for texture.",
    ],
    alternatives: [
      "Homemade oat-banana cookies with minimal sugar.",
      "Fresh fruit with nut or seed butter if allergens allow.",
    ],
  },
  {
    name: "Once Upon a Farm",
    aliases: ["once upon a farm pouches", "onceuponafarm"],
    score: 79,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Cold-pressed fruit and veggie pouches with a whole-food story versus typical shelf-stable baby desserts.",
    concerns: [
      "Pouches are still blended; less chewing than whole produce for toddlers.",
      "Organic sugar sources are still sugar in smoothies.",
    ],
    alternatives: [
      "Soft-cooked whole fruits and vegetables at home.",
      "Plain full-fat yogurt with mashed berries.",
    ],
  },
  {
    name: "Siggi's",
    aliases: ["siggis", "siggi yogurt", "siggi's skyr"],
    score: 80,
    image: "./assets/brand-yogurt.svg",
    verdict: "Low concern profile",
    confidence:
      "Icelandic-style skyr known for high protein and lower sugar positioning than many sweetened yogurts.",
    concerns: [
      "Flavored lines add more sugar than plain skyr.",
      "Some products use thickeners or fruit prep for texture.",
    ],
    alternatives: [
      "Plain skyr with fresh fruit.",
      "Unstrained Greek yogurt for similar protein density.",
    ],
  },
  {
    name: "Athletic Brewing",
    aliases: ["athletic brewing co", "athletic beer", "athletic na beer"],
    score: 66,
    image: "./assets/brand-soda.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Non-alcoholic craft beer niche; removes alcohol calories but keeps malt beverage processing and carbs.",
    concerns: [
      "Still a grain-based drink with calories and sometimes residual sugar.",
      "Not a hydration substitute for water.",
    ],
    alternatives: [
      "Sparkling hop water with zero alcohol and minimal ingredients.",
      "Kombucha with known low sugar if you want complexity.",
    ],
  },
  {
    name: "Liquid Death",
    aliases: ["liquid death water", "liquiddeath"],
    score: 88,
    image: "./assets/brand-soda.svg",
    verdict: "Low concern profile",
    confidence:
      "Primarily mountain water in cans with strong branding; minimal formulation concern versus sweetened drinks.",
    concerns: [
      "Still packaged water; environmental footprint versus tap filtration.",
      "Iced tea line introduces sugar and additives—SKU matters.",
    ],
    alternatives: [
      "Filtered tap water in a reusable bottle.",
      "Unsweetened iced tea you brew at home.",
    ],
  },
  {
    name: "Thrive Market",
    aliases: ["thrive market brand", "thrive private label"],
    score: 73,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Member retailer with many private-label goods aimed at organic and diet-specific niches; quality varies by category.",
    concerns: [
      "Private label spans snacks to sweets; not every SKU is equally clean.",
      "Subscription model can encourage more packaged food purchasing.",
    ],
    alternatives: [
      "Farmer's markets and bulk bins for fewer packaged goods.",
      "Compare Thrive SKUs to single-brand specialists in each category.",
    ],
  },
  {
    name: "Three Wishes",
    aliases: ["three wishes cereal"],
    score: 74,
    image: "./assets/brand-cereal.svg",
    verdict: "Low concern profile",
    confidence:
      "Legume- and chickpea-forward cereal with higher protein and fiber story than classic kids cereals.",
    concerns: [
      "Still includes sweeteners for palatability in many flavors.",
      "Pricier than conventional cereal; portion control still matters.",
    ],
    alternatives: [
      "Homemade granola with oats, seeds, and light maple.",
      "Plain puffed grains plus fruit and milk.",
    ],
  },
  {
    name: "Perfect Bar",
    aliases: ["perfect bar refrigerated", "perfect snack bar"],
    score: 64,
    image: "./assets/brand-snacks.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Refrigerated whole-food style bars with nut butter and honey; energy-dense and sweet like most bars.",
    concerns: [
      "Calories and sugar add up quickly for small portions.",
      "Needs refrigeration; still ultra-convenient processed format.",
    ],
    alternatives: [
      "Apple slices with almond butter.",
      "Homemade date-nut balls with controlled sweetness.",
    ],
  },
  {
    name: "Epic Provisions",
    aliases: ["epic bar", "epic jerky", "epic provisions meat bar"],
    score: 62,
    image: "./assets/brand-snacks.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Meat bars and jerky positioned on animal welfare and simple ingredients; still processed cured meat category.",
    concerns: [
      "Processed red meat patterns are debated for long-term health.",
      "Sodium content can be high for shelf stability.",
    ],
    alternatives: [
      "Leftover roasted chicken or turkey slices.",
      "Hard-boiled eggs for portable protein.",
    ],
  },
  {
    name: "Pepsi",
    aliases: ["pepsico", "pepsi cola", "mountain dew", "mtn dew", "gatorade"],
    score: 43,
    image: "./assets/brand-soda.svg",
    verdict: "High concern profile",
    confidence:
      "Broad beverage portfolio dominated by sweetened sodas, sports drinks, and energy-style products.",
    concerns: [
      "Flagship colas and many sports drinks rely on added sugars or intense sweeteners.",
      "Acid levels and flavor systems typical of ultra-processed drinks.",
    ],
    alternatives: [
      "Water or seltzer with fruit slices.",
      "Lower-sugar functional drinks with short labels you verify per SKU.",
    ],
  },
  {
    name: "General Mills",
    aliases: ["general mills", "cheerios", "lucky charms", "cinnamon toast crunch", "betty crocker"],
    score: 50,
    image: "./assets/brand-cereal.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Mass-market cereals and baking mixes span fortified whole-grain options to sugar-forward kids lines.",
    concerns: [
      "Many hero SKUs are still high in added sugar or refined flour.",
      "Marketing on 'whole grain' can outpace actual sugar load on the label.",
    ],
    alternatives: [
      "Plain Cheerios-style oats with fruit instead of presweetened loops.",
      "Homemade muffins with whole wheat and minimal sweetener.",
    ],
  },
  {
    name: "Kraft Heinz",
    aliases: ["kraft", "heinz", "kraft mac and cheese", "oscar mayer", "lunchables"],
    score: 46,
    image: "./assets/brand-pantry.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Iconic condiments, cheese products, and kids lunch kits skew toward sodium, saturated fat, and long ingredient lists.",
    concerns: [
      "Mac-and-cheese and lunch kits often combine refined carbs with processed cheese.",
      "Deli meats and shelf-stable sauces can stack sodium quickly.",
    ],
    alternatives: [
      "Whole-wheat pasta with a simple cheese sauce from real cheese.",
      "Leftovers in a thermos instead of shelf-stable kits.",
    ],
  },
  {
    name: "Mondelez",
    aliases: ["mondelez", "oreo", "ritz", "triscuit", "belvita", "cadbury"],
    score: 44,
    image: "./assets/brand-snacks.svg",
    verdict: "High concern profile",
    confidence:
      "Global snack portfolio heavy on cookies, crackers, and confectionery with typical ultra-processed patterns.",
    concerns: [
      "Many top sellers pair refined flour with palm oil and added sugars.",
      "Portion creep is easy with bite-sized formats.",
    ],
    alternatives: [
      "Whole-grain crackers with hummus or cheese you slice yourself.",
      "Dark chocolate squares with fruit instead of filled cookies.",
    ],
  },
  {
    name: "Danone",
    aliases: ["dannon", "activia", "oikos", "danone yogurt"],
    score: 69,
    image: "./assets/brand-yogurt.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Large dairy and plant portfolio; plain yogurts score well but flavored lines vary widely in added sugar.",
    concerns: [
      "Fruit-on-the-bottom and dessert yogurts can rival soda in sugar per cup.",
      "Plant alternatives range from simple to highly engineered.",
    ],
    alternatives: [
      "Plain yogurt plus fresh fruit.",
      "Unsweetened soy or pea yogurt with seeds for texture.",
    ],
  },
  {
    name: "Fage",
    aliases: ["fage yogurt", "fage total", "φαγε"],
    score: 82,
    image: "./assets/brand-yogurt.svg",
    verdict: "Low concern profile",
    confidence:
      "Greek yogurt line known for thick texture and plain options that keep ingredients minimal versus dessert cups.",
    concerns: [
      "Flavored split cups still add sugars and fruit prep.",
      "Full-fat tubs are calorie-dense if portions grow large.",
    ],
    alternatives: [
      "Plain Fage with honey or berries you control.",
      "Skyr if you want even higher protein per spoonful.",
    ],
  },
  {
    name: "RXBAR",
    aliases: ["rx bar", "rxbar protein"],
    score: 67,
    image: "./assets/brand-snacks.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Whole-food style bars with dates and nuts on the front label; still compact calories and natural sugars.",
    concerns: [
      "Dates concentrate sugar even without cane syrup.",
      "Protein density can be lower than powder bars for the same calories.",
    ],
    alternatives: [
      "Handful of nuts plus a piece of fruit.",
      "Homemade date-nut bars where you halve the sweetener.",
    ],
  },
  {
    name: "KIND",
    aliases: ["kind bar", "kind snacks", "kind healthy grains"],
    score: 65,
    image: "./assets/brand-snacks.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Nut-forward bars and clusters marketed as wholesome; many SKUs still carry syrups, chocolate coatings, or binders.",
    concerns: [
      "Calorie and sugar totals can surprise on 'healthy' looking packages.",
      "Grain clusters may use multiple sweeteners for crunch.",
    ],
    alternatives: [
      "Trail mix you assemble with unsweetened nuts and a few dark chocolate chips.",
      "Rice cakes with nut butter for crunch without a candy-style coating.",
    ],
  },
  {
    name: "Amy's Kitchen",
    aliases: ["amys kitchen", "amy's kitchen", "amys frozen"],
    score: 74,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Organic frozen meals and soups often beat conventional TV dinners on ingredient transparency, though sodium varies.",
    concerns: [
      "Frozen bowls can still be high in sodium for flavor and preservation.",
      "Mac and cheese lines are comfort food, not everyday staples.",
    ],
    alternatives: [
      "Batch-cook grains and beans on Sunday for quick bowls.",
      "Low-sodium canned beans plus frozen vegetables.",
    ],
  },
  {
    name: "365 by Whole Foods",
    aliases: ["365 whole foods", "whole foods 365", "365 brand"],
    score: 71,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Private label spanning staples to snacks; many items follow store ingredient standards but quality is category-dependent.",
    concerns: [
      "Not every 365 SKU is minimal; desserts and chips still exist.",
      "Organic sugar is still sugar in cookies.",
    ],
    alternatives: [
      "Read each 365 label like any other brand.",
      "Bulk beans, grains, and spices for the cleanest cart.",
    ],
  },
  {
    name: "Campbell's",
    aliases: ["campbells", "campbell soup", "chunky soup", "goldfish crackers", "pepperidge farm"],
    score: 49,
    image: "./assets/brand-pantry.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Canned soups and classic snack brands lean on sodium, refined flour, and shelf-stable formulations across big sellers.",
    concerns: [
      "Condensed soups can pack a day's sodium in one can.",
      "Cracker lines overlap with mainstream cookie and snack categories.",
    ],
    alternatives: [
      "Homemade broth-based soups with frozen vegetables.",
      "Whole-grain crackers with simple cheese slices.",
    ],
  },
  {
    name: "Sabra",
    aliases: ["sabra hummus", "sabra guacamole"],
    score: 72,
    image: "./assets/brand-snacks.svg",
    verdict: "Low concern profile",
    confidence:
      "Chickpea dips with mainstream distribution; classic hummus is relatively simple though preservatives appear in larger tubs.",
    concerns: [
      "Some flavors add sugar, citric acid, or oil blends for shelf life.",
      "Portion with fried pita chips can undo the legume benefit.",
    ],
    alternatives: [
      "Homemade hummus in a food processor with tahini and lemon.",
      "Carrot and cucumber sticks instead of fried chips.",
    ],
  },
  {
    name: "Dave's Killer Bread",
    aliases: ["daves killer bread", "dave's bread", "dkb"],
    score: 77,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Whole-grain seeded breads with organic story and higher fiber than white sandwich loaves.",
    concerns: [
      "Still calorie-dense; easy to overstack spreads.",
      "Some sweet breads and bagels add sugars like any bakery line.",
    ],
    alternatives: [
      "Sprouted-grain breads from other bakeries with short labels.",
      "Open-faced sandwiches to cut total bread grams.",
    ],
  },
  {
    name: "Stonyfield Organic",
    aliases: ["stonyfield", "stony field yogurt"],
    score: 75,
    image: "./assets/brand-yogurt.svg",
    verdict: "Low concern profile",
    confidence:
      "Organic dairy yogurt portfolio with kids pouches and plain tubs; generally cleaner than conventional dessert yogurts.",
    concerns: [
      "Kids squeeze products can still carry added sugars.",
      "Whole-milk lines add saturated fat calories.",
    ],
    alternatives: [
      "Plain whole-milk yogurt with mashed fruit for kids.",
      "Lower-fat organic if your goals prioritize saturated fat.",
    ],
  },
  {
    name: "Larabar",
    aliases: ["lara bar", "larabar minis"],
    score: 73,
    image: "./assets/brand-snacks.svg",
    verdict: "Low concern profile",
    confidence:
      "Short-ingredient date-and-nut bars; simplicity is a strength though sugar comes mostly from fruit paste.",
    concerns: [
      "Small bar, high sugar density from dates.",
      "Chocolate chip flavors add refined sugar beyond fruit.",
    ],
    alternatives: [
      "Whole dates stuffed with almonds.",
      "Apple with peanut butter for similar macros.",
    ],
  },
  {
    name: "Bob's Red Mill",
    aliases: ["bobs red mill", "bob's red mill", "bobs oats"],
    score: 84,
    image: "./assets/brand-pantry.svg",
    verdict: "Low concern profile",
    confidence:
      "Pantry staples like oats, flours, and legumes with minimal processing story versus ready-to-eat meals.",
    concerns: [
      "Baking mixes still include added sugar and leaveners—read each bag.",
      "Muesli and granola SKUs vary in sweeteners and oils.",
    ],
    alternatives: [
      "Steel-cut oats bought in bulk.",
      "Single-ingredient flours for home baking.",
    ],
  },
  {
    name: "Impossible Foods",
    aliases: ["impossible burger", "impossible meat", "impossible foods"],
    score: 58,
    image: "./assets/brand-pantry.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Plant-based meat analogs engineered for taste and texture; sodium and ingredient lists are longer than whole beans.",
    concerns: [
      "Heme and flavor systems are novel to many shoppers.",
      "Sodium often runs higher than lean ground beef for palatability.",
    ],
    alternatives: [
      "Mushroom-lentil burgers made at home.",
      "Crumbled tempeh with spices.",
    ],
  },
  {
    name: "Beyond Meat",
    aliases: ["beyond burger", "beyond meat", "beyond sausage"],
    score: 57,
    image: "./assets/brand-pantry.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Pea-protein meat substitutes positioned as climate-friendly; still ultra-processed compared to whole legumes.",
    concerns: [
      "Coconut and canola oil blends add saturated fat in some SKUs.",
      "Long ingredient decks versus a can of beans.",
    ],
    alternatives: [
      "Black bean patties with cumin and oats.",
      "Marinated tofu steaks.",
    ],
  },
  {
    name: "Halo Top",
    aliases: ["halo top ice cream", "halotop"],
    score: 63,
    image: "./assets/brand-yogurt.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Lower-calorie ice cream niche using alternative sweeteners and air; better on sugar than premium tubs but still dessert.",
    concerns: [
      "Sugar alcohols or fibers can upset digestion for some people.",
      "Easy to eat the whole pint because of marketing.",
    ],
    alternatives: [
      "Blended frozen banana 'nice cream' with cocoa.",
      "Small portion of full-fat ice cream mindfully.",
    ],
  },
  {
    name: "Yasso",
    aliases: ["yasso frozen greek yogurt", "yasso bars"],
    score: 68,
    image: "./assets/brand-yogurt.svg",
    verdict: "Moderate concern profile",
    confidence:
      "Frozen Greek yogurt bars—protein-forward versus ice cream but still a coated novelty treat.",
    concerns: [
      "Chocolate coatings add sugar and saturated fat.",
      "Stabilizers and gums show up in stick formats.",
    ],
    alternatives: [
      "Frozen yogurt bark with fruit on a sheet pan.",
      "Plain yogurt parfait frozen in popsicle molds.",
    ],
  },
];

const scoreBadge = document.getElementById("scoreBadge");
const scoreValue = document.getElementById("scoreValue");
const verdict = document.getElementById("verdict");
const confidence = document.getElementById("confidence");
const emptyState = document.getElementById("emptyState");
const results = document.getElementById("results");
const flagList = document.getElementById("flagList");
const factList = document.getElementById("factList");
const alternativeList = document.getElementById("alternativeList");
const flagTitle = document.getElementById("flagTitle");
const factTitle = document.getElementById("factTitle");
const alternativeTitle = document.getElementById("alternativeTitle");
const resultImage = document.getElementById("resultImage");
const resultImageCaption = document.getElementById("resultImageCaption");
const nutritionSummary = document.getElementById("nutritionSummary");

const ingredientsInput = document.getElementById("ingredients");
const scanButton = document.getElementById("scanButton");
const loadDemoButton = document.getElementById("loadDemoButton");
const openCameraModalButton = document.getElementById("openCameraModalButton");
const cameraModal = document.getElementById("cameraModal");
const cameraModalBackdrop = document.getElementById("cameraModalBackdrop");
const cameraPreview = document.getElementById("cameraPreview");
const cameraCanvas = document.getElementById("cameraCanvas");
const cameraOcrStatus = document.getElementById("cameraOcrStatus");
const cameraWebcamStart = document.getElementById("cameraWebcamStart");
const cameraWebcamCapture = document.getElementById("cameraWebcamCapture");
const cameraFileInput = document.getElementById("cameraFileInput");
const cameraFileTrigger = document.getElementById("cameraFileTrigger");
const cameraModalClose = document.getElementById("cameraModalClose");
const scanOverlay = document.getElementById("scanOverlay");
const scanLoading = document.getElementById("scanLoading");
const brandSearch = document.getElementById("brandSearch");
const brandSuggestions = document.getElementById("brandSuggestions");
const brandSearchButton = document.getElementById("brandSearchButton");
const loadBrandDemoButton = document.getElementById("loadBrandDemoButton");
const authScreen = document.getElementById("authScreen");
const appContent = document.getElementById("appContent");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("loginButton");
const createAccountButton = document.getElementById("createAccountButton");
const guestButton = document.getElementById("guestButton");
const logoutButton = document.getElementById("logoutButton");
const authMessage = document.getElementById("authMessage");
const showLoginButton = document.getElementById("showLoginButton");
const showCreateAccountButton = document.getElementById("showCreateAccountButton");
const createAccountFields = document.getElementById("createAccountFields");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");
const addToTodayButton = document.getElementById("addToTodayButton");
const mealTypeSelect = document.getElementById("mealTypeSelect");
const mealTimeline = document.getElementById("mealTimeline");
const mealLogDate = document.getElementById("mealLogDate");
const goalCalories = document.getElementById("goalCalories");
const goalProtein = document.getElementById("goalProtein");
const goalCarbs = document.getElementById("goalCarbs");
const goalFat = document.getElementById("goalFat");
const saveGoalsButton = document.getElementById("saveGoalsButton");
const todayCaloriesText = document.getElementById("todayCaloriesText");
const todayProteinText = document.getElementById("todayProteinText");
const todayCarbsText = document.getElementById("todayCarbsText");
const todayFatText = document.getElementById("todayFatText");
const todayCaloriesBar = document.getElementById("todayCaloriesBar");
const todayProteinBar = document.getElementById("todayProteinBar");
const todayCarbsBar = document.getElementById("todayCarbsBar");
const todayFatBar = document.getElementById("todayFatBar");
const barcodeInput = document.getElementById("barcodeInput");
const barcodeLookupButton = document.getElementById("barcodeLookupButton");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

const demoLabel =
  "Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, sodium benzoate, caffeine";
const demoBrand = "Coca-Cola";
const SESSION_KEY = "novaSession";
const ACCOUNTS_KEY = "novaAccounts";
const GOALS_KEY = "novaMacroGoals";
const MEAL_LOG_KEY = "novaMealLog";
const BRAND_PHOTO_CACHE_KEY = "novaBrandPhotoCache";
const HISTORY_KEY = "novaActionHistory";
const DEFAULT_GOALS = { calories: 2200, protein: 140, carbs: 250, fat: 70 };
let activeSuggestionIndex = -1;
let currentSuggestions = [];
let authMode = "login";
let currentLogCandidate = null;
let activeTab = "dashboard";

function setActiveTab(tabKey) {
  activeTab = tabKey;
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === tabKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tabPanel === tabKey);
  });
}

function getBrandPhotoCache() {
  const raw = localStorage.getItem(BRAND_PHOTO_CACHE_KEY);
  if (!raw) {
    return {};
  }
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function setBrandPhotoCache(cache) {
  localStorage.setItem(BRAND_PHOTO_CACHE_KEY, JSON.stringify(cache));
}

function getActionHistory() {
  const raw = localStorage.getItem(HISTORY_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveActionHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
}

function addActionHistoryEntry(type, title, details = "") {
  const entries = getActionHistory();
  entries.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    type,
    title,
    details,
    createdAt: Date.now(),
  });
  saveActionHistory(entries.slice(0, 120));
}

function showApp() {
  authScreen.classList.add("hidden");
  appContent.classList.remove("hidden");
}

function showAuth() {
  appContent.classList.add("hidden");
  authScreen.classList.remove("hidden");
}

function startSession(mode, emailValue = "") {
  const payload = {
    mode,
    email: emailValue,
    startedAt: Date.now(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  authMessage.textContent = "";
  showApp();
}

function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatTodayLabel() {
  return new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function parseNullableNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const n = Number(value);
  if (!Number.isFinite(n)) {
    return null;
  }
  return n;
}

function formatMacroValue(value, unit = "g") {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return `N/A${unit ? ` ${unit}` : ""}`.trim();
  }
  if (unit) {
    return `${Math.round(value)}${unit}`;
  }
  return String(Math.round(value));
}

function getStoredGoals() {
  const raw = localStorage.getItem(GOALS_KEY);
  if (!raw) {
    return { ...DEFAULT_GOALS };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      calories: parseNullableNumber(parsed.calories) ?? DEFAULT_GOALS.calories,
      protein: parseNullableNumber(parsed.protein) ?? DEFAULT_GOALS.protein,
      carbs: parseNullableNumber(parsed.carbs) ?? DEFAULT_GOALS.carbs,
      fat: parseNullableNumber(parsed.fat) ?? DEFAULT_GOALS.fat,
    };
  } catch {
    return { ...DEFAULT_GOALS };
  }
}

function saveStoredGoals(goals) {
  localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
}

function getStoredMealLog() {
  const raw = localStorage.getItem(MEAL_LOG_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredMealLog(items) {
  localStorage.setItem(MEAL_LOG_KEY, JSON.stringify(items));
}

function getTodayMeals() {
  const today = getTodayKey();
  return getStoredMealLog().filter((item) => item && item.date === today);
}

function sumMacro(items, key) {
  return items.reduce((total, item) => {
    const n = parseNullableNumber(item[key]);
    return n === null ? total : total + n;
  }, 0);
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, value));
}

function renderDashboard() {
  const goals = getStoredGoals();
  goalCalories.value = String(goals.calories);
  goalProtein.value = String(goals.protein);
  goalCarbs.value = String(goals.carbs);
  goalFat.value = String(goals.fat);

  const todayItems = getTodayMeals();
  const totals = {
    calories: sumMacro(todayItems, "calories"),
    protein: sumMacro(todayItems, "protein"),
    carbs: sumMacro(todayItems, "carbs"),
    fat: sumMacro(todayItems, "fat"),
  };

  todayCaloriesText.textContent = `${Math.round(totals.calories)} / ${goals.calories}`;
  todayProteinText.textContent = `${Math.round(totals.protein)}g / ${goals.protein}g`;
  todayCarbsText.textContent = `${Math.round(totals.carbs)}g / ${goals.carbs}g`;
  todayFatText.textContent = `${Math.round(totals.fat)}g / ${goals.fat}g`;

  todayCaloriesBar.style.width = `${clampPercent((totals.calories / goals.calories) * 100)}%`;
  todayProteinBar.style.width = `${clampPercent((totals.protein / goals.protein) * 100)}%`;
  todayCarbsBar.style.width = `${clampPercent((totals.carbs / goals.carbs) * 100)}%`;
  todayFatBar.style.width = `${clampPercent((totals.fat / goals.fat) * 100)}%`;
}

function renderMealTimeline() {
  const groups = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const items = getTodayMeals().sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  mealLogDate.textContent = `Today: ${formatTodayLabel()}`;
  mealTimeline.innerHTML = "";

  if (items.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-state";
    p.textContent = "No meals logged yet. Run a scan, brand, or barcode lookup and tap Add to Today.";
    mealTimeline.append(p);
    return;
  }

  for (const group of groups) {
    const subset = items.filter((item) => item.mealType === group);
    if (subset.length === 0) continue;

    const wrap = document.createElement("section");
    wrap.className = "meal-group";
    const h3 = document.createElement("h3");
    h3.textContent = group;
    wrap.append(h3);

    for (const entry of subset) {
      const row = document.createElement("div");
      row.className = "meal-item";

      const left = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = entry.name || "Logged item";
      const meta = document.createElement("div");
      meta.className = "meal-meta";
      meta.textContent =
        `Calories ${formatMacroValue(entry.calories, "")} | Protein ${formatMacroValue(entry.protein)} | ` +
        `Carbs ${formatMacroValue(entry.carbs)} | Fat ${formatMacroValue(entry.fat)}`;
      left.append(title, meta);

      const actions = document.createElement("div");
      actions.className = "meal-item-actions";
      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "secondary small";
      edit.textContent = "Edit";
      edit.addEventListener("click", () => editMealEntry(entry.id));
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "secondary small";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => deleteMealEntry(entry.id));
      actions.append(edit, remove);

      row.append(left, actions);
      wrap.append(row);
    }

    mealTimeline.append(wrap);
  }
}

function setCurrentLogCandidate(candidate) {
  currentLogCandidate = candidate;
  if (!addToTodayButton) {
    return;
  }
  addToTodayButton.disabled = !candidate;
}

function addCurrentCandidateToToday() {
  if (!currentLogCandidate) {
    return;
  }
  const mealType = mealTypeSelect.value || "Snack";
  const list = getStoredMealLog();
  list.push({
    ...currentLogCandidate,
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    mealType,
    date: getTodayKey(),
    createdAt: Date.now(),
  });
  saveStoredMealLog(list);
  addActionHistoryEntry("meal-log", `Added to ${mealType}`, currentLogCandidate.name || "Logged item");
  renderDashboard();
  renderMealTimeline();
}

function deleteMealEntry(id) {
  const next = getStoredMealLog().filter((item) => item.id !== id);
  saveStoredMealLog(next);
  renderDashboard();
  renderMealTimeline();
}

function editMealEntry(id) {
  const entries = getStoredMealLog();
  const target = entries.find((item) => item.id === id);
  if (!target) return;
  const nextCalories = window.prompt("Calories", String(target.calories ?? ""));
  if (nextCalories === null) return;
  const nextProtein = window.prompt("Protein (g)", String(target.protein ?? ""));
  if (nextProtein === null) return;
  const nextCarbs = window.prompt("Carbs (g)", String(target.carbs ?? ""));
  if (nextCarbs === null) return;
  const nextFat = window.prompt("Fat (g)", String(target.fat ?? ""));
  if (nextFat === null) return;

  target.calories = parseNullableNumber(nextCalories);
  target.protein = parseNullableNumber(nextProtein);
  target.carbs = parseNullableNumber(nextCarbs);
  target.fat = parseNullableNumber(nextFat);
  saveStoredMealLog(entries);
  renderDashboard();
  renderMealTimeline();
}

function getStoredAccounts() {
  const raw = localStorage.getItem(ACCOUNTS_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function setAuthMode(mode) {
  authMode = mode;
  const isLogin = mode === "login";
  createAccountFields.classList.toggle("hidden", isLogin);
  createAccountButton.classList.toggle("hidden", isLogin);
  loginButton.classList.toggle("hidden", !isLogin);
  showLoginButton.classList.toggle("active", isLogin);
  showCreateAccountButton.classList.toggle("active", !isLogin);
  authMessage.textContent = "";
}

function handleLogin() {
  const emailValue = loginEmail.value.trim();
  const passwordValue = loginPassword.value.trim();

  if (!emailValue || !passwordValue) {
    authMessage.textContent = "Enter both email and password to continue.";
    return;
  }

  if (passwordValue.length < 4) {
    authMessage.textContent = "Password should be at least 4 characters.";
    return;
  }

  const accounts = getStoredAccounts();
  if (accounts.length > 0) {
    const account = accounts.find(
      (entry) =>
        entry.email.toLowerCase() === emailValue.toLowerCase() &&
        entry.password === passwordValue,
    );

    if (!account) {
      authMessage.textContent = "Incorrect email or password.";
      return;
    }
  }

  startSession("login", emailValue);
}

function handleCreateAccount() {
  const emailValue = loginEmail.value.trim();
  const passwordValue = loginPassword.value.trim();
  const confirmValue = signupConfirmPassword.value.trim();

  if (!emailValue || !passwordValue || !confirmValue) {
    authMessage.textContent = "Fill out all fields to create your account.";
    return;
  }

  if (passwordValue.length < 4) {
    authMessage.textContent = "Password should be at least 4 characters.";
    return;
  }

  if (passwordValue !== confirmValue) {
    authMessage.textContent = "Passwords do not match.";
    return;
  }

  const accounts = getStoredAccounts();
  const exists = accounts.some(
    (entry) => entry.email.toLowerCase() === emailValue.toLowerCase(),
  );
  if (exists) {
    authMessage.textContent = "An account with this email already exists.";
    return;
  }

  accounts.push({
    email: emailValue,
    password: passwordValue,
    createdAt: Date.now(),
  });
  saveStoredAccounts(accounts);
  startSession("login", emailValue);
}

function handleGuestAccess() {
  startSession("guest");
}

function handleLogout() {
  localStorage.removeItem(SESSION_KEY);
  loginPassword.value = "";
  signupConfirmPassword.value = "";
  authMessage.textContent = "You have been logged out.";
  showAuth();
}

function parseIngredients(rawInput) {
  const normalized = rawInput
    .toLowerCase()
    .replace(/\r\n/g, "\n")
    .replace(/[,;\n\u2022\u00b7]+/g, ",")
    .split(",")
    .map((ingredient) => ingredient.replace(/^[\-\s·•]+/, "").trim())
    .filter(Boolean);
  return normalized;
}

function normalizeOcrForIngredients(raw) {
  let t = raw.replace(/\r\n/g, "\n").replace(/\u00a0/g, " ");
  const labelMatch = t.match(/ingredients?\s*[:\-]\s*/i);
  if (labelMatch && labelMatch.index !== undefined) {
    t = t.slice(labelMatch.index + labelMatch[0].length);
  }
  t = t.replace(/[\u2022\u00b7]/g, ",").replace(/\n+/g, ", ").replace(/;/g, ",");
  t = t.replace(/\s*,\s*/g, ", ").replace(/\s{2,}/g, " ").trim();
  return t;
}

let cameraStream = null;
let tesseractLoadPromise = null;

function loadTesseractScript() {
  if (window.Tesseract) {
    return Promise.resolve();
  }
  if (tesseractLoadPromise) {
    return tesseractLoadPromise;
  }
  tesseractLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.0/dist/tesseract.min.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load OCR library."));
    document.head.append(script);
  });
  return tesseractLoadPromise;
}

function stopCameraStream() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }
  if (cameraPreview) {
    cameraPreview.srcObject = null;
  }
}

function openCameraModal() {
  cameraModal.classList.remove("hidden");
  cameraOcrStatus.textContent = "";
  cameraPreview.classList.add("hidden");
  cameraWebcamCapture.classList.add("hidden");
  stopCameraStream();
  cameraModalClose.focus();
}

function closeCameraModal() {
  cameraModal.classList.add("hidden");
  cameraPreview.classList.add("hidden");
  cameraWebcamCapture.classList.add("hidden");
  stopCameraStream();
}

function setCameraBusy(isBusy) {
  [cameraWebcamStart, cameraWebcamCapture, cameraFileTrigger, cameraModalClose].forEach((el) => {
    if (el) {
      el.disabled = isBusy;
    }
  });
}

async function startWebcam() {
  cameraOcrStatus.textContent = "Starting camera…";
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    cameraOcrStatus.textContent =
      "This browser does not expose a camera here. Use “Take / choose photo” instead.";
    return;
  }
  try {
    stopCameraStream();
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false,
    });
    cameraPreview.srcObject = cameraStream;
    await cameraPreview.play();
    cameraPreview.classList.remove("hidden");
    cameraWebcamCapture.classList.remove("hidden");
    cameraOcrStatus.textContent = "Line up the ingredient list, then tap Capture photo.";
  } catch {
    cameraOcrStatus.textContent =
      "Could not use the webcam. Try “Take / choose photo”, or allow camera access (HTTPS required on some devices).";
  }
}

function captureWebcamFrame() {
  const vw = cameraPreview.videoWidth;
  const vh = cameraPreview.videoHeight;
  if (!vw || !vh) {
    cameraOcrStatus.textContent = "Camera is not ready yet.";
    return;
  }
  cameraCanvas.width = vw;
  cameraCanvas.height = vh;
  const ctx = cameraCanvas.getContext("2d");
  ctx.drawImage(cameraPreview, 0, 0, vw, vh);
  void runOcrOnCanvas(cameraCanvas);
}

async function runOcrOnCanvas(canvas) {
  stopCameraStream();
  cameraPreview.classList.add("hidden");
  cameraWebcamCapture.classList.add("hidden");
  setCameraBusy(true);
  cameraOcrStatus.textContent = "Reading label… (first run may take 15–40s while the OCR engine downloads)";
  try {
    await loadTesseractScript();
    const {
      data: { text },
    } = await Tesseract.recognize(canvas, "eng", {
      logger() {},
    });
    ingredientsInput.value = normalizeOcrForIngredients(text);
    closeCameraModal();
    ingredientsInput.focus();
  } catch {
    cameraOcrStatus.textContent = "Could not read that image. Try better light, closer crop, or sharper focus.";
  } finally {
    setCameraBusy(false);
  }
}

async function runOcrOnFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    return;
  }
  stopCameraStream();
  cameraPreview.classList.add("hidden");
  cameraWebcamCapture.classList.add("hidden");
  setCameraBusy(true);
  cameraOcrStatus.textContent = "Reading label… (first run may take 15–40s while the OCR engine downloads)";
  try {
    await loadTesseractScript();
    const {
      data: { text },
    } = await Tesseract.recognize(file, "eng", {
      logger() {},
    });
    ingredientsInput.value = normalizeOcrForIngredients(text);
    closeCameraModal();
    ingredientsInput.focus();
  } catch {
    cameraOcrStatus.textContent = "Could not read that image. Try a clearer photo of the ingredient block.";
  } finally {
    setCameraBusy(false);
  }
}

function findMatches(parsedIngredients) {
  const matched = [];

  for (const kbItem of ingredientKnowledgeBase) {
    const allTerms = [kbItem.key, ...kbItem.aliases];
    const wasFound = parsedIngredients.some((ingredient) =>
      allTerms.some((term) => ingredient.includes(term)),
    );

    if (wasFound) {
      matched.push(kbItem);
    }
  }

  return matched;
}

function calculateScore(matches, parsedIngredients) {
  let score = 100;

  for (const item of matches) {
    score -= item.severity;
  }

  // Extra penalty for very long labels as a rough proxy for ultra-processing.
  if (parsedIngredients.length >= 12) {
    score -= 8;
  } else if (parsedIngredients.length >= 8) {
    score -= 4;
  }

  return Math.max(1, Math.min(100, score));
}

function getVerdictText(score) {
  if (score >= 80) {
    return {
      label: "Low concern profile",
      confidence: "Higher ingredient transparency and fewer red flags detected.",
      tier: "good",
    };
  }

  if (score >= 50) {
    return {
      label: "Moderate concern profile",
      confidence: "Some engineered additives detected. Compare with cleaner alternatives.",
      tier: "fair",
    };
  }

  return {
    label: "High concern profile",
    confidence: "Multiple high-risk additives suggest heavy ultra-processing.",
    tier: "poor",
  };
}

function applyScoreBadgeTier(tier) {
  scoreBadge.classList.remove("tier-good", "tier-fair", "tier-poor", "tier-neutral");
  scoreBadge.classList.add(`tier-${tier}`);
}

function renderList(target, items, formatter) {
  target.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No major additive red flags detected in the current knowledge base.";
    target.append(li);
    return;
  }

  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = formatter(item);
    target.append(li);
  }
}

function setResultSectionTitles(flag, fact, alternative) {
  flagTitle.textContent = flag;
  factTitle.textContent = fact;
  alternativeTitle.textContent = alternative;
}

function runScan() {
  const parsedIngredients = parseIngredients(ingredientsInput.value);
  if (parsedIngredients.length === 0) {
    return;
  }

  const matches = findMatches(parsedIngredients);
  const score = calculateScore(matches, parsedIngredients);
  const verdictData = getVerdictText(score);

  emptyState.classList.add("hidden");
  results.classList.remove("hidden");

  scoreValue.textContent = String(score);
  verdict.textContent = verdictData.label;
  confidence.textContent = verdictData.confidence;
  applyScoreBadgeTier(verdictData.tier);
  nutritionSummary.textContent = "";
  resultImage.onerror = null;
  resultImage.src = "./assets/default-food.svg";
  resultImage.alt = "Ingredient-based label scan visual";
  resultImageCaption.textContent = "Ingredient scan visualization";
  setResultSectionTitles(
    "Hidden Additives / Harmful Ingredients",
    "What This Means",
    "Cleaner Alternatives",
  );

  renderList(
    flagList,
    matches,
    (item) =>
      `${item.key} (severity ${item.severity}/20): detected via label matching.`,
  );
  renderList(factList, matches, (item) => item.reason);
  renderList(alternativeList, matches, (item) => item.alternative);
  addActionHistoryEntry(
    "scan",
    `Ingredient scan (${score})`,
    `${parsedIngredients.length} ingredients, ${matches.length} additive flag(s)`,
  );
  setCurrentLogCandidate({
    name: "Ingredient scan entry",
    calories: null,
    protein: null,
    carbs: null,
    fat: null,
    source: "scan",
  });
  setActiveTab("results");
}

function startScanAnimation() {
  scanOverlay.classList.remove("hidden");
  scanLoading.classList.remove("hidden");
  scanButton.disabled = true;
  scanButton.textContent = "Scanning...";
}

function stopScanAnimation() {
  scanOverlay.classList.add("hidden");
  scanLoading.classList.add("hidden");
  scanButton.disabled = false;
  scanButton.textContent = "Run Scan";
}

function triggerHighSpeedScan() {
  const parsedIngredients = parseIngredients(ingredientsInput.value);
  if (parsedIngredients.length === 0) {
    return;
  }

  startScanAnimation();
  window.setTimeout(() => {
    runScan();
    stopScanAnimation();
  }, 900);
}

function findBrand(brandNameInput) {
  const query = brandNameInput.trim().toLowerCase();
  if (!query) {
    return null;
  }

  return (
    brandHealthDatabase.find((brand) => {
      const names = [brand.name.toLowerCase(), ...brand.aliases];
      return names.some((name) => name.includes(query) || query.includes(name));
    }) || null
  );
}

function getNutriment(product, key) {
  const nutriments = product.nutriments || {};
  const value = nutriments[key];
  return typeof value === "number" ? value : null;
}

function getProductDisplayName(product) {
  if (!product || typeof product !== "object") {
    return "";
  }
  const keys = [
    "product_name",
    "product_name_en",
    "generic_name",
    "generic_name_en",
    "abbreviated_product_name",
    "product_name_fr",
  ];
  for (const k of keys) {
    const v = product[k];
    if (typeof v === "string" && v.trim()) {
      return v.trim();
    }
  }
  return "";
}

function nutrimentsHasNumericValues(n) {
  if (!n || typeof n !== "object") {
    return false;
  }
  return Object.keys(n).some((key) => {
    const val = n[key];
    return typeof val === "number" && !Number.isNaN(val);
  });
}

function normalizeOpenFoodFactsImageUrl(raw) {
  if (typeof raw !== "string" || !raw.trim()) {
    return null;
  }
  const u = raw.trim();
  if (u.startsWith("https://") || u.startsWith("http://")) {
    return u;
  }
  if (u.startsWith("//")) {
    return `https:${u}`;
  }
  return null;
}

/** Newer OFF records nest chosen pack shots under `selected_images`. */
function imageUrlFromSelectedImages(product) {
  const sel = product?.selected_images;
  if (!sel || typeof sel !== "object") {
    return null;
  }
  const blocks = [sel.front, sel.packaging, sel.other];
  for (const block of blocks) {
    if (!block || typeof block !== "object") {
      continue;
    }
    const layer = block.display || block.small || block.thumb;
    if (!layer || typeof layer !== "object") {
      continue;
    }
    for (const loc of Object.values(layer)) {
      if (loc && typeof loc === "object") {
        const hit = normalizeOpenFoodFactsImageUrl(loc.url);
        if (hit) {
          return hit;
        }
      }
    }
  }
  return null;
}

/** Sets pack photo or placeholder; remote URLs get a one-shot onerror fallback. */
function applyPackImageToResult(url, displayNameForAlt) {
  const fallback = "./assets/default-food.svg";
  resultImage.onerror = null;
  const remote =
    typeof url === "string" && (url.startsWith("https://") || url.startsWith("http://"));
  if (remote) {
    resultImage.onerror = () => {
      resultImage.onerror = null;
      resultImage.src = fallback;
      resultImage.alt = `${displayNameForAlt} — placeholder`;
      if (resultImageCaption) {
        resultImageCaption.textContent = `${displayNameForAlt} · Pack photo failed to load; placeholder`;
      }
    };
    resultImage.src = url;
    resultImage.alt = `${displayNameForAlt} — pack photo from OpenFoodFacts`;
    return;
  }
  resultImage.src = typeof url === "string" && url ? url : fallback;
  resultImage.alt = displayNameForAlt ? `${displayNameForAlt} placeholder visual` : "Placeholder visual";
}

/** Prefer front-of-pack photo from OpenFoodFacts JSON when available. */
function getProductImageUrl(product) {
  if (!product || typeof product !== "object") {
    return null;
  }
  const flat = [
    product.image_front_url,
    product.image_url,
    product.image_small_url,
    product.image_front_small_url,
    product.image_front_thumb_url,
    product.image_packaging_url,
    product.image_packaging_small_url,
  ];
  for (const raw of flat) {
    const hit = normalizeOpenFoodFactsImageUrl(raw);
    if (hit) {
      return hit;
    }
  }
  return imageUrlFromSelectedImages(product);
}

function productHasPhoto(product) {
  return Boolean(getProductImageUrl(product));
}

function computeNutritionScore(product) {
  let score = 70;
  const calories = getNutriment(product, "energy-kcal_100g");
  const protein = getNutriment(product, "proteins_100g");
  const sugar = getNutriment(product, "sugars_100g");
  const saturatedFat = getNutriment(product, "saturated-fat_100g");
  const sodium = getNutriment(product, "sodium_100g");
  const fiber = getNutriment(product, "fiber_100g");

  if (calories !== null) {
    if (calories > 300) score -= 10;
    if (calories < 170) score += 5;
  }
  if (protein !== null) {
    if (protein >= 10) score += 10;
    if (protein < 4) score -= 6;
  }
  if (sugar !== null) {
    if (sugar > 15) score -= 14;
    else if (sugar > 8) score -= 7;
    else score += 4;
  }
  if (saturatedFat !== null && saturatedFat > 5) score -= 8;
  if (sodium !== null && sodium > 0.5) score -= 8;
  if (fiber !== null && fiber >= 3) score += 7;

  return Math.max(1, Math.min(100, Math.round(score)));
}

function buildPositivesAndNegatives(product) {
  const positives = [];
  const negatives = [];
  const alternatives = [];
  const calories = getNutriment(product, "energy-kcal_100g");
  const protein = getNutriment(product, "proteins_100g");
  const sugar = getNutriment(product, "sugars_100g");
  const saturatedFat = getNutriment(product, "saturated-fat_100g");
  const sodium = getNutriment(product, "sodium_100g");
  const fiber = getNutriment(product, "fiber_100g");
  const ingredientsText = (product.ingredients_text || "").toLowerCase();

  if (protein !== null && protein >= 10) positives.push(`High protein (${protein}g per 100g).`);
  if (fiber !== null && fiber >= 3) positives.push(`Contains fiber (${fiber}g per 100g).`);
  if (sugar !== null && sugar <= 5) positives.push(`Lower sugar profile (${sugar}g per 100g).`);
  if (calories !== null && calories <= 170)
    positives.push(`Moderate calorie density (${calories} kcal per 100g).`);

  if (sugar !== null && sugar > 12) negatives.push(`High sugar (${sugar}g per 100g).`);
  if (saturatedFat !== null && saturatedFat > 5)
    negatives.push(`Higher saturated fat (${saturatedFat}g per 100g).`);
  if (sodium !== null && sodium > 0.5) negatives.push(`Higher sodium (${sodium}g per 100g).`);
  if (ingredientsText.includes("flavor") || ingredientsText.includes("flavour")) {
    negatives.push("Uses broad flavor wording that can reduce ingredient transparency.");
  }
  if (ingredientsText.includes("syrup")) {
    negatives.push("Contains syrup-based sweeteners, often linked with higher added sugars.");
  }

  alternatives.push("Compare with options that have less sugar and fewer total ingredients.");
  alternatives.push("Prioritize products with higher protein/fiber and lower sodium.");

  return { positives, negatives, alternatives };
}

function mergeOpenFoodFactsProducts(searchHit, detailed) {
  if (!detailed || typeof detailed !== "object") {
    return searchHit;
  }
  return { ...searchHit, ...detailed };
}

async function fetchOpenFoodFactsProductDetails(code) {
  const clean = String(code ?? "").trim();
  if (!clean) {
    return null;
  }
  const url = `https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(clean)}.json`;
  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }
  const payload = await response.json();
  if (payload.status !== 1 || !payload.product || typeof payload.product !== "object") {
    return null;
  }
  return payload.product;
}

/**
 * Search hits are often missing image URLs; merge each candidate with
 * GET /api/v0/product/{code}.json for full front-of-pack links.
 */
async function fetchOpenFoodFactsProduct(query) {
  const searchUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=24`;
  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error("Could not reach OpenFoodFacts.");
  }

  const payload = await response.json();
  if (!payload || typeof payload !== "object" || !Array.isArray(payload.products)) {
    return null;
  }

  const products = payload.products.filter((p) => p && p.code);
  if (products.length === 0) {
    return null;
  }

  const labeled = products.filter((p) => getProductDisplayName(p));
  const pool = labeled.length > 0 ? labeled : products;

  const rank = (p) => {
    let score = 0;
    if (productHasPhoto(p)) {
      score += 4;
    }
    if (nutrimentsHasNumericValues(p.nutriments)) {
      score += 2;
    }
    if (getProductDisplayName(p)) {
      score += 1;
    }
    return score;
  };

  const ordered = [...pool].sort((a, b) => rank(b) - rank(a));
  const seen = new Set();
  const candidates = [];
  for (const p of ordered) {
    const c = String(p.code).trim();
    if (!c || seen.has(c)) {
      continue;
    }
    seen.add(c);
    candidates.push(p);
    if (candidates.length >= 12) {
      break;
    }
  }

  let bestWithoutPhoto = null;
  const maxAttempts = Math.min(6, candidates.length);

  for (let i = 0; i < maxAttempts; i++) {
    const hit = candidates[i];
    const details = await fetchOpenFoodFactsProductDetails(hit.code);
    const merged = mergeOpenFoodFactsProducts(hit, details);
    if (productHasPhoto(merged)) {
      return merged;
    }
    if (details && (!bestWithoutPhoto || nutrimentsHasNumericValues(merged.nutriments))) {
      bestWithoutPhoto = merged;
    }
  }

  return bestWithoutPhoto;
}

function buildBrandPhotoQueries(brand) {
  const queries = [brand.name, ...brand.aliases];
  const compact = [];
  const seen = new Set();
  for (const q of queries) {
    const cleaned = String(q || "").trim();
    if (!cleaned) continue;
    const key = cleaned.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    compact.push(cleaned);
    if (compact.length >= 5) break;
  }
  if (compact.length > 0) {
    compact.push(`${compact[0]} original`);
    compact.push(`${compact[0]} classic`);
  }
  return compact;
}

async function fetchBestBrandPhotoProduct(brand) {
  const cache = getBrandPhotoCache();
  const cacheKey = brand.name.toLowerCase();
  if (cache[cacheKey] && typeof cache[cacheKey] === "string") {
    return {
      product_name: brand.name,
      brands: brand.name,
      image_front_url: cache[cacheKey],
      nutriments: {},
    };
  }

  const queries = buildBrandPhotoQueries(brand);
  for (const q of queries) {
    try {
      const product = await fetchOpenFoodFactsProduct(q);
      const url = getProductImageUrl(product);
      if (product && url) {
        cache[cacheKey] = url;
        setBrandPhotoCache(cache);
        return product;
      }
    } catch {
      // Keep trying other aliases/queries.
    }
  }
  return null;
}

function renderOpenFoodFactsProduct(product) {
  const score = computeNutritionScore(product);
  const verdictData = getVerdictText(score);
  const calories = getNutriment(product, "energy-kcal_100g");
  const protein = getNutriment(product, "proteins_100g");
  const { positives, negatives, alternatives } = buildPositivesAndNegatives(product);
  const productName = getProductDisplayName(product) || "Unknown product";
  const brandName = product.brands || "Unknown brand";

  emptyState.classList.add("hidden");
  results.classList.remove("hidden");

  scoreValue.textContent = String(score);
  verdict.textContent = `${brandName}: ${productName}`;
  confidence.textContent = "Live nutrition data pulled from OpenFoodFacts product records.";
  nutritionSummary.textContent = `Calories: ${calories ?? "N/A"} kcal/100g | Protein: ${protein ?? "N/A"}g/100g`;
  applyScoreBadgeTier(verdictData.tier);
  const packPhoto = getProductImageUrl(product);
  applyPackImageToResult(packPhoto || "./assets/default-food.svg", productName);
  resultImageCaption.textContent = packPhoto
    ? `${productName} (${brandName}) · Product photo: OpenFoodFacts community database`
    : `${productName} (${brandName})`;

  setResultSectionTitles("Main Negatives", "Main Positives", "Cleaner Alternatives");
  renderList(flagList, negatives, (item) => item);
  renderList(factList, positives, (item) => item);
  renderList(alternativeList, alternatives, (item) => item);
  setCurrentLogCandidate({
    name: `${brandName}: ${productName}`,
    calories: calories,
    protein: protein,
    carbs: getNutriment(product, "carbohydrates_100g"),
    fat: getNutriment(product, "fat_100g"),
    source: "off",
  });
}

async function runBarcodeLookup() {
  const code = barcodeInput.value.trim();
  if (!code) {
    return;
  }
  barcodeLookupButton.disabled = true;
  barcodeLookupButton.textContent = "Looking up...";
  try {
    const product = await fetchOpenFoodFactsProductDetails(code);
    if (!product) {
      emptyState.classList.add("hidden");
      results.classList.remove("hidden");
      scoreValue.textContent = "--";
      verdict.textContent = "Barcode not found";
      confidence.textContent = "No OpenFoodFacts product was found for this barcode.";
      nutritionSummary.textContent = "";
      applyScoreBadgeTier("neutral");
      resultImage.onerror = null;
      resultImage.src = "./assets/default-food.svg";
      resultImage.alt = "No product image available";
      resultImageCaption.textContent = "No product visual available for this barcode";
      renderList(flagList, [], () => "");
      renderList(factList, [], () => "");
      renderList(alternativeList, [], () => "");
      setCurrentLogCandidate(null);
      addActionHistoryEntry("barcode", `Barcode lookup: ${code}`, "No product found");
      return;
    }
    addActionHistoryEntry(
      "barcode",
      `Barcode lookup: ${code}`,
      `${product.brands || "Unknown brand"} ${getProductDisplayName(product) || "product"}`,
    );
    renderOpenFoodFactsProduct(product);
    setActiveTab("results");
  } finally {
    barcodeLookupButton.disabled = false;
    barcodeLookupButton.textContent = "Lookup Barcode";
  }
}

function getBrandSuggestions(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return [];
  }

  return brandHealthDatabase
    .filter((brand) => {
      const names = [brand.name.toLowerCase(), ...brand.aliases];
      return names.some((name) => name.includes(normalizedQuery));
    })
    .slice(0, 5);
}

function hideBrandSuggestions() {
  brandSuggestions.classList.add("hidden");
  brandSuggestions.innerHTML = "";
  brandSearch.setAttribute("aria-expanded", "false");
  activeSuggestionIndex = -1;
  currentSuggestions = [];
}

function applySuggestion(brandName) {
  brandSearch.value = brandName;
  hideBrandSuggestions();
}

function renderBrandSuggestions(suggestions) {
  currentSuggestions = suggestions;
  activeSuggestionIndex = -1;
  brandSuggestions.innerHTML = "";

  if (suggestions.length === 0) {
    hideBrandSuggestions();
    return;
  }

  suggestions.forEach((brand, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "suggestion-item";
    button.textContent = brand.name;
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      applySuggestion(brand.name);
    });

    if (index === activeSuggestionIndex) {
      button.classList.add("active");
    }

    li.append(button);
    brandSuggestions.append(li);
  });

  brandSuggestions.classList.remove("hidden");
  brandSearch.setAttribute("aria-expanded", "true");
}

function updateActiveSuggestion(nextIndex) {
  const suggestionButtons = brandSuggestions.querySelectorAll(".suggestion-item");
  suggestionButtons.forEach((button, index) => {
    button.classList.toggle("active", index === nextIndex);
  });
}

async function runBrandSearch() {
  const query = brandSearch.value.trim();
  if (!query) {
    return;
  }

  hideBrandSuggestions();
  brandSearchButton.disabled = true;
  brandSearchButton.textContent = "Searching...";

  try {
    addActionHistoryEntry("brand-search", `Brand search: ${query}`);
    try {
      const liveProduct = await fetchOpenFoodFactsProduct(query);
      if (liveProduct) {
        renderOpenFoodFactsProduct(liveProduct);
        setActiveTab("results");
        return;
      }
    } catch {
      // Fall back to local profiles if live API lookup fails.
    }

    const match = findBrand(query);

    if (!match) {
      emptyState.classList.add("hidden");
      results.classList.remove("hidden");

      scoreValue.textContent = "--";
      verdict.textContent = "Brand not found";
      confidence.textContent =
        "No profile was found in live lookup or local database. Try Coca-Cola, Kellogg's, Nestle, Chobani, or Annie's.";
      nutritionSummary.textContent = "";
      applyScoreBadgeTier("neutral");
      resultImage.onerror = null;
      resultImage.src = "./assets/default-food.svg";
      resultImage.alt = "No brand image available";
      resultImageCaption.textContent = "No brand visual available yet";

      setResultSectionTitles("Main Negatives", "Main Positives", "Cleaner Alternatives");
      renderList(flagList, [], () => "");
      renderList(factList, [], () => "");
      renderList(alternativeList, [], () => "");
      setCurrentLogCandidate(null);
      setActiveTab("results");
      return;
    }

    const verdictData = getVerdictText(match.score);
    emptyState.classList.add("hidden");
    results.classList.remove("hidden");

    scoreValue.textContent = String(match.score);
    verdict.textContent = `${match.name}: ${match.verdict}`;
    confidence.textContent = match.confidence;
    nutritionSummary.textContent =
      "Score from Nova’s local brand profile. Fetching a real pack photo from OpenFoodFacts when possible…";
    applyScoreBadgeTier(verdictData.tier);
    resultImage.onerror = null;
    resultImage.src = match.image;
    resultImage.alt = `${match.name} illustrated profile`;
    resultImageCaption.textContent = `${match.name} — looking up a product photo…`;

    setResultSectionTitles("Main Negatives", "Main Positives", "Cleaner Alternatives");
    renderList(flagList, match.concerns, (item) => item);
    renderList(
      factList,
      [
        `Brand-level score reflects portfolio trends, not every individual SKU.`,
        `Current assessment model uses known ingredient-pattern risk weighting.`,
      ],
      (item) => item,
    );
    renderList(alternativeList, match.alternatives, (item) => item);
    setCurrentLogCandidate({
      name: `${match.name} (brand profile)`,
      calories: null,
      protein: null,
      carbs: null,
      fat: null,
      source: "brand-local",
    });

    try {
      const photoProduct = await fetchBestBrandPhotoProduct(match);
      const packUrl = photoProduct ? getProductImageUrl(photoProduct) : null;
      if (packUrl) {
        const pname = getProductDisplayName(photoProduct) || match.name;
        const bname =
          String(photoProduct.brands || "")
            .split(",")[0]
            .trim() || match.name;
        applyPackImageToResult(packUrl, pname);
        resultImageCaption.textContent = `${pname} (${bname}) · Product photo: OpenFoodFacts`;
        const cal = getNutriment(photoProduct, "energy-kcal_100g");
        const prot = getNutriment(photoProduct, "proteins_100g");
        if (cal !== null || prot !== null) {
          nutritionSummary.textContent = `Local brand score above; pack photo from OpenFoodFacts. Calories: ${cal ?? "N/A"} kcal/100g | Protein: ${prot ?? "N/A"}g/100g for this product.`;
        } else {
          nutritionSummary.textContent =
            "Local brand score above; product photo from OpenFoodFacts (nutrition fields not listed for this hit).";
        }
        setCurrentLogCandidate({
          name: `${bname}: ${pname}`,
          calories: cal,
          protein: prot,
          carbs: getNutriment(photoProduct, "carbohydrates_100g"),
          fat: getNutriment(photoProduct, "fat_100g"),
          source: "brand-off",
        });
      } else {
        nutritionSummary.textContent =
          "Calories and protein are unavailable for the static profile, and no product photo was found on OpenFoodFacts for this search.";
        resultImageCaption.textContent = `${match.name} — illustrated placeholder (no OFF photo found)`;
      }
    } catch {
      nutritionSummary.textContent =
        "Calories and protein are unavailable for static profile entries. Could not load OpenFoodFacts for a pack photo.";
      resultImageCaption.textContent = `${match.name} portfolio-style visual`;
    }
  } finally {
    brandSearchButton.disabled = false;
    brandSearchButton.textContent = "Search Brand";
  }
}

scanButton.addEventListener("click", triggerHighSpeedScan);
brandSearchButton.addEventListener("click", runBrandSearch);

brandSearch.addEventListener("input", () => {
  const suggestions = getBrandSuggestions(brandSearch.value);
  renderBrandSuggestions(suggestions);
});

brandSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && activeSuggestionIndex < 0) {
    event.preventDefault();
    runBrandSearch();
    return;
  }

  if (currentSuggestions.length === 0) {
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeSuggestionIndex = (activeSuggestionIndex + 1) % currentSuggestions.length;
    updateActiveSuggestion(activeSuggestionIndex);
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    activeSuggestionIndex =
      (activeSuggestionIndex - 1 + currentSuggestions.length) %
      currentSuggestions.length;
    updateActiveSuggestion(activeSuggestionIndex);
    return;
  }

  if (event.key === "Enter" && activeSuggestionIndex >= 0) {
    event.preventDefault();
    applySuggestion(currentSuggestions[activeSuggestionIndex].name);
    runBrandSearch();
    return;
  }

  if (event.key === "Escape") {
    hideBrandSuggestions();
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tabTarget;
    if (!target) return;
    setActiveTab(target);
  });
});

document.addEventListener("click", (event) => {
  if (!brandSuggestions.contains(event.target) && event.target !== brandSearch) {
    hideBrandSuggestions();
  }
});

loadDemoButton.addEventListener("click", () => {
  ingredientsInput.value = demoLabel;
  triggerHighSpeedScan();
});

openCameraModalButton.addEventListener("click", openCameraModal);
cameraModalClose.addEventListener("click", closeCameraModal);
cameraModalBackdrop.addEventListener("click", closeCameraModal);
cameraWebcamStart.addEventListener("click", () => {
  void startWebcam();
});
cameraWebcamCapture.addEventListener("click", captureWebcamFrame);
cameraFileTrigger.addEventListener("click", () => {
  cameraFileInput.click();
});
cameraFileInput.addEventListener("change", () => {
  const file = cameraFileInput.files && cameraFileInput.files[0];
  cameraFileInput.value = "";
  if (file) {
    void runOcrOnFile(file);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cameraModal && !cameraModal.classList.contains("hidden")) {
    closeCameraModal();
  }
});

loadBrandDemoButton.addEventListener("click", () => {
  brandSearch.value = demoBrand;
  runBrandSearch();
});

addToTodayButton.addEventListener("click", addCurrentCandidateToToday);
saveGoalsButton.addEventListener("click", () => {
  const next = {
    calories: parseNullableNumber(goalCalories.value) ?? DEFAULT_GOALS.calories,
    protein: parseNullableNumber(goalProtein.value) ?? DEFAULT_GOALS.protein,
    carbs: parseNullableNumber(goalCarbs.value) ?? DEFAULT_GOALS.carbs,
    fat: parseNullableNumber(goalFat.value) ?? DEFAULT_GOALS.fat,
  };
  saveStoredGoals(next);
  renderDashboard();
});
barcodeLookupButton.addEventListener("click", () => {
  void runBarcodeLookup();
});
barcodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    void runBarcodeLookup();
  }
});

loginButton.addEventListener("click", handleLogin);
createAccountButton.addEventListener("click", handleCreateAccount);
guestButton.addEventListener("click", handleGuestAccess);
logoutButton.addEventListener("click", handleLogout);
showLoginButton.addEventListener("click", () => setAuthMode("login"));
showCreateAccountButton.addEventListener("click", () => setAuthMode("signup"));

loginPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (authMode === "login") {
      handleLogin();
    } else {
      handleCreateAccount();
    }
  }
});

signupConfirmPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && authMode === "signup") {
    handleCreateAccount();
  }
});

setAuthMode("login");
const existingSession = localStorage.getItem(SESSION_KEY);
if (existingSession) {
  showApp();
} else {
  showAuth();
}
renderDashboard();
renderMealTimeline();
mealLogDate.textContent = `Today: ${formatTodayLabel()}`;
setCurrentLogCandidate(null);
setActiveTab(activeTab);

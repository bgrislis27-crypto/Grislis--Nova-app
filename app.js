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
const resultImage = document.getElementById("resultImage");
const resultImageCaption = document.getElementById("resultImageCaption");

const ingredientsInput = document.getElementById("ingredients");
const scanButton = document.getElementById("scanButton");
const loadDemoButton = document.getElementById("loadDemoButton");
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

const demoLabel =
  "Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, sodium benzoate, caffeine";
const demoBrand = "Coca-Cola";
const SESSION_KEY = "novaSession";
const ACCOUNTS_KEY = "novaAccounts";
let activeSuggestionIndex = -1;
let currentSuggestions = [];
let authMode = "login";

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
  return rawInput
    .toLowerCase()
    .split(",")
    .map((ingredient) => ingredient.trim())
    .filter(Boolean);
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
      color: "#46d7ac",
      badgeBackground: "#123b32",
    };
  }

  if (score >= 50) {
    return {
      label: "Moderate concern profile",
      confidence: "Some engineered additives detected. Compare with cleaner alternatives.",
      color: "#ffd166",
      badgeBackground: "#453918",
    };
  }

  return {
    label: "High concern profile",
    confidence: "Multiple high-risk additives suggest heavy ultra-processing.",
    color: "#ff6b6b",
    badgeBackground: "#4a2323",
  };
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
  scoreBadge.style.borderColor = verdictData.color;
  scoreBadge.style.backgroundColor = verdictData.badgeBackground;
  resultImage.src = "./assets/default-food.svg";
  resultImage.alt = "Ingredient-based label scan visual";
  resultImageCaption.textContent = "Ingredient scan visualization";

  renderList(
    flagList,
    matches,
    (item) =>
      `${item.key} (severity ${item.severity}/20): detected via label matching.`,
  );
  renderList(factList, matches, (item) => item.reason);
  renderList(alternativeList, matches, (item) => item.alternative);
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

function runBrandSearch() {
  const match = findBrand(brandSearch.value);
  hideBrandSuggestions();

  if (!match) {
    emptyState.classList.add("hidden");
    results.classList.remove("hidden");

    scoreValue.textContent = "--";
    verdict.textContent = "Brand not found";
    confidence.textContent =
      "No profile is available yet. Try Coca-Cola, Kellogg's, Nestle, Chobani, or Annie's.";
    scoreBadge.style.borderColor = "#2a3657";
    scoreBadge.style.backgroundColor = "#12253d";
    resultImage.src = "./assets/default-food.svg";
    resultImage.alt = "No brand image available";
    resultImageCaption.textContent = "No brand visual available yet";

    renderList(flagList, [], () => "");
    renderList(factList, [], () => "");
    renderList(alternativeList, [], () => "");
    return;
  }

  const verdictData = getVerdictText(match.score);
  emptyState.classList.add("hidden");
  results.classList.remove("hidden");

  scoreValue.textContent = String(match.score);
  verdict.textContent = `${match.name}: ${match.verdict}`;
  confidence.textContent = match.confidence;
  scoreBadge.style.borderColor = verdictData.color;
  scoreBadge.style.backgroundColor = verdictData.badgeBackground;
  resultImage.src = match.image;
  resultImage.alt = `${match.name} visual profile`;
  resultImageCaption.textContent = `${match.name} portfolio-style visual`;

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

document.addEventListener("click", (event) => {
  if (!brandSuggestions.contains(event.target) && event.target !== brandSearch) {
    hideBrandSuggestions();
  }
});

loadDemoButton.addEventListener("click", () => {
  ingredientsInput.value = demoLabel;
  triggerHighSpeedScan();
});

loadBrandDemoButton.addEventListener("click", () => {
  brandSearch.value = demoBrand;
  runBrandSearch();
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

# Grislis--Nova-app

Nova is a lightweight food-label decoder web app that helps you cut through marketing language and spot additive risks quickly.

## Features

- High-speed ingredient scan from pasted label text
- Brand health lookup for quick portfolio-level scoring
- Live product lookup with food images, calories, and protein values
- Detection of hidden additives and common ultra-processed markers
- Science-style health score (0-100) based on ingredient severity model
- Clear explanations of detected risks
- Cleaner alternatives to support healthier shopping decisions
- Built-in visuals that update for label scans and brand lookups
- Start/login screen with guest access and logout support

## Run locally

This version is dependency-free and runs directly in the browser.

1. Open `index.html` in your browser, or
2. Serve the folder with any static server and open it in your browser.

## Notes

- The scoring model is educational and heuristic, not a medical diagnosis.
- Live nutrition and product images are pulled from OpenFoodFacts (no API key required).
- You can expand `ingredientKnowledgeBase` in `app.js` to improve ingredient coverage.
- You can expand `brandHealthDatabase` in `app.js` to add more brand profiles.
- If you want a paid key-based API, Spoonacular is a common next step: [https://spoonacular.com/food-api](https://spoonacular.com/food-api).

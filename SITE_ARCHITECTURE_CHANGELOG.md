# Site Architecture V1 Changelog

## Architecture

- Added four product cluster pages: Travel Adapters, Power Strips, Wall Outlet Extenders, and Tower Power Strips.
- Added three customer solution pages for Amazon/e-commerce sellers, travel brands, and distributors/importers.
- Added a Resources hub with Buying Guides, Engineering & Testing, Market Insights, and OEM / ODM Knowledge topic pages.
- Updated shared headers, navigation, footers, breadcrumbs, and internal links across the 64-page `origin/main` baseline.
- Updated the Products hub taxonomy without changing individual product content.
- Added 12 real, canonical routes to the Sitemap. The final Sitemap contains 75 URLs because the three newer `origin/main` baseline pages were retained.

## SEO safety

- Existing baseline pages removed: 0.
- Existing product URLs preserved: 30/30.
- Product content unintended changes: 0.
- Product specification changes: 0.
- Product image path changes: 0.
- Product URL migrations: 0.
- Broken internal links: 0.
- Canonical mismatches: 0.
- JSON-LD parse errors: 0.
- Product Image Lock violations: 0.

## Verification

- `scripts/final-diff-audit.mjs`
- `scripts/validate-architecture.mjs`
- `scripts/audit-product-schema.js`
- Mobile preview testing at 390 × 844 across 12 required routes.

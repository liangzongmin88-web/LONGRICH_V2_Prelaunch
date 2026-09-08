# SEO Migration Risk Register

## Non-negotiable controls

- Keep all 30 existing product URLs unchanged.
- Keep self-referencing canonicals on existing pages.
- Preserve existing Product JSON-LD and factual product specifications.
- Keep all current guides and indexable sitemap entries.
- Do not add mass redirects or block crawling in robots.txt.

## Recorded changes that touch indexing signals

| Change | Risk | Mitigation | Approval needed? |
|---|---|---|---|
| Add new category, solution, and resource directory URLs | Low | Self-referencing canonical equals sitemap and physical route | No |
| Update existing product BreadcrumbList category parent | Medium | Product URL and Product schema remain unchanged; only taxonomy parent changes | Covered by supplied brief |
| Add internal category links to existing products/guides | Low | Additive links only; no content/specification replacement | No |
| Add new URLs to sitemap.xml | Low | Include only real, indexable routes after link validation | No |
| Create Git branch / PR | Resolved | Architecture changes were reapplied to a clean clone of `origin/main` on `feature/site-architecture-v1` | No |
| Change any existing product URL | High | Not required and not implemented | Yes, if ever proposed |

## Rollback boundary

All architecture work is additive. Existing canonical product pages remain at their original filenames, so removal of new directories and reversal of breadcrumb/link enhancements restores the prior topology without URL redirects.

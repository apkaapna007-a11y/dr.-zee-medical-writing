# Google Search Console Measurement Plan

**Property:** `https://drzeewrites.com/`  
**Primary cluster:** `/childcare/`  
**Owner:** Dr. Zeeshan Islam  
**Measurement start date:** ____________________

## 1. Initial setup

Verify the domain property `drzeewrites.com` in Google Search Console. Submit `https://drzeewrites.com/sitemap.xml`. Use the URL Inspection tool to request indexing for the childcare hub and each published childcare article after deployment. Record the date submitted and the date each URL first appears as indexed.

Google Search Console data is the source of truth for the site’s actual Google impressions, clicks, queries, average position, country distribution, and device distribution. Third-party tools may estimate search demand or competition, but they should not replace first-party performance data.

## 2. Baseline export

Export the following reports for the previous 12 months before making major changes, then repeat the export monthly:

| Report | Dimensions | Metrics | Purpose |
|---|---|---|---|
| Search results: Queries | Query, date, country, device | Clicks, impressions, CTR, position | Identify existing demand and new childcare queries. |
| Search results: Pages | Page, date, country, device | Clicks, impressions, CTR, position | Measure hub and article performance. |
| Search results: Countries | Country, date | Clicks, impressions, CTR, position | Confirm geographic audience. |
| Search results: Devices | Device, date | Clicks, impressions, CTR, position | Prioritise mobile readability and UX. |
| Indexing: Pages | Status, reason, URL | Indexed/not indexed counts | Find crawl, duplicate, or discovery issues. |
| Experience: Core Web Vitals | URL group, device | Good/needs improvement/poor | Monitor page experience. |

Store each monthly export with a date in the filename, for example `gsc-pages-2026-09.csv`. Do not overwrite prior exports; trend analysis depends on historical snapshots.

## 3. URL performance sheet

Maintain one row per childcare URL each month.

| Month | URL | Clicks | Impressions | CTR | Average position | Indexed? | Notes |
|---|---|---:|---:|---:|---:|---|---|
| YYYY-MM | `/childcare/` |  |  |  |  |  |  |
| YYYY-MM | `/childcare/questions-to-ask-before-choosing-daycare` |  |  |  |  |  |  |
| YYYY-MM | `/childcare/daycare-safety-checklist-for-infants` |  |  |  |  |  |  |
| YYYY-MM | `/childcare/prepare-baby-for-daycare` |  |  |  |  |  |  |
| YYYY-MM | `/childcare/daycare-illness-policy-questions` |  |  |  |  |  |  |

Use clicks and impressions as the primary growth measures. A fall in average position is meaningful only when the date range, country, device, and query mix are comparable.

## 4. Query and intent sheet

For each monthly query export, label the query by intent. Use **selection** for choosing a daycare, **preparation** for starting daycare, **safety** for infant and provider safety, **health** for illness and return-to-care questions, and **practical** for supplies, routines, or checklists.

| Query | Page | Intent | Clicks | Impressions | CTR | Position | Action |
|---|---|---|---:|---:|---:|---:|---|
|  |  |  |  |  |  |  |  |

Prioritise queries that meet one of these conditions: impressions are growing but CTR is low; average position is between 11 and 30; the query is highly relevant but the current page only answers it briefly; or the query reveals a missing supporting article.

## 5. Near-winner workflow

A near-winner is a relevant query where the childcare page appears around positions 11–30. For each near-winner, first check whether the page satisfies the exact intent. Then improve the opening answer, headings, checklist detail, internal links, source coverage, title, and meta description. Do not change a page simply because its position moved by one or two places.

Review one improvement at a time where possible. Record the change date, the query, the page, the reason for the change, and the next comparison date.

| Change date | Query | URL | Position before | Change made | Review date | Result |
|---|---|---|---:|---|---|---|
|  |  |  |  |  |  |  |

## 6. Indexing and technical checks

After every new article or substantial update, inspect the canonical URL, rendered title, visible H1, author/reviewer information, article schema, source links, and mobile layout. Request indexing only after the final content is deployed. If a URL is not indexed, inspect the exact reason in Search Console before changing the page.

Check for duplicate URLs with and without trailing slashes, accidental `noindex` directives, incorrect canonical tags, broken internal links, missing sitemap entries, and pages that are linked only from the sitemap but not from the site navigation or related articles.

## 7. Monthly decision rules

| Finding | Response |
|---|---|
| High impressions and low CTR | Test a clearer title and description that match the query. |
| Position 11–30 for a relevant query | Improve intent match, depth, internal links, and practical usefulness. |
| Impressions but no clicks | Review title, snippet clarity, and whether the page answers the actual query. |
| Indexed page with almost no impressions | Check topical relevance, internal links, and whether the query is too broad. |
| Not indexed due to duplicate | Keep one canonical version and remove competing duplicates. |
| Mobile Core Web Vitals problem | Reduce layout shifts, oversized assets, animation cost, and unnecessary scripts. |
| Strong article but no external recognition | Promote a genuinely useful checklist or decision aid to relevant professional and parent audiences. |

## 8. Important interpretation limits

Search Console does not show every query and its average position is an aggregate metric. Compare like-for-like date ranges and filters. Do not treat a single daily fluctuation as a strategy failure. Evaluate each article over enough time to collect meaningful impressions, while separately fixing confirmed indexing or technical errors immediately.

## 9. Recommended monthly review

At the end of each month, record the top five childcare pages, top twenty childcare queries, total childcare impressions and clicks, the number of queries in positions 1–10 and 11–30, indexed-page status, mobile share, and any Core Web Vitals issue. Select no more than three pages for improvement in the next cycle so changes remain focused and measurable.

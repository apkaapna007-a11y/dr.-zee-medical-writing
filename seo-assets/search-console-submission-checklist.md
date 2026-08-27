# Google Search Console Submission Checklist

**Property:** `https://drzeewrites.com/`  
**Sitemap:** `https://drzeewrites.com/sitemap.xml`

This checklist is prepared for manual completion by the site owner. It does not access or submit anything to Google Search Console.

## Before submission

Confirm that the production domain resolves over HTTPS, the canonical host is chosen, the public robots file allows crawling, and the sitemap contains only canonical URLs. Confirm that the childcare hub and four daycare articles are deployed publicly rather than only available in local development.

Confirm these URLs after deployment:

| URL | Purpose |
|---|---|
| `https://drzeewrites.com/childcare` | Childcare hub |
| `https://drzeewrites.com/childcare/questions-to-ask-before-choosing-daycare` | Cornerstone checklist |
| `https://drzeewrites.com/childcare/daycare-safety-checklist-for-infants` | Infant safety guide |
| `https://drzeewrites.com/childcare/prepare-baby-for-daycare` | Daycare preparation guide |
| `https://drzeewrites.com/childcare/daycare-illness-policy-questions` | Illness policy guide |
| `https://drzeewrites.com/downloads/daycare-tour-checklist.html` | Downloadable tour checklist |
| `https://drzeewrites.com/downloads/infant-daycare-safety-checklist.html` | Downloadable infant safety checklist |

## Ownership and sitemap

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add a **Domain property** for `drzeewrites.com` if one does not already exist. Complete Google’s DNS ownership verification using the registrar or DNS provider for the domain.
3. Open **Sitemaps** for the verified property.
4. Submit `sitemap.xml`.
5. Confirm that Google reports the sitemap as successfully read. A submitted sitemap is a discovery aid; it does not guarantee indexing.

## URL inspection

Use **URL inspection** for the childcare hub and each article URL. Confirm that the inspected URL is the canonical URL, that Google can access it, and that the page is eligible for indexing. After final deployment, use **Request indexing** for the hub and the four articles. Do not repeatedly request indexing for the same URL; allow Google time to crawl it.

The downloadable HTML resources do not need to be indexed as primary search landing pages. They should be reachable from the childcare hub and should remain useful even when opened directly or printed. If Search Console reports them as duplicate or low-value pages, keep the hub and article pages as the primary indexable content.

## First 30-day monitoring

| Review timing | Check |
|---|---|
| Deployment day | HTTP response, title, canonical, visible author/reviewer, links, sitemap entry |
| 48–72 hours | URL inspection status and sitemap processing |
| Week 1 | Indexed pages, coverage errors, mobile rendering, Core Web Vitals |
| Week 2 | Childcare queries and impressions; pages receiving impressions |
| Week 3 | Queries ranking positions 11–30 and low-CTR opportunities |
| Day 30 | Clicks, impressions, CTR, average position, country/device mix, indexing status |

## Measurement fields to record

| Field | Value |
|---|---|
| Domain verification date | ____________________ |
| Sitemap submission date | ____________________ |
| Sitemap status | ____________________ |
| Hub indexing date | ____________________ |
| Cornerstone indexing date | ____________________ |
| First childcare impression date | ____________________ |
| First childcare click date | ____________________ |
| Top query after 30 days | ____________________ |
| Best near-winner query | ____________________ |
| Next page to improve | ____________________ |

## Troubleshooting priorities

If a page is not indexed, first inspect the exact reason shown by Search Console. Check for an accidental `noindex`, a wrong canonical, a server error, a redirect, a missing internal link, or a page that is not yet publicly deployed. Do not create duplicate versions of the same article to compensate for delayed indexing.

If pages receive impressions but few clicks, improve the title and opening answer so they match the actual query. If a page ranks between positions 11 and 30, improve intent coverage, practical detail, internal links, and source clarity before expanding into another broad keyword.

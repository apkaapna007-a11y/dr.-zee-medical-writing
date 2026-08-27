from pathlib import Path
from urllib.parse import urlparse
import xml.etree.ElementTree as ET

sitemap = Path(__file__).resolve().parents[1] / "public" / "sitemap.xml"
root = ET.parse(sitemap).getroot()
ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [node.text for node in root.findall("sm:url/sm:loc", ns)]
assert urls, "Sitemap contains no URLs"
assert len(urls) == len(set(urls)), "Sitemap contains duplicate URLs"
for url in urls:
    parsed = urlparse(url)
    assert parsed.scheme == "https", f"Non-HTTPS URL: {url}"
    assert parsed.netloc == "drzeewrites.com", f"Unexpected host: {url}"
print(f"SITEMAP_XML_VALID=yes")
print(f"CANONICAL_URL_COUNT={len(urls)}")
print(f"CHILDCARE_URL_COUNT={sum('/childcare' in url for url in urls)}")

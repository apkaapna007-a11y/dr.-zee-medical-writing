from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/dr-zee-medical-writing')
public = root / 'public'
source = Image.open(public / 'logo.png').convert('RGBA')

# Make near-black backdrop pixels transparent if the generator returned a solid backdrop.
pixels = source.load()
for y in range(source.height):
    for x in range(source.width):
        r, g, b, a = pixels[x, y]
        if a > 0 and r < 18 and g < 18 and b < 18:
            pixels[x, y] = (r, g, b, 0)

# The stethoscope mark occupies the upper portion of the generated square logo.
mark = source.crop((180, 170, 1740, 1260))
canvas = Image.new('RGBA', (1600, 1600), (0, 0, 0, 0))
mark.thumbnail((1320, 1320), Image.Resampling.LANCZOS)
canvas.alpha_composite(mark, ((1600 - mark.width) // 2, (1600 - mark.height) // 2))

canvas.save(public / 'logo-mark.png', optimize=True)
for size, filename in [(32, 'favicon.png'), (180, 'apple-touch-icon.png'), (192, 'icon-192.png'), (512, 'icon-512.png')]:
    resized = canvas.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(public / filename, optimize=True)

source.save(public / 'logo.png', optimize=True)
print('created:', 'logo-mark.png', 'favicon.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png')
print('source mode:', source.mode, 'source size:', source.size)

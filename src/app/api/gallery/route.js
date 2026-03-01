import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const response = await fetch('https://wehealtheearth.com/media/', {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('Failed to fetch media page');
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const mediaItems = [];

        // Elementor often nested images in various ways. 
        // We look for all images within Elementor widgets that aren't icons or small assets.
        $('.elementor-widget-image img, .elementor-image-gallery img, .elementor-widget-theme-post-content img').each((i, el) => {
            const $img = $(el);
            const $link = $img.closest('a');

            // Prefer the high-res link if it exists, otherwise use img src
            const src = $link.attr('href') || $img.attr('src') || $img.attr('data-src');
            const alt = $img.attr('alt') || 'We Heal The Earth Media';

            // Find the nearest preceding heading (H1-H4) to use as category
            let category = 'Media';
            const $container = $img.closest('.elementor-widget, .elementor-section');
            const $heading = $container.prevAll().find('h1, h2, h3, h4').last();
            const $innerHeading = $container.find('h1, h2, h3, h4').first();

            const categoryText = ($innerHeading.length ? $innerHeading : $heading).text().trim();
            if (categoryText) category = categoryText;

            // Filter out logos, clear-pixels, or tiny things
            if (src && src.includes('wp-content/uploads') && !src.includes('logo')) {
                // Ensure absolute URL
                const absoluteSrc = src.startsWith('http') ? src : `https://wehealtheearth.com${src}`;
                mediaItems.push({ src: absoluteSrc, category, alt });
            }
        });

        // Dedup results based on source URL
        const uniqueItems = [];
        const seenSrcs = new Set();
        for (const item of mediaItems) {
            if (!seenSrcs.has(item.src)) {
                seenSrcs.add(item.src);
                uniqueItems.push(item);
            }
        }

        return NextResponse.json(uniqueItems);
    } catch (error) {
        console.error('Scraping Error:', error);
        return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
    }
}

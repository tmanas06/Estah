import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const response = await fetch('https://wehealtheearth.com/planet-run/', {
            next: { revalidate: 3600 }, // Cache for 1 hour
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) throw new Error('Failed to fetch programs');
        const html = await response.text();
        const $ = cheerio.load(html);
        const programs = [];

        // Use the specific selectors identified from the page structure
        $('.event-card').each((i, el) => {
            const container = $(el);
            const title = container.find('.event-title').text().trim();
            const month = container.find('.month-badge').text().trim();
            const date = container.find('.event-date').text().trim();
            const cause = container.find('.special-day').text().trim();
            const description = container.find('.description').text().trim();
            const link = container.find('.event-cta').attr('href');

            if (title && link) {
                programs.push({
                    id: i,
                    title,
                    link,
                    date: date || month,
                    description: description || 'Join our movement for environmental impact.',
                    category: cause || 'Planet Run'
                });
            }
        });

        // Deduplicate and filter
        const uniquePrograms = Array.from(new Set(programs.map(p => p.title)))
            .map(title => programs.find(p => p.title === title))
            .slice(0, 12);

        return NextResponse.json(uniquePrograms);
    } catch (error) {
        console.error('Programs scraper error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

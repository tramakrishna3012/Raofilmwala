import fs from 'fs';
import path from 'path';

export async function getPortfolioImages() {
    const portfolioDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
    try {
        const files = await fs.promises.readdir(portfolioDir);
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
        return files
            .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
            .map((file) => `/images/portfolio/${file}`);
    } catch (error) {
        console.error('Error reading portfolio directory:', error);
        return [];
    }
}

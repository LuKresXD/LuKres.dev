const fs = require('fs/promises');
const path = require('path');

interface FileUrls {
    file: string;
    urls: string[];
}

async function extractUrlsFromFile(filePath: string): Promise<string[]> {
    try {
        const content = await fs.readFile(filePath, 'utf-8');

        // Regular expression to match URLs
        const urlRegex = /https?:\/\/[^\s"']+\.(jpg|jpeg|png|gif|svg|mp4|webp|webm)/g;

        // Find all matches
        const matches = content.match(urlRegex) || [];

        // Filter for specific domains we're interested in
        //return matches.filter((url: string) => url.includes('r2.e-z.host'));
        return matches.filter((url: string) => url.includes(''));
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
}

async function findTsxFiles(dir: string): Promise<string[]> {
    const files: string[] = [];

    async function scan(directory: string): Promise<void> {
        const entries = await fs.readdir(directory, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(directory, entry.name);

            if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
                await scan(fullPath);
            } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
                files.push(fullPath);
            }
        }
    }

    await scan(dir);
    return files;
}

async function main(): Promise<void> {
    try {
        // Find all TSX files in the src directory
        const srcPath = path.join(process.cwd(), 'src');
        const files = await findTsxFiles(srcPath);

        // Extract URLs from each file
        const allResults: FileUrls[] = [];
        const allUrls = new Set<string>();

        for (const file of files) {
            const urls = await extractUrlsFromFile(file);
            if (urls.length > 0) {
                allResults.push({
                    file: path.relative(process.cwd(), file),
                    urls
                });
                urls.forEach((url: string) => allUrls.add(url));
            }
        }

        // Save detailed results
        await fs.writeFile(
            'url-extraction-details.json',
            JSON.stringify(allResults, null, 2)
        );

        // Save just the unique URLs
        const uniqueUrlsList = Array.from(allUrls).sort();
        const urlsObject = {
            urls: uniqueUrlsList
        };

        await fs.writeFile(
            'extracted-urls.json',
            JSON.stringify(urlsObject, null, 2)
        );

        console.log('Files scanned:', files.length);
        console.log('Unique URLs found:', uniqueUrlsList.length);
        console.log('\nURLs have been saved to:');
        console.log('- extracted-urls.json (just URLs)');
        console.log('- url-extraction-details.json (URLs with their source files)');

        // Print URLs to console
        console.log('\nExtracted URLs:');
        console.log('const urls = [');
        uniqueUrlsList.forEach((url: string) => console.log(`  "${url}",`));
        console.log('];');

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main().catch(console.error);
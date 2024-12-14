// scripts/migrate-to-cloudinary.ts
const cloudinary = require('cloudinary').v2;
const axios = require('axios');
const fs = require('fs/promises');
const path = require('path');

// Type definitions
interface UrlMapping {
    oldUrl: string;
    newUrl: string;
}

interface CloudinaryResponse {
    secure_url: string;
    [key: string]: any;
}

interface CloudinaryUploadOptions {
    resource_type: "image" | "video" | "raw" | "auto";
    folder: string;
    public_id?: string;
    overwrite?: boolean;
}

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dygcwhekh',
    api_key: '???',
    api_secret: '???'
});

// URLs that need migration (r2.e-z.host URLs)
const urls: string[] = [
    "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/0qakmo1p.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/0uiqieur.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/37nz0ybd.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/47vlrhlq.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/4r1yqzxg.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/5e9892ao.mp4",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/6ae5hg1z.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/85nw8ufg.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/8fruzhc1.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/8oofxt7g.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/8xhq6l0v.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/a3m2hwoj.mp4",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/aib44nde.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/apyhav8m.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/b6p49co9.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/b80fm686.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/dimji7zh.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/dj9uuxer.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/h174xqqs.jpg",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/hxqurbpc.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/iqmj4yt9.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/kblm9g2n.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/m9i8m6xp.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/nm77gfrp.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/oqjxmafb.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/pg0pmfvm.mp4",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/qa1kipsv.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/qv6popoo.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/senhgz35.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/szqbp2a5.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/tge4kxtr.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/vamnhb8m.mp4",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/vssieasx.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/waqgzk2n.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/wct56v7g.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/wh9qs3vu.png",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/wuctgw84.mp4",
    "https://r2.e-z.host/b79914eb-39d2-4ea1-a88d-58a44aa23f91/ztf1gyeq.png",
    "https://r2.e-z.host/d6000dcc-4c91-436f-9496-719542168253/8ihmkcad.png",
    "https://r2.e-z.host/d6000dcc-4c91-436f-9496-719542168253/bnxrty92.png",
    "https://r2.e-z.host/d6000dcc-4c91-436f-9496-719542168253/izj999we.png",
    "https://r2.e-z.host/d6000dcc-4c91-436f-9496-719542168253/k71k3l2g.mp4",
    "https://r2.e-z.host/d6000dcc-4c91-436f-9496-719542168253/wu26jwvh.png"
];

// File paths relative to project root
const filesToUpdate: string[] = [
    'src/components/sections/index/Projects.tsx',
    'src/components/sections/index/About.tsx',
    'src/components/sections/index/Hero.tsx',
    'src/components/sections/index/Experience.tsx',
    'src/components/sections/index/Footer.tsx',
    'src/components/Navbar.tsx',
    'src/components/ExperienceCard.tsx',
    'src/components/ProjectCard.tsx',
    'src/components/AboutCard.tsx',
    'src/pages/index.tsx',
    'src/pages/cas.tsx',
    'src/pages/home.tsx'
];

async function downloadFile(url: string): Promise<Buffer> {
    try {
        const response = await axios({
            url,
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        return Buffer.from(response.data);
    } catch (error) {
        console.error(`Failed to download ${url}:`, error);
        throw error;
    }
}

async function uploadToCloudinary(url: string): Promise<string> {
    try {
        const fileData = await downloadFile(url);
        const isVideo = url.toLowerCase().endsWith('.mp4');

        return new Promise<string>((resolve, reject) => {
            const uploadOptions: CloudinaryUploadOptions = {
                resource_type: isVideo ? "video" : "image",
                folder: "lukres.dev",
                public_id: url.split('/').pop()?.split('.')[0],
                overwrite: true
            };

            const uploadStream = cloudinary.uploader.upload_stream(
                uploadOptions,
                (error: Error | null, result: CloudinaryResponse | null) => {
                    if (error) reject(error);
                    else if (result) resolve(result.secure_url);
                    else reject(new Error('No result from Cloudinary'));
                }
            );

            uploadStream.end(fileData);
        });
    } catch (error) {
        console.error(`Failed to upload ${url}:`, error);
        throw error;
    }
}

async function generateUrlMappings(): Promise<UrlMapping[]> {
    const mappings: UrlMapping[] = [];

    for (const url of urls) {
        try {
            console.log(`Processing: ${url}`);
            const newUrl = await uploadToCloudinary(url);
            mappings.push({ oldUrl: url, newUrl });
            console.log(`✓ Uploaded: ${url} -> ${newUrl}`);

            // Save progress after each successful upload
            await fs.writeFile(
                path.join(process.cwd(), 'url-mappings.json'),
                JSON.stringify(mappings, null, 2)
            );

            // Add delay between uploads
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`✗ Failed to process ${url}`);
            console.error(error);
        }
    }

    return mappings;
}

async function updateCodebase(mappings: UrlMapping[]): Promise<void> {
    for (const filePath of filesToUpdate) {
        try {
            const fullPath = path.join(process.cwd(), filePath);
            console.log(`Updating ${filePath}...`);

            let content = await fs.readFile(fullPath, 'utf-8');

            for (const { oldUrl, newUrl } of mappings) {
                const escapedOldUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(escapedOldUrl, 'g');
                content = content.replace(regex, newUrl);
            }

            await fs.writeFile(fullPath, content);
            console.log(`✓ Updated ${filePath}`);
        } catch (error) {
            console.error(`✗ Failed to update ${filePath}:`, error);
        }
    }
}

async function main(): Promise<void> {
    try {
        console.log('Starting migration to Cloudinary...');
        const mappings = await generateUrlMappings();
        console.log('\nUpdating codebase with new URLs...');
        await updateCodebase(mappings);
        console.log('\n✓ Migration completed successfully!');
        console.log('Check url-mappings.json for the complete mapping of old to new URLs');
    } catch (error) {
        console.error('✗ Migration failed:', error);
        process.exit(1);
    }
}

main();
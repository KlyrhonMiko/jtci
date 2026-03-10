import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tilesDir = path.join(__dirname, "../public/images/tiles");
const dataDir = path.join(__dirname, "../src/data");

function generateTilesData() {
    const collections = [];

    // Check if the directory exists
    if (!fs.existsSync(tilesDir)) {
        console.error("Tiles directory not found at:", tilesDir);
        process.exit(1);
    }

    // Read subdirectories
    const subdirs = fs.readdirSync(tilesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    subdirs.forEach(collectionName => {
        const collectionPath = path.join(tilesDir, collectionName);
        const files = fs.readdirSync(collectionPath);
        
        // Filter only image files
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
        });

        if (imageFiles.length > 0) {
            collections.push({
                name: collectionName,
                images: imageFiles.map(file => `/images/tiles/${collectionName}/${file}`)
            });
        }
    });

    // Sort collections alphabetically
    collections.sort((a, b) => a.name.localeCompare(b.name));

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    const outputPath = path.join(dataDir, "tiles.json");
    fs.writeFileSync(outputPath, JSON.stringify(collections, null, 2));

    console.log(`Successfully generated tiles data! Found ${collections.length} collections.`);
}

generateTilesData();

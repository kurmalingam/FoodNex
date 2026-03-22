require('dotenv').config({ path: './config/.env' });
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function uploadImage(localPath, cloudFolder) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(localPath, {
      folder: cloudFolder,
      resource_type: 'auto',
    }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

function findImages(dir) {
  let images = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      images = images.concat(findImages(fullPath));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(ext)) {
        images.push(fullPath);
      }
    }
  }
  return images;
}

async function main() {
  console.log('🔄 Starting Cloudinary upload for local images...');
  if (!process.env.CLOUDINARY_NAME) {
    console.error('❌ Add creds to backend/config/.env first!');
    return;
  }

  const imageDir = path.resolve('../frontend/src/Image');
  if (!fs.existsSync(imageDir)) {
    console.error('❌ frontend/src/Image not found');
    return;
  }

  const images = findImages(imageDir);
  console.log(`📸 Found ${images.length} images`);

  const imageMap = {};
  for (let i = 0; i < images.length; i++) {
    const localPath = images[i];
    const relative = path.relative(imageDir, localPath).replace(/\\/g, '/');
    const cloudFolder = `FoodNex/Images/${path.dirname(relative)}`;
    const publicFilename = path.basename(localPath, path.extname(localPath)) + path.extname(localPath);

    try {
      console.log(`⏳ Uploading ${i+1}/${images.length}: ${relative}`);
      const result = await uploadImage(localPath, cloudFolder);
      imageMap[relative] = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      console.log(`✅ Uploaded: ${result.secure_url}`);
    } catch (err) {
      console.error(`❌ Failed ${relative}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'imageMap.json'), JSON.stringify(imageMap, null, 2));
  console.log(`\n🎉 Complete! Check backend/utils/imageMap.json for URLs. Update staticProducts.js next.`);
}

main().catch(console.error);

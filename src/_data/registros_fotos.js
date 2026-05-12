const fs = require("fs");
const path = require("path");

module.exports = function() {
  const dirPath = path.join(__dirname, "../img/registros");
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const results = [];

  function walk(dir, category = "Geral") {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walk(filePath, file.charAt(0).toUpperCase() + file.slice(1));
      } else if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file)) {
        const cleanName = file.replace(/\.[^/.]+$/, "")
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, char => char.toUpperCase());

        // Get relative path for URL
        const relativeUrl = path.relative(path.join(__dirname, ".."), filePath).replace(/\\/g, "/");

        results.push({
          url: `/${relativeUrl}`,
          name: cleanName,
          category: category
        });
      }
    });
  }

  walk(dirPath);
  return results;
};

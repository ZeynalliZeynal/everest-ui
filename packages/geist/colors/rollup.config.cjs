const path = require("path");
const fs = require("fs");
const postcss = require("rollup-plugin-postcss");

// Function to get all CSS files in the src folder
const getCssFiles = () => {
  const srcDir = path.join(__dirname, "src");
  return fs
    .readdirSync(srcDir)
    .filter((file) => file.endsWith(".css"))
    .map((file) => path.join(srcDir, file));
};

// Generate Rollup configuration for each CSS file
module.exports = getCssFiles().map((file) => ({
  input: file, // Input file
  output: {
    file: path.join("dist", path.basename(file)), // Output file
    format: "es", // Output format (ES module)
  },
  plugins: [
    postcss({
      extract: true, // Extract CSS into separate files
      minimize: true, // Minify the CSS
    }),
  ],
}));

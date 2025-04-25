// scripts/sanitize-svg-filenames.mjs
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import kleur from "kleur";

// Enable __dirname support for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the directory where your .icons are stored.
const iconsDir = path.resolve(__dirname, "../.icons");

/**
 * Sanitize the file name by removing the trailing pattern "-(content)" if present.
 * The regex /-\([^)]*\)$/ matches a hyphen followed by any content inside parentheses at the end of the base name.
 *
 * For example, "ocean-protocol-(blah).svg" becomes "ocean-protocol.svg".
 *
 * @param {string} filename - The original filename (with extension).
 * @returns {string} - The sanitized filename.
 */
function sanitizeFileName(filename) {
  const extension = path.extname(filename); // e.g., ".svg"
  let baseName = path.basename(filename, extension); // e.g., "ocean-protocol-(blah)"

  // Only modify the file name if it contains either '(' or ')'
  if (baseName.includes("(") || baseName.includes(")")) {
    // Remove the trailing pattern "-(…)" only if it exists at the end of the file name
    baseName = baseName.replace(/-\([^)]*\)$/, "").trim();
  }

  return baseName + extension;
}

/**
 * Recursively process the folder and sanitize SVG file names.
 *
 * @param {string} dir - The directory to process.
 */
async function sanitizeFileNames(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Process subdirectories recursively.
      await sanitizeFileNames(fullPath);
    } else if (entry.isFile() && /\.svg$/i.test(entry.name)) {
      const newName = sanitizeFileName(entry.name);
      if (newName !== entry.name) {
        const newFullPath = path.join(dir, newName);
        console.log(kleur.yellow(`Renaming "${entry.name}" -> "${newName}"`));
        await fs.rename(fullPath, newFullPath);
      }
    }
  }
}

sanitizeFileNames(iconsDir)
  .then(() => {
    console.log(kleur.green("SVG file renaming complete."));
  })
  .catch((err) => {
    console.error(kleur.red("Error during renaming:"), err);
    process.exit(1);
  });

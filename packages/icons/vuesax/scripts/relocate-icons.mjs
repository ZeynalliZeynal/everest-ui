// scripts/relocate-vuesax.mjs
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import kleur from "kleur";

// Determine __dirname in an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the base directory where your categories are located.
// If your icons are inside a folder like "icons" in the project root,
// you can adjust the following line accordingly.
const baseDir = path.resolve(__dirname, "../icons");

async function relocateVuesaxFolders() {
  try {
    // Read all entries in the base directory (categories)
    const categories = await fs.readdir(baseDir, { withFileTypes: true });
    for (const category of categories) {
      if (category.isDirectory()) {
        const categoryPath = path.join(baseDir, category.name);
        const vuesaxPath = path.join(categoryPath, "vuesax");

        // Check if a "vuesax" subfolder exists
        try {
          const stat = await fs.stat(vuesaxPath);
          if (stat.isDirectory()) {
            console.log(kleur.blue(`Found vuesax folder in ${category.name}`));

            // Get all entries (expected to be variant directories) inside the vuesax folder
            const variants = await fs.readdir(vuesaxPath, {
              withFileTypes: true,
            });
            for (const variant of variants) {
              // Only move directories (in case there's any extra file, you can also add a condition for that)
              if (variant.isDirectory()) {
                const srcPath = path.join(vuesaxPath, variant.name);
                const destPath = path.join(categoryPath, variant.name);

                // Rename moves (or effectively moves) the folder from the 'vuesax' directory to the parent category folder.
                await fs.rename(srcPath, destPath);
                console.log(kleur.green(`Moved ${srcPath} -> ${destPath}`));
              }
              // If you expect files too, you can handle them similarly.
              else if (variant.isFile()) {
                const srcPath = path.join(vuesaxPath, variant.name);
                const destPath = path.join(categoryPath, variant.name);
                await fs.rename(srcPath, destPath);
                console.log(
                  kleur.green(`Moved file ${srcPath} -> ${destPath}`),
                );
              }
            }
            // After moving all contents, remove the now-empty vuesax folder.
            await fs.rmdir(vuesaxPath);
            console.log(kleur.dim(`Removed empty folder: ${vuesaxPath}`));
          }
        } catch (err) {
          if (err.code !== "ENOENT") {
            console.error(kleur.red(`Error accessing ${vuesaxPath}:`, err));
          }
          // If the 'vuesax' folder doesn't exist, nothing to do.
        }
      }
    }
  } catch (error) {
    console.error(kleur.red("Error processing folders:", error));
  }
}

relocateVuesaxFolders();

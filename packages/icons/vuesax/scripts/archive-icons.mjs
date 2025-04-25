// scripts/zip-..icons.mjs
import archiver from "archiver";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import kleur from "kleur";

// Determine __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the folder to zip and the output zip file path.
const iconsFolder = path.resolve(__dirname, "../..icons");
const zipFilePath = path.resolve(__dirname, "../..icons.zip");

function zipIconsFolder() {
  return new Promise((resolve, reject) => {
    const output = createWriteStream(zipFilePath);
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Maximum compression
    });

    output.on("close", () => {
      console.log(
        kleur.green(
          `Icons folder zipped successfully. Total bytes: ${archive.pointer()}`,
        ),
      );
      resolve();
    });

    archive.on("error", (err) => {
      console.error(kleur.red("Error while archiving:"), err);
      reject(err);
    });

    // Pipe archive data to the output file.
    archive.pipe(output);

    // Append files from the ..icons folder. Passing 'false' omits the folder name in the zip file.
    archive.directory(iconsFolder, false);

    // Finalize the archive (i.e., no more files will be appended)
    archive.finalize();
  });
}

zipIconsFolder().catch((err) => {
  console.error(kleur.red("Script failed with error:"), err);
  process.exit(1);
});

import { readdir } from "node:fs/promises";
import { readFile } from "node:fs";

async function readSpecificJSONFile(path, encoding) {
  return new Promise((resolve, reject) => {
    readFile(path, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export default async function handler(req, res) {
  try {
    const files = await readdir("blogdata");

    // Use map to create an array of promises
    const promises = files.map(async (item) => {
      const data = await readSpecificJSONFile(`blogdata/${item}`, "utf-8");
      return JSON.parse(data);
    });

    // Wait for all promises to resolve
    const contents_array = await Promise.all(promises);

    res.status(200).json(contents_array);
  } catch (err) {
    console.error("Error:", err);
    res.status(200).json({ error: "Internal server error" });
  }
}

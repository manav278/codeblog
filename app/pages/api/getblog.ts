// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "node:fs";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res
        .status(200)
        .json({ error: "Internal Servor Error in Fetching particular blogs" });
    } else {
      //   console.log(data); // data will be printed.
      //   console.log(typeof data); // string
      //   console.log(JSON.parse(data));
      res.status(200).json(JSON.parse(data));
    }
  });
}

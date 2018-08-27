import * as fs from "fs";
import {WriteStream, ReadStream} from "fs";
import * as archiver from "archiver";
import {LineStream} from "byline";
import {SSIMStream} from "./stream/SSIMStream";
import {StopsStream} from "./stream/StopsStream";

const [input, output] = process.argv.slice(2);
const inStream = input ? fs.createReadStream(input) : process.stdin;
const outStream = output ? fs.createWriteStream(output) : process.stdout;

main(inStream as ReadStream, outStream as WriteStream);

function main(input: ReadStream, output: WriteStream) {
  const lines = new LineStream();
  const archive = archiver("zip", { zlib: { level: 9 } });
  const ssim = new SSIMStream();
  const stops = new StopsStream();
  const trips = new SSIMStream();

  input.pipe(lines);
  lines.pipe(ssim);
  ssim.pipe(stops);
  ssim.pipe(trips);

  archive.append(stops, { name: "stops.txt" });
  archive.append(trips, { name: "trips.txt" });

  archive.pipe(output);
  archive.finalize();
}


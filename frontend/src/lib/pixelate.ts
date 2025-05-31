// pixelate.ts
import sharp from "sharp";
import fs from "fs";

export async function pixelateImageToBase64(inputPath: string, outputSize: number = 10): Promise<string> {
  const inputBuffer = fs.readFileSync(inputPath);

  // Step 1: shrink down to low-res (outputSize px width)
  // Step 2: scale back up to full size to get pixelation
  const pixelated = await sharp(inputBuffer)
    .resize(outputSize, outputSize, {
      fit: "inside",
    })
    .resize(300, 300, {
      // final image size
      kernel: sharp.kernel.nearest,
    })
    .toFormat("jpeg")
    .toBuffer();

  return `data:image/jpeg;base64,${pixelated.toString("base64")}`;
}

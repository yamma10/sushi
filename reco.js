import { createWorker } from "tesseract.js";

const worker = await createWorker('eng');

const recognizeStr = async () => {
  const { data: { text } } = await worker.recognize('./pic/clipped.png');
  await worker.terminate();
  return text;
}

export default recognizeStr;

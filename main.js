import puppeteer from "puppeteer";
import { createWorker } from "tesseract.js";
const worker = await createWorker('eng');

const main = async() => {
  console.log("start");
  const browser = await puppeteer.launch({ headless: false});
  

  const page = await browser.newPage();
  await page.evaluate(() => {
    const element = document.documentElement.webkitRequestFullscreen();
  });
  {
    const targetPage = page;
    await targetPage.setViewport({
        width: 932,
        height: 829
    })
  }



  await page.goto("https://sushida.net/play.html?soundless");

  console.log("start wait");
  //6秒待つ
  await page.waitForTimeout(10000);

  console.log("end wait");
  //クリック
  await page.mouse.click(448,370);
  await page.waitForTimeout(2000);
  //クリック
  await page.mouse.click(448,370);
  await page.waitForTimeout(2000);

  //開始のためのエンター
  await page.keyboard.down('Enter');
  await page.keyboard.up('Enter');
  await page.waitForTimeout(5000);

  // クリッピング領域の左上隅の座標を指定する
  const clip = { x: 362, y: 355, width: 200, height: 28 };
  const start = Date.now();
  const end = start + 1000 * 60 * 10;


  while(Date.now() < end){
    console.log("\n");
    console.log("screenshot");
    //指定した領域でスクリーンショットを撮る
    await page.screenshot({ path: './pic/clipped.png', clip: clip });
    console.log("start OCR");

    
    const text = await recognizeStr();
    if (text == "" ) {
      break;
    }
    //textを一文字ずつ切り出してキータイプする

    console.log("key type");
    for (const char of text) {
      await page.keyboard.down(char);
      await page.keyboard.up(char);
    }
    //0.6秒待つ
    await page.waitForTimeout(600);
  }

  await page.waitForTimeout(4000);
  await page.screenshot({ path: './pic/result.png'});

  await worker.terminate();
  await browser.close();
  return;
}

const recognizeStr = async () => {
  
  const { data: { text } } = await worker.recognize('./pic/clipped.png');
  console.log(text);
  
  return text;
}


main();
  
import puppeteer from "puppeteer";

const main = async() => {
  console.log("start");
  const browser = await puppeteer.launch({ headless: true});
  

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
  //スタート
  console.log("click");
  await page.mouse.click(448,370);
  
  await page.waitForTimeout(2000);

  console.log("click");
  //おすすめコース選択
  await page.mouse.click(448,370);

  await page.waitForTimeout(2000);
  //開始のためのエンター
  await page.keyboard.down('Enter');
  await page.keyboard.up('Enter');
  await page.waitForTimeout(1000);
  

  //スクリーンショット
  await page.screenshot({ path: "./pic/screenshot.png" });


  await browser.close();
  return;
}

main();
  
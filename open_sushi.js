const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1365,
            height: 923
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('chrome://new-tab-page/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Google で検索または URL を入力)'),
            targetPage.locator('ntp-app >>>> #realbox >>>> #input'),
            targetPage.locator(':scope >>> #realbox >>>> :scope >>> #input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 428,
                y: 29,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Google で検索または URL を入力)'),
            targetPage.locator('ntp-app >>>> #realbox >>>> #input'),
            targetPage.locator(':scope >>> #realbox >>>> :scope >>> #input')
        ])
            .setTimeout(timeout)
            .fill('sus');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('i');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('d');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('i');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('a');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('d');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('a');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://www.google.com/search?q=susida&oq=susida&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg70gEJMzkyN2owajE1qAIAsAIA&sourceid=chrome&ie=UTF-8');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria( 寿司打 寿司打 https://sushida.net) >>>> ::-p-aria(寿司打)'),
            targetPage.locator('#rso > div:nth-of-type(1) > div > div > div h3'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rso\\"]/div[1]/div/div/div/div/div/div/div[1]/div/span/a/h3)'),
            targetPage.locator(':scope >>> #rso > div:nth-of-type(1) > div > div > div h3')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 32,
                y: 12.0625,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('a:nth-of-type(2) > img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"main\\"]/div[3]/a[2]/img)'),
            targetPage.locator(':scope >>> a:nth-of-type(2) > img')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 71.5,
                y: 26,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\#canvas'),
            targetPage.locator('::-p-xpath(//*[@id=\\"#canvas\\"])'),
            targetPage.locator(':scope >>> #\\#canvas')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 217,
                y: 250,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\#canvas'),
            targetPage.locator('::-p-xpath(//*[@id=\\"#canvas\\"])'),
            targetPage.locator(':scope >>> #\\#canvas')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 249,
                y: 245,
              },
            });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});

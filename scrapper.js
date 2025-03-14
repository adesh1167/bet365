const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    // Navigate to Bet365
    await page.goto("https://www.bet365.com", { waitUntil: "networkidle2" });

    // Wait for the element to appear in the DOM
    await page.waitForSelector(".wc-PageView_Main.wc-ResponsiveHomePage_PageViewMain", { timeout: 10000 });

    // Extract inner HTML of the element
    const content = await page.evaluate(() => {
        const element = document.querySelector(".wc-PageView_Main.wc-ResponsiveHomePage_PageViewMain");
        return element ? element.innerHTML : "Element not found";
    });

    console.log("Extracted HTML:", content);

    await browser.close();
})();

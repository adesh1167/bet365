const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Set to true for silent execution
    const page = await browser.newPage();

    // Set User-Agent to mimic a real browser
    await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    // Navigate to Bet365
    await page.goto("https://www.bet365.com", { waitUntil: "networkidle2" });

    // Wait for cookies to be set
    // await page.waitForTimeout(5000);
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Extract cookies
    const cookies = await page.cookies();
    let cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join("; ");

    console.log("Extracted Cookies:", cookieString);

    // Make API request with extracted cookies
    const apiUrl =
        "https://www.bet365.com/pullpodapi/gethomepagepods?lid=1&zid=3&pd=%23HO%23COL1%23&cid=141&cstid=2&tcstid=2&crid=54&cgid=1&ctid=141";

    const response = await page.evaluate(async (apiUrl, cookieString) => {
        const res = await fetch(apiUrl, {
            headers: {
                "User-Agent": navigator.userAgent,
                "Referer": "https://www.bet365.com/",
                "Cookie": cookieString,
            },
        });
        return res.text();
    }, apiUrl, cookieString);

    console.log("API Response:", response);

    await browser.close();
})();

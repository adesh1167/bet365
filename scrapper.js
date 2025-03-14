const express = require("express");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Ensure the screenshots directory exists
const screenshotsDir = path.join(__dirname, "screenshots");
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
}

// Scrape page content dynamically
app.get("/scrape", async (req, res) => {
    const { url, selector } = req.query;

    if (!url || !selector) {
        return res.status(400).json({ success: false, error: "Missing 'url' or 'selector' parameter" });
    }

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

        await page.goto(url, { waitUntil: "networkidle2" });

        await page.waitForSelector(selector, { timeout: 30000 });

        const content = await page.evaluate((sel) => {
            const element = document.querySelector(sel);
            return element ? element.innerHTML : "Element not found";
        }, selector);

        await browser.close();

        res.json({ success: true, data: content });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Capture a screenshot dynamically
app.get("/screenshot", async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ success: false, error: "Missing 'url' parameter" });
    }

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

        await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

        const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
        await page.screenshot({ path: screenshotPath });

        await browser.close();

        console.log(`✅ Screenshot saved: ${screenshotPath}`);

        // Serve the screenshot file
        res.sendFile(screenshotPath);
    } catch (error) {
        console.error("❌ Screenshot Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.get("/api", async (req, res) => {

    const { url, apiUrl } = req.query;

    if (!url) {
        return res.status(400).json({ success: false, error: "Missing 'url' parameter" });
    }

    if (!apiUrl) {
        return res.status(400).json({ success: false, error: "Missing 'apiUrl' parameter" });
    }

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

        const page = await browser.newPage();
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        );

        await page.goto(url, { waitUntil: "networkidle2" });

        // Wait for cookies to be set
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Extract cookies
        const cookies = await page.cookies();
        let cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join("; ");

        console.log("Extracted Cookies:", cookieString);

        // Make API request with extracted cookies

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

        res.json({ success: true, cookies: cookieString, apiResponse: response });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

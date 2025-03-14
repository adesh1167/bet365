const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure the screenshots directory exists
const screenshotsDir = path.join(__dirname, "screenshots");
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
}

// Scrape Bet365 page content
app.get("/", async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

        await page.goto("https://www.bet365.com", { waitUntil: "networkidle2" });

        await page.waitForSelector("body", { timeout: 30000 });

        const content = await page.evaluate(() => {
            const element = document.querySelector("body");
            return element ? element.innerHTML : "Element not found";
        });

        await browser.close();

        res.json({ success: true, data: content });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Capture a screenshot
app.get("/screenshot", async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

        await page.goto("https://www.bet365.com", { waitUntil: "networkidle2" });

        const screenshotPath = path.join(screenshotsDir, "screenshot.png");
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

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

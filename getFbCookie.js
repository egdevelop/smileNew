const puppeteer = require("puppeteer-extra");
const fs = require("fs").promises;

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

puppeteer
  .launch({ args: ["--no-sandbox"], headless: true })
  .then(async function (browser) {
    const page = await browser.newPage();
    await page.goto(
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=447717802508150&kid_directed_site=0&app_id=447717802508150&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.10%2Fdialog%2Foauth%3Fclient_id%3D447717802508150%26state%3Da35c0fd938b8ab20d1a996bdb3c36621%26response_type%3Dcode%26sdk%3Dphp-sdk-5.7.0%26redirect_uri%3Dhttps%253A%252F%252Fwww.smile.one%252Fcustomer%252Ffacebook%252Floginv%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddce938ce-5b2f-4252-a23f-bce399f5b209%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.smile.one%2Fcustomer%2Ffacebook%2Floginv%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Da35c0fd938b8ab20d1a996bdb3c36621%23_%3D_&display=page&locale=en_GB&pl_dbl=0",
      { waitUntil: "networkidle2" }
    );

    await page.type("#email", "insignia.id.business@gmail.com");
    await page.type("#pass", "Insignia12321");
    // await page.type("#email", "gtfhising9@gmail.com");
    // await page.type("#pass", "tasik123");
    await page.click("#loginbutton");
    await page.waitForNavigation();
    await page.goto("https://facebook.com/", { waitUntil: "networkidle2" });
    await page.cookies().then(async (freshCookies) => {
      await fs.writeFile("cookies.js", JSON.stringify(freshCookies, null, 2));
    });
    await browser.close();
  });

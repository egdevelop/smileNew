const fs = require("fs").promises;

module.exports = {
  mlTp: async (browser, a, b, c) => {
    const page = await browser.newPage();
    const cookies = await fs
      .readFile("cookies.js")
      .then((facebookCookies) => JSON.parse(facebookCookies))
      .catch((error) => {
        console.error(`Unable to load Facebook cookies: ${error}`);
        return {};
      });
    await page.setCookie(...cookies);
    await page.goto(
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=447717802508150&kid_directed_site=0&app_id=447717802508150&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.10%2Fdialog%2Foauth%3Fclient_id%3D447717802508150%26state%3Da35c0fd938b8ab20d1a996bdb3c36621%26response_type%3Dcode%26sdk%3Dphp-sdk-5.7.0%26redirect_uri%3Dhttps%253A%252F%252Fwww.smile.one%252Fcustomer%252Ffacebook%252Floginv%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddce938ce-5b2f-4252-a23f-bce399f5b209%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.smile.one%2Fcustomer%2Ffacebook%2Floginv%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Da35c0fd938b8ab20d1a996bdb3c36621%23_%3D_&display=page&locale=en_GB&pl_dbl=0",
      { waitUntil: "networkidle2" }
    );
    var data = {
      page: page,
      hasil: "",
    };
    await page.goto("https://www.smile.one/merchant/mobilelegends", {
      waitUntil: "networkidle2",
    });
    await page.evaluate(() => {
      const userid = document.getElementById("user_id");
      userid.value = "";
    });
    await page.type("#user_id", b);
    await page.evaluate(() => {
      const zoneid = document.getElementById("zone_id");
      zoneid.value = "";
    });
    await page.type("#zone_id", c);
    if (a == "ML86") {
      await page.evaluate(() => {
        document.querySelector("#\\32 974").click();
      });
    } else if (a == "ML172") {
      await page.evaluate(() => {
        document.querySelector("#\\32 975").click();
      });
    } else if (a == "ML257") {
      await page.evaluate(() => {
        document.querySelector("#\\32 976").click();
      });
    } else if (a == "ML706") {
      await page.evaluate(() => {
        document.querySelector("#\\32 977").click();
      });
    } else if (a == "ML2195") {
      await page.evaluate(() => {
        document.querySelector("#\\32 978").click();
      });
    } else if (a == "ML3688") {
      await page.evaluate(() => {
        document.querySelector("#\\32 979").click();
      });
    } else if (a == "ML5532") {
      await page.evaluate(() => {
        document.querySelector("#\\32 980").click();
      });
    } else if (a == "ML9288") {
      await page.evaluate(() => {
        document.querySelector("#\\32 981").click();
      });
    } else if (a == "MLSTAR") {
      await page.evaluate(() => {
        document.querySelector("#\\32 982").click();
      });
    } else if (a == "MLTWILIGHT") {
      await page.evaluate(() => {
        document.querySelector("#\\32 983").click();
      });
    } else if (a == "MLSTARPLUS") {
      await page.evaluate(() => {
        document.querySelector("#\\32 984").click();
      });
    } else {
      res.status(200).json({
        status: "NOT NOW BROTHER",
      });
      await page.close();
    }
    await page.evaluate(() => {
      document
        .querySelector(
          "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box3 > div > div > div.payment-methods-container > div.sectionNav-list > div.sectionNav-cartao.smilecoin.smilecoin"
        )
        .click();
    });
    await page.evaluate(() => {
      document
        .querySelector(
          "body > div.main-container > div.mainContainer > div > div.mobile-purchasebar > div.btn-area > div"
        )
        .click();
    });
    try {
      await page.waitForNavigation({ timeout: 10000 });
      await page.waitForSelector(
        "body > div.main-container > div > div > div > div > div.btnsuccess > span",
        { timeout: 2000 }
      );
      let element = await page.$(
        "body > div.main-container > div > div > div > div > div.btnsuccess > span"
      );
      let value = await page.evaluate((el) => el.textContent, element);
      await page.screenshot({ path: "last.png" });
      console.log({
        paket: a,
        status: value,
      });
      data.hasil = value;
    } catch (err) {
      console.log(err);
      await page.screenshot({ path: "last2.png" });
      data.hasil = "Terjadi Kesalahan";
      const url = "https://zatstore.id/server/orderError.php";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: b,
          zoneid: c,
          paket: a,
        }),
      });
      console.log(response);
    }
    return data;
  },
};

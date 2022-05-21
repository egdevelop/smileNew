const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs").promises;
const puppeteer = require("puppeteer-extra");
const FACEBOOK_URL = "https://facebook.com";

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

app.use(
  cors({
    origin: ["http://legacyv2.egdev.co", "http://legacytopup.com"],
  })
);

const getDefaultBrowser = async (headless) => {
  const browser = await puppeteer.launch({
    headless,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const context = browser.defaultBrowserContext();
  context.overridePermissions(FACEBOOK_URL, []);
  return browser;
};

(async () => {
  const browser = await getDefaultBrowser(true);
  const mlTp = async (browser, a, b, c) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 500, height: 500 });
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
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
      { waitUntil: "load" }
    );
    var data = {
      page: page,
      hasil: "",
    };
    await page.goto("https://www.smile.one/merchant/mobilelegends", {
      waitUntil: "networkidle0",
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
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(1)"
          )
          .click();
      });
    } else if (a == "ML172") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(2)"
          )
          .click();
      });
    } else if (a == "ML257") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(3)"
          )
          .click();
      });
    } else if (a == "ML706") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(4)"
          )
          .click();
      });
    } else if (a == "ML2195") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(5)"
          )
          .click();
      });
    } else if (a == "ML3688") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(6)"
          )
          .click();
      });
    } else if (a == "ML5532") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(7)"
          )
          .click();
      });
    } else if (a == "ML9288") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(8)"
          )
          .click();
      });
    } else if (a == "MLSTAR") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(9)"
          )
          .click();
      });
    } else if (a == "MLTWILIGHT") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(10)"
          )
          .click();
      });
    } else if (a == "MLSTARPLUS") {
      await page.evaluate(() => {
        document
          .querySelector(
            "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(11)"
          )
          .click();
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
      console.log({
        paket: a,
        status: value,
      });
      data.hasil = value;
    } catch (err) {
      console.log(err);
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
    await page.close();
    return data;
  };
  app.get("/mltp/:user/:zone/:kode", async (req, res) => {
    switch (req.params.kode) {
      case "ML86":
        mlTp(browser, "ML86", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML172":
        mlTp(browser, "ML172", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML257":
        mlTp(browser, "ML257", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML706":
        mlTp(browser, "ML706", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML2195":
        mlTp(browser, "ML2195", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML3688":
        mlTp(browser, "ML3688", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML5532":
        mlTp(browser, "ML5532", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML9288":
        mlTp(browser, "ML9288", req.params.user, req.params.zone).then(
          (result) => {
            res.status(200).json({
              pesan: result.hasil,
            });
          }
        );
        break;
      case "ML344":
        mlTp(browser, "ML172", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML172", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML429":
        mlTp(browser, "ML172", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML257", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML514":
        mlTp(browser, "ML257", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML257", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML878":
        mlTp(browser, "ML172", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML706", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML963":
        mlTp(browser, "ML257", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML706", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML1412":
        mlTp(browser, "ML706", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML706", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML4394":
        mlTp(browser, "ML706", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML3688", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML6238":
        mlTp(browser, "ML706", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML5532", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML7376":
        mlTp(browser, "ML3688", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML3688", req.params.user, req.params.zone).then(
              (result) => {
                res.status(200).json({
                  pesan: result.hasil,
                });
              }
            );
          }
        );
        break;
      case "ML600":
        mlTp(browser, "ML257", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML257", req.params.user, req.params.zone).then(
              (result) => {
                mlTp(browser, "ML86", req.params.user, req.params.zone).then(
                  (result) => {
                    res.status(200).json({
                      pesan: result.hasil,
                    });
                  }
                );
              }
            );
          }
        );
        break;
      case "ML1050":
        mlTp(browser, "ML706", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML172", req.params.user, req.params.zone).then(
              (result) => {
                mlTp(browser, "ML172", req.params.user, req.params.zone).then(
                  (result) => {
                    res.status(200).json({
                      pesan: result.hasil,
                    });
                  }
                );
              }
            );
          }
        );
        break;
      case "ML1220":
        mlTp(browser, "ML706", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML257", req.params.user, req.params.zone).then(
              (result) => {
                mlTp(browser, "ML257", req.params.user, req.params.zone).then(
                  (result) => {
                    res.status(200).json({
                      pesan: result.hasil,
                    });
                  }
                );
              }
            );
          }
        );
        break;
      case "ML3073":
        mlTp(browser, "ML2195", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML706", req.params.user, req.params.zone).then(
              (result) => {
                mlTp(browser, "ML172", req.params.user, req.params.zone).then(
                  (result) => {
                    res.status(200).json({
                      pesan: result.hasil,
                    });
                  }
                );
              }
            );
          }
        );
        break;
      case "ML4032":
        mlTp(browser, "ML3688", req.params.user, req.params.zone).then(
          (result) => {
            mlTp(browser, "ML172", req.params.user, req.params.zone).then(
              (result) => {
                mlTp(browser, "ML172", req.params.user, req.params.zone).then(
                  (result) => {
                    res.status(200).json({
                      pesan: result.hasil,
                    });
                  }
                );
              }
            );
          }
        );
        break;
      default:
        res.status(400).json({
          pesan: "Kode tidak ditemukan",
        });
        break;
    }
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/trueid/ml/:user/:zone", async (req, res) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 500, height: 500 });
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
    await page.goto("https://www.smile.one/merchant/mobilelegends");
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      const userid = document.getElementById("user_id");
      userid.value = "";
      const zoneid = document.getElementById("zone_id");
      zoneid.value = "";
    });
    await page.waitForTimeout(1000);
    await page.type("#user_id", req.params.user);
    await page.type("#zone_id", req.params.zone);
    await page.waitForTimeout(1000);
    await page.click(
      "body > div.main-container > div.mainContainer > div > div.prdctCol1.productBRLang > div.product-buy-area > div.box2 > div > div.product-list-container > ul > li:nth-child(1)"
    );
    await page.waitForTimeout(1000);
    let element = await page.$("#mnickname");
    let value = await page.evaluate((el) => el.textContent, element);
    await page.close();
    if (value != "") {
      res.status(200).json({
        nickname: value,
      });
    } else {
      res.status(200).json({
        err_msg: "Tidak ada",
      });
    }
  });

  app.get("/saldo", async (req, res) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 500, height: 500 });
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
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
      { waitUntil: "load" }
    );
    await page.goto("https://www.smile.one/customer/order");
    try {
      await page.waitForSelector(
        "body > div.main-container > div > div > div > div > div > div.personal-center > div.user-balance > div.balance > span:nth-child(3)",
        { timeout: 2000 }
      );
      let element = await page.$(
        "body > div.main-container > div > div > div > div > div > div.personal-center > div.user-balance > div.balance > span:nth-child(3)"
      );
      await page.screenshot({ path: "ss.png" });
      let value = await page.evaluate((el) => el.textContent, element);
      console.log(value);
      res.json({
        status: value,
      });
    } catch (err) {
      await page.screenshot({ path: "ss.png" });
      res.json({
        status: "Order Tidak ada",
      });
    }
    page.close();
  });
})();

app.listen(7000, () => console.log("SMILE APP listening on port 3000!"));

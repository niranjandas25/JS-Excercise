const phoenix = require('./util');
const puppeteer = require('puppeteer');

puppeteer.launch({headless: false, args: ["--disable-notifications", "--start-maximized", "--start-fullscreen"]}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://hrz-stage-command-center.pagerinc.com/');
  const title = await page.title();
  console.log(title);
  await page.type(".uk-form input[autocomplete='username']", "qa+1@pager.com");
  await page.type(".uk-form input[autocomplete='current-password']", "12345678");
  const signinbtn = await page.$(".uk-form button.uk-button");
  signinbtn.click();
  try{
  await page.waitForSelector("#app .uk-navbar svg[data-icon='power-off']");
  } catch (error) {
    console.log("could not type text:-  in the selector:");
  };
  //await page.waitFor(2000);
  await phoenix.clickFromElements(page, '#app div.width-content ul.uk-list > li.uk-panel', 'Pier Petittxsit');
  await phoenix.clickFromElements(page, '.patient-header button.uk-button', 'Join');
  //await page.waitFor(2000);
  await phoenix.click(page, '#members-panel');
  //await page.waitFor(2000);
  await page.waitForSelector('.panel-selector .member >div');
  var member_rows = await page.$$(".panel-selector .member >div");
  console.log(member_rows.length);
  for (let i = 0; i < member_rows.length; i++) {
    var tweet = await (await member_rows[i].getProperty('innerText')).jsonValue();
    console.log(tweet);
  }
  await phoenix.clickFromElements(page, '.patient-header button.uk-button', 'Leave');
  //await page.waitFor(2000);
  console.log("Before logout");
  await phoenix.click(page, "#app .uk-navbar svg[data-icon='power-off']");
  //await page.waitFor(2000);
  await browser.close();
  console.log("After logout");
  
});

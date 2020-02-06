//import * as utilobj from '../lib/util';
const phoenix = require('../lib/util');
const puppeteer = require('puppeteer');
puppeteer.launch({headless: false, args: ["--disable-notifications"]}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://hrz-stage-command-center.pagerinc.com/');
  const title = await page.title();
  console.log(title);
  await page.type(".uk-form input[autocomplete='username']", "qa+1@pager.com");
  await page.type(".uk-form input[autocomplete='current-password']", "12345678");
  //await page.click(".uk-form button.uk-button");
  const signinbtn = await page.$(".uk-form button.uk-button");
  signinbtn.click();
  try{
  await page.waitForSelector("#app .uk-navbar svg[data-icon='power-off']");
  } catch (error) {
    console.log("could not type text:-  in the selector:");
  };
  /*const text = 'CHATS'; 
  const chatcss = '#app div.width-content .uk-button-vertical-group span';
  try {
    await page.waitForFunction((chatcss, text) => document.querySelector(chatcss).innerHTML.includes(text), {}, chatcss, text);
    //await page.waitForSelector(chatcss);
    } catch(e) {
    console.log("The text was not found on the page");
  }
  const patients = await page.$$("#app div.width-content ul.uk-list > li.uk-panel");
  console.log(patients.length);
  for (let i = 0; i < patients.length; i++) {
    const tweet = await (await patients[i].getProperty('innerText')).jsonValue();
    console.log(tweet);
  }*/
  const patient = 'Towles Cluneyxsit';
  await phoenix.waitForText(
    page,
    '.width-content section.uk-flex .uk-flex-item-1 .uk-comment-title',
    patient
  );
  await phoenix.clickByText(page, patient);
  await phoenix.click(page, '.patient-header button.uk-button');
  await page.waitForSelector('.message-announcement');
  
  await page.click("#app .uk-navbar svg[data-icon='power-off']");
  await browser.close();
});

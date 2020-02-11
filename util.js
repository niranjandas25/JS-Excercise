module.exports = {
    click: async (page, selector) => {
      try {
        await page.waitForSelector(selector);
        await page.click(selector);
      } catch (error) {
        throw new Error(`could not click on selector: ${selector}.`);
      }
    },
  
    typeText: async (page, text, selector) => {
      try {
        await page.waitForSelector(selector);
        await page.type(selector, text);
      } catch (error) {
        throw new Error(
          `could not type text: ${text} -  in the selector: ${selector}`
        );
      }
    },
  
    loadUrl: async (page, url) => {
      await page.goto(url, { waitUntil: 'networkidle0' });
    },
  
    getText: async (page, selector) => {
      try {
        await page.waitForSelector(selector);
        return page.$eval(selector, e => e.innerHTML);
      } catch (error) {
        throw new Error(`Cannot get text from selector: ${selector}`);
      }
    },
  
    getCount: async (page, selector) => {
      try {
        await page.waitForSelector(selector);
        return page.$$eval(selector, items => items.length);
      } catch (error) {
        throw new Error(`Cannot get total count of elements: ${selector}`);
      }
    },
  
    waitForText: async (page, selector, text) => {
      try {
        await page.waitForSelector(selector);
        await page.waitForFunction(
          (selector, text) =>
            document.querySelector(selector).innerHTML.includes(text),
          {},
          selector,
          text
        );
      } catch (error) {
        throw new Error(`${text} was not found for selector: ${selector}`);
      }
    },
  
    pressKey: async (page, key) => {
      try {
        await page.keyboard.press(key);
      } catch (error) {
        throw new Error(`could not press key: ${key} on the keyboard`);
      }
    },
  
    shouldExist: async (page, selector) => {
      try {
        await page.waitForSelector(selector, { visible: true });
      } catch (error) {
        throw new Error(`Selector ${selector} does not exist.`);
      }
    },
  
    shouldNotExist: async (page, selector) => {
      try {
        await page.waitFor(() => !document.querySelector(selector));
      } catch (error) {
        throw new Error(`Selector ${selector} is visible`);
      }
    },
  
    waitForXPathAndClick: async (page, xpath) => {
      await page.waitForXPath(xpath);
      const elements = await this.page.$x(xpath);
      if (elements.length > 1) {
        console.warn('waitForXPathAndClick returned more than one result');
      }
      await elements[0].click();
    },
  
    isElementVisible: async (page, selector) => {
      let visible = true;
      await page
        .waitForSelector(selector, { visible: true, timeout: 3000 })
        .catch(() => {
          visible = false;
        });
      return visible;
    },
  
    isXPathVisible: async (page, selector) => {
      let visible = true;
      await page
        .waitForXPath(selector, { visible: true, timeout: 3000 })
        .catch(() => {
          visible = false;
        });
      return visible;
    },
  
    //   getText: linkText => {
    //     linkText = linkText.replace(/\r\n|\r/g, '\n');
    //     linkText = linkText.replace(/\ +/g, ' ');
  
    //     // Replace &nbsp; with a space
    //     const nbspPattern = new RegExp(String.fromCharCode(160), 'g');
    //     return linkText.replace(nbspPattern, ' ');
    //   },
  
    findByLinkText: async (page, linkString) => {
      const links = await page.$$('a');
      for (let i = 0; i < links.length; i++) {
        let valueHandle = await links[i].getProperty('innerText');
        let linkText = await valueHandle.jsonValue();
        linkText = linkText.replace(/\r\n|\r/g, '\n');
        linkText = linkText.replace(/\ +/g, ' ');
  
        // Replace &nbsp; with a space
        const nbspPattern = new RegExp(String.fromCharCode(160), 'g');
        const text = linkText.replace(nbspPattern, ' ');
  
        if (linkString == text) {
          return links[i];
        }
      }
      return null;
    },
  
    //   escapeXpathString: text => {
    //     const splitedQuotes = text.replace(/'/g, `', "'", '`);
    //     return `concat('${splitedQuotes}', '')`;
    //   },
  
    clickByText: async (page, text) => {
      const splitedQuotes = text.replace(/'/g, `', "'", '`);
      const escapedText = `concat('${splitedQuotes}', '')`;
  
      const xpath = `//*[text()[contains(., ${escapedText})]]`;
      const elements = await page.$x(xpath);
  
      if (elements.length > 0) {
        await elements[0].click();
      } else {
        throw new Error(`No element was found containing text: ${text}`);
      }
    },

    clickFromElements: async (page, selector, element_name) => {
      await page.waitForSelector(selector);
      const elements = await page.$$(selector);
      for (let i = 0; i < elements.length; i++) {
        var tweet = await (await elements[i].getProperty('innerText')).jsonValue();
        console.log(tweet);
        if (tweet.includes(element_name)){
            console.log(tweet);
            var j=i+1;
            const new_selector = selector +":nth-child("+j+")";
            await page.click(new_selector);
            break;
        }  
      }
    },

  };

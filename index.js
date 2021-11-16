const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://g1.globo.com/ultimas-noticias/');


  await page.evaluate(()=> {
    // Acess the page and extract the DOM elements

    // Take the elements and transform in javascript objects 
  })  




  await browser.close();
})();
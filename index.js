const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://g1.globo.com/ultimas-noticias/');


  await page.evaluate(()=> {
    // Acess the page and extract the DOM elements
    const elementsList = document.querySelectorAll('feed-post-body > div > div > a')
    // Transform the DOM elements in a array

    const titleArray = [...elementsList]
     const list = titleArray.map()
    console.log(list)
    // Take the array and transform in javascript objects 

    // Take the object out of the function
  })  




  //await browser.close();
})();
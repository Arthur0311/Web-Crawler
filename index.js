const { error } = require('console');
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://stardewvalleywiki.com/Villagers');


  const pageContent = await page.evaluate(()=> {
    
    // Acess the page and extract the DOM elements
    let villagers = []

    const lista = $('li.gallerybox').each((i, e) => {
        const title = $(e).find('.gallerytext > p > a').text();
        const avatar = "https://stardewvalleywiki.com" + $(e).find('.thumb > div > a > img').attr("src");
        const link =  "https://stardewvalleywiki.com" + $(e).find('.gallerytext > p > a').attr("href");

        // Take the array and transform in javascript objects 
        const data = {title,avatar,link}

        // Transform the DOM elements in a array
        villagers.push(data)
    })

    return villagers

  })  

// Create and write the objects in a json file
  fs.writeFile('teste.json', JSON.stringify(pageContent, null, 2), err =>{
      if(err) throw new Error('Something went wrong!')
      console.log('Tudo certo!')
  })


  await browser.close();
})();
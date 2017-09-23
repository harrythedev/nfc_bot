// import request from 'request';
// import cheerio from 'cheerio';
// import URL from 'url-parse';
const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

const url = 'http://nocr.net/index.php?mid=koreasy';
console.log('visiting page... ', url);
request(url, (err, res, body) => {
  if(err) {
    console.log(`Error: ${err}`);
  }
  // check status code (200 is OK)
  console.log(`Status code: ${res.statusCode}`);
  if(res.statusCode === 200) {
    const $ = cheerio.load(body);
    const bible = [];
    $('.categoryList').children('ul').children('li').map((i, el) => {
      // push to bible array excecpt first and second element
      if (i !== 0 && i !== 1) {
        const obj = {
          [el.children[0].children[0].data]: el.children[0].attribs.href
        }
        console.log(obj);
        bible.push(obj);
      }
    });
    // bible.map(each => console.log(each.href));
    // const newBible = 
    // arr.map(each => {
    //   request(each.href, (err, res, body) => {
    //     if (err) {
    //       console.log(`Error: ${err}`);
    //     }
    //     const $ = cheerio.load(body);
    //     console.log($('table>tbody').children());
    //   })
    // })
  }
})
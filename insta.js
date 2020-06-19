const puppeteer = require('puppeteer');
let cFile=process.argv[2];

let num=process.argv[3];
let fs=require("fs");
let comments=["Legend","Goat","Best","Smartyyy","Champions","On Fire","Nice Shampoo","Fam","Cute","Legend","King","Nice hair","Sexy","Goat","Strong","Classsy"];

(async () => {
    try{

    
    let data = await fs.promises.readFile(cFile);
    let { username,password} = JSON.parse(data);
  const browser = await puppeteer.launch({
    executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',

    headless: false,
    slowMo: 10, 
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"]
  });
  let tabs = await browser.pages();
  let tab = tabs[0];
 
  await tab.setDefaultNavigationTimeout(0); 
  await tab.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
  await tab.waitForSelector("._2hvTZ.pexuQ.zyHYP");
     await tab.type("._2hvTZ.pexuQ.zyHYP", username, { delay: 100 });
     await tab.type("input[type=password]", password, { delay: 100 });
  await Promise.all([
    tab.waitForNavigation({ waitUntil: "networkidle2" }), 
    tab.click('.sqdOP.L3NKy.y3zKF'), 
  ]);
  let search = await tab.$(".eyXLr.wUAXj ");
  await search.click({delay:10});
  await tab.waitForSelector(".XTCLo.x3qfX");
  await tab.type(".XTCLo.x3qfX", "cristiano", { delay: 190 });
  
  

await tab.waitForSelector(".drKGC", {visible: true})


  await tab.goto("https://www.instagram.com/cristiano", { waitUntil: "networkidle2" });
 
  let query = await tab.$$(".ySN3v div div .Nnq7C.weEfm .v1Nh3.kIKUG._bz0w");
  console.log(query.length);
  
let idx=0;
do{
    let p1=await query[idx].$("[decoding=auto]")
    await p1.click();
    
    
   
    await tab.waitForSelector('.s2MYR article', {visible: true})
    console.log((idx+1)+"post liked.");
    
    await tab.waitForSelector('.fr66n', {visible: true})
    
    let like1=await tab.$(".fr66n");
    await like1.click({delay:500});
    
    await tab.waitForSelector(".sH9wk._JgwE .RxpZH .X7cDz .Ypffh ",{visible:true});
    await tab.type(".sH9wk._JgwE .RxpZH .X7cDz .Ypffh ", comments[idx], { delay: 190 });
    await tab.waitForSelector(".RxpZH .X7cDz .sqdOP.yWX7d.y3zKF",{visible:true});
    let postbtn=await tab.$(".RxpZH .X7cDz .sqdOP.yWX7d.y3zKF");
    postbtn.click({delay:190});
    console.log(comments[idx]+"Comment Posted");
    await tab.waitForSelector(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b",{visible:true});
    let close1=await tab.$(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b");
    await close1.click({delay:190});
    idx++;
}while(idx<num);

await tab.close();
}
catch(err){
    console.log(err);
}

  //await browser.close();
})();
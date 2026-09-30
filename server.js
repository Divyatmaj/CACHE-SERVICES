const fs = require('fs/promises');
const path = require('path');
const express = require('express');
let cache ={};


const PATH_TO_DB = path.join(__dirname,"db.json");
const PORT = 3000;


//FUNCTIONS

async function readData(){
    let data = await fs.readFile(PATH_TO_DB,'utf-8');
    return JSON.parse(data);
}


//--Adding a artificial delay to simulate reL life delays
async function delayReadData(){
    await new Promise((resolve,reject)=>{
        setTimeout(resolve,1500)
    })
    return await readData();
}



//ROUTES
const app = express();

app.get('/products', async(req, res) => {
    let key = req.url;
    let value = cache[key]
    try{
        if(value){
            return res.json(value);
        }
        let productData = await delayReadData();
        cache[key] = productData;
        res.json(productData);
    }catch(err){
        console.log(err);
    }
});   


app.get('/products/:id', async(req, res) => {
    let key = req.url;
    let value = cache[key];
    try{
        if(value){
            return res.json(value);
        }
        let id = Number(req.params.id);
        let productData = await delayReadData();
        let data = productData.find((item)=>item.id===id);
        cache[key] = data;
        res.json(data);
    }catch(err){
        console.log(err);
    }
});  






app.listen(PORT || 3000 , () => {
    console.log(`app has started...`);
});    




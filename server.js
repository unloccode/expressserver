const express = require('express');
const md5 = require('md5');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    //console.log(getRandomString(10));
    //console.log(md5('alafsasa@gmail.com'));
    fuser();
});

//fuser
function fuser(){
    //var rand10 = getRandomString();
    var randEmail = md5('alafsasa@gmail.com');
    //var randFused = rand10 + randEmail;
    console.log(randEmail);
}

//10 rand char gen MD5
function getRandomString(){
    randLen = 10;
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for(var i=0; i<randLen; i++){
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

app.listen(PORT, ()=>{
    console.log(`Express app listening at http://localhost:${PORT}`)
});
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('I am Unloccode')
});

app.listen(PORT, ()=>{
    console.log(`Express app listening at http://localhost:${PORT}`)
});
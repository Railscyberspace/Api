const { response } = require('express');
const express = require('express')
const fetch = require("node-fetch");
const app = express()


app.get('/api/rates', async (req, res) =>
{
    const { base, currency } = req.query;
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}&currency=${currency}`)
    const responseJson = await response.json();
        
    return res.send({ results: responseJson});
});

app.get('/', (req, res) =>
{
    return res.send('Home')
   // console.log(response);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
{
    console.log(`Listening on port .....${PORT}`);

});
    
 




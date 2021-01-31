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
})

        
app.listen(9000, () => console.log('Listening on port 9000.....'));
    
 




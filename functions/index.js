const functions = require("firebase-functions");
const express = require ("express");
const cors = require ("cors");
const stripe= require("stripe")('sk_test_51Jf2kVEDGzjFkis1XSSSpoay7cLgS116IhOkCR9somdGVUxtufwoWhTaBbX5qPHAe32Ln8IVW0emZis4Z3us7gD000V9xJwF45')

const app = express();



app.use(cors({origin:true}));
app.use(express.json());
app.get('/', (request, response) => response.status(200).send('hello word'))
app.get('/safa', (request, response) => response.status(200).send('love you'))
app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;
    console.log('payment request recieved', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
exports.api = functions.https.onRequest(app);
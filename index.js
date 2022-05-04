const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//environment variable use command
require('dotenv').config();

//middlware use
const cors = require('cors');
const res = require('express/lib/response');
app.use(cors());
app.use(express.json());

//mongodb connection dont


const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.s8dmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const serviceCollecton = client.db('genius_car_db').collection('service');
        const orderCollecton = client.db('genius_car_db').collection('orderDetails');
        console.log("Genius car service database connect!!!");
        //find database all data show server site system 
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollecton.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
        app.get('/order',async(req,res)=>{
            const email=req.query.email;
            const query={email};
            const cursor=orderCollecton.find(query);
            const order=await cursor.toArray();
            res.send(order);
        })

        //find one data from database services/id

        app.get('/services/:id',async(req,res)=>{
            const id=req.params.id;
            const query={_id:ObjectId(id)};
            const service=await serviceCollecton.findOne(query);
            res.send(service);
        })

        //create new service form client site to server site 
        app.post('/services',async(req,res)=>{
            const doc=req.body;
            const result=await serviceCollecton.insertOne(doc);
            res.send(result);
        })
        app.post('/order',async(req,res)=>{
            const order=req.body;
            const result=await orderCollecton.insertOne(order);
            res.send(result);
        })

        

    }
    finally {

    }

}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('welcome genius server!!!!');
})

app.listen(port, () => {
    console.log('the genius server is running');
})
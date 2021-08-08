require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const config=require('./setup/config'); //Port And MongoURL
const Port=process.env.PORT || config.nodePort;
const host=config.hostname;
const app=express();
const router=require('./routes/addressroute');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"./public")));

//mongoose connection
mongoose.connect(config.mongoURL,{useNewUrlParser: true,
	useUnifiedTopology: true})
    .then(() => console.log("Connected To MongoDB!"))
    .catch((err) => console.log("MongoDb Not Connected!" + err));
    
//router
app.use('/api',router);

app.listen(Port,host,()=>{console.log(`AddressBook running at port ${Port}`)});
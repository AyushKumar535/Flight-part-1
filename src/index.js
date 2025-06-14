const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes'); 

// const AboutController = require('./controllers/about-controller');
// const HomeController = require('./controllers/home-controller');

// const {AboutController , HomeController} = require('./controllers')

const app = express();

app.use(express.json());  
app.use(express.urlencoded({extended: true}));  

app.use('/api', apiRoutes);  
// console.log(process.env)


app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
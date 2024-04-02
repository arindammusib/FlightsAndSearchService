const express=require('express');
const{PORT}=require('./config/serverConfig');
const bodyParser=require('body-parser');
const CityRepo=require('./repository/city_repo');


const setUpAndStartServer= async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, async()=>{
        console.log(`server is running at ${PORT}`);
        const repo=new CityRepo();
        repo.createCity({name:"Noida"});
       
       
    });

}
setUpAndStartServer();
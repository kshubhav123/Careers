const {create,list,update,remove,singleUser} =require("../controller/user") 
const express = require('express')
const app = express.Router()

app.post("/create", create);
app.get("/userlist", list);
app.put("/update/:id", update);
app.get('/singleuser/:id', singleUser);
app.delete("/remove/:id", remove);

module.exports = app;

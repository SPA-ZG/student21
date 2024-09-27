const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
var cors = require("cors");
require('dotenv').config()

const fs = require("fs");
let users;
let posts;


const externalUrl = process.env.RENDER_EXTERNAL_URL
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 3000
const baseURL = externalUrl || `http://localhost:${port}`
const baseFrontendUrl = process.env.FRONTEND_BASE_URL



const app = express();
app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({
    origin: baseFrontendUrl
}));

app.get("/users", function (req, res) {
    fs.readFile("user.json", function (err, data) {
        var jsonData = data;
        users = JSON.parse(jsonData);
        res.json(users);
    });

});

// app.get("/comments", function (req, res) {
//     fs.readFile(".json", function (err, data) {
//         var jsonData = data;
//         posts = JSON.parse(jsonData);
//     });

//     res.json(users);
// });

app.get("/posts", async function (req, res) {
    console.log('Sending posts...')
     fs.readFile("blogPost.json", function (err, data) {
        var jsonData = data;
        // console.log(jsonData)
        
        this.posts = JSON.parse(jsonData);
        res.json(this.posts);
    });
    // console.log(this.posts)
});

app.post('/login', async function (req, res) {
     fs.readFile("user.json", function (err, data) {
        var jsonData = data;
        // console.log(jsonData)
        
        this.users = JSON.parse(jsonData);
        var user = this.users.find((user) => user.profileName === req.body.profileName)
        console.log(user)
        if(user !== undefined){
            res.json(user);

        } else {
            res.sendStatus(401)
        }

    });
    // console.log(this.posts)
})

if(externalUrl){

    const hostname = '0.0.0.0'
    app.listen(port, hostname, () => {
        console.log(`Server running locally on  http://${hostname}:${port} and externaly on ${externalUrl}`);
    })
} else {
    app.listen(port, () => {
        console.log(`Server running locally on  ${baseURL}`);
    })
}


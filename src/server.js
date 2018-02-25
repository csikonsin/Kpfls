import express from "express"
import bodyParser from "body-parser"
import fs from "fs"
import path from "path"
import React from"react"
import ReactDOM from "react-dom/server"

import App from "./components/App.jsx"
import configureStore from "./configureStore";
import rootReducer from "./rootReducer";
import Helpers from "./helpers"
import { Provider } from "react-redux"

let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.port || 3001;

var MenuLocator = function(){
    this.menus = [
        {
            id: 1,
            path: "/",
            title: "Home",
            rootId: 3,
        },
        {
            id:2,
            path: "/about",
            title: "About",
            rootId: 1
        },
        {
            id:3,
            path: "/jobs",
            title: "Jobs",
            rootId: 1
        },
        {
            id:4,
            path: "/us",
            title: "Us",
            rootId: 3
        }
    ];
}
MenuLocator.prototype.GetMenu = function(publicPath) {
    return this.menus.filter((val,id) => val.path === publicPath)[0]
}
MenuLocator.prototype.GetAll = function() {
    return this.menus
}

var ModulesService = function(){
    this.modules = [
        {
            id:3,
            Menuid:1,
            ModuleTypeId: 3,
            Settings: {
                headingType:2,
                heading: "Überschrift"
            }
        },
        {
            id: 1,
            Menuid: 1,
            ModuleTypeId: 1,
            Settings: {content:"Hi! I'm content!"}
        },
        {
            id:2,
            Menuid:1,
            ModuleTypeId: 2,
            Settings: {src: "https://www.wien.info/media/images/altstadt-panorama-mit-stephansdom-und-karlskirche-19to1.jpeg"}
        },
        {
            id:4,
            Menuid: 3,
            ModuleTypeId: 3,
            Settings: {heading:"Jobs", headingType:1}
        }
    ]
}
ModulesService.prototype.GetModules = function(menuid){
    return this.modules.filter((val, inx) => val.Menuid === menuid);
}

app.use("/public",express.static('public'));


app.get("*", function(req,res){

    var menus = new MenuLocator();   
    var modules = new ModulesService();

    var menu = menus.GetMenu(req.url);

    var allMenus = menus.GetAll();

    var templatepath = path.resolve("public","index.html")
    var template = fs.readFileSync(templatepath).toString();


    try {
        let found = modules.GetModules(menu.id);

        const initialState = {
            modules: found,
            cms: {
                adminEdit: false
            },
            menus: allMenus
        };

        if(Helpers.USE_SSR){
            var reactHtml = ReactDOM.renderToStaticMarkup(<App store={initialState}/>)
            template = template.replace("<!-- ::SSR:: -->", reactHtml);
        }
        template = template.replace("<!-- ::PRELOADED_STATE:: -->", `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)}</script>`);

        let clientBundle = "bundle";
        if(initialState.cms.adminEdit) {
            clientBundle = "bundle-admin";
        }
        template = template.replace("<!-- ::CLIENT_BUNDLE:: -->", `<script src="public/dist/client/${clientBundle}.js"></script>`)
    } 
    catch (e) 
    {
        template = template.replace("<!-- ::SSR:: -->", `<div class='error'>Request: ${req.path}<br>${e.toString()}</div>`)
    }

    res.end(template);
})

app.listen(port, () => {
    console.log(`Listenin on port ${port}`)
}); 
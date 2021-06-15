import fs from "fs";

export const home = (req, res) => {
    const {id} = req.params;
    fs.readdir('read', (err, files) => {
        if(err){
            console.log(err);
            res.status(400).send("Server Error");
        }
        res.render("home", {pageTitle: "TXT2HTML", files});
    });
};

export const getRead = (req, res) => {
    const {id} = req.params;
    fs.readFile(`./read/${id}`, 'utf-8', function(err, data){
        if(err){
            console.log(err);
            res.status(400).send("Server Error");
        }
        res.render("read", {pageTitle: "READ", data });
    });
};

export const postRead = (req, res) => {
    const {file} = req;
    const id = file.filename;
    fs.readFile(`./read/${id}`, 'utf-8', function(err, data){
        if(err){
            console.log(err);
            res.status(400).send("Server Error");
        }
        res.render("read", {data});
    });
}
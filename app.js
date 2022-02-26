const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

const articleScheme = {
    title:String,
    content:String
}

const Article = mongoose.model("article",articleScheme);

///////////////// All articles request ////////////////

app.route("/articles")

.get((req,res)=>{
    Article.find({},(err,results)=>{
        if(err){
            console.log(err);
        }else{
            res.send(results);   
        }
    });
})

.post((req,res)=>{
    
    const article = new Article({
        title:req.body.title,
        content:req.body.content
    });

    article.save((err)=>{
        if(err){
            res.send(err);
        }else{
            res.send("article saved");
        }
    });

})

.delete((req,res)=>{
    Article.deleteMany({},(err)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Deleted all articles");   
        }
    });
});

////////////////// One article requests ///////////////////

app.route("/articles/:articleTitle")

.get((req,res)=>{
    Article.findOne({title:req.params.articleTitle},(err,article)=>{
        if(err){
            console.log(err);
        }else{
            res.send(article);   
        }
    });
})

.put((req,res)=>{
    Article.replaceOne(
        {title:req.params.articleTitle},
        {title:req.body.title, content:req.body.content},
        (err)=>{
            if(err){
                res.send(err);
            }else{
                res.send("Successfully updated article");
            }
        }
    );
})

.patch((req,res)=>{
    Article.updateOne(
        {title:req.params.articleTitle},
        {$set:req.body},
        (err)=>{
            if(err){
                res.send(err);
            }else{
                res.send("Successfully updated article");
            }
        }
    );
})

.delete((req,res)=>{
    Article.deleteOne(
        {title:req.params.articleTitle},
        (err)=>{
            if(err){
                res.send(err);
            }else{
                res.send("Successfully deleted article");
            }
        }
    );
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

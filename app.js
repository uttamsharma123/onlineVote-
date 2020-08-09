const express =require('express');
const bodyParser=require('body-parser');
const _=require("lodash");
const app=express();

var registerData=[];
var bjp="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var other="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var aap="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var congress="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


 var ImagesData=[ {title:"AAP",src:"images/aap.png",des:aap}, {title:"BJP",src:"images/bjp.png",des:bjp},
 {title:"Congress",src:"images/congress.png",des:congress}, {title:"other",src:"images/other.png",des:other}
];
     

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',function(req,res){
    res.render("home",{NewImagesData:ImagesData})
})
app.get('/profile',function(req,res){
    
    res.render("profile",{NewImagesData:ImagesData})
})

app.get("/regi",function(req,res){
    res.render("registration");
})
app.post("/regi",function(req,res){
   var regiData={pass:req.body.password,
    fname:req.body.fname,
    lname :req.body.lname,
    mobile:req.body.mobile,
    aadhar:req.body.aadhar,
    gender:req.body.gender
   }
  registerData.push(regiData);
    res.redirect("/")
});

app.get("/details/:party",function(req,res){
    var requestedTitle= _.lowerCase(req.params.party);

    ImagesData.forEach(function(data){
        var partyTitle=_.lowerCase(data.title);
        if(requestedTitle==partyTitle)
        {
            console.log("match found!!");
            res.render("partydetails",{src:data.src,details:data.des,partyTitle:data.title});

        }
       
    });
   

});



app.post("/login",function(req,res){
    var loginPass=req.body.loginPass;
    var loginAadhar=req.body.loginAadhar;
    res.redirect("/profile")
 
});


app.listen(3000,function(){
    console.log("server is started on port 3000");
})
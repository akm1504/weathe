var a = function a(){
var request=require("request");
request.get("https://weatherrrbot.herokuapp.com/",function(error,response,body){
           if(error){
                 console.log(error);
           }else{
                 console.log(response);
         }
});
console.log("done"); 

}

module.exports.a = a;

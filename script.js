// 1.create a request variable
var request = new XMLHttpRequest();
// 2.create a new connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// 3.send request
request.send();
// 4.load the response
request.onload = function(){
    var data = JSON.parse(this.response)
    for(var i=0;i<data.length;i++){
        lat=data[i].latlng[0];
        long=data[i].latlng[1];
        var reques = new XMLHttpRequest();
        reques.open('GET','http://api.openweathermap.org/data/2.5/weather?lat=lat&lon=long&appid=0763a4ad75346e3b0540d5772c7f57ea',true)
        reques.send();
        reques.onload = function(){
            var m=JSON.parse(this.response)
            console.log(m["main"]["temp"])
        }

        
    }
    
}
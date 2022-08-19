document.getElementById("myName").innerHTML = prompt("Adinizi giriniz");

var span = document.getElementById("myClock");

function showTime() {

  var days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];
  var dayName = days[new Date().getDay()];  
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) +" " +dayName;
}

setInterval(showTime, 1000);
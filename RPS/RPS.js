
 var scr = 0
 var scravv = 0

  function DrawSasso(x,y){                 /*sasso = 0*/
  var c = document.getElementById("rps");
  var ctx = c.getContext("2d");
  var img = document.getElementById("r");
  ctx.drawImage(img,x,y,100,100);
  }
  
  
  function DrawCarta(x,y){                /*carta = 1*/
  var c = document.getElementById("rps");
  var ctx = c.getContext("2d");
  var img = document.getElementById("p");
  ctx.drawImage(img,x,y,100,100);
  }
    
    
  function DrawForbici(x,y){                 /*forbici = 2*/
  var c = document.getElementById("rps");
  var ctx = c.getContext("2d");
  var img = document.getElementById("s");
  ctx.drawImage(img,x,y,100,100);
  }
  
  
  function clear(){
    var c = document.getElementById("rps");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, rps.width, rps.height);
  }
   
   
   
  function PlaySasso(){
    clear();
    DrawSasso(130,200);
    var avver = Math.floor(Math.random() * 3);
      if(avver==0){
         DrawSasso(130,50);
         document.getElementById("cnsl").innerHTML = "Parità!";
      }
      if(avver==1){
         DrawForbici(130,50);
         document.getElementById("cnsl").innerHTML = "Hai vinto!";
         scr ++
      }
      if(avver==2){
         DrawCarta(130,50);
         document.getElementById("cnsl").innerHTML = "Hai perso!";
         scravv ++
      }
        document.getElementById("scr").innerHTML = scr;
        document.getElementById("scravv").innerHTML = scravv;
  }
  
  
  
  
  function PlayCarta(){
    clear();
    DrawCarta(130,200);
    var avver = Math.floor(Math.random() * 3);
     if(avver==0){
         DrawSasso(130,50);
         document.getElementById("cnsl").innerHTML = "Hai vinto!";
         scr++ 
      }
      if(avver==1){
         DrawForbici(130,50);
         document.getElementById("cnsl").innerHTML = "Hai perso!";
         scravv ++
      }
      if(avver==2){
         DrawCarta(130,50);
         document.getElementById("cnsl").innerHTML = "Parità!";
      }
          document.getElementById("scr").innerHTML = scr;
          document.getElementById("scravv").innerHTML = scravv;
  }
  
  
  
  
  function PlayForbici(){
    clear();
    DrawForbici(130,200);
    var avver = Math.floor(Math.random() * 3);
    if(avver==0){
         DrawSasso(130,50);
         document.getElementById("cnsl").innerHTML = "Hai perso!"; 
         scravv ++
      }
      if(avver==1){
         DrawForbici(130,50);
         document.getElementById("cnsl").innerHTML = "Parità!";
      }
      if(avver==2){
         DrawCarta(130,50);
         document.getElementById("cnsl").innerHTML = "Hai vinto!";
         scr ++
      }
        document.getElementById("scr").innerHTML = scr;
        document.getElementById("scravv").innerHTML = scravv;
  }
  
  
  
  

 var scr = 0
 var scravv = 0

  function Draw(x,y,k){                 /*sasso = 0*/
  var c = document.getElementById("rps");
  var ctx = c.getContext("2d");
  var rock = document.getElementById("r");
  var paper = document.getElementById("p");
  var scissors = document.getElementById("s");
   
   if(k == 0)
    ctx.drawImage(rock,x,y,100,100);
   
   else if(k == 1)
    ctx.drawImage(paper,x,y,100,100);
   
   else if(k == 2)
    ctx.drawImage(scissors,x,y,100,100);
  }

  function clear(){
    var c = document.getElementById("rps");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, rps.width, rps.height);
  }
   
   
   
  function PlaySasso(){
    clear();
    Draw(130,200,0);
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
    Draw(130,200,1);
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
    Draw(130,200,2);
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
  
  
  
  

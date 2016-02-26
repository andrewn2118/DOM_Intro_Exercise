console.log("Javascript is alive!");
  
window.onload = function(){

  document.getElementById("greeting").innerText = "Hello, World!";

  // create array of "li" and set background to yellow
  var li = document.getElementsByTagName("li");
  for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "yellow";
  }

  var greetImg = document.createElement("img");
  greetImg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greetImg.style.height = "75px";
  greetImg.style.width = "100px";
  document.getElementById("greeting").appendChild(greetImg);

  var essentialsImg = document.querySelectorAll("img");
  essentialsImg = essentialsImg[1];

  var selected = document.querySelectorAll(".selected");
  for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", function(event){
      selected[0].classList.remove("selected");
      event.target.classList.add("selected");
      selected = document.querySelectorAll(".selected");
      essentialsImg.src = "./images/" + event.target.innerText + ".jpeg";
    });
  }  

  document.getElementById("ghosting").addEventListener("mouseover", function(event){
    event.target.style.display = "none";
  });

  document.getElementById("resize").addEventListener("mouseenter", function(event){
    event.target.style.width = "400px";
  });
  resize.addEventListener("mouseleave", function(event){
    event.target.style.width = "200px";
  });

  document.querySelector("#reset").addEventListener("click", function(){
    selected[0].classList.remove("selected");
    essentialsImg.src = "./images/panic.jpeg";
  });

  addEventListener("keypress", function(event){
    input += String(event.which);
    if(event.which >= 48 && event.which <= 57){
      console.log(event.which);
      alert("I HATE NUMBERZZZ!");
    }
  });


  var input = "", konami = "3838404037393739669865";
  addEventListener("keydown", function(event){
    input += String(event.which);
    if(input === konami) {
      alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
      input = "";
    }
  });

};






// up up down down left right left right b a
// 38 38 40 40 37 39 37 39 66 65
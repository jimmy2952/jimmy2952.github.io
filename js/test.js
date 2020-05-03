// let word = document.getElementsByClassName('word');



// showword = function(){

//     for(var i=0, len=word.length; i<len; i++)
//     {
//         word[i].style.opacity = 1;
//     }
// }

// var word = document.getElementsByClassName('word');
  
// word.addEventListener('onmouseover', function() {
//   for (var i = 0; i < word.length; i++) {
//     word[i].style.opacity = ( buttons[i].style.opacity ==  "0" ? "1" : "0");
//   }
// });

// var word = document.getElementsByClassName("word");
// for (var i=0; i<word.length; i++){
//     word[i].addEventListener("onmouseover", onmouseover);
//     word[i].addEventListener("onmouseleave", onmouseleave);
// }
// function onmouseover(event) {
//     event.style.opacity = 1;
// }

// function onmouseleave(event) {
//     event.style.opacity = 0;
// }

// var word = document.getElementsByClassName("word");

// for (var i in word) {
//     if (word.hasOwnProperty(i)){
//         word[i].addEventListener("mouseover", mouseOver);
//         word[i].addEventListener("mouseout", mouseOut); 
//     }
// }
   
// function mouseOver() {
//     this.style.visibility='visible';;    
// }
// function mouseOut() {
//     this.style.visibility='hidden';    
// }

// var word = document.getElementsByClassName('word');
// var i;
// word[i].onmouseover = function() {
//     for(var i=0; i < word.length; i++) {
//         word[i].style.opacity = "1";
//       } 
// }

// var word = document.getElementsByClassName("word"); 
  
// for (var i=0; i < word.length; i++) { 
//     if (word.hasOwnProperty(i)){ 
//      word[i].addEventListener("mouseover", mouseOver); 
//      word[i].addEventListener("mouseout", mouseOut); 
//     } 
 
// } 
  
//  function mouseOver() { 
//     this.style.opacity = 1;  
// } 
 
// function mouseOut() { 
//     this.style.opacity = 0; 
// }

var word = document.getElementsByClassName("word");
[].forEach.call(word, function(element) {
    element.onmouseover = function() {
    anime.timeline({loop: false})
    .add({
    targets: '.word',
    scale: [3,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  });
  };
});

// let jesus = document.getElementById('jesus');

// jesus.onmouseover = function(){
//     anime.timeline({loop: false})
//   .add({
//     targets: '.ml15 .word',
//     scale: [2,1],
//     opacity: [0,1],
//     easing: "easeOutCirc",
//     duration: 800,
//     delay: (el, i) => 800 * i
//   });
// }
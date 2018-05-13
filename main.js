$(document).ready(function(){
	$("img").draggable();
var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "THETEACHINGSOFANUNFORGIVINGWORLD";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'THE STOIC TEACHINGS OF AN UNFORGIVING WORLD',
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 70);
    } else { 
      setTimeout(m.animateFadeBuffer, 70);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 10000000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));

var randomQuotes = [
  "Sometimes even to live is an act of courage.",
  "Luck is what happens when preparation meets opportunity.",
  "All cruelty springs from weakness.",
  "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful. ",
  "Difficulties strengthen the mind, as labor does the body.",
  "There is no easy way from the earth to the stars",
  "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
  "You act like mortals in all that you fear, and like immortals in all that you desire",
  "We suffer more often in imagination than in reality",
  "It is not the man who has too little, but the man who craves more, that is poor.",
   "He who is brave is free.",

];

$("#quoteButton").on('click', function() {
  var x = Math.floor(Math.random() * randomQuotes.length);
  $("#quotesBox").text(randomQuotes[x]);
});

	});





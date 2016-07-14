var c_note = document.getElementById("c_note");

$("#c").click(function(){
  c_note.currentTime = 0;
  c_note.play();
});

var d_note = document.getElementById("d_note");

$("#d").click(function(){
  d_note.currentTime = 0;
  d_note.play();
});

var e_note = document.getElementById("e_note");

$("#e").click(function(){
  e_note.currentTime = 0;
  e_note.play();
});

var f_note = document.getElementById("f_note");

$("#f").click(function(){
  f_note.currentTime = 0;
  f_note.play();
});

var g_note = document.getElementById("g_note");

$("#g").click(function(){
  g_note.currentTime = 0;
  g_note.play();
});

var a_note = document.getElementById("a_note");

$("#a").click(function(){
  a_note.currentTime = 0;
  a_note.play();
});

var b_note = document.getElementById("b_note");

$("#b").click(function(){
  b_note.currentTime = 0;
  b_note.play();
});

$(document).keydown(function(e){
  //alert(e.key);
  if (e.key == "q"){
    c_note.currentTime = 0;
    c_note.play();
  }
  if (e.key == "w"){
    d_note.currentTime = 0;
    d_note.play();
  }
  if (e.key == "e"){
    e_note.currentTime = 0;
    e_note.play();
  }
  if (e.key == "r"){
    f_note.currentTime = 0;
    f_note.play();
  }
  if (e.key == "t"){
    g_note.currentTime = 0;
    g_note.play();
  }
  if (e.key == "y"){
    a_note.currentTime = 0;
    a_note.play();
  }
  if (e.key == "u"){
    b_note.currentTime = 0;
    b_note.play();
  }
});

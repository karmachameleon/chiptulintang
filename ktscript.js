$(document).ready(function(){
  var eig = document.createElement('audio');
  eig.setAttribute('src', '8.wav');
  var sev = document.createElement('audio');
  sev.setAttribute('src', '7.wav');
  var six = document.createElement('audio');
  six.setAttribute('src', '6.wav');
  var fiv = document.createElement('audio');
  fiv.setAttribute('src', '5.wav');
  var fou = document.createElement('audio');
  fou.setAttribute('src', '4.wav');
  var thr = document.createElement('audio');
  thr.setAttribute('src', '3.wav');
  var two = document.createElement('audio');
  two.setAttribute('src', '2.wav');
  var one = document.createElement('audio');
  one.setAttribute('src', '1.wav');

  var g1 = document.createElement('audio');
  g1.setAttribute('src', 'g1.wav');
  var g2 = document.createElement('audio');
  g2.setAttribute('src', 'g2.wav');
  var g3 = document.createElement('audio');
  g3.setAttribute('src', 'g3.wav');
  var g4 = document.createElement('audio');
  g4.setAttribute('src', 'g4.wav');

  var b = document.createElement('audio');
  b.setAttribute('src', 'b.wav');
  var a1 = document.createElement('audio');
  a1.setAttribute('src', 'a1.wav');
  var a2 = document.createElement('audio');
  a2.setAttribute('src', 'a2.wav');

  $(document).on('keyup', function(e){
    if(e.which == 49) {
      if(!one.play()){
        one.play();
      }
      else{
        one.pause();
        one.currentTime = 0;
        one.play();
      }
    }
    else if(e.which == 50) {
      if(!two.play()){
        two.play();
      }
      else{
        two.pause();
        two.currentTime = 0;
        two.play();
      }
    }
    else if(e.which == 51) {
      if(!thr.play()){
        thr.play();
      }
      else{
        thr.pause();
        thr.currentTime = 0;
        thr.play();
      }
    }
    else if(e.which == 52) {
      if(!fou.play()){
        fou.play();
      }
      else{
        fou.pause();
        fou.currentTime = 0;
        fou.play();
      }
    }
    else if(e.which == 53) {
      if(!fiv.play()){
        fiv.play();
      }
      else{
        fiv.pause();
        fiv.currentTime = 0;
        fiv.play();
      }
    }
    else if(e.which == 54) {
      if(!six.play()){
        six.play();
      }
      else{
        six.pause();
        six.currentTime = 0;
        six.play();
      }
    }
    else if(e.which == 55) {
      if(!sev.play()){
        sev.play();
      }
      else{
        sev.pause();
        sev.currentTime = 0;
        sev.play();
      }
    }
    else if(e.which == 56) {
      if(!eig.play()){
        eig.play();
      }
      else{
        eig.pause();
        eig.currentTime = 0;
        eig.play();
      }
    }
    else if(e.which == 81) {
      if(!g1.play()){
        g1.play();
      }
      else{
        g1.pause();
        g1.currentTime = 0;
        g1.play();
      }
    }
    else if(e.which == 87) {
      if(!g2.play()){
        g2.play();
      }
      else{
        g2.pause();
        g2.currentTime = 0;
        g2.play();
      }
    }
    else if(e.which == 69) {
      if(!g3.play()){
        g3.play();
      }
      else{
        g3.pause();
        g3.currentTime = 0;
        g3.play();
      }
    }
    else if(e.which == 82) {
      if(!g4.play()){
        g4.play();
      }
      else{
        g4.pause();
        g4.currentTime = 0;
        g4.play();
      }
    }
    else if(e.which == 57) {
      if(!a1.play()){
        a1.play();
      }
      else{
        a1.pause();
        a1.currentTime = 0;
        a1.play();
      }
    }
    else if(e.which == 48) {
      if(!a2.play()){
        a2.play();
      }
      else{
        a2.pause();
        a2.currentTime = 0;
        a2.play();
      }
    }
    else if(e.which == 32) {
      if(!b.play()){
        b.play();
      }
      else{
        b.pause();
        b.currentTime = 0;
        b.play();
      }
    }
  });
});

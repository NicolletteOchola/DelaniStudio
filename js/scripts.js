// Hide and show the 'what we do' section

$(document).ready(function(){
    $("#design").click(function(){
      $("#designText").show();
    });
  $("#design").click(function(){
    $("#design").hide();
    });
  $("#designText").click(function(){
    $("#design").show();
    });
  $("#designText").click(function(){
    $("#designText").hide();
  });
    $("#dev").click(function(){
    $("#devText").show();
    });
  $("#dev").click(function(){
    $("#dev").hide();
  });
  $("#devText").click(function(){
    $("#dev").show();
    });
  $("#devText").click(function(){
    $("#devText").hide();
  }); 
  $("#productDev").click(function(){
    $("#productDevText").show();
    });
  $("#productDev").click(function(){
    $("#productDev").hide();
  });
  $("#productDevText").click(function(){
    $("#productDev").show();
  });
  $("#productDevText").click(function() {
    $("#productDevText").hide();
  });

  // Hover Effect 

  $(".image1").hover(function() {
    $("#work1").show();
  });
  $(".image1").mouseleave(function() {
    $("#work1").hide();
  });
  $(".image2").hover(function() {
    $("#work2").show();
  });
  $(".image2").mouseleave(function() {
    $("#work2").hide();
  });
  $(".image3").hover(function() {
    $("#work3").show();
  });
  $(".image3").mouseleave(function() {
    $("#work3").hide();
  });
  $(".image4").hover(function() {
    $("#work4").show();
  });
  $(".image4").mouseleave(function() {
    $("#work4").hide();
  });
  $(".image5").hover(function() {
    $("#work5").show();
  });
  $(".image5").mouseleave(function() {
    $("#work5").hide();
  });
  $(".image6").hover(function() {
    $("#work6").show();
  });
  $(".image6").mouseleave(function() {
    $("#work6").hide();
  });
  $(".image7").hover(function() {
    $("#work7").show();
  });
  $(".image7").mouseleave(function() {
    $("#work7").hide();
  });
  $(".image8").hover(function() {
    $("#work8").show();
  });
  $(".image8").mouseleave(function() {
    $("#work8").hide();
  });
  $(".image9").hover(function() {
    $("#work9").show();
  });
  $(".image9").mouseleave(function() {
    $("#work9").hide();
  });
    var message = document.getElementById("message");
  message.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    alert ( name + "! Thank you for reaching out to us. We'll get back to you as soon as possible");
    };
  });
});
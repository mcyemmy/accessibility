// Code goes here

$(document).ready(function() {
  
  //Hide visible Paragraph from screen reader
  $("button").click(function(){
    $("p[hidden]").removeAttr("hidden").attr("aria-hidden","false");
  });
  
  //Toggle Nav menu when burger bar is clicked
  $(".menu-button").on("click", function(){
    var navMenu = $(this).next(".nav-menu"); // Make code more effecient
    if (navMenu.attr("hidden")) {
      navMenu.removeAttr("hidden");
    }
    else {
      navMenu.attr("hidden", "");
    }
    navMenu.find("li").attr("role", "presentation"); //The li elements doesn't need to be acknowledged
    navMenu.find("a").attr("tabindex", -1);
  });
   $("body").click(function(e) {
     if (e.target.className != "menu-button") {
      $(".nav-menu").attr("hidden", "");
     }
   });
  
  // Keyboard Control DownArrow40 UpArrow38 Enter13 Tab9 ESC27
  
  $(".menu-button").on("keydown", function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    switch(keycode) {
      case 13: $(this).next(".nav-menu").find("*").removeAttr("style");
      $(this).click();
      break;
      case 9:$(".nav-menu li:first-child a").attr("tabindex", 0).css("color", "#000").parent("li").css("background-color", "#fff");
      break;
      case 27: $(this).next(".nav-menu").attr("hidden","");
    }
  });
  $(".nav-menu li a").on("keydown", function(e){
    var menuButton = $(".menu-button");
    var keycode = (e.keyCode ? e.keyCode : e.which);
    switch(keycode) {
      case 40: $(this).parent().next().children("a").focus().attr("tabindex", "0").css("color", "#000").parent("li").css("background-color", "#fff");
      $(this).css("color", "#fff").parent("li").css("background-color", "#000");
      break;
      case 38: $(this).parent().prev().children("a").focus().attr("tabindex", "0").css("color", "#000").parent("li").css("background-color", "#fff");
      $(this).css("color", "#fff").parent("li").css("background-color", "#000");
      break;
      case 27: menuButton.focus().click();
      break;
      case 9: menuButton.click();
      break;
    }
  });
  
  
})
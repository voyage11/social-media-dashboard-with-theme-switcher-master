
$("#darkMode").click( function(){
   if($(this).is(':checked')) {
     console.log("checked");
     lightMode();
   } else {
     console.log("unchecked");
     darkMode();
   }
});

function darkMode() {
  $(".dark-mode").text("Dark Mode").css("color", "white");;
  $("body").css("background-color", "#1D2029").css("color", "#9094B9");
  $(".top-background-color").css("background-color", "#20222E");
  $("h1").css("color", "white");
  $("h2").css("color", "white");
  $("h3").css("color", "white");
  $(".social-bold-text").css("color", "white");

  $("card").css("background-color", "#252B43");
  $(".card-block").css("background-color", "#252B43");
  // $(".card")
  //   .mouseenter(function() {
  //     $(".card").css("background-color", "#333956");
  //   })
  //   .mouseleave(function() {
  //     $(".card").css("background-color", "#252B43");
  //   });
  // $(".card-block")
  //   .mouseenter(function() {
  //     $(".card-block").css("background-color", "#333956");
  //   })
  //   .mouseleave(function() {
  //     $(".card-block").css("background-color", "#252B43");
  //   });
}

function lightMode() {
  $(".dark-mode").text("Light Mode").css("color", "#888");;;
  $("body").css("background-color", "white").css("color", "#5F6270");
  $(".top-background-color").css("background-color", "#F8F9FE");
  $("h1").css("color", "#20202A");
  $("h2").css("color", "#20202A");
  $("h3").css("color", "#20202A");
  $(".social-bold-text").css("color", "#20202A");

  $(".card").css("background-color", "#F0F3FA");
  $(".card-block").css("background-color", "#F0F3FA");
  // $(".card")
  //   .mouseenter(function() {
  //     $(".card").css("background-color", "#E1E3EF");
  //   })
  //   .mouseleave(function() {
  //     $(".card").css("background-color", "#F0F3FA");
  //   });
  // $(".card-block")
  //   .mouseenter(function() {
  //     $(".card-block").css("background-color", "#E1E3EF");
  //   })
  //   .mouseleave(function() {
  //     $(".card-block").css("background-color", "#F0F3FA");
  //   });

}

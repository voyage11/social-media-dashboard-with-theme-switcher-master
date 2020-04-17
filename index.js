
$("#darkMode").click( function(){
   if($(this).is(':checked')) {
     console.log("checked");
     $(".dark-mode").text("Light Mode");
   } else {
     console.log("unchecked");
     $(".dark-mode").text("Dark Mode");
   }
});

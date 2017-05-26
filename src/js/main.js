function LoadLangDiv(){
  $("body").css("overflow", "hidden");
  $(".lang-menu")
  .animate({marginTop:"-=70%"},1400 );

};

document.addEventListener("DOMContentLoaded",LoadLangDiv);

function awer() {
  $(".main-screen").css("z-index", "3");
  $(".EngMainPage")
  .animate({width: innerWidth},1000)
  $( ".EngMainPage" )
    .animate({height:"+=100px"},1000);
};

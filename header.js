// jQuery.noConflict();
//
// (function($){
// $(document).ready(function(){
//   $(".menu-btn-new").click(function(e){
//     e.preventDefault();
//     $(".main-nav-new").slideToggle();
//     $(".menu-icon-hamburger-new").toggle();
//     var btnText = $(".menu-btn-text-new").text();
//     $(".menu-btn-text-new").text(btnText == "CLOSE" ? "MENU" : "CLOSE");
//     $(".menu-icon-close-new").toggle();
//     $(".menu-btn-text-new").css({"color": btnText == "CLOSE" ? "#0B97DD" : "#006BA2"});
//     $(".menu-btn-new").css({"border": btnText == "CLOSE" ? "0.533vw solid #0B97DD" : "0.533vw solid #006BA2"});
//   })
//
//   $(".search-input-field-new").on('keydown', function(e) {
//     if (e.keyCode == 13) {
//       e.preventDefault();
//       var searchParam = $(".search-input-field-new").val()
//       var searchRes = encodeURI("/tools/search-result-page?search=" + searchParam)
//       window.location.href = (searchRes);
//     }
//   })
//
// });
// })(jQuery);




$(document).ready(function(){
  $(".menuBtnNew").click(function(e){
    e.preventDefault();
    $(".mainNavNew").toggle("slide", {direction:'right'});
    $(".menuIconHamburgerNew").toggle();
    var btnText = $(".menuBtnTextNew").text();
    $(".menuBtnTextNew").text(btnText == "CLOSE" ? "MENU" : "CLOSE");
    $(".menuIconCloseNew").toggle();
    $(".menuBtnNew").css({"color": btnText == "CLOSE" ? "#0B97DD" : "#006BA2"});
    $(".menuBtnNew").css({"border": btnText == "CLOSE" ? "0.533vw solid #0B97DD" : "0.533vw solid #006BA2"});
    // $(".test").animate({"margin-top": btnText == "CLOSE" ? "16vw" : "161vw"})

    var height = $(".mainNavNew").height();
    if ($(".mainNavNew").is(":visible")){
    }
  })

  $(".searchInputFieldNew").on('keydown', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      var searchParam = $(".searchInputFieldNew").val()
      window.location.href = (createSearchURI(searchParam));
    }
  })
});


function createSearchURI(searchParam){
  var searchRes = encodeURI("/tools/search-result-page?search=" + searchParam)
  return searchRes
}

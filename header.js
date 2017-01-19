$(document).ready(function(){
  $(".menuBtnNew").click(function(e){
    e.preventDefault();
    $(".mainNavNew").slideToggle();
    $(".menuIconHamburgerNew").toggle();
    var btnText = $(".menuBtnTextNew").text();
    $(".menuBtnTextNew").text(btnText == "CLOSE" ? "MENU" : "CLOSE");
    $(".menuIconCloseNew").toggle();
    $(".menuBtnNew").css({"color": btnText == "CLOSE" ? "#0B97DD" : "#006BA2"});
    $(".menuBtnNew").css({"border": btnText == "CLOSE" ? "0.533vw solid #0B97DD" : "0.533vw solid #006BA2"});
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

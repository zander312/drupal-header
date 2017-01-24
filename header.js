jQuery.noConflict();

(function($){
$(document).ready(function(){
  $(".menu-btn-new").click(function(e){
    e.preventDefault();
    $(".main-nav-new").slideToggle();
    $(".menu-icon-hamburger-new").toggle();
    var btnText = $(".menu-btn-text-new").text();
    $(".menu-btn-text-new").text(btnText == "CLOSE" ? "MENU" : "CLOSE");
    $(".menu-icon-close-new").toggle();
    $(".menu-btn-text-new").css({"color": btnText == "CLOSE" ? "#0B97DD" : "#006BA2"});
    $(".menu-btn-new").css({"border": btnText == "CLOSE" ? "0.533vw solid #0B97DD" : "0.533vw solid #006BA2"});
  })

  $(".search-input-field-new").live('keydown', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      var searchParam = $(".search-input-field-new").val()
      var searchRes = encodeURI("/tools/search-result-page?search=" + searchParam)
      window.location.href = (searchRes);
    }
  })
});
})(jQuery);

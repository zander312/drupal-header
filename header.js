$(document).ready(function(){


  //hide search bar on page load
  $("#search-bar-new").hide();
  //hide google translate on page load
  $("#google_translate_element").hide();

  //search submission
  $("#search-bar-new").submit(function (e) {
    e.preventDefault()
    var searchValue = $("#search-input-new").val();
    var searchURI = createSearchURI(searchValue)
    window.location = searchURI
  })

  //toggles search bar
  $(document).on('click', function(e){
    if(e.target.id == "search-toggle" || e.target.id == "search-toggle-link"){
      $("#search-toggle").hide();
      $("#search-bar-new").show();
      $("#search-input-new").focus();
    }
    else if (e.target.id == "search-btn-new"){
      var searchValue = $("#search-input-new").val();
      var searchURI = createSearchURI(searchValue)
      window.location = searchURI
    }
    else if (e.target.id !== "search-btn-new" && e.target.id !== "search-input-new"){
      $("#search-bar-new").hide();
      $("#search-toggle").show();
    }
  });

  //toggles google_translate_element
  $("#translate-toggle-new").on('click', function(){
    $(this).hide();
    $("#google_translate_element").show();
  });

  //toggle dropdown menu when tabbing
  $(".main-btn-new").on('focusin', function(e){
    $(".main-btn-new").siblings(".main-menu-new").css("visibility", "hidden");
    $(this).siblings(".main-menu-new").css("visibility", "visible");
  });

  //hides dropdown menu when tabbing out of main nav
  $(document).on('focusin', function(e){
    if(e.target.id == "search-toggle" || e.target.id == "search-toggle-link"){
      $(".main-btn-new").siblings(".main-menu-new").css("visibility", "hidden")
    }
  });
  $(document).on('focusout', function(e){
    if(e.target.id == "last-dropdown-link"){
      $(".main-btn-new").siblings(".main-menu-new").css("visibility", "hidden")
    }
  });




  //mobile jquery
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
  var searchRes = encodeURI("https://www.sba.gov/tools/search-result-page?search=" + searchParam)
  return searchRes
}






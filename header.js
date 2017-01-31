$(document).ready(function(){


  focusInMenu();

  $("#search-bar").hide();
  
  $("#search-bar").submit(function (e) {
    e.preventDefault()
    var searchValue = $("#search-input").val();
    var searchURI = createSearchURI(searchValue)
    window.location = searchURI
  })
  
  $(document).on('click', function(e){
    console.log(e.target);
    if(e.target.id == "search-toggle"){
      $("#search-toggle").hide();
      $("#search-bar").show();
    }
    else if (e.target.id == "search-btn"){
      console.log("search")
      var searchValue = $("#search-input").val();
      var searchURI = createSearchURI(searchValue)
      window.location = searchURI
    }
    else if (e.target.id !== "search-btn" && e.target.id !== "search-input"){
      $("#search-bar").hide();
      $("#search-toggle").show();
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

function focusInMenu(){
  $(".main-btn-new").on('focusin', function(e){
    $(".main-btn-new").siblings(".main-menu-new").css("visibility", "hidden")
    $(this).siblings(".main-menu-new").css("visibility", "visible")
  });
}

function toggleSearch(){

}

// function submitSearch(){
//   $("#search-btn").click( function(){
//     console.log("oioioioioioioioi")
//   });
// }

// ("<input type='text' name='search-bar' placeholder='Search'><a id='search-btn'><i tabindex=0 class='fa fa-search remove-a-style' aria-hidden='true'></i></a>")



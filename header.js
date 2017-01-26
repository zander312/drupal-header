$(document).ready(function(){
  // $(".main-btn-new, .active-dropdown-new, .main-menu-new").hover(function(){
  //   if($(this).hasClass("active-dropdown-new")){
  //     toggleMenu($(this))
  //   }
  // })


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

function toggleMenu(thisObj){
  var index = thisObj.index()
  var menuElement = $($(".main-menu-new")[index])
  menuElement.toggleClass( "active" )
}

function toggleFocusMenu(thisObj){
  var index = thisObj.index()
  var prevMenuElement = $($(".main-menu-new")[index-1])
  var nextMenuElement = $($(".main-menu-new")[index+1])
  var menuElement = $($(".main-menu-new")[index])
  prevMenuElement.removeClass("active")
  nextMenuElement.removeClass("active")
  if(thisObj.hasClass("active-dropdown-new")){
    menuElement.addClass( "active" )
  }
}

function createSearchURI(searchParam){
  var searchRes = encodeURI("/tools/search-result-page?search=" + searchParam)
  return searchRes
}
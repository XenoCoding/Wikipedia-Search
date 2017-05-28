$("document").ready(function(){
  
  var displayHTML = $("#hide"); 
  var wikiLogo = $("#wikiLogo");
  
  var searchBar = $("#searchBar");
  var submitSearch = $("#submit");
  var searchResults = $("#searchResults");
  var headerLink;
  
  var link;
  var userSearch;
  var wikiAPI;
  
  wikiLogo.click(function(){
    
    wikiLogo.animate({
      opacity: 0,
    }, 500);
    
    wikiLogo.hide();
    
    displayHTML.show();
    
    displayHTML.animate({
      opacity: 1,
      width: "100%"
    }, 750);
    
  });
  
  function search(){
    $('#heading').animate({
      marginTop: "3%",
    }, 1000);
    
    searchResults.html("");
    
    userSearch = searchBar.val();
    wikiAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userSearch + "&limit=10&format=json&callback=?";
    
    $.getJSON(wikiAPI, function(data){
      
      for(var i = 0; i < 10; i++){
        if(data[1][i]){
         searchResults.append("<a href = '"+ data[3][i] + "' target='_blank' ><div class='articleMain'><div class='articleHeading'><h3 class='headerLink'>" + data[1][i] + "</h3></div><p>" + data[2][i] + "</p></div></a>"); 
        }

      }   
    
    });
  };
  
  submitSearch.click(function(){
    search();
  });
  
  $(document).keypress(function (e) {
    if (event.keyCode == 13 && searchBar.is(':focus')) {
      search();
    }
  });
  
});

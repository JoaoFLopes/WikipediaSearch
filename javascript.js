$(document).ready(function(){

    //added only to test the ssh key

   $("#searchButton").click(function(){

       var searchItem = $("#searchBox").val();
       var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchItem+"&format=json&callback=?";

       $.ajax({

           type:"GET",
           url:url,
           async:false,
           dataType:"json",
           success: function(data){
               console.log(data[1][5]);

               $("#output").html('');

               for(var i = data[1].length - 1; i >= 0; i--){
                   $("#output").prepend("<div class='panel-heading'><a href=" + data[3][i] + " target='_blank'>" + data[1][i] + "</a></div><div class='panel-body'<p>" + data[2][i] + "</p></div>");
               }
           },
           error: function(error){
               alert("Error");
           }

       });


   });

    $("#searchBox").keypress(function(key){
        if(key.which == 13){
            searchButton.click();
        }
    });

});
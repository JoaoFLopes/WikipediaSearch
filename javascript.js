$(document).ready(function(){

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
                   $("#output").prepend("<li><a href=" + data[3][i] + " target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
               }
           },
           error: function(error){
               alert("Error");
           }

       })
   })

});
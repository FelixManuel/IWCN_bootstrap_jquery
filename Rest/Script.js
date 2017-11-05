$(document).ready(function(){
    $('#button').click(function(){
        $('#information').empty();
        var keyword = $('.keyword:checked').val();        
        var value = $('#text').val();
        $('#information').html("<IMG src='spinner.gif'/>");
        $.ajax({
            url:"https://www.googleapis.com/books/v1/volumes?q="+keyword+":"+value
        }).done(function(data){
            $('#information').empty();
            for(var i=0; i<data.items.length; i++){                
                var bookPath = data.items[i].volumeInfo;
                $('#information').append("<DIV><H3>"+bookPath.title+"</H3>"+
                                         "<P>"+bookPath.description+"</P></DIV>");
            }
        });
    })
})

$(function() {
    $('#nama').load("test.txt");
});


$(function() {
    let url = "https://jsonplaceholder.typicode.com/photos";

    $("#getPost").on("click", function() {

        $.ajax({
            url: url,
            type:'GET',

            success: function(data){
                let data_html = '';

                $.each(data, function (i, item){

                    data_html +=
                        '<br>' + 
                        '<img src="' + item.thumbnailUrl + '"alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'
    
                });

                $("#data_hasil_dari_internet").html(data_html);

            },

            error: function (error){
                console.log(error);

            }           
        });
    });
});
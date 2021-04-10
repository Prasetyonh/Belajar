document.getElementById('nama').innerHTML = 'Prasetyo Nur Hidayat';

$('#nim').html('20190140089');


 $(function() {
   console.log( "Hello Guys" );
});

// Kode Jquery Untuk Menyembunyikan Elemen
$("#hide").on("click", function() {
   $("#nama").hide();
});

// Kode Jquery Untuk Menampilkan Kembali Elemen
$("#show").on("click", function() {
   $("#nama").show();
});

$("#toggle").on("click", function() {
   $("#nama").toggle();
})

// Kode Jquery Untuk Fade In Elemen HTML
$("#fadeIn").on("click", function(){
   $("#tanggal").fadeIn();
 });

// Kode Jquery Untuk Fade In Elemen HTML
$("#fadeOut").on("click", function(){
   $("#tanggal").fadeOut();
 });


$("#fadeToggle").on("click", function(){
   $("#tanggal").fadeToggle();
 });

// Kode Jquery Untuk Slide Up Elemen HTML
$("#slideUp").on("click", function(){
   $("#img").slideUp();
 });

// Kode Jquery Untuk Slide Up Elemen HTML
$("#slideDown").on("click", function(){
   $("#img").slideDown();
 });

$("#slideToggle").on("click", function(){
   $("#img").slideToggle();
 });
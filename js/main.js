// DarkMode
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    // mengubah warna tema
    document.body.classList.toggle('dark');
});

// Page Scroll jQuery
$('.page-scroll').on('click', function(){

    // menemukan href
    var href = $(this).attr('href');
    
    // ambil elemen id
    var elemenTujuan = $(tujuan);
    console.log(elemenTujuan);


});
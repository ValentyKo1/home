let $gallery = $('gallery').isotope({
  itemSelector: '.photo',
  layoutMode: 'masonry'
});


//$('.nav__item').click(function(){
$('.nav').on('click', '.nav__item', function(){
    const $this = $(this);
    const filter =  "." + $this.data('filter');
    $gallery.isotope({ filter: filter});
})



(function(){
 	document.getElementById('footer-year').innerHTML = (new Date()).getFullYear();
}())
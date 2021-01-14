$('li.dropdown').click(function() {
  $(this).find('ul.hidden-menu').toggleClass('active');
});

$('ul.hidden-menu').mouseleave(function() {
  $(this).removeClass('active');
});

$(document).ready(function() {
    $('.carousel').carousel();
    $('ul.tabs').tabs();
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
        belowOrigin: true,
        hover: true
    });
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('select').material_select();
    $('.datepicker').pickadate({
        container: 'body',
        closeOnSelect: false,
        closeOnClear: false
    });
  });

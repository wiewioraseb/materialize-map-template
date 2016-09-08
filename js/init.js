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
    
    // Github Latest Commit
    if ($('.github-commit').length) { // Checks if widget div exists (Index only)
        $.ajax({
            url: "https://api.github.com/repos/tomscholz/materialize-map/commits/master",
            dataType: "json",
            success: function(data) {
                var sha = data.sha,
                    date = jQuery.timeago(data.commit.author.date);
                    sha = sha.substring(0, 7);
                $('.github-commit').find('.date').html(date);
                $('.github-commit').find('.sha').html(sha).attr('href', data.html_url);
            }
        });
    }
});

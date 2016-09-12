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

// Add shadow class to nav-wrapper when scrolling down
$(window).scroll(function() {
    if ($(this).scrollTop() >= 10) {
        $(".nav-wrapper").addClass("shadow");
    } else {
        $(".nav-wrapper").removeClass("shadow");
    }
});

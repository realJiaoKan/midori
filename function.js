var position = 1;
var scrollEnabled = true;

/*
Stick the scroll to top at 0, using translate and transition
to realize the effect "scroll by section"
Variable 'maxSection' is defined in the html file so that each
page can have a specific number of sections
 */
window.addEventListener('wheel', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
    if (!scrollEnabled) return;
    scrollEnabled = false;
    if (event.deltaY > 0)
        position = position < maxSection ? position + 1 : maxSection;
    else
        position = position > 1 ? position - 1 : 1;
    for (var i = 1; i <= maxSection; i++) {
        document.getElementById(i.toString()).style.transform =
            "translateY(-"
            + (position - 1) * (window.innerHeight - 70)
            + "px)";
    }
    setTimeout(function () {
        scrollEnabled = true;
    }, 1000); //timeout time == transition time
}, {passive: false});

var wheelEvent = new Event('wheel');
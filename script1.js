window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust the 100 value based on when you want the change to happen
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("nav ul li a");

    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.clientHeight;

    sections.forEach(section => {
        var offset = section.offsetTop - 150; // Adjust this value as needed
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Check if the user has scrolled to the bottom of the page
    if (windowHeight + scrollPosition >= fullHeight) {
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the last nav link
        navLinks[navLinks.length - 1].classList.add('active');
    }
});

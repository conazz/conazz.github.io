const dropDown = document.getElementById('dropdown');
const sidebar = document.getElementById('sidebar');
const dropDownList = document.getElementById('dropdown-list');
const closeBtn = document.getElementById('close-btn');
const links = document.querySelectorAll('a');

let lastScrollTop = 0;
    nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (window.innerWidth < 600) {
        nav.classList.toggle("sticky", window.scrollY > 0);
        if (scrollTop > lastScrollTop) {
            nav.style.transform = "translateY(-200px)";
        } else {
            nav.style.transform = "translateY(0)";
        }
    } else {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
    lastScrollTop = scrollTop;
})

dropDown.onclick = function (event) {

    event.stopPropagation();

    sidebar.classList.toggle('hide');
    dropDownList.classList.toggle('hide');
    sidebar.classList.toggle('darken');
    dropDownList.classList.toggle('sidebar-scroll-in');
    setTimeout(function () {
        sidebar.style.transition = 'transform 0.5s 0.3s, opacity 0.2s';
      }, 500);
};

closeBtn.onclick = function() {
    sidebar.classList.toggle('darken');
    dropDownList.classList.toggle('sidebar-scroll-in');
    sidebar.classList.toggle('hide');
    dropDownList.classList.toggle('hide');
    setTimeout(function () {
        sidebar.style.transition = 'transform 0.1s, opacity 0.7s 0.1s';
      }, 100);
};

// Add a click event listener to the whole document
document.addEventListener('click', function(event) {
    // Check if the clicked element or its parent is the #dropdown-list
    if (
        event.target.closest('#dropdown-list') ||
        event.target === dropDownList
    ) {
        return;
    }

    // If not, hide the sidebar
    sidebar.classList.remove('darken');
    dropDownList.classList.remove('sidebar-scroll-in');
    sidebar.classList.add('hide');
    dropDownList.classList.add('hide');
    setTimeout(function () {
        sidebar.style.transition = 'transform 0.1s, opacity 0.7s 0.1s';
      }, 100);
});

links.forEach(link => {
    link.addEventListener('click', (event) => {
      // Prevent the default behavior of the anchor element
      event.preventDefault();
  
      // Your existing code to close the sidebar
      sidebar.classList.toggle('darken');
      dropDownList.classList.toggle('sidebar-scroll-in');
      sidebar.classList.add('hide');
      dropDownList.classList.add('hide');
  
      // Get the href attribute and navigate to the specified URL
      const href = link.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  });
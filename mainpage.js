// hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// get the username from previous page
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)")
    var r =  window.location.search.substring(1).match(reg)
    
    if ( r != null) {
        return unescape(r[2]);
    }

    return null;
}

// pass the user name to the linked pages
function click_my_account(evt, page_name) {
    username = getParams('username')

    if (page_name == 'my_account') {

        window.location.href = "account.html?username=" + username
    }
    else if(page_name == 'otherproducts'){
        window.location.href = "otherproducts.html?username=" + username
    }
    else if(page_name == "menu"){
        window.location.href = "menu.html?username=" + username
    }
    else if(page_name == "brand_story"){
        window.location.href = "brandstory.html?username=" + username
    } 
    else if(page_name == "acai_origin"){
        window.location.href = "acaiorign.html?username=" + username
    } 
    else if(page_name == "shopping"){
        window.location.href = "shopping.html?username=" + username
    }
}


// Intersection Observer to detect when the element enters the viewport
// Select all elements with the class .overlay-text
// animation1
const textElements = document.querySelectorAll('.overlay-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is in view
// Observe each of the .overlay-text elements
textElements.forEach(textElement => {
    observer.observe(textElement);
});

// animation2
const textElements2 = document.querySelectorAll('.brandstory-section2 .part1');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is in view
// Observe each of the .overlay-text elements
textElements2.forEach(textElement => {
    observer2.observe(textElement);
});

// animation3
const textElements3 = document.querySelectorAll('.ouracai-section .text-content');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is in view
// Observe each of the .text-content elements
textElements3.forEach(textElement => {
    observer3.observe(textElement);
});


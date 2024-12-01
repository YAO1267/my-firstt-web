// general nav bar for click --dropdown menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)")
    var r =  window.location.search.substring(1).match(reg)
    
    if ( r != null) {
        return unescape(r[2]);
    }

    return null;
}

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
    else if(page_name == "Why_Acai"){
        window.location.href = "index.html?username=" + username
    }
}
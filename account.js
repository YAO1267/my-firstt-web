
// JavaScript for handling the form submission and displaying comments
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Get the comment and username values
    const commentText = document.getElementById('comment').value;
    const username = document.getElementById('username').value;

    // Create a new comment element
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${username}:</strong> <p>${commentText}</p>`;

    // Append the new comment to the comments list
    document.getElementById('comments-list').appendChild(commentDiv);

    // Clear the form fields
    document.getElementById('comment').value = '';
    document.getElementById('username').value = '';
});

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

var users = [{
    'name': 'Adam',
    'gender': 'M',
    'birthday': '2000-12-24',
    'nationality': 'Chinese',
    'add':'670666',
    'city':'Suzhou',
    'country':'China',
    'phone':'8888 8888',
    'email':'yao@gmail.com'
}, 
{'name': 'Bob',
    'gender': 'F',
    'birthday': '2010-12-24',
    'nationality': 'India',
    'add':'555555',
    'city':'Delhi',
    'country':'China',
    'phone':'8888 6666',
    'email':'zzz@gmail.com'}
]

name_element = document.getElementById('name')
gender_element = document.getElementById('gender')
birthday_element = document.getElementById('dob')
nationality_element = document.getElementById('nationality')
add_element = document.getElementById('add')
city_element = document.getElementById('city')
country_element = document.getElementById('country')
phone_element = document.getElementById('phone'),
email_element = document.getElementById('email')

var username = getParams('username')

for (var index in users) {
    if (username == users[index]['name']) {
        name_element.innerHTML = username
        gender_element.innerHTML = users[index]['gender']
        birthday_element.innerHTML = users[index]['birthday']
        nationality_element.innerHTML = users[index]['nationality']
        add_element.innerHTML = users[index]['add']
        city_element.innerHTML = users[index]['city']
        country_element.innerHTML = users[index]['country']
        phone_element.innerHTML = users[index]['phone']
        email_element.innerHTML = users[index]['email']

    }
}

function click_my_account(evt, page_name) {
    username = getParams('username')

    if (page_name == 'my_account') {

        window.location.href = "account.html?username=" + username
    }
    else if(page_name == 'otherproducts'){
        window.location.href = "otherproducts.html?username=" + username
    }
    // else if(page_name == "menu"){
    //     window.location.href = "otherproducts.html?username=" + username
    // }
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

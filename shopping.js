// general nav bar for click --dropdown menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

var cart = new Map()
// check the the items and related amt later
cart.set(1, 0)
cart.set(2, 0)

// check if the amount is valid:-
function decrease_product(evt, index) {
            product_value = document.getElementById('product_' + index).textContent

            product_value = Number(product_value)

            
            if (product_value > 1) {
                product_value = product_value - 1
                document.getElementById('product_' + index).textContent = product_value
            }
        }

// // check if the amount is valid :+
function increase_product(evt, index) {
            product_value = document.getElementById('product_' + index).textContent
            product_value = Number(product_value) + 1
            document.getElementById('product_' + index).textContent = product_value
        }

function add_to_cart(evt, index) {

            product_value = document.getElementById('product_' + index).textContent

            product_value = Number(product_value)

            count = cart.get(index) + product_value
             
            cart.set(index, count)

            console.log(count)
            window.alert('added successfully')

        }

function view_cart(evt) {
            products_element = document.getElementById('products')
            products_element.style.display = "none";

            cart_element = document.getElementById('cart')
            cart_element.style.display = "block";

            cart_product_1_element = document.getElementById('cart_product_1')
            cart_product_quantity_1_element = document.getElementById('cart_product_quantity_1')
            cart_product_total_1_element = document.getElementById('cart_product_total_1')

            cart_product_2_element = document.getElementById('cart_product_2')
            cart_product_quantity_2_element = document.getElementById('cart_product_quantity_2')
            cart_product_total_2_element = document.getElementById('cart_product_total_2')

            var display_nothing = true

            for (var [key, value] of cart) {
                if (key == 1) {
                    if (value == 0) {
                        cart_product_1_element.style.display = "none"
                    } else{
                        cart_product_1_element.style.display = "table-row"
                        cart_product_quantity_1_element.textContent = value
                        cart_product_total_1_element.textContent = value * 22.5
                        display_nothing = false
                        document.getElementById('nothing').style.display = "none"
                    }
                }
                
                if (key == 2) {
                    if (value == 0) {
                        cart_product_2_element.style.display = "none"
                    } else{
                        cart_product_2_element.style.display = "table-row"
                        cart_product_quantity_2_element.textContent = value
                        cart_product_total_2_element.textContent = value * 12.5
                        display_nothing = false
                        document.getElementById('nothing').style.display = "none"
                    }
                } 

            }

            // cart.forEach((value, key) => {
            //     if (key == 1) {
            //         if (value == 0) {
            //             cart_product_1_element.style.display = "none"
            //         } else{
            //             cart_product_1_element.style.display = "table-row"
            //             cart_product_quantity_1_element.textContent = value
            //             cart_product_total_1_element.textContent = value * 22.5
            //             display_nothing = false
            //         }
            //     }

            //     if (key == 2) {
            //         if (value == 0) {
            //             cart_product_2_element.style.display = "none"
            //         } else{
            //             cart_product_2_element.style.display = "table-row"
            //             cart_product_quantity_2_element.textContent = value
            //             cart_product_total_2_element.textContent = value * 12.5
            //             display_nothing = false
            //         }
            //     }
            // })

            if (display_nothing == true) {
                document.getElementById('nothing').style.display = "block"
            }
        }

// show either cart or shopping page
function view_products(evt) {
            products_element = document.getElementById('products')
            products_element.style.display = "block";

            cart_element = document.getElementById('cart')
            cart_element.style.display = "none";
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
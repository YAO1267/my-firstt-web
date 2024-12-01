var cart = new Map()
cart.set(1, 0)
cart.set(2, 0)

function decrease_product(evt, index) {
            product_value = document.getElementById('product_' + index).textContent

            product_value = Number(product_value)

            if (product_value > 1) {
                product_value = product_value - 1
                document.getElementById('product_' + index).textContent = product_value
            }
        }

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

function view_products(evt) {
            products_element = document.getElementById('products')
            products_element.style.display = "block";

            cart_element = document.getElementById('cart')
            cart_element.style.display = "none";
        }
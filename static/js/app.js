$.get('./components/header.html', function(response) {
  $("#nav").html(response);
});

var shopping_cart = [];


function showProducts(response) {
  console.log(response);

  // html variables to be inserted later
  let header_html = '';
  let body_html = '';
  let index = 1;

  // loop through data to be added
  for (let i = 0; i < response.products.length; i++) {
    if (index === 1 || index % 3 === 1) {
      body_html += '<div class="row">';
    }

    body_html += '<div class="col-md card">';

    // add placeholder image for each product
    body_html += '<img class="center card-img-top" src="http://placehold.it/50x50" alt="Placeholder Image">'

    // add card-title with name for each product
    body_html += '<div id="card-title">' + response.products[i].name + '</div>'

    // add card-text with price for each product
    body_html += '<div id="card-text">' + '$' + response.products[i].price + '</div>'

    body_html += '<button onClick="addToCart(' + response.products[i].id + ')" class="btn btn-primary center" type="submit">Add To Cart</button>'

    // end each div for card
    body_html += '</div>';

    if (index % 3 === 0) {
      // ending div tag for row
      body_html += '</div>';
    }

    index += 1;


  }

  // // inserting header_html variable into table_head id (on employees.html page)
  // $("#items").html(header_html);

  //inserting body_html into table_body id
  $("#items").html(body_html);

}


let url = './assets/products.json';

$.get(url, showProducts);


// make cart appear on clicking add to cart
// document.addEventListener("click", makeCart);

function addToCart(id) {
  $.get(url1, function(response) {
    for (let i = 0; i < response.products.length; i++) {
      curProduct = response.products[i];
      if (curProduct.id == id) {
        shopping_cart.push(curProduct);
        break;
      }
    }
    console.log(shopping_cart);
  })
}

function displayCart(response) {
  // grab headers for table
  let headers = Object.keys(response.products[0]);

  // console.log(headers);

  // html variables to be inserted later
  let header_html = '<tr><th scope="col">#</th>';
  let body_html = '';

  // write the html for table header
  for (let i = 0; i < headers.length; i++) {
    header_html += '<th scope="col">' + headers[i] + '</th>';
  }

  // close header row
  header_html += '</tr>';

  for (let i = 0; i < shopping_cart.length; i++) {
    body_html += '<tr><th scope="row">' + '</th>';

    body_html += '<td>'+ shopping_cart[i] + '</td>';

    body_html += '</tr>';

    // body_html += '<p>Total: $(total)</p>'
  }

  // inserting header_html variable into table_head id
  $("#table_head").html(header_html);

  //inserting body_html into table_body id
  $("#table_body").html(body_html);

  $.get(url, displayCart)
}


let url1 = './assets/products.json';

// $.get(url1, displayCart);




function addTotal() {
  for (let i = 0; i < shopping_cart.length; i++) {
    let total = curProduct.price;
    total += curProduct.price;
  }
}

function displayTotal() {
  $.get(total);
}

  // // add new row for each product
  // body_html += '<tr><th scope="row">' + (i + 1) + '</th>';
  //
  // body_html += '<td>'+ response.products[i] + '</td>';
  //
  // body_html += '</tr>';

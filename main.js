fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        data.products.forEach((product) => {
            product = {
                name: product.title,
                description: product.description,
                category: product.category,
                price: product.price,
                images: product.images,
            }
        })
    })

// selectors

const productsRow = document.querySelector(".products")

// vars

const products = JSON.parse(localStorage.getItem("products")) || []

// functions

function showProducts() {
    productsRow.innerHTML = ""
    products.forEach((product, i) => {
        productsRow.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="product shadow rounded-3 overflow-hidden">
                        <img src="${product.images}" alt="${product.category}">
                        <div class="content p-3 d-flex flex-column align-items-start gap-2">
                            <h2 class="mb-0 text-uppercase">${product.name}</h2>
                            <p class="mb-0 text-muted">${product.description}</p>
                            <span class="fw-bold">$${product.price}</span>
                            <button onclick="addToCart(${i})" class="btn btn-info text-uppercase fw-semibold align-self-center">buy now</button>
                        </div>
                    </div>
                </div>
                `
    })
}
showProducts()

function showBeauty() {
    productsRow.innerHTML = ""
    const beauties = products.filter((product) => product.category == "beauty")
    beauties.forEach((beauty, i) => {
        productsRow.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="product shadow rounded-3 overflow-hidden">
                        <img src="${beauty.images}" alt="${beauty.category}">
                        <div class="content p-3 d-flex flex-column align-items-start gap-2">
                            <h2 class="mb-0 text-uppercase">${beauty.name}</h2>
                            <p class="mb-0 text-muted">${beauty.description}</p>
                            <span class="fw-bold">$${beauty.price}</span>
                            <button onclick="addToCart(${i})" class="btn btn-info text-uppercase fw-semibold align-self-center">buy now</button>
                        </div>
                    </div>
                </div>
                `
    })
}

function showFragrances() {
    productsRow.innerHTML = ""
    const fragrances = products.filter((product) => product.category == "fragrances")
    fragrances.forEach((fragrance, i) => {
        productsRow.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="product shadow rounded-3 overflow-hidden">
                        <img src="${fragrance.images}" alt="${fragrance.category}">
                        <div class="content p-3 d-flex flex-column align-items-start gap-2">
                            <h2 class="mb-0 text-uppercase">${fragrance.name}</h2>
                            <p class="mb-0 text-muted">${fragrance.description}</p>
                            <span class="fw-bold">$${fragrance.price}</span>
                            <button onclick="addToCart(${i})" class="btn btn-info text-uppercase fw-semibold align-self-center">buy now</button>
                        </div>
                    </div>
                </div>
                `
    })
}

function showFurniture() {
    productsRow.innerHTML = ""
    const furnitures = products.filter((product) => product.category == "furniture")
    furnitures.forEach((furniture, i) => {
        productsRow.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="product shadow rounded-3 overflow-hidden">
                        <img src="${furniture.images}" alt="${furniture.category}">
                        <div class="content p-3 d-flex flex-column align-items-start gap-2">
                            <h2 class="mb-0 text-uppercase">${furniture.name}</h2>
                            <p class="mb-0 text-muted">${furniture.description}</p>
                            <span class="fw-bold">$${furniture.price}</span>
                            <button onclick="addToCart(${i})" class="btn btn-info text-uppercase fw-semibold align-self-center">buy now</button>
                        </div>
                    </div>
                </div>
                `
    })
}

function showGroceries() {
    productsRow.innerHTML = ""
    const groceries = products.filter((product) => product.category == "groceries")
    groceries.forEach((grocery, i) => {
        productsRow.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="product shadow rounded-3 overflow-hidden">
                        <img src="${grocery.images}" alt="${grocery.category}">
                        <div class="content p-3 d-flex flex-column align-items-start gap-2">
                            <h2 class="mb-0 text-uppercase">${grocery.name}</h2>
                            <p class="mb-0 text-muted">${grocery.description}</p>
                            <span class="fw-bold">$${grocery.price}</span>
                            <button onclick="addToCart(${i})" class="btn btn-info text-uppercase fw-semibold align-self-center">buy now</button>
                        </div>
                    </div>
                </div>
                `
    })
}
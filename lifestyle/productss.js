var arr = [
    {
        "name": "DENIMIZE Men Solid Regular Fit Casual Shirt",
        "price": "1555",
        "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880449-Blue-Navy-1000009880449_01-2100.jpg",
        "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880449-Blue-Navy-1000009880449_02-2100.jpg",
        "image2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880449-Blue-Navy-1000009880449_03-2100.jpg",
        "image3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880449-Blue-Navy-1000009880449_04-2100.jpg",
        "color": "black",
        "brand": "denimize"
    },
    {
        "name": "FORCA Men Checked Regular Fit Casual Shirt",
        "price": "1999",
        "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010077712-Red-Red-1000010077712_01-2100.jpg",
        "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010077712-Red-Red-1000010077712_02-2100.jpg",
        "image2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010077712-Red-Red-1000010077712_03-2100.jpg",
        "image3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010077712-Red-Red-1000010077712_04-2100.jpg",
        "color": "red",
        "brand": "forca"
    },
    {
        "name": "FAME FOREVER Men Solid Slim Fit Casual Shirt",
        "price": "1999",
        "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880582-Var8-Red-Rust-1000009880582-Var8_01-2100.jpg",
        "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880582-Var8-Red-Rust-1000009880582-Var8_02-2100.jpg",
        "image2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880582-Var8-Red-Rust-1000009880582-Var8_03-2100.jpg",
        "image3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009880582-Var8-Red-Rust-1000009880582-Var8_04-2100.jpg",
        "color": "orange",
        "brand": "fame"
    },
    {
        "name": "CODE Men Printed Full Sleeves Casual Shi",
        "price": "3999",
        "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009928655-Black-Black-1000009928655_01-2100.jpg",
        "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009928655-Black-Black-1000009928655_02-2100.jpg",
        "image2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009928655-Black-Black-1000009928655_03-2100.jpg",
        "image3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009928655-Black-Black-1000009928655_04-2100.jpg",
        "color": "black",
        "brand": "code"
    }
]
localStorage.setItem("productListt", JSON.stringify(arr));

var products = JSON.parse(localStorage.getItem("productListt"));
var cart = JSON.parse(localStorage.getItem("productDis")) || []


displayPage(products);

function filterColor() {


    var ans = document.querySelector("#color").value

    var res = products.filter(function (elem) {
        return elem.color == ans
    })
    displayPage(res)
}

function filterBrand() {


    var ans = document.querySelector("#brand").value

    var res = products.filter(function (elem) {
        return elem.brand == ans
    })
    displayPage(res)
}


function priceSort() {
    var selected = document.querySelector("#sort").value

    if (selected == "low") {
        products.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
        });
    } else if (selected == "high") {
        products.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
        });
    }
    displayPage(products)
}

function displayPage(products) {
    document.querySelector("#container").textContent = ""

    products.map(function (elem) {
        var bigDiv = document.createElement("div");
        bigDiv.setAttribute("class", "bigdiv");


        var itemsDiv = document.createElement("div");
        itemsDiv.setAttribute("class", "itemsdiv");
        itemsDiv.addEventListener("click", function () {
            productPage(elem)
        })

        var sizeDiv = document.createElement("div");
        sizeDiv.setAttribute("class", "sizediv");

        var cartButton = document.createElement("button");
        cartButton.setAttribute("class", "cartbutton");
        cartButton.textContent = "Add to Basket"

        var selectSize = document.createElement("select")
        var option0 = document.createElement("option");
        option0.textContent = "Select Size"
        var option1 = document.createElement("option");
        option1.textContent = "37"
        var option2 = document.createElement("option");
        option2.textContent = "38"
        var option3 = document.createElement("option");
        option3.textContent = "39"
        var option4 = document.createElement("option");
        option4.textContent = "40"

        selectSize.append(option0, option1, option2, option3, option4);
        sizeDiv.append(selectSize, cartButton);





        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        var price = document.createElement("h3");
        price.textContent = "₹" + elem.price
        var name = document.createElement("p");
        name.textContent = elem.name;

        itemsDiv.append(image, price, name);
        bigDiv.append(itemsDiv, sizeDiv);

        document.querySelector("#container").append(bigDiv)




    })

}

function productPage(elem) {
    cart.push(elem);
    localStorage.setItem("productDis", JSON.stringify(cart))
    window.location.href = "productpage.html"


}
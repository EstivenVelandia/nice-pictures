const photos = {

    places: [
        "images/places/place1.jpg",
        "images/places/place2.jpg",
        "images/places/place3.jpg",
        "images/places/place4.jpg"
    ],

    animals: [
        "images/animals/animal1.jpg",
        "images/animals/animal2.jpg",
        "images/animals/animal3.jpg",
        "images/animals/animal4.jpg",
        "images/animals/animal5.jpg"
    ],

    brands: [
        "images/brands/brand1.png",
        "images/brands/brand2.png",
        "images/brands/brand3.gif",
        "images/brands/brand4.png",
        "images/brands/brand5.png",
        "images/brands/brand6.png",
        "images/brands/brand7.png",
        "images/brands/brand8.png"
    ],

    products: [
        "images/products/product1.jpg",
        "images/products/product2.jpg",
        "images/products/product3.jpg",
        "images/products/product4.jpg",
        "images/products/product5.jpg"
    ]

};

function loadCategory(category) {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    photos[category].forEach(photo => {

        const img = document.createElement("img");

        img.src = photo;

        gallery.appendChild(img);

    });

}
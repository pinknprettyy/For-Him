const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
];

let current = 0;

function showPhotos(){

    document.getElementById("leftPhoto").src =
        photos[current];

    document.getElementById("rightPhoto").src =
        photos[(current+1)%photos.length];

}

function nextPhoto(){

    current += 2;

    if(current >= photos.length){
        current = 0;
    }

    showPhotos();

}

function previousPhoto(){

    current -= 2;

    if(current < 0){
        current = photos.length-2;
    }

    showPhotos();

}

showPhotos();
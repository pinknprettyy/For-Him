const photos = [
"images/photo1.png",
"images/photo2.png",
"images/photo3.png",
"images/photo4.png",
"images/photo5.png",
"images/photo6.png"
];

let current = 0;

function showPhotos(){

    document.getElementById("leftPhoto").src =
        photos[current];

    document.getElementById("rightPhoto").src =
        photos[(current+1)%photos.length];

}

function nextPage(){

    current += 2;

    if(current >= photos.length){
        current = 0;
    }

    showPhotos();
}

function previousPage(){

    current -= 2;

    if(current < 0){
        current = photos.length-2;
    }

    showPhotos();
}

showPhotos();
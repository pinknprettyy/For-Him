const photos = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg"
];

const captions = [
"Our first photo ♡",
"Our favourite day ♡",
"I love this one ✦",
"Forever us ♡",
"My favourite memory"
];

let current = 0;

function showPhoto(){

document.getElementById("leftPhoto").src=photos[current];

document.getElementById("rightPhoto").src=photos[(current+1)%photos.length];

document.getElementById("photoCaption").textContent=captions[current];

}

function nextPhoto(){

current=(current+1)%photos.length;

showPhoto();

}

function previousPhoto(){

current=(current-1+photos.length)%photos.length;

showPhoto();

}

showPhoto();
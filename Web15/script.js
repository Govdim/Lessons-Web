let imageId = 0;

function change_src(){
    let images = ["image1.jpg", "image2.jpg", "image3.jpg"];

    let pic = document.getElementById('pic');
    imageId = images.length === imageId + 1 ? 0 : ++imageId;
    pic.src = images[imageId];
}

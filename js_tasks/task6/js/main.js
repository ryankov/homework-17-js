var image = document.createElement("img");

image.src = "img/"+Math.floor(Math.random() * 10)+".jpg";            // image.src = "IMAGE URL/PATH"

document.body.appendChild(image);
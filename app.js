function changeState()
{
var image = document.getElementById('myImage');

if (image.id.match("Pink"))
    image.src = 'Pink.jpg';
else if (image.id.match("Orange"))
    image.src = 'Orange.jpg';
else if (image.id.match("Blue"))
    image.src = 'Blue.jpg';
else if (image.id.match("Dark Blue"))
    image.src = 'Dark Blue.jpg';
else if (image.id.match("Green"))
    image.src = 'Green.jpg';
else if (image.id.match("Off"))
    image.src = 'Off.jpg';
}
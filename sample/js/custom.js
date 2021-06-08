/* change image */
const getSrc = (_src) => document.getElementById('prodImg').src = _src;

/* change Color */
var initialColor = 'brown';

const changeColor = (color) => {
  imgSrc = document.querySelectorAll("img");
  const updateImgSrc = (item) => {
    var newPath = item.src.replace(initialColor, color);
    item.src = newPath;
  }
  imgSrc.forEach(updateImgSrc);
  initialColor = color;

}
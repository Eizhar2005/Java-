// var lm1 = document.querySelector('#lm1')
// var lm1Img = lm1.querySelector('#lm1 img')

// lm1.addEventListener('mousemove', function(dets) {
// lm1Img.style.left = dets.x +"px"
// lm1Img.style.top = dets.y +"px"

// })
// lm1.addEventListener('mouseenter', function(dets) {
// lm1Img.style.opacity = 1
// })
// lm1.addEventListener('mouseleave', function(dets) {
// lm1Img.style.opacity = 0
// })

var elm = document.querySelectorAll('.elm');
// var elmImg = elm.querySelector('.elm img')

elm.forEach (function(val) {
    
    val.addEventListener('mouseenter', function() {
// val.style.backgroundColor = "yellow"
val.childNodes[3].style.opacity = 1
});
    val.addEventListener('mouseleave', function() {
// val.style.backgroundColor = "transparent"
val.childNodes[3].style.opacity = 0

});
    val.addEventListener('mousemove', function(dets) {
val.childNodes[3].style.left = dets.x + 'px' 
// val.childNodes[3].style.top = dets.y + 'px' 

});
});
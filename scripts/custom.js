document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
         let anchorSelector = 'a[href^="/#"]';
         let anchorList = document.querySelectorAll(anchorSelector);
         anchorList.forEach(link => {
             link.onclick = function (e) {
                 e.preventDefault();
                 scrollToAnchor(this.hash)
             }
         });
    },4000)
 });
 
 function scrollToAnchor(eleId) {
     const target = document.querySelector(eleId);
     const targetPosition = target.offsetTop - 200;
     window.scrollTo({
         top: targetPosition,
         behavior: 'smooth'
     });
 }
 

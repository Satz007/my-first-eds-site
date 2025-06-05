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
     const target = document.getElementById(eleId.split('#')[1]).closest('section');
     const targetPosition = target.getBoundingClientRect().top - 100;
     window.scrollTo({
         top: targetPosition,
         behavior: 'smooth'
     });
 }
 

document.addEventListener('DOMContentLoaded', function() {
   setTimeout(function(){
        let anchorSelector = 'a[href^="/#"]';
        let anchorList = document.querySelectorAll(anchorSelector);
        anchorList.forEach(link => {
            link.onclick = function (e) {
                e.preventDefault();
                console.log(this.hash)
                scrollToAnchor(this.hash)
                // let destination = document.querySelector(this.hash);
                // destination.scrollIntoView({
                //     behavior: 'smooth'
                // });
            }
        });
   },2500)
});

function scrollToAnchor(eleId) {
    const target = document.getElementById(eleId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

const debounce = function(func, wait, immediate){
    let timeout;
    return function (...orgs){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, orgs);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};



const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animation'


function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/ 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add('animation')
        }else{
            element.classList.remove('animation')
        }
    })
}
animeScroll()

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll()
    }, 10));
}


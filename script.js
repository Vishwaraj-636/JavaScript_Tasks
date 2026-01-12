let img = document.querySelector('img')
let like =document.querySelector('#like')

img.addEventListener('dblclick',function (){
    like.style.opacity ="1"
    like.style.transform="translate(-50%,-50%) scale(5) "
    setTimeout(function (){
        like.style.transform="translate(-50%,-1100%) scale(5) rotate(60deg)"
    },400)
    setTimeout(function (){
        like.style.opacity ="0"
    },600)
    setTimeout(function (){
        like.style.transform="translate(-50%,-50%) scale(0) "
    },800)
}
)
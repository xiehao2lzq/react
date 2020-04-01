//https://www.jianshu.com/p/04efb4a1d2f8
document.documentElement.style.fontSize = 
    document.documentElement.clientWidth /7.5 + "px"

window.onresize = function(){
    document.documentElement.style.fontSize = 
    document.documentElement.clientWidth /7.5 + "px"
}
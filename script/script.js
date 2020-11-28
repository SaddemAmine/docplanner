window.addEventListener('scroll', () => {
    if(window.scrollY < 100)
        document.querySelector('#navbar').style.boxShadow = ""
    else
        document.querySelector('#navbar').style.boxShadow = "0 -2px 10px 0 rgba(0,0,0,.15)"
})
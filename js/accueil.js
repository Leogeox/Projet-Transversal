let blindbtn = document.getElementById('blindbtn');  
let body = document.getElementById('body');

blindbtn.addEventListener('click', function(){
    body.classList.toggle('blind')
})


let contents = document.querySelectorAll('.content')
let tabs = document.querySelectorAll('.activity')

tabs.forEach((tab) => {
    tab.addEventListener('click', function(){
        tabs.forEach((tab) => {
            tab.classList.remove('tabActive')}) 
        this.classList.add('tabActive')
        contents.forEach((content) => {
            content.classList.remove('active')
            content.classList.add('content')
        })  
        if(this.classList.contains('tab_1')) {
            contents[0].classList.add('active')
            contents[0].classList.remove('content') 
        }else if (this.classList.contains('tab_2')) {
            contents[1].classList.add('active');
            contents[1].classList.remove('content')
        }
    })
})
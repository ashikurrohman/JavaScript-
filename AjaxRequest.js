
const clicks = document.querySelector('.clicks')
clicks.addEventListener('click',function(){
    const request = new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            console.log(JSON.parse(request.responseText))
        }
    }
})

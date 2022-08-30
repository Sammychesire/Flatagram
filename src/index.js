// write your code here
document.addEventListener("DOMContentLoaded",() => {
    const title = document.querySelector("#card-title");
    const image =document.querySelector("#card-image");
    const likes = document.querySelector("#like-count");
    const likeBtn = document.querySelector("#like-button");
    const comments = document.querySelector("#comments-list");
    const form = document.querySelector("#comment-form");
    let likeCount = 0;


    fetch("http://localhost:3000/images/1")
    .then((res) => res.json())
    .then((data) =>{
        updateData(data)
    });

    
form.addEventListener('submit', addComment);
likeBtn.addEventListener('click', handleLikes);

function handleLikes(event){
    likeCount++;
    likes.textContent = `${likeCount} likes` ;
}

function addComment(event){
    event.preventDefault();
    const input = form.querySelector('#comment');
   // console.log(input)

   if(input.value){
    let comment = document.createElement('li');
    comment.textContent = input.value;
    comments.appendChild(comment);
   }
   form.reset();
}

function updateData(data){
    title.textContent = data.title;
    image.src = data.image;
    comments.innerHTML = "";
    data.comments.map((comment) => {
        let li=document.createElement("li");
        li.textContent = comment.content;
        comments.appendChild(li)
    })
}

})
// const button = document.getElementById("submit");
// const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");
const button = document.getElementById("submit");


const createComment = (event) =>{
    const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const inputElem = document.querySelectorAll(".comment-area__form-input");
    
    if (name, comment){
    event.preventDefault();

    const commentMainDiv = document.createElement("div");
    commentMainDiv.classList.add("comment-area__default-comment");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("comment-area__profile-image-container");
    commentMainDiv.append(imageDiv);

    const commentWrapperDiv = document.createElement("div");
    commentWrapperDiv.classList.add("comment-area__default-comment-wrapper");
    commentMainDiv.append(commentWrapperDiv);

    const commentHeaderDiv = document.createElement("div");
    commentHeaderDiv.classList.add("comment-area__default-comment-header");
    commentWrapperDiv.append(commentHeaderDiv);

    const commentElem = document.createElement("p");
    commentElem.innerHTML = comment;
    commentElem.classList.add("comment-area__default-comment-message");
    commentWrapperDiv.append(commentElem);

    const commentName = document.createElement("p");
    commentName.innerHTML = name;
    commentName.classList.add("comment-area__default-comment-name", "bold");
    commentHeaderDiv.append(commentName);


    const commentDate = document.createElement("p");
    commentDate.innerHTML = "Now";
    commentDate.classList.add("comment-area__default-comment-date");
    commentHeaderDiv.append(commentDate);

    commentMainDivOuter.prepend(commentMainDiv);
} else {
    alert("Error: your input shouldn't be empty!");
    inputElem.style.borderColor = "blue";
}
};

button.addEventListener("click", createComment);
const button = document.getElementById("submit");

const createComment = (event) =>{
    const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");
    const nameValue = document.getElementById("name").value;
    const commentValue = document.getElementById("comment").value;

    
    if (nameValue && commentValue){
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
    commentElem.innerHTML = commentValue;
    commentElem.classList.add("comment-area__default-comment-message");
    commentWrapperDiv.append(commentElem);

    const commentName = document.createElement("p");
    commentName.innerHTML = nameValue;
    commentName.classList.add("comment-area__default-comment-name", "bold");
    commentHeaderDiv.append(commentName);


    const commentDate = document.createElement("p");
    commentDate.innerHTML = "Now";
    commentDate.classList.add("comment-area__default-comment-date");
    commentHeaderDiv.append(commentDate);

    commentMainDivOuter.prepend(commentMainDiv);
    
    // clear the form
    document.getElementById("name").value = '';
    document.getElementById("comment").value = '';

    // reset border color 
    document.querySelectorAll(".comment-area__form-input").forEach(function(inputElem) {
        inputElem.classList.remove("comment-area__form-input--error");
    });

} else {
    alert("Error: your input shouldn't be empty!");
    document.querySelectorAll(".comment-area__form-input").forEach(function(inputElem) {
        inputElem.classList.add("comment-area__form-input--error");
    });
}
};


button.addEventListener("click", createComment);
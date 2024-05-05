import {BandSiteApi} from "./band-site-api.js";

const button = document.getElementById("submit");

const createComment = (event) => {
    const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");
    const nameValue = document.getElementById("name").value;
    const commentValue = document.getElementById("comment").value;
    
    if (nameValue && commentValue){
    event.preventDefault();

    const commentMainDiv = document.createElement("div");
    commentMainDiv.classList.add("comment-area__default-comment");
    
    // image
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("comment-area__profile-image-container");
    commentMainDiv.append(imageDiv);

    // profile image
    const profileImage = document.createElement("img");
    profileImage.classList.add("comment-area__profile-image");
    profileImage.src = "./assets/images/Mohan-muruge.jpg";
    imageDiv.append(profileImage);

    const commentWrapperDiv = document.createElement("div");
    commentWrapperDiv.classList.add("comment-area__default-comment-wrapper");
    commentMainDiv.append(commentWrapperDiv);

    const commentHeaderDiv = document.createElement("div");
    commentHeaderDiv.classList.add("comment-area__default-comment-header");
    commentWrapperDiv.append(commentHeaderDiv);

    // comment
    const commentElem = document.createElement("p");
    commentElem.textContent = commentValue;
    commentElem.classList.add("comment-area__default-comment-message");
    commentWrapperDiv.append(commentElem);

    // name
    const commentName = document.createElement("p");
    commentName.textContent = nameValue;
    commentName.classList.add("comment-area__default-comment-name", "bold");
    commentHeaderDiv.append(commentName);

    // time now
    const commentDate = document.createElement("p");
    commentDate.textContent = "Now";
    commentDate.classList.add("comment-area__default-comment-date");
    commentHeaderDiv.append(commentDate);

    commentMainDivOuter.prepend(commentMainDiv);


    // push the comment into the defaultComment array
    const newComment = {
        name: nameValue,
        date: "Now", 
        comment: commentValue
    };

    defaultComment.push(newComment);
    
    // clear the form
    document.getElementById("name").value = '';
    document.getElementById("comment").value = '';

    // reset border color 
    document.querySelectorAll(".comment-area__form-input").forEach(function(inputElem) {
        inputElem.classList.remove("comment-area__form-input--error");
    });

} else {
    alert("Error: your input shouldn't be empty!");
    event.preventDefault();

    // show error foreach
    document.querySelectorAll(".comment-area__form-input").forEach(function(inputElem) {
        inputElem.classList.add("comment-area__form-input--error");
    });
}
};


button.addEventListener("click", createComment);
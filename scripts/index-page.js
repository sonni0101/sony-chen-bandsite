import { BandSiteApi } from "./band-site-api.js";
import { displayComments } from "./index-page-display-comment.js";

const bandApi = new BandSiteApi;
const button = document.getElementById("submit");

class NewComment{
    constructor(userName, comment){
        this.name = userName;
        this.comment = comment;
    }
};

const createComment = async (event) => {
    event.preventDefault();

    try{
    const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");
    const nameValue = document.getElementById("name").value;
    const commentValue = document.getElementById("comment").value;
    
    if (nameValue && commentValue){

        // post comment
        const postBody = new NewComment(nameValue, commentValue);
        console.log(await bandApi.postComment(postBody));

        // display new comments
        displayComments();

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
}} catch (error){
    console.log(error);
}
};


button.addEventListener("click", createComment);
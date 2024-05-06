import { BandSiteApi } from "./band-site-api.js";
const bandAPI = new BandSiteApi;

async function displayComments(){
    try{
        const defaultComment = await bandAPI.getComments();
        console.log(defaultComment);

        for (let i = 0; i < defaultComment.length; i++){        
            const commentMainDiv = document.createElement("div");
            commentMainDiv.classList.add("comment-area__default-comment");
        
            // image div
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("comment-area__profile-image-container");
            commentMainDiv.append(imageDiv);
        
            const commentWrapperDiv = document.createElement("div");
            commentWrapperDiv.classList.add("comment-area__default-comment-wrapper");
            commentMainDiv.append(commentWrapperDiv);
        
            const commentHeaderDiv = document.createElement("div");
            commentHeaderDiv.classList.add("comment-area__default-comment-header");
            commentWrapperDiv.append(commentHeaderDiv);
        
            // name
            const commentName = document.createElement("p");
            commentName.textContent = defaultComment[i].name;
            commentName.classList.add("comment-area__default-comment-name", "bold");
            commentHeaderDiv.append(commentName);
        
            // date
            const commentDate = document.createElement("p");
            
            // time conversion
            const dateConvert = new Date (defaultComment[i].timestamp);
            const commentTime = dateConvert.toLocaleDateString();
            commentDate.textContent = commentTime;
            commentDate.classList.add("comment-area__default-comment-date");
            commentHeaderDiv.append(commentDate);
        
            // comment
            const commentElem = document.createElement("p");
            commentElem.textContent = defaultComment[i].comment;
            commentElem.classList.add("comment-area__default-comment-message");
            commentWrapperDiv.append(commentElem);
        
            commentMainDivOuter.prepend(commentMainDiv);
            
        }

    } catch(error){
        console.log(error);
    }
};

const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");

displayComments();

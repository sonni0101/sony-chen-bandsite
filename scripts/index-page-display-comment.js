import { BandSiteApi } from "./band-site-api.js";
const bandAPI = new BandSiteApi;

export async function displayComments(){
    try{
        const bandSiteComments = await bandAPI.getComments();

        while(commentMainDivOuter.firstChild){
            commentMainDivOuter.removeChild(commentMainDivOuter.firstChild);
        }

        for (let i = 0; i < bandSiteComments.length; i++){        
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
            commentName.textContent = bandSiteComments[i].name;
            commentName.classList.add("comment-area__default-comment-name", "bold");
            commentHeaderDiv.append(commentName);
        
            // date
            const commentDate = document.createElement("p");
            
            // time conversion
            const dateConvert = new Date (bandSiteComments[i].timestamp);
            const commentTime = dateConvert.toLocaleDateString();
            commentDate.textContent = commentTime;
            commentDate.classList.add("comment-area__default-comment-date");
            commentHeaderDiv.append(commentDate);
        
            // comment
            const commentElem = document.createElement("p");
            commentElem.textContent = bandSiteComments[i].comment;
            commentElem.classList.add("comment-area__default-comment-message");
            commentWrapperDiv.append(commentElem);

            // icon button
            const iconBntWrapper = document.createElement("div");
            iconBntWrapper.classList.add("comment-area__icon-bnt-wrapper");

            // like
            const likeBntWrapper = document.createElement("button");
            const likeBnt = document.createElement("img");
            likeBnt.src = "./assets/icons/icon-like.svg";
            likeBntWrapper.classList.add("comment-area__icon-bnt");
            likeBntWrapper.classList.add("button--remove-style");
            likeBntWrapper.append(likeBnt);

            const likeCountElm = document.createElement("p");
            likeCountElm.textContent = bandSiteComments[i].like;
            likeBntWrapper.append(likeCountElm);

            // delete
            const deleteBntWrapper = document.createElement("button");
            deleteBntWrapper.setAttribute('id',bandSiteComments[i].id );
            const deleteBnt = document.createElement("img");
            deleteBnt.src = "./assets/icons/icon-delete.svg";
            deleteBntWrapper.classList.add("comment-area__icon-bnt");
            deleteBntWrapper.classList.add("button--remove-style");
            deleteBntWrapper.append(deleteBnt);
            
            commentWrapperDiv.append(iconBntWrapper);
            iconBntWrapper.append(deleteBntWrapper);
            iconBntWrapper.append(likeBntWrapper);
        
            commentMainDivOuter.prepend(commentMainDiv);
            
          
        }
        for (let i = 0; i < bandSiteComments.length; i++) {
            const delCommentBnt = document.getElementById(bandSiteComments[i].id);
        
            delCommentBnt.addEventListener("click", function() {
                 deleteThenDisplay(bandSiteComments[i].id);
            });

        }
    } catch(error){
        console.log(error);
    }
};

const commentMainDivOuter = document.querySelector(".comment-area__default-comment-container");

displayComments();

async function deleteThenDisplay(commentId) {
     await bandAPI.deleteComment(commentId);
     displayComments();
};


// deltetDisplay();
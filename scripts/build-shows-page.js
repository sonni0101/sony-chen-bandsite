import { BandSiteApi } from './band-site-api.js';
const bandAPI = new BandSiteApi;

async function disaplyShows(){

    try{
        const showList = await bandAPI.getShows();

        for (let i = 0; i < showList.length; i++){
    
            // create all the needed div for the show list
            const showListDivOuter = document.createElement("div");
            showListDivOuter.classList.add("shows__ticket-info-wrapper");
        
            const createWrapperDiv = document.createElement("div");
            createWrapperDiv.classList.add("shows__ticket-info-wrapper-inner");
        
            // date
            const postDateDiv = document.createElement("div");
            postDateDiv.classList.add("shows__ticket-info");
        
            const postDateHeader = document.createElement("p");
            postDateHeader.textContent = "Date";
            postDateHeader.classList.add("shows__table-header", "shows__table-header--mobile");
            postDateDiv.append(postDateHeader);
        
            const postDateContent = document.createElement("p");
            // time conversion
            const dateConvert = new Date (showList[i].date);
            const showTime = dateConvert.toDateString();
        
            postDateContent.textContent = showTime;
            postDateContent.classList.add("shows__date", "bold");
            postDateDiv.append(postDateContent);
        
            // venue
            const postVenueDiv = document.createElement("div");
            postVenueDiv.classList.add("shows__ticket-info");
        
            const postVenueHeader = document.createElement("p");
            postVenueHeader.textContent = "Venue";
            postVenueHeader.classList.add("shows__table-header", "shows__table-header--mobile");
            postVenueDiv.append(postVenueHeader);
        
            const postVenueContent = document.createElement("p");
            postVenueContent.textContent = showList[i].place;
            postVenueContent.classList.add("shows__date");
            postVenueDiv.append(postVenueContent);
        
        
            // location
            const postLocationDiv = document.createElement("div");
            postLocationDiv.classList.add("shows__ticket-info");
        
            const postLocationHeader = document.createElement("p");
            postLocationHeader.textContent = "Venue";
            postLocationHeader.classList.add("shows__table-header", "shows__table-header--mobile");
            postLocationDiv.append(postLocationHeader);
        
            const postLocationContent = document.createElement("p");
            postLocationContent.textContent = showList[i].location;
            postLocationContent.classList.add("shows__date");
            postLocationDiv.append(postLocationContent);
        
            // button
            const postButtonDiv = document.createElement("div");
            postButtonDiv.classList.add("shows__ticket-info");
            
            const createButton = document.createElement("button");
            createButton.textContent = "Buy ticket";
            createButton.classList.add("button");
            postButtonDiv.append(createButton);
        
            // append div to the main wrapper div
            showListDiv.append(createWrapperDiv);
            showListDiv.append(showListDivOuter);
            createWrapperDiv.append(postDateDiv);
            createWrapperDiv.append(postVenueDiv);
            createWrapperDiv.append(postLocationDiv);
            createWrapperDiv.append(postButtonDiv);
    }

    } catch (error) {
        throw error; 
    }
};

disaplyShows();


const showListDiv = document.querySelector(".shows__table");
const ticketSections = document.querySelectorAll('.shows__ticket-info-wrapper-inner');
let selectedTicket = null;

// when onclick shows the active state
ticketSections.forEach(ticketSection => {
    ticketSection.addEventListener('click', () => {
        if (selectedTicket !== null) {
            selectedTicket.classList.remove('shows__ticket-info-wrapper-inner--active'); 
        }
        ticketSection.classList.add('shows__ticket-info-wrapper-inner--active'); 
        selectedTicket = ticketSection; 
    });
});















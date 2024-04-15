const showDetails = [
{
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
},
{
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
},
{
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
},
{
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
},
{
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
},
];

const showListDiv = document.querySelector(".shows__table");

for (let i = 0; i < showDetails.length; i++){

    //create all the needed div for the show list
    showListDivOuter = document.createElement("div");
    showListDivOuter.classList.add("shows__ticket-info-wrapper");

    createWrapperDiv = document.createElement("div");
    createWrapperDiv.classList.add("shows__ticket-info-wrapper-inner");

    //date
    postDateDiv = document.createElement("div");
    postDateDiv.classList.add("shows__ticket-info");

    const postDateHeader = document.createElement("p");
    postDateHeader.innerHTML = "Date";
    postDateHeader.classList.add("shows__table-header", "shows__table-header--mobile");
    postDateDiv.append(postDateHeader);

    const postDateContent = document.createElement("p");
    postDateContent.innerHTML = showDetails[i].date;
    postDateContent.classList.add("shows__date", "bold");
    postDateDiv.append(postDateContent);

    //venue
    const postVenueDiv = document.createElement("div");
    postVenueDiv.classList.add("shows__ticket-info");

    const postVenueHeader = document.createElement("p");
    postVenueHeader.innerHTML = "Venue";
    postVenueHeader.classList.add("shows__table-header", "shows__table-header--mobile");
    postVenueDiv.append(postVenueHeader);

    const postVenueContent = document.createElement("p");
    postVenueContent.innerHTML = showDetails[i].venue;
    postVenueContent.classList.add("shows__date");
    postVenueDiv.append(postVenueContent);


    //location
    const postLocationDiv = document.createElement("div");
    postLocationDiv.classList.add("shows__ticket-info");

    const postLocationHeader = document.createElement("p");
    postLocationHeader.innerHTML = "Venue";
    postLocationHeader.classList.add("shows__table-header", "shows__table-header--mobile");
    postLocationDiv.append(postLocationHeader);

    const postLocationContent = document.createElement("p");
    postLocationContent.innerHTML = showDetails[i].location;
    postLocationContent.classList.add("shows__date");
    postLocationDiv.append(postLocationContent);

    //button
    const postButtonDiv = document.createElement("div");
    postButtonDiv.classList.add("shows__ticket-info");
    
    const createButton = document.createElement("button");
    createButton.innerHTML = "Buy ticket";
    createButton.classList.add("button");
    postButtonDiv.append(createButton);

    //append div to the main wrapper div
    showListDiv.append(createWrapperDiv);
    showListDiv.append(showListDivOuter);
    createWrapperDiv.append(postDateDiv);
    createWrapperDiv.append(postVenueDiv);
    createWrapperDiv.append(postLocationDiv);
    createWrapperDiv.append(postButtonDiv);
}
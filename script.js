const eventCards = document.querySelectorAll(".event-card");

for(let indEvent of eventCards){ //For 1 at a time of event-card

    const indEventButton = document.createElement("button"); //Creates a button in javaScript, but not in HTML

    indEventButton.textContent = "Save Event"; // Adds the text "Save Event" to the inside of your button

    indEvent.appendChild(indEventButton); //Adds the button element to HTML

    indEventButton.addEventListener("click", function(){ //Anonymous function here allows us to directly pass this specific event card without much effort
        
        if(indEvent.classList.contains("saved")){
            removeEvent(indEvent, indEventButton); // Removing event from saved list

    }
    else{

        saveEvent(indEvent,indEventButton); //Passing the individual card  and its button as a param
    }  
    });
}

const savedSection = document.createElement("section"); // Creates a container section for the saved events
savedSection.id = "saved-events";  //Gives this section an id -- <section id="saved-events"></section>

const savedHead = document.createElement("h2"); //Creates a header element with variable name savedHead
savedHead.textContent = "Saved Events"; // Inserts text into the heading

savedSection.appendChild(savedHead); // Makes savedHead a child of savedSection

const main = document.querySelector("main"); //Finds the main html element
main.appendChild(savedSection);  // Makes SavedSection a child of main

const emptyMessage = document.createElement("p"); // Creates a paragraph to store text for when the saved section is empty
emptyMessage.textContent = "There are currently no saved events"; //Adds text to that paragraph

const savedList = document.createElement("ul"); // Creates an unordered list element

savedSection.appendChild(savedList); // Adds the new unordered list to saved section
savedSection.appendChild(emptyMessage); // Adds emptyMessage paragraph to saved section





//Save Event Function
function saveEvent(indEvent,indEventButton){
    const eventHead = indEvent.querySelector("h3"); // Find the Header
    const headText = eventHead.textContent; //Adds the text content of the header to headText variable
    const savedEvent = document.createElement("li"); // Creates an empty List Item to add the save list stuff into

    const eventPara = indEvent.querySelectorAll("p"); //Finds all paragraph elements in indEvent
    const eventDateTime = eventPara[0].textContent; //Grabs the first paragraph
    const eventLocation = eventPara[1].textContent; //Grabs the second paragraph
    
    savedEvent.textContent = headText + " - " + eventDateTime + " - " + eventLocation; // Adds the text from headText, eventDateTime, eventLocation into the section li

    savedList.appendChild(savedEvent); // Makes the savedEvent a child of the unordered list

    indEventButton.textContent = "Remove Event"; //Changes button text

    indEvent.classList.add("saved"); // Adds class saved to the event
    emptyMessage.remove(); // Removes the empty list text
}

//RemoveEvent Function
function removeEvent(indEvent,indEventButton){
indEvent.classList.remove("saved"); //Removes the gold border by removing the class
indEventButton.textContent = "Save Event"; //Changes the button text back to an unsaved items button
const eventHead = indEvent.querySelector("h3");  // Find the Header
const headText = eventHead.textContent; //Adds the text content of the header to headText variable
const savedEvent = savedList.querySelectorAll("li"); // Finds all the List Items of savedList variable

for(let listItem of savedEvent){
    if(listItem.textContent.includes(headText)){  //Checks if the textcontent of List Item has the head text in it
        listItem.remove();  //Removes that event
    }
}
const remainingEvents = savedList.querySelectorAll("li"); // Assigns the remaining li to remaining events

if(remainingEvents.length == 0){ //Are there any remaining elements?
    savedSection.appendChild(emptyMessage);  //If no elements remain, add the empty message to the saved section
}


}



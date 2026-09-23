const eventCards = document.querySelectorAll(".event-card");

for(let indEvent of eventCards){ //For 1 at a time of event-card

    const indEventButton = document.createElement("button"); //Creates a button in javaScript, but not in HTML

    indEventButton.textContent = "Save Event"; // Adds the text "Save Event" to the inside of your button

    indEvent.appendChild(indEventButton); //Adds the button element to HTML

    indEventButton.addEventListener("click", function(){ //Anonymous function here allows us to directly pass this specific event card without much effort
        saveEvent(indEvent); //Passing the individual card as a param
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

savedSection.appendChild(emptyMessage); // Adds emptyMessage paragraph to saved section


function saveEvent(indEvent){
    const eventHead = indEvent.querySelector("h3") // Find the Header
    const headText = eventHead.textContent; //Adds the text content of the header to headText variable
    const savedEvent = document.createElement("li"); // Creates an empty List Item to add the save lost stuff into

    savedEvent.textContent = headText; //

}



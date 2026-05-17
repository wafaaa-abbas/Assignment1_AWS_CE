const eventsContainer = document.getElementById("eventsContainer");

async function fetchEvents() {
  try {
    const response = await fetch("events.json");

    if (!response.ok) {
      throw new Error("Failed to fetch event data");
    }

    const events = await response.json();
    displayEvents(events);
  } catch (error) {
    eventsContainer.innerHTML = `
      <div class="error-box">
        Event data could not be loaded. Please check the API/JSON source.
      </div>
    `;
    console.error("Error fetching events:", error);
  }
}

function displayEvents(events) {
  eventsContainer.innerHTML = "";

  events.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-content">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Venue:</strong> ${event.venue}</p>
        <p>${event.description}</p>
        <button onclick="registerEvent('${event.title}')">Register Now</button>
      </div>
    `;

    eventsContainer.appendChild(eventCard);
  });
}

function registerEvent(eventName) {
  alert(`Registration successful for: ${eventName}`);
}

fetchEvents();
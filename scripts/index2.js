

const eventsStore = [
    {
      title: "INFJ Personality Type- Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title: "NYC AI Users- AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date: new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 75,
    },
    {
      title: "All Nations- Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    }
  ];
  
  // DOM элементы
  const container = document.getElementById("events-container");
  const filterType = document.getElementById("filter-type");
  const filterDistance = document.getElementById("filter-distance");
  const filterCategory = document.getElementById("filter-category");
  
  // Функция отображения карточек
  function renderEvents(events) {
    container.innerHTML = ""; // очистка перед отрисовкой
  
    if (events.length === 0) {
      container.innerHTML = "<p>No events found.</p>";
      return;
    }
  
    events.forEach(event => {
      const eventDate = event.date.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
  
      const distanceText = event.type === "offline" ? ` (${event.distance} km)` : "";
  
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" />
        <div class="event-info">
          <div class="event-date">${eventDate}</div>
          <div class="event-title">${event.title}</div>
          <div class="event-meta">${event.category}${distanceText}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Фильтрация
  function filterEvents() {
    const type = filterType.value;
    const distance = filterDistance.value;
    const category = filterCategory.value;
  
    let filtered = eventsStore.filter(event => {
      const matchType = type ? event.type === type : true;
      const matchDistance = distance ? event.distance <= parseInt(distance) : true;
      const matchCategory = category ? event.category === category : true;
      return matchType && matchDistance && matchCategory;
    });
  
    renderEvents(filtered);
  }
  
  // Обработчики
  filterType.addEventListener("change", filterEvents);
  filterDistance.addEventListener("change", filterEvents);
  filterCategory.addEventListener("change", filterEvents);
  
  // Первая отрисовка
  renderEvents(eventsStore);
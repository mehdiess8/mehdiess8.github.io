// Array of projects
const projects = [
    {
      title: "AI Powered Report Writing Tool",
      description: "A chatbot that helps forensic engineering experts write reports more efficiently.",
      image: "/assets/img/project-music-player.png",
      date: "2024",
      accomplishments: [
        "Tools: React, Node.js, Azure OpenAI API, Azure Cognitive Search, Azure SQL Database, Azure App Service, ",
        "Register/login to the web app.",
        "Write reports by having a conversation with the chatbot.",
        "Chatbot uses AI to generate report sections based on user input and the company's existing report templates",
      ],
    },
    {
      title: "Google Maps Clone",
      description: "An app that allows users to search for places and get directions to them using an API. Cities available are Toronto, Tokyo, New York, London, Paris, and Rome.",
      image: "/assets/img/project-quizup-logo-1.png",
      date: "2019",
      accomplishments: [
        "Tools: Django, HTML, CSS, Bootstrap, SQLite, Heroku",
        "Choose city from dropdown menu. Choose a spot on the map to get directions to that spot from the selected city. Find food places within a certain distance from the selected spot.",
      ],
    }
  ];
  
 // Sort projects by date in descending order
const sortedProjects = projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Function to create HTML for a project
function createProjectHTML(project) {
  return `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
          <p><small>Date: ${project.date}</small></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            ${project.accomplishments.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <div class="card-action">
            <a aria-label="Visit ${project.title}" href="${project.demoLink}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
            <a aria-label="Visit the GitHub repo for ${project.title} project" href="${project.sourceLink}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

let displayedProjects = 0;

// Function to display projects
function displayProjects(count) {
  const projectsContainer = document.getElementById('projects-container');
  const endIndex = Math.min(displayedProjects + count, sortedProjects.length);
  
  for (let i = displayedProjects; i < endIndex; i++) {
    projectsContainer.innerHTML += createProjectHTML(sortedProjects[i]);
  }

  displayedProjects = endIndex;

  // Show or hide "Load More" button
  const loadMoreButton = document.getElementById('load-more');
  if (displayedProjects >= sortedProjects.length) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'inline-block';
  }
}

// Initial display of the latest project
document.addEventListener('DOMContentLoaded', function() {
  displayProjects(1); // Display only the latest project initially
});

// Load More button functionality
document.getElementById('load-more').addEventListener('click', function() {
  displayProjects(1); // Load 1 more project at a time
});
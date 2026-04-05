const projectGrid = document.querySelector(".project-grid");

const projects = [
  {
    title: "GalapagosFirst.com",
    description: "A website for the Ecuadorian Travel Agency GalapagosFirst that offers tours on the world famous Galapagos Islands as well as on the Ecuadorian mainland.",
    category: "Web Design",
    image: "./images/galapagosfirst.jpg",
    alt: "Napo wildlife centre exterior, Ecuador.",
    link: "http://www.galapagosfirst.com"
  },
  {
    title: "LaPauseSucree.ca",
    description: "An online shop for the Montreal-based bakery <em>La Pause Sucrée</em>. Customers can order pastries online as well make bookings for a Afternoon / High Tea Service.",
    category: "e-Commerce",
    image: "./images/lapausesucree.jpg",
    alt: "Nav and Hero section of lapausesucree.ca",
    link: "http://www.lapausesucree.ca"
  },
  {
    title: "Auberge-Inn-Hostal.com",
    description: "A website for one of the most famous backpacker hostels in central Quito: The swiss-owned and operated Hostal L'Auberge-inn.",
    category: "Hostels",
    image: "./images/lapausesucree.jpg",
    alt: "Hostal L'Auberge-inn courtyard, Quito, Ecuador.",
    link: "http://www.lapausesucree.ca"
  }
];

function renderProject(projectTitle, projectList) {
    const title = projectTitle.toLowerCase();    
    const project = projectList.find(p => {
        return p.title.toLowerCase() === title;
    });
    if (!project) {
        console.log("Project not found");
        return;
    }
    projectGrid.innerHTML += `
      <article class="project-card">
        <div class="project-card-media">
          <img class="project-card-image" src="${project.image}" alt="${project.alt}">
          <p class="project-badge">${project.category}</p>
        </div>

        <div class="project-card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a class="project-button" href="${project.link}" target="_blank">View Project</a>
        </div>
      </article>
    `;
}

function renderAllProjects(projectList) {
  projectGrid.innerHTML = "";
  projectList.forEach((project) => {
    renderProject(project.title,projectList)
  });
}

renderAllProjects(projects);
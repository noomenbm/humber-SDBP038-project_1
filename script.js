const projectGrid = document.querySelector(".project-grid");

const projects = [
    {
        title: "GalapagosFirst.com",
        description: "A website for the Ecuadorian Travel Agency GalapagosFirst that offers tours on the world famous Galapagos Islands as well as on the Ecuadorian mainland.",
        category: "Web Design",
        imageURL: "./images/galapagosfirst.jpg",
        alt: "Panoramic image of Napo wildlife centre exterior, Ecuador.",
        link: "http://www.galapagosfirst.com",
        featured: true
    },
    {
        title: "LaPauseSucree.ca",
        description: "An online shop for the Montreal-based bakery <em>La Pause Sucree</em>. Customers can order pastries online as well make bookings for a Afternoon / High Tea Service.",
        category: "e-Commerce",
        imageURL: "./images/lapausesucree.jpg",
        alt: "Screenshot of the nav and hero section of lapausesucree.ca",
        link: "http://www.lapausesucree.ca",
        featured: true
    },
    {
        title: "Auberge-Inn-Hostal.com",
        description: "A website for one of the most famous backpacker hostels in central Quito: The Swiss-owned and operated Hostal L'Auberge-inn.",
        category: "Hostels",
        imageURL: "./images/aubergeinn.jpg",
        alt: "Image of Hostal L'Auberge-inn courtyard, Quito, Ecuador.",
        link: "http://www.auberge-inn-hostal.com",
        featured: true
    },
    {
        title: "Jmservice.ca",
        description: "A website for a metal fabrication company based in Montreal. Made with WordPress, the website showcases some of the company's products and services.",
        category: "Industry",
        imageURL: "./images/metal_industry.jpg",
        alt: "Image depicting a worker welding a metallic structure.",
        link: "http://jmservice.ca",
        featured: false
    }
];

function renderProject(project) {
    if (!project) {
        console.log("Project not found");
        return;
    }
    projectGrid.innerHTML += `
    <article class="project-card">
        <div class="project-card-media">
        <img class="project-card-image" src="${project.imageURL}" alt="${project.alt}">
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
        renderProject(project);
    });
}

function renderFeaturedProjects(projectList) {
    projectGrid.innerHTML = "";
    projectList.forEach((project) => {
        if (project.featured) {
            renderProject(project);
        }
    });
}

// If the page has a featured project list, render only the featured elements
// otherwise render all
if (document.querySelector(".featured-projects")) { 
    renderFeaturedProjects(projects);
} else {
    renderAllProjects(projects);
}

const searchInput = document.querySelector("#project-search");

function findProject(searchWord, projectList) {
  return projectList.filter((project) => {
    const search = searchWord.toLowerCase();
    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search)
    );
  });
}

searchInput.addEventListener("input", (event) => {
  projectGrid.innerHTML = "";
  findProject(event.target.value, projects).forEach((project) => {
    // again if there is a featured seciton here, render only the fetaured ones
    if (document.querySelector(".featured-projects")) {
      if (project.featured) {
        renderProject(project);
      }
    } else {
      renderProject(project);
    }
  });
});

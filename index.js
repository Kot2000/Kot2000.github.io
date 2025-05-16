let counter = 0;

async function attatchProjects(projects) {
  let projectsElement = document.getElementById("projects")
  projects.forEach(project => {
    let projectAnchor = document.createElement("a")
    projectAnchor.target = "_blank"
    projectAnchor.href = project.url
    projectAnchor.innerHTML = `
            <div class="project">
                <span class="project-header">${project.header}</span>
                <span class="project-desc">${project.desc}</span>
                <span class="symbol-link"></span>
                <span class="project-types">${project.type.map(pair => pair[0]).join(" • ")}</span>
                <span class="project-hahahoho">Click me to open this project on Github!</span>
            </div>
            `
    projectsElement.appendChild(projectAnchor);
  });
}

document.querySelector("#nothingo").addEventListener("click", () => {
    counter++;
    document.querySelector("#nothingo-texto").innerHTML = `x${counter}`
})

window.addEventListener("load", async () => {
  const overlay = document.querySelector("#overlay");
  
  // Start the fade-out effect
  overlay.classList.add("fade-out");

  let projects = await fetch("/projects.json")
    .then(t => t.text())
    .then(text => JSON.parse(text));
  
  await attatchProjects(projects);

  // Wait for the fade-out animation to complete before fully removing the overlay
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 1000); // Match the 1s duration of your fade-out animation
});

// JavaScript
window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });

//DarkMode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', light);
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);



//
let projects = [
    {
        name: "Covidng",
        description: "Covidng is web-based statistic counter or tracker, It helps you stay updated with the latest statistic of all confirmed, active and recovered case of corona virus patients in Nigeria.",
        technologies: ["VUE", "CHARKA UI", "REST API"],
        github: "https://github.com/Keazzy",
        preview: "http:google.com",
        image: "",
    },
    {
        name: "Covidng",
        description: "Covidng is web-based statistic counter or tracker, It helps you stay updated with the latest statistic of all confirmed, active and recovered case of corona virus patients in Nigeria.",
        technologies: ["VUE", "CHARKA UI", "REST API"],
        github: "https://github.com/Keazzy",
        preview: "http:google.com",
        image: "",
    },
];

let projectContent = document.querySelector(".all-works");
var fragment = document.createDocumentFragment

projects.forEach((project) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="works__cards">
                            <div class="works__card--content">
                                <div class="projects__card--content--header">
                                    <h2>${projects.name}</h2>
                                </div>
                                <div class="projects__card--content--about">
                                    <p>${projects.description}</p>
                                </div>
                                <div class="project__card--content--tech">
                                    <span>${project.technologies[0]}</span>
                                    <span>${project.technologies[1]}</span>
                                    <span>${project.technologies[2]}</span>
                                </div>
                                <div class="projects__card--content--links">
                                    <a href="${project.github}"><span class="fa fa-github"></span></a>
                                    <a href="${project.github}"><span class="fa fa-link"></span></a>
                                </div>
                                <div class="project__card--image">
                                    
                                </div>
                            </div>
                            
                        </div>
    `;
    fragment.appendChild(div);
});

projectContent.appendChild(fragment);
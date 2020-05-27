window.sr = ScrollReveal();

let projects = [{
        name: "Covidng",
        description: "Covidng is web-based statistic counter or tracker, It helps you stay updated with the latest statistic of all confirmed, active and recovered case of corona virus patients in Nigeria.",
        technologies: ["VUE", "CHARKA UI", "REST API"],
        github: "https://github.com/Keazzy",
        preview: "http:google.com",
        image: ""
    }, {
        name: "Covidng",
        description: "Covidng is web-based statistic counter or tracker, It helps you stay updated with the latest statistic of all confirmed, active and recovered case of corona virus patients in Nigeria.",
        technologies: ["VUE", "CHARKA UI", "REST API"],
        github: "https://github.com/Keazzy",
        preview: "http:google.com",
        image: ""
    }],
    projectContent = document.querySelector(".all-works");
var fragment = document.createDocumentFragment;
projects.forEach(e => {
    let t = document.createElement("div");
    t.innerHTML = `\n    <div class="works__cards">\n                            <div class="works__card--content">\n                                <div class="projects__card--content--header">\n                                    <h2>${projects.name}</h2>\n                                </div>\n                                <div class="projects__card--content--about">\n                                    <p>${projects.description}</p>\n                                </div>\n                                <div class="project__card--content--tech">\n                                    <span>${e.technologies[0]}</span>\n                                    <span>${e.technologies[1]}</span>\n                                    <span>${e.technologies[2]}</span>\n                                </div>\n                                <div class="projects__card--content--links">\n                                    <a href="${e.github}"><span class="fa fa-github"></span></a>\n                                    <a href="${e.github}"><span class="fa fa-link"></span></a>\n                                </div>\n                                <div class="project__card--image">\n                                    \n                                </div>\n                            </div>\n                            \n                        </div>\n    `, fragment.appendChild(t)
}), projectContent.appendChild(fragment);
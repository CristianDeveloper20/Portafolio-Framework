<template>
    <section class="about-section">
        <h1 class="about-title">Sobre Mí</h1>
        <p class="about-description">
            Soy desarrollador <strong>Full Stack</strong> con casi 3 años y medio de experiencia en tecnologías como
            <strong>Vue.js</strong>, <strong>Laravel</strong>, <strong>AWS</strong>, entre otros. Mi enfoque está en la
            creación de aplicaciones escalables, con buenas prácticas de desarrollo y código legible. He trabajado en
            proyectos de diversa índole, desde aplicaciones web hasta desarrollos en <strong>Unreal Engine</strong>.
            Además, cuento con experiencia liderando equipos de desarrollo en proyectos colaborativos y en la aplicación
            de principios <strong>SOLID</strong> y metodologías ágiles.
        </p>

        <div class="skills-section">
            <h2 class="skills-title">Experiencia y Habilidades</h2>
            <div class="skills-categories">

                <!-- Lenguajes de Programación -->
                <div class="skill-category">
                    <h3>Lenguajes de Programación</h3>
                    <p>
                        <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat"
                            alt="JavaScript">
                        <img src="https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white&style=flat"
                            alt="PHP">
                        <img src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=flat"
                            alt="Python">
                    </p>
                </div>

                <!-- Backend -->
                <div class="skill-category">
                    <h3>Backend</h3>
                    <p>
                        <img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat"
                            alt="Node.js">
                        <img src="https://img.shields.io/badge/-Laravel-FF2D20?logo=laravel&logoColor=white&style=flat"
                            alt="Laravel">
                    </p>
                </div>

                <!-- Frontend -->
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <p>
                        <img src="https://img.shields.io/badge/-Vue.js-4FC08D?logo=vue.js&logoColor=white&style=flat"
                            alt="Vue.js">
                        <img src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat"
                            alt="HTML5">
                        <img src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat"
                            alt="CSS3">
                        <img src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat"
                            alt="Bootstrap">
                    </p>
                </div>

                <!-- Bases de Datos -->
                <div class="skill-category">
                    <h3>Bases de Datos</h3>
                    <p>
                        <img src="https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat"
                            alt="MySQL">
                        <img src="https://img.shields.io/badge/-SQL-003B57?logo=database&logoColor=white&style=flat"
                            alt="SQL">
                    </p>
                </div>

                <!-- Herramientas y CI/CD -->
                <div class="skill-category">
                    <h3>Herramientas y CI/CD</h3>
                    <p>
                        <img src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat"
                            alt="Git">
                        <img src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat"
                            alt="GitHub">
                        <img src="https://img.shields.io/badge/-AWS-232F3E?logo=amazon-aws&logoColor=white&style=flat"
                            alt="AWS">
                        <img src="https://img.shields.io/badge/-Unreal_Engine-0E1128?logo=unreal-engine&logoColor=white&style=flat"
                            alt="Unreal Engine">
                    </p>
                </div>

                <!-- Metodologías -->
                <div class="skill-category">
                    <h3>Metodologías</h3>
                    <p>
                        <img src="https://img.shields.io/badge/-Scrum-6DB33F?logo=scrum&logoColor=white&style=flat"
                            alt="Scrum">
                        <img src="https://img.shields.io/badge/-Agile-FF3E00?logo=agile&logoColor=white&style=flat"
                            alt="Agile">
                        <a href="https://github.com/CristianDeveloper20/CristianDeveloper20/blob/main/Cetidifcado.pdf">
                            <img src="https://img.shields.io/badge/Certificación-Metodologías_Ágiles-blue?style=flat&logo=google-classroom"
                                alt="Certificación en Metodologías Ágiles">
                        </a>
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";

export default {
    name: "About",
    mounted() {
        // Animación de entrada para la descripción general
        gsap.from(".about-title", { duration: 1, opacity: 0, y: -50 });
        gsap.from(".about-description", { duration: 1.2, opacity: 0, y: 20, delay: 0.5 });

        // Animación de entrada para cada categoría de habilidades
        const controller = new ScrollMagic.Controller();
        document.querySelectorAll('.skill-category').forEach((element, index) => {
            new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0.9,
            })
                .setTween(gsap.from(element, { opacity: 0, y: 30, duration: 0.8, delay: index * 0.2 }))
                .addTo(controller);
        });
    }
};
</script>

<style lang="scss" scoped>
.about-section {
    padding: 40px;
    background-color: #f8f9fa;
    text-align: center;
    border-radius: 8px;
    margin: 20px auto;
    max-width: 800px;

    .about-title {
        font-size: 2.5em;
        color: #333;
        margin-bottom: 20px;
    }

    .about-description {
        font-size: 1.2em;
        color: #555;
        margin-bottom: 30px;
        line-height: 1.6;
        font-weight: 300;
    }

    .skills-section {
        margin-top: 40px;

        .skills-title {
            font-size: 2em;
            color: #333;
            margin-bottom: 20px;
        }

        .skills-categories {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;

            .skill-category {
                background-color: #ffffff;
                border-radius: 8px;
                padding: 20px;
                width: 100%;
                max-width: 600px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.05);
                }

                h3 {
                    font-size: 1.5em;
                    color: #333;
                    margin-bottom: 10px;
                }

                p {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                }

                img {
                    height: 28px;
                }
            }
        }
    }

    /* Responsivo */
    @media (max-width: 768px) {
        .about-title {
            font-size: 2em;
        }

        .about-description {
            font-size: 1em;
        }

        .skills-title {
            font-size: 1.5em;
        }

        .skill-category h3 {
            font-size: 1.2em;
        }
    }

    @media (max-width: 480px) {
        padding: 20px;

        .about-title {
            font-size: 1.8em;
        }

        .about-description {
            font-size: 0.9em;
            padding: 0 10px;
        }

        .skills-title {
            font-size: 1.3em;
        }

        .skill-category h3 {
            font-size: 1em;
        }

        .skill-category p {
            gap: 5px;
        }
    }
}
</style>
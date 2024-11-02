<template>
    <section class="projects-section">
        <h1 class="projects-title">Proyectos Destacados</h1>
        <div class="projects-grid">
            <div class="project-card" v-for="(project, index) in projects" :key="index">
                <h2 class="project-name">{{ project.name }}</h2>
                <p class="project-details">{{ project.details }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";

export default {
    name: "Projects",
    data() {
        return {
            projects: [
                { name: "Tienda en Shopify", details: "Tienda en línea personalizada para cliente" },
                { name: "Integración AWS con Laravel", details: "Integración de almacenamiento S3 y correos SES" },
                { name: "Sistema de Gestión", details: "Aplicación de gestión de inventarios con Laravel y Vue.js" },
                { name: "Juego en Unreal Engine", details: "Desarrollo de juego interactivo para niños con discapacidad motriz" }
            ]
        };
    },
    mounted() {
        // Inicializa GSAP y ScrollMagic para animaciones en los proyectos
        let controller = new ScrollMagic.Controller();

        // Animación de entrada para el título
        new ScrollMagic.Scene({
            triggerElement: ".projects-title",
            triggerHook: 0.8,
        })
            .setTween(gsap.from(".projects-title", { opacity: 0, y: -50, duration: 1 }))
            .addTo(controller);

        // Animación de entrada para las tarjetas de proyectos
        new ScrollMagic.Scene({
            triggerElement: ".projects-grid",
            triggerHook: 0.8,
        })
            .setTween(gsap.from(".project-card", { opacity: 0, y: 30, stagger: 0.2, duration: 1 }))
            .addTo(controller);
    }
};
</script>

<style lang="scss" scoped>
.projects-section {
    padding: 40px;
    text-align: center;
    background-color: #1b1b1b;
    color: #f8f9fa;

    .projects-title {
        font-size: 2.5em;
        color: #f8f9fa;
        margin-bottom: 30px;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        justify-items: center;
        padding: 20px;
    }

    .project-card {
        background-color: #333;
        color: white;
        padding: 20px;
        width: 100%;
        max-width: 300px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.5s, box-shadow 0.3s ease;

        .project-name {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #00c6ff;
        }

        .project-details {
            font-size: 1em;
            color: #ddd;
        }

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
    }

    /* Responsivo para tablets */
    @media (max-width: 768px) {
        .projects-title {
            font-size: 2em;
        }

        .project-card {
            padding: 15px;

            .project-name {
                font-size: 1.3em;
            }

            .project-details {
                font-size: 0.9em;
            }
        }
    }

    /* Responsivo para dispositivos móviles */
    @media (max-width: 480px) {
        .projects-title {
            font-size: 1.8em;
        }

        .project-card {
            padding: 10px;

            .project-name {
                font-size: 1.2em;
            }

            .project-details {
                font-size: 0.85em;
            }
        }
    }
}
</style>
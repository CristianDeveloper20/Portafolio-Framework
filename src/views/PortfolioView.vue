<template>
    <section class="portfolio">

        <!-- Sección Hero -->
        <div class="hero-section">
            <h1 class="hero-title">¡Bienvenido a mi Portafolio!</h1>
            <p class="hero-subtitle">
                Aquí podrás explorar mis proyectos, habilidades y experiencia como desarrollador Full Stack.
            </p>
            <button class="cta-button" @click="goToProjects">Ver Proyectos</button>
        </div>

        <!-- Guía Interactiva -->
        <div class="guide-section">
            <h2 class="guide-title">Explora las Secciones de Mi Portafolio</h2>
            <div class="guide-items">
                <div class="guide-item" v-for="(item, index) in guideItems" :key="index">
                    <img :src="item.icon" :alt="item.title" class="guide-icon" />
                    <h3 class="guide-item-title">{{ item.title }}</h3>
                    <p class="guide-item-description">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: "Portfolio",
    data() {
        return {
            // Items de la guía de navegación
            guideItems: [
                {
                    title: "Sobre Mí",
                    description: "Conoce mi experiencia, habilidades y trayectoria profesional.",
                    icon: "https://img.icons8.com/ios-filled/50/00c6ff/user.png"
                },
                {
                    title: "Proyectos",
                    description: "Explora los proyectos destacados en los que he trabajado.",
                    icon: "https://img.icons8.com/ios-filled/50/00c6ff/project.png"
                },
                {
                    title: "Contacto",
                    description: "¿Interesado en colaborar? Encuentra cómo contactarme aquí.",
                    icon: "https://img.icons8.com/ios-filled/50/00c6ff/email.png"
                }
            ]
        };
    },
    mounted() {
        // Animaciones para la Sección Hero
        gsap.from(".hero-title", { duration: 1.5, opacity: 0, y: -50 });
        gsap.from(".hero-subtitle", { duration: 1.5, opacity: 0, y: 50, delay: 0.5 });
        gsap.from(".cta-button", { duration: 1, opacity: 0, scale: 0.8, delay: 1 });

        // Animaciones para la guía interactiva
        gsap.from(".guide-title", { duration: 1, opacity: 0, y: -20, delay: 1.5 });
        gsap.from(".guide-item", { duration: 1, opacity: 0, y: 30, stagger: 0.3, delay: 1.8 });
    },
    methods: {
        goToProjects() {
            // Navega a la vista de Proyectos
            this.$router.push("/portafolio-framework/projects");
        }
    }
};
</script>

<style lang="scss" scoped>
/* Estilos generales para la vista del portafolio */
.portfolio {
    font-family: Arial, sans-serif;
    color: #f8f9fa;
}

/* Sección Hero */
.hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 70vh;
    background: linear-gradient(135deg, #1b1b1b 0%, #333 100%);
    color: #f8f9fa;
    padding: 20px;

    .hero-title {
        font-size: 2.8em;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .hero-subtitle {
        font-size: 1.5em;
        font-weight: 300;
        margin-bottom: 30px;
        max-width: 600px;
        line-height: 1.6;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 1.2em;
        color: #1b1b1b;
        background-color: #00c6ff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;

        &:hover {
            background-color: #008bb5;
            transform: scale(1.05);
        }
    }
}

/* Sección Guía Interactiva */
.guide-section {
    padding: 60px 20px;
    background-color: #1b1b1b;
    color: #f8f9fa;
    text-align: center;

    .guide-title {
        font-size: 2em;
        margin-bottom: 40px;
    }

    .guide-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: center;
        }
    }

    .guide-item {
        background-color: #333;
        padding: 20px;
        width: 100%;
        max-width: 250px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        .guide-icon {
            width: 50px;
            margin-bottom: 10px;
        }

        .guide-item-title {
            font-size: 1.4em;
            margin: 10px 0;
            color: #00c6ff;
        }

        .guide-item-description {
            font-size: 1em;
            color: #ddd;
        }
    }
}
</style>
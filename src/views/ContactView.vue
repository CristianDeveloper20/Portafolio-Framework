<template>
    <section class="contact-section">
        <h1 class="contact-title">Contáctame</h1>
        <p class="contact-description">
            Estoy disponible para consultas, colaboraciones y nuevos proyectos. Puedes contactarme a través de
            cualquiera de los siguientes medios.
        </p>

        <!-- Íconos de Redes Sociales -->
        <div class="social-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cristianfernandocruzusme@gmail.com"
                class="social-link" target="_blank" title="Correo">
                <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
            <a href="https://www.linkedin.com/in/cristian-fernando-cruz-usme-21014828a/" class="social-link"
                target="_blank" title="LinkedIn">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/CristianDeveloper20" class="social-link" target="_blank" title="GitHub">
                <font-awesome-icon icon="fa-brands fa-github" />
            </a>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: "Contact",
    mounted() {
        // Animación de entrada para el título y descripción
        gsap.from(".contact-title", { duration: 1, opacity: 0, y: -30 });
        gsap.from(".contact-description", { duration: 1, opacity: 0, y: 20, delay: 0.5 });
        gsap.from(".social-link", { duration: 0.8, opacity: 0, scale: 0.8, stagger: 0.2, delay: 1 });
    }
};
</script>

<style lang="scss" scoped>
.contact-section {
    padding: 60px 20px;
    text-align: center;
    background-color: #1b1b1b;
    color: #f8f9fa;

    .contact-title {
        font-size: 2.5em;
        margin-bottom: 10px;
        color: #00c6ff;
    }

    .contact-description {
        font-size: 1.2em;
        margin-bottom: 30px;
        color: #ddd;
        max-width: 600px;
        margin: 0 auto;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 20px;

        .social-link {
            font-size: 2em;
            color: #f8f9fa;
            transition: color 0.3s ease, transform 0.3s ease;

            &:hover {
                color: #00c6ff;
                transform: scale(1.1);
            }
        }
    }
}
</style>
<template>
    <footer class="footer-container">
        <div class="footer-body">
            <div class="footer-column">
                <p>
                    Bello, Antioquia, Colombia <br />
                    Cristianfernandocruzusme@gmail.com
                </p>
            </div>
            <div class="footer-column">
                Síguenos:
                <br />
                <font-awesome-icon icon="fa-brands fa-linkedin" />
                <br />
                <font-awesome-icon icon="fa-brands fa-github" />
            </div>
            <div class="footer-column">
                &copy; 2024 Todos los derechos reservados <br />
                Cristian Fernando Cruz Usme
            </div>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterCore',
    methods: {
        goRedirectToHome() {
            this.$router.push('/');
        }
    }
});
</script>

<style lang="scss" scoped>
.footer-container {
    display: block;
    background: #131313;
    color: #b0b0b0; // Cambiamos el color de la letra a un gris claro
    letter-spacing: 1px;
    width: 100vw;
    max-width: 100%;
    text-align: center;
    padding: 2rem;
    margin-top: 5rem;
    box-sizing: border-box;
}

.footer-body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-column {
    flex: 1;
    margin: 10px;
    color: #b0b0b0; // Aseguramos que el texto dentro de cada columna también sea gris
}

@media (max-width: 768px) {
    .footer-container {
        padding: 20px;
    }

    .footer-body {
        flex-direction: column;
        align-items: center;
    }

    .footer-column {
        text-align: center;
    }
}
</style>

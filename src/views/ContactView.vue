<template>
    <div>
        <h1>Contacto</h1>
        <p>¡Hola! Si deseas contactarme, puedes hacerlo a través de mi correo electrónico:
            <LabelComponent :title="email" customClass="bold-label" />
        </p>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import LabelComponent from '../components/common/LabelComponent.vue' // Asegúrate de que el path es correcto

export default defineComponent({
    name: 'ContactView',
    components: {
        LabelComponent
    },
    data() {
        return {
            email: 'tu-correo@ejemplo.com' // Define el email aquí o como propiedad
        }
    }
})
</script>

<style scoped>
/* Estilos específicos para ContactView.vue */
</style>

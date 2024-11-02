<template>
  <div id="app-container">
    <HeaderCore />
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition @enter="enterAnimation" @leave="leaveAnimation">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <FooterCore />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderCore from './components/core/HeaderCore.vue';
import FooterCore from './components/core/FooterCore.vue';
import { gsap } from 'gsap';

export default defineComponent({
  name: 'App',
  components: {
    HeaderCore,
    FooterCore
  },
  methods: {
    enterAnimation(el) {
      // Animación de entrada
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    leaveAnimation(el) {
      // Animación de salida
      gsap.to(el, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }
});
</script>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

@media (max-width: 768px) {
  /* Ajuste del padding para pantallas de tamaño mediano */
  .content {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  /* Ajuste del padding para dispositivos móviles */
  .content {
    padding: 5px;
  }
}
</style>

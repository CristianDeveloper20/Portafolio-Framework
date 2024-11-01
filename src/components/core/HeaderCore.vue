<template>
	<div class="header">
		<div class="logo">
			<img class="header-logo" src="/Foto perfil.jpeg" @click="goRedirectToHome"
				alt="logo" />
		</div>
		<nav class="nav-menu">
			<router-link to="/home" class="menu-link">Inicio</router-link>
			<router-link to="/about" class="menu-link">Sobre Mí</router-link>
			<router-link to="/projects" class="menu-link">Proyectos</router-link>
			<router-link to="/contact" class="menu-link">Contacto</router-link>
		</nav>
	</div>
</template>

<script>
import { defineComponent} from 'vue';
import { gsap } from 'gsap';

export default defineComponent({
	name: 'HeaderCore',
	methods: {
		goRedirectToHome() {
			this.$router.push('/');
		}
	},
	mounted() {
		// Seleccionamos todos los enlaces de menú con la clase "menu-link"
		gsap.from(".menu-link", {
			opacity: 0,
			y: -20,
			duration: 0.8,
			stagger: 0.2,
			ease: "power3.out"
		});
	}
});
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #333;
	color: white;

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		padding: 10px;
	}
}

.header-logo {
	cursor: pointer;
	width: 4cm;
	height: 5cm;
	object-fit: cover;
	border-radius: 50%;

	@media (max-width: 768px) {
		width: 3cm;
		height: 4cm;
	}

	@media (max-width: 480px) {
		width: 2.5cm;
		height: 3cm;
	}
}

.nav-menu {
	display: flex;
	gap: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 10px;
		margin-top: 10px;
	}
}

.menu-link {
	color: white;
	text-decoration: none;
	font-size: 18px;
	position: relative;
	overflow: hidden;
	padding: 0 5px;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		background: #00c6ff;
		bottom: -3px;
		left: 0;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.3s ease;
	}

	&:hover::before {
		transform: scaleX(1);
		transform-origin: left;
	}

	&:hover {
		color: #00c6ff;
	}
}
</style>

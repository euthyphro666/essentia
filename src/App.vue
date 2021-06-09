<template>
	<div class="content-container">
		<NavBar />
		<router-view />
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';
	import NavBar from '@/components/NavBar.vue';

	@Options({
		components: {
			NavBar,
		},
	})
	export default class App extends Vue {}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

	* {
		margin: 0;
		padding: 0;
		/* overflow: hidden; */
	}

	html {
		height: 100vh;
		width: 100vw;
		background-color: #222831;
	}

	body {
		height: 100vh;
		width: 100vw;
		overflow-x: hidden;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100vh;
		width: 100vw;
	}

	.content-container {
		margin-left: 220px;
		width: calc(100% - 220px);
		height: 100vh;
	}
	@media only screen and (max-width: 850px) {
		.content-container {
			margin-left: 0;
			width: 100%;
		}
	}
</style>

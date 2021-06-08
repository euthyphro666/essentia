<template>
	<div class="content-container">
		<NavBar />
		<router-view />
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component'
	import NavBar from '@/components/NavBar.vue'

	@Options({
		components: {
			NavBar,
		},
	})
	export default class App extends Vue {}
</script>

<style >
	@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

	* {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100vh;
	}

	.content-container {
		height: 100%;
		width: calc(100% - 220px);
		margin-left: 220px;
	}
</style>

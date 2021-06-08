<template>
	<div
		class="nav-bar"
		:class="{ 'nav-bar-collapsed': collapsed, 'nav-bar-full': !collapsed }"
	>
		<div class="nav-bar-content">
			<div class="nav-bar-title">JOSH<br />HESS</div>
			<div class="nav-bar-item" @click="onClick('portfolio')">Portfolio</div>
			<div class="nav-bar-item" @click="onClick('resume')">Resume <u>↓</u></div>
			<!-- <div class="nav-bar-item" @click="onClick('prose')">Prose</div>
			<div class="nav-bar-item" @click="onClick('plugs')">Plugs</div> -->
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue } from 'vue-class-component';

	export default class NavBar extends Vue {
		private collapsed = false;
		onClick(item: string): void {
			if (item === 'portfolio') {
				this.$router.push('portfolio');
				this.collapsed = true;
			}
			if (item === 'resume') {
				window.open(`${process.env.BASE_URL}resume-josh-hess.pdf`);
			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		color: #dfdfdf;
		font-family: 'VT323', monospace;
		background-color: #222831;

		position: fixed;
		z-index: 3;
		top: 0;
		left: 0;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		transition: 0.75s;
	}
	.nav-bar-collapsed {
		width: 220px;
		padding: 10vh 0;
	}
	.nav-bar-full {
		position: fixed;
		width: 100%;
		padding: 30vh 0;
	}
	.nav-bar-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.nav-bar-title {
		margin-bottom: 8px;
		font-size: 4em;
		white-space: pre;
	}
	.nav-bar-item {
		font-size: 2em;
		cursor: pointer;
	}
</style>

<template>
	<div
		class="nav-bar"
		:class="{ 'nav-bar-collapsed': collapsed, 'nav-bar-full': !collapsed }"
	>
		<div class="title">JOSH<br />HESS</div>
		<div class="item" @click="onClick('portfolio')">Portfolio</div>
		<div class="item" @click="onClick('resume')">Resume</div>
		<div class="item" @click="onClick('prose')">Prose</div>
		<div class="item" @click="onClick('plugs')">Plugs</div>
	</div>
</template>

<script lang="ts">
	import { Vue } from 'vue-class-component'

	export default class NavBar extends Vue {
		private collapsed = false
		onClick(item: string): void {
			if (item === 'portfolio') {
				this.$router.push('portfolio')
				this.collapsed = true
			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		color: #dfdfdf;
		font-family: 'VT323', monospace;
	}
	.nav-bar-collapsed {
		padding: 2em 6em;
		width: auto;
		/* background-color: #1e1e1e; */
	}
	.nav-bar-full {
		position: absolute;
		left: 50%;
		top: 25%;
		transform: translate(-50%, 0);
		/* background-color: #1e1e1e; */
	}
	.title {
		margin-top: 0.5em;
		/* padding: 0 2em; */
		font-size: 4em;
		white-space: pre;
	}
	.item {
		margin-top: 0.5em;
		/* padding: 0 4em; */
		font-size: 2em;
		cursor: pointer;
	}
</style>

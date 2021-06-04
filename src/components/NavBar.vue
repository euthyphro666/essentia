<template>
	<div
		class="nav-bar"
		:class="{ 'nav-bar-collapsed': collapsed, 'nav-bar-full': !collapsed }"
	>
		<div class="nav-bar-title">JOSH<br />HESS</div>
		<div class="nav-bar-item" @click="onClick('portfolio')">Portfolio</div>
		<div class="nav-bar-item" @click="onClick('resume')">Resume <u>↓</u></div>
		<div class="nav-bar-item" @click="onClick('prose')">Prose</div>
		<div class="nav-bar-item" @click="onClick('plugs')">Plugs</div>
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
		display: flex;
		flex-direction: column;
		margin: 3em auto;
		
	}
	.nav-bar-collapsed {
		/* padding: 2em 6em; */
	}
	.nav-bar-full {
		position: absolute;
		left: 50%;
		top: 25%;
		transform: translate(-50%, 0);
	}
	.nav-bar-title {
		/* margin-top: 0.5em; */
		font-size: 4em;
		white-space: pre;
	}
	.nav-bar-item {
		/* margin-top: 0.5em; */
		font-size: 2em;
		cursor: pointer;
	}
</style>

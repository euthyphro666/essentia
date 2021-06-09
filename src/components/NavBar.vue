<template>
	<div
		class="nav-bar"
		:class="{ 'nav-bar-collapsed': collapsed, 'nav-bar-full': !collapsed }"
	>
		<div class="nav-bar-btn" @click="onClick('nav-bar')">
			<i class="icon icon-menu" />
		</div>
		<div class="nav-bar-content">
			<div class="nav-bar-title">JOSH<br />HESS</div>
			<div class="nav-bar-item" @click="onClick('portfolio')">Portfolio</div>
			<div class="nav-bar-item" @click="onClick('resume')">Resume <u>↓</u></div>
			<!-- <div class="nav-bar-item" @click="onClick('prose')">Prose</div> -->
			<div class="nav-bar-item" @click="onClick('plugs')">Plugs</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue } from 'vue-class-component';

	export default class NavBar extends Vue {
		private collapsed = false;
		beforeMount(): void {
			this.$router.beforeEach((to, from, next) => {
				console.log(`Before Route ${from.path} -> ${to.path}`);
				if (to.path === '/') {
					this.collapsed = false;
					setTimeout(next, 1000);
				} else {
					if (from.path === '/') {
						next();
					} else {
						this.collapsed = false;
						setTimeout(() => {
							next();
							this.collapsed = true;
						}, 1000);
					}
				}
			});
		}
		onClick(item: string): void {
			if (item === 'portfolio') {
				this.$router.push('portfolio');
				this.collapsed = true;
			} else if (item === 'plugs') {
				this.$router.push('plugs');
				this.collapsed = true;
			} else if (item === 'resume') {
				window.open(`${process.env.BASE_URL}resume-josh-hess.pdf`);
			} else if (item === 'nav-bar') {
				this.$router.push('/');
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
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		transition: 1s;
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
		font-size: 4em;
		line-height: 1em;
		margin-bottom: 8px;
		white-space: pre;
	}
	.nav-bar-item {
		font-size: 2em;
		cursor: pointer;
	}
	.nav-bar-btn {
		display: none;
		position: absolute;
		top: 0;
		right: -48px;
		color: #222831;
		font-size: 32px;
		width: 48px;
		height: 48px;
		padding: 8px;
		text-align: center;
		z-index: 2;
		color: #dfdfdf;
		background-color: #222831;
	}
	.nav-bar-btn:active {
		color: #5d6670;
	}

	@media only screen and (max-width: 1200px) {
		/* .card {
			width: calc(600px - 4em);
			padding: 1.4em 2em;
		} */
	}

	@media only screen and (max-width: 850px) {
		.nav-bar-collapsed {
			margin-left: -220px;
		}
		.nav-bar-btn {
			display: inherit;
		}
	}
</style>

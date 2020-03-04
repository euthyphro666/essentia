<template>
	<div class="social">
		<div class="card message">
			<Tools />
			<div class="title messagefg">
				Sorry! The project portfolio is still under construction. In the
				mean time feel free to visit my GitHub account.
			</div>
		</div>
		<div
			class="card github"
			@click="onClick('https://www.github.com/euthyphro666')"
		>
			<Github />
			<div class="title githubfg">GitHub</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import Github from 'vue-material-design-icons/GithubCircle.vue';
	import Tools from 'vue-material-design-icons/Tools.vue';

	@Component({
		components: {
			Github,
			Tools,
		},
	})
	export default class Projects extends Vue {
		private onClick(path: string): void {
			window.location.href = path;
		}
	}
</script>

<style scoped>
	.social {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.card {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.title {
		width: auto;
		height: auto;
		font-size: 2em;
		margin-left: 10px;
	}
	.material-design-icon {
		width: 10%;
		max-width: 100px;
		min-width: 40px;
		margin-right: 25px;
	}
	.material-design-icon > svg {
		height: 100%;
		width: 100%;
		color: #bebfc1;
	}

	.github {
		background: #24292e;
		height: calc(100% - 128px);
	}
	.github:hover {
		background: #3f4448;
	}
	.githubfg {
		color: #bebfc1;
	}

	.message {
		background: #bebfc1;
		height: 128px;
	}
	.messagefg {
		color: #24292e;
		margin: 10px;
		margin-right: 50px;
		font-size: 1.2em;
	}
	.message > .material-design-icon {
		height: 64px;
		margin-left: 25px;
	}
	.message > .material-design-icon > svg {
		color: #24292e;
	}
</style>

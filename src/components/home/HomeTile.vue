<template>
	<div
		class="container"
		:class="[isDark ? 'dark-theme-background' : 'light-theme-background']"
		@click="onClick()"
	>
		<img
			:src="
				isDark
					? require('../../assets/logo-light.png')
					: require('../../assets/logo-dark.png')
			"
		/>
		<h1
			:class="[
				isDark ? 'dark-theme-foreground' : 'light-theme-foreground',
			]"
		>
			{{ title }}
		</h1>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class HomeTile extends Vue {
		@Prop() private isDark!: boolean;
		@Prop() private title!: string;
		@Prop() private path!: string;

		private onClick(): void {
			this.$router.push(`/${this.path}`);
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		align-content: space-around;
		width: 100%;
		height: 100%;
		min-height: 256px;
	}

	img {
		width: 30%;
	}

	.dark-theme-background {
		background: #333333;
	}
	.dark-theme-foreground {
		color: #dddddd;
	}

	.dark-theme-background:hover {
		background: #555555;
	}
	.dark-theme-foreground:hover {
		color: #dddddd;
	}

	.light-theme-background {
		background: #dddddd;
	}
	.light-theme-foreground {
		color: #333333;
	}

	.light-theme-background:hover {
		background: #999999;
	}
	.light-theme-foreground:hover {
		color: #333333;
	}
</style>

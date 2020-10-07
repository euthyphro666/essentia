<template>
	<div class="home">
		<div class="grid-container">
			<HomeTile
				class="title"
				:isDark="true"
				:title="'Josh Hess'"
				:path="''"
			/>
			<HomeTile
				class="projects"
				:isDark="false"
				:title="'Projects'"
				:path="'projects'"
			/>
			<HomeTile
				class="about"
				:isDark="false"
				:title="'About'"
				:path="'about'"
			/>
			<HomeTile
				class="social"
				:isDark="true"
				:title="'Social'"
				:path="'social'"
			/>
		</div>
	</div>
</template>

<script>
	import HomeTile from '../components/home/HomeTile.vue';

	export default {
		name: 'Home',
		components: {
			HomeTile,
		},
	};
</script>

<style>
	.home {
		width: 100%;
		height: 100%;
	}
	.grid-container {
		display: grid;
		grid-template-areas:
			'title projects'
			'about social';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 600px) {
		.grid-container {
			display: grid;
			grid-template-areas:
				'title'
				'projects'
				'social'
				'about';
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			width: 100%;
			height: 100%;
		}
	}

	@media only screen and (max-height: 1000px) {
		.home {
			overflow-y: scroll;
		}
		.grid-container {
			height: auto;
			min-height: 100%;
		}
	}

	.title {
		grid-area: title;
		/* background: #abcdef; */
	}

	.projects {
		grid-area: projects;
		/* background: #bbc11f; */
	}

	.about {
		grid-area: about;
		/* background: #cc2f11; */
	}

	.social {
		grid-area: social;
		/* background: #11ff3e; */
	}
</style>

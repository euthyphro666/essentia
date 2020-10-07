<template>
	<div class="container">
		<div class="projects">
			<Header
				title="Projects"
				subtitle="Josh Hess"
				body="My portfolio of projects I've been working on over my career as a developer, student, and hobyist."
				:isAlt="false"
			/>
			<Card
				title="Disregard That"
				subtitle="Podcast Website"
				body="Here "
				:isAlt="true"
			/>
			<Card
				title="Spectrum"
				subtitle="D&D Mapmaker Website"
				body="Here "
				:isAlt="false"
			/>
			<Card
				title="Axiomatize That"
				subtitle="Math Game Website"
				body="Here "
				:isAlt="true"
			/>
			<Card
				title="Aphelion Website"
				subtitle="Math Game Website"
				body="Here "
				:isAlt="false"
			/>
			<Card
				title="Media Suite"
				subtitle="Streaming solution for CGM."
				body="Here "
				:isAlt="true"
			/>
			<Card
				title="Card Peeping"
				subtitle="Code Jam Project"
				body="Here "
				:isAlt="false"
			/>
			<Card
				title="Divine Intervention"
				subtitle="Code Jam Project"
				body="Here "
				:isAlt="true"
			/>
			<Card
				title="Identity Crisis"
				subtitle="Math Game Website"
				body="Here "
				:isAlt="false"
			/>
			<Card
				title="VR Network Simulation"
				subtitle="Code Jam Project"
				body="Here "
				:isAlt="true"
			/>
			<Card title="" subtitle="" body="Here " :isAlt="false" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Github from "vue-material-design-icons/Github.vue";
	import Tools from "vue-material-design-icons/Tools.vue";
	import Header from "../components/projects/Header.vue";
	import Card from "../components/projects/Card.vue";

	@Component({
		components: {
			Header,
			Card
		}
	})
	export default class Projects extends Vue {
		private onClick(path: string): void {
			window.location.href = path;
		}
	}
</script>

<style scoped>
	.container {
		height: 100%;
		overflow-y: scroll;
	}
	.projects {
		display: flex;
		flex-direction: column;
		width: 100%;
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
</style>

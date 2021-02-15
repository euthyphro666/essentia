<template>
	<div id="projects">
		<h1>Josh Hess</h1>
		<div class="body">
			<div class="panel">
				<div
					v-for="y in getProjectYears()"
					:key="y"
					@click="onYearClick(y)"
					class="filter"
					:class="{ activeFilter: isYearActive(y) }"
				>
					{{ y }}
				</div>
			</div>
			<div class="timeline-container">
				<div class="timeline">
					<Card
						v-for="i in getProjectInfo()"
						:key="i.title"
						:title="i.title"
						:subtitle="i.subtitle"
						:date="i.month"
						:description="i.description"
						:imageUrl="i.image"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Card from "../components/projects/Card.vue";
	import Info from "../assets/portfolio/info.json";
	@Component({
		components: {
			Card
		}
	})
	export default class Projects extends Vue {
		private currentYear = 2020;
		getProjectYears() {
			const years = new Set(Info.map(i => i.year));
			return [...years].reverse();
		}
		getProjectInfo() {
			return Info.filter(i => i.year === this.currentYear);
		}
		isYearActive(year: number) {
			return year === this.currentYear;
		}
		onYearClick(year: number) {
			this.currentYear = year;
		}
	}
</script>

<style scoped>
	.header {
		height: 5vh;
	}
	.body {
		display: flex;
		flex-direction: row;
		height: 95vh;
	}
	.panel {
		width: 20%;
		background-color: #aa1;
	}
	.timeline-container {
		width: 80%;
		height: 100%;
		overflow-y: scroll;
	}
	.timeline {
		min-height: 100%;
		background-color: #1c8;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.filter {
		background-color: #2bc;
		cursor: pointer;
	}
	.activeFilter {
		background-color: #a69;
	}
</style>

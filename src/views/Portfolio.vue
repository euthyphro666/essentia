<template>
	<div id="portfolio">
		<div class="body">
			<div class="panel">
				<div
					v-for="(y, i) in getProjectYears()"
					:key="i"
					@click="onYearClick(y)"
					class="filter"
					:class="{
						activeFilter: isYearActive(y),
						topBorder: i == 0,
					}"
				>
					<div class="filterText">
						{{ y }}
					</div>
				</div>
			</div>
			<div class="timeline-container" ref="scrollable">
				<div class="timeline">
					<Card
						v-for="i in getProjectInfo()"
						:key="i.title"
						:title="i.title"
						:subtitle="i.subtitle"
						:date="monthToDate(i.month)"
						:about="i.about"
						:imageUrls="i.image"
						:links="i.links"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component'
	import Card from '../components/portfolio/Card.vue'
	import Info from '../assets/portfolio/info.json'

	interface CardInfo {
		year: number
		month: number
		title: string
		subtitle: string
		about: string
		image: string[]
		links: string[]
	}

	@Options({
		components: {
			Card,
		},
	})
	export default class Projects extends Vue {
		private currentYear = 2021
		private months = [
			'JAN',
			'FEB',
			'MAR',
			'APR',
			'MAY',
			'JUN',
			'JUL',
			'AUG',
			'SEP',
			'OCT',
			'NOV',
			'DEC',
		]

		getProjectYears(): number[] {
			const info = Info as CardInfo[]
			const years = new Set(info.map((i: CardInfo) => i.year))
			return [...years].reverse()
		}
		getProjectInfo() {
			const info = Info as CardInfo[]
			return info
				.filter((i: CardInfo) => i.year === this.currentYear)
				.sort((i1, i2) => i2.month - i1.month)
		}
		isYearActive(year: number): boolean {
			return year === this.currentYear
		}
		onYearClick(year: number): void {
			this.currentYear = year
			;(this.$refs.scrollable as any).scrollTop = 0
		}
		monthToDate(month: number): string {
			// Info.json uses calendar month encoding
			return this.months[month - 1]
		}
	}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600&display=swap');

	.portfolio {
		width: 100%;
	}
	.header {
		height: 5vh;
	}
	.body {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
	.panel {
		background-color: #1d1833;
		width: 180px;
	}
	.title {
		flex-direction: column;
		align-items: center;
	}
	.titleText {
		color: #00e676;
		margin: auto;
		text-align: center;
		font-size: 4em;
		font-weight: 600;
	}
	.timeline-container {
		background-color: #261d45;
		width: calc(100% - 180px);
		height: 100%;
		overflow-y: scroll;
	}
	.timeline {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.topBorder {
		border-top: 2px solid #00e676;
	}
	.filter {
		background-color: #372963;
		border-bottom: 2px solid #00e676;
		color: #00e676;
		cursor: pointer;
		height: 4em;
		display: flex;
		align-items: center;
	}
	.activeFilter {
		background-color: #261d45;
	}
	.filterText {
		margin: auto;
		text-align: center;
		font-size: 1.4em;
		font-weight: 200;
	}
	@media only screen and (max-width: 1200px) {
		.panel {
			width: 120px;
		}
		.timeline-container {
			width: calc(100% - 120px);
		}
		.filter {
			height: 3.5em;
		}
	}
	@media only screen and (max-width: 800px) {
		.panel {
			width: 70px;
		}
		.timeline-container {
			width: calc(100% - 70px);
		}
		.filter {
			height: 3em;
		}
	}
</style>

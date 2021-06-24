<template>
	<div class="portfolio">
		<div class="year-panel">
			<div
				v-for="(y, i) in getProjectYears()"
				:key="i"
				@click="onYearClick(y)"
				class="filter"
				:class="{ activeFilter: isYearActive(y) }"
			>
				<div class="filter-text">
					{{ y }}
				</div>
			</div>
		</div>
		<div class="timeline-container" ref="scrollable">
			<div class="timeline">
				<PortfolioCard
					v-for="info in getProjectInfo()"
					:key="info.title"
					:info="info"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component'
	import PortfolioCard, {
		CardInfo,
	} from '../components/portfolio/PortfolioCard.vue'
	import Info from '../assets/portfolio/info.json'

	@Options({
		components: {
			PortfolioCard,
		},
	})
	export default class Projects extends Vue {
		private currentYear = 2021
		private cardInfo!: CardInfo[]

		beforeMount(): void {
			this.cardInfo = Info.map((i) => {
				return {
					title: i.title,
					subtitle: i.subtitle,
					year: i.year,
					month: i.month,
					about: i.about,
					imageUrls: i.image ? i.image : [],
					tags: i.tags ? i.tags : [],
					links: i.links ? i.links : [],
				} as CardInfo
			})
		}

		getProjectYears(): number[] {
			const years = new Set(Info.map((i) => i.year))
			return [...years].reverse()
		}

		getProjectInfo(): CardInfo[] {
			return this.cardInfo
				.filter((i) => i.year === this.currentYear)
				.sort((i1, i2) => i2.month - i1.month)
		}

		isYearActive(year: number): boolean {
			return year === this.currentYear
		}

		onYearClick(year: number): void {
			this.currentYear = year
			const scrollable = this.$refs.scrollable as any
			scrollable.scrollTop = 0
		}
	}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600&display=swap');

	.portfolio {
		background-color: #ffd369;
		position: relative;
		height: 100vh;
	}
	.timeline-container {
		overflow-y: auto;
		width: 100%;
		padding-top: 50px;
	}
	.timeline {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		background-color: #ffd369;
	}

	.year-panel {
		position: absolute;
		height: auto;
		z-index: 2;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: calc(100% - 64px);
		margin: 8px 32px;
	}
	.filter {
		border: 4px solid #393e46;
		background-color: #5d6670;
		/* border-style: outset; */
		color: #9ca0a5;
		cursor: pointer;
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 16px;
		margin: 4px 8px;
		border-radius: 50px;
		font-family: 'VT323', monospace;
		text-align: center;
		font-size: 2em;
		font-weight: 800;
	}
	.activeFilter {
		background-color: #393e46;
		color: #eeeeee;
	}

	@media only screen and (max-width: 850px) {
	}
	@media only screen and (max-width: 656px) {
		.timeline-container {
			padding-top: 96px;
		}
	}
	@media only screen and (max-width: 360px) {
		.timeline-container {
			padding-top: 144px;
		}
	}
</style>

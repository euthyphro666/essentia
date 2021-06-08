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
	import { Options, Vue } from 'vue-class-component';
	import PortfolioCard, {
		CardInfo,
	} from '../components/portfolio/PortfolioCard.vue';
	import Info from '../assets/portfolio/info.json';

	@Options({
		components: {
			PortfolioCard,
		},
	})
	export default class Projects extends Vue {
		private currentYear = 2021;
		private cardInfo!: CardInfo[];

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
				} as CardInfo;
			});
		}

		getProjectYears(): number[] {
			const years = new Set(Info.map((i) => i.year));
			return [...years].reverse();
		}

		getProjectInfo(): CardInfo[] {
			return this.cardInfo
				.filter((i) => i.year === this.currentYear)
				.sort((i1, i2) => i2.month - i1.month);
		}

		isYearActive(year: number): boolean {
			return year === this.currentYear;
		}

		onYearClick(year: number): void {
			this.currentYear = year;
			const scrollable = this.$refs.scrollable as any;
			scrollable.scrollTop = 0;
		}
	}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600&display=swap');

	.portfolio {
		background-color: #ffd369;
		display: grid;
		/* grid-template-rows: 60px auto; */
		height: 100%;
		width: 100%;
	}
	.timeline-container {
		overflow-y: auto;
		width: 100%;
		height: 100%;
		padding-top: 60px;
	}
	.timeline {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		background-color: #ffd369;
	}

	.year-panel {
		position: absolute;
		height: 60px;
		/* left: 50%;
		transform: translate(-25%, 0); */
		z-index: 2;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.filter {
		border: 3px solid #93a1af;
		background-color: #5d6670;
		border-style: outset;
		color: #393e46;
		cursor: pointer;
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 16px;
		margin: 0 8px;
		border-radius: 50px;
		font-family: 'VT323', monospace;
		text-align: center;
		font-size: 2em;
		font-weight: 800;
	}
	.activeFilter {
		background-color: #b6b6b6;
	}

	@media only screen and (max-width: 1200px) {
		/* .panel {
			width: 120px;
		}
		.timeline-container {
			width: calc(100% - 120px);
		}
		.filter {
			height: 3.5em;
		} */
	}
	@media only screen and (max-width: 800px) {
		/* .panel {
			width: 70px;
		}
		.timeline-container {
			width: calc(100% - 70px);
		}
		.filter {
			height: 3em;
		} */
	}
</style>

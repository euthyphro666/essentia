<template>
	<div class="card">
		<div class="card-header">
			<div class="card-date">{{ monthToDate(info.month) }}</div>
			<div class="card-titles">
				<div class="card-title">{{ info.title }}</div>
				<div class="card-subtitle">{{ info.subtitle }}</div>
			</div>
			<div class="card-links">
				<div
					v-for="link in info.links"
					:key="link[1]"
					@click="onClick(link[1])"
					class="card-link"
				>
					<i class="icon icon-github" v-if="link[0] === 'repo'" />
					<i class="icon icon-play-circle" v-else-if="link[0] === 'demo'" />
					<i class="icon icon-external-link" v-else-if="link[0] === 'site'" />
				</div>
			</div>
		</div>
		<div class="carousel" ref="carousel">
			<div
				class="slide"
				v-for="image in info.imageUrls"
				:key="image"
				:id="genId(image)"
			>
				<video
					v-if="isMovie(image)"
					:src="require(`../../assets/portfolio/${image}`)"
					controls="true"
				></video>
				<iframe
					v-if="isLink(image)"
					width="800"
					height="450"
					:src="image"
					frameborder="0"
					allowfullscreen
				></iframe>

				<img v-else :src="require(`../../assets/portfolio/${image}`)" />
			</div>
		</div>
		<div class="slide-btns" ref="buttons" v-if="hasMultipleImages(info)">
			<a
				class="slide-btn"
				v-for="image in info.imageUrls"
				:key="image"
				:href="genHref(image)"
			/>
		</div>
		<!-- <div class="card-divider" /> -->
		<div class="card-body">{{ info.about }}</div>
		<!-- <div v-if="hasLinks()" class="card-divider" /> -->
		<div class="tags">
			<div class="tag" v-for="tag in info.tags" :key="tag">{{ tag }}</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	export interface CardInfo {
		title: string;
		subtitle: string;
		year: number;
		month: number;
		about: string;
		imageUrls: string[];
		tags: string[];
		links: [string, string][];
	}

	export default defineComponent({
		name: 'PortfolioCard',
		props: {
			info: {
				required: true,
				type: Object as PropType<CardInfo>,
			},
		},
		setup(props) {
			const months = [
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
			];

			const hasLinks = (info: CardInfo) => {
				return info.links && info.links.length > 0;
			};

			const hasMultipleImages = (info: CardInfo) => {
				return info.imageUrls && info.imageUrls.length > 1;
			};

			const isMovie = (image: string): boolean => {
				const ext = image.split('.')[1];
				return ext.toLowerCase() === 'mp4';
			};

			const isLink = (image: string): boolean => {
				const prefix = image.split(':')[0];
				return (
					prefix.toLowerCase() === 'https' || prefix.toLowerCase() === 'http'
				);
			};

			const genId = (value: string): string => {
				let hash = 0;
				if (value.length === 0) return `${hash}`;
				for (let i = 0; i < value.length; i++) {
					const chr = value.charCodeAt(i);
					hash = (hash << 5) - hash + chr;
					hash |= 0;
				}
				return `${hash}`;
			};

			const genHref = (value: string): string => {
				return `#${genId(value)}`;
			};

			const onClick = (path: string): void => {
				window.open(path, '_blank');
			};

			const monthToDate = (month: number): string => {
				return months[month - 1];
			};

			const getEmptyArray = (): [] => {
				return [];
			};
			return {
				hasLinks,
				isMovie,
				hasMultipleImages,
				isLink,
				genId,
				genHref,
				onClick,
				monthToDate,
				getEmptyArray,
			};
		},
		mounted() {
			const scrolled = this.$refs.carousel as HTMLElement;
			const buttons = this.$refs.buttons as HTMLElement;
			if (scrolled && buttons) {
				const anchors = buttons.querySelectorAll<HTMLElement>("a[href^='#']");
				// hash tag anchor href starts with '#'
				anchors.forEach((a: HTMLElement) => {
					a.onclick = function (e: Event) {
						e.preventDefault();
						const href = a.getAttribute('href')!.slice(1); // remove initial '#'
						const target = scrolled.querySelector<HTMLElement>(
							`[id='${href}']`
						);

						if (target && target.offsetLeft) {
							console.log(`target offset ${target.offsetLeft}`);
							scrolled.scrollLeft = Math.floor(target.offsetLeft / 800) * 800;
						}
					};
				});
			}
		},
	});
</script>

<style scoped>
	.card {
		flex: 0 1 800px;
		background: #393e46;
		color: #eeeeee;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		/* padding: 2rem; */
		padding-top: 0.5rem;
		margin: 1rem;
		border-radius: 8px;
		text-align: center;
	}
	.card-header {
		display: flex;
		flex-direction: row;
		width: calc(100% - 1em);
		align-items: flex-start;
		justify-content: space-between;
	}
	.card-titles {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card-title {
		cursor: default;
		font-size: 2em;
		font-weight: 300;
	}
	.card-subtitle {
		cursor: default;
		font-size: 1.4em;
		font-weight: 100;
	}
	.card-date {
		cursor: default;
		font-size: 1em;
		font-weight: 600;
		padding: 0.8em;
	}
	.card-links {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.card-link {
		cursor: pointer;
		border-radius: 30px;
		height: 25px;
		width: 25px;
		transform: scale(1.3);
		margin: 0 4px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.card-link:hover {
		color: #393e46;
		background-color: #eeeeee;
	}
	.carousel {
		width: 800px;
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow-x: auto;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
	}
	.slide {
		width: 800px;
		z-index: 1;
	}
	img {
		max-height: 60vh;
		height: auto;
		width: 800px;
	}
	video {
		max-height: 60vh;
		height: auto;
		width: 800px;
		outline: none;
	}
	.slide-btns {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.slide-btn {
		height: 1em;
		width: 2em;
		border: 3px solid #93a1af;
		background-color: #5d6670;
		border-style: inset;
		border-radius: 500px;
		margin: 0 4px;
	}

	.slide-btn {
		height: 1em;
		width: 2em;
		border: 3px solid #93a1af;
		background-color: #5d6670;
		border-style: inset;
		border-radius: 500px;
		margin: 0 4px;
	}

	.slide-btn:active {
		background-color: #353a3f;
	}

	.card-body {
		cursor: default;
		height: auto;
		white-space: pre-wrap;
		word-wrap: normal;
		font-size: 1.2em;
		margin: 8px 3em;
		padding: 1em;
		border: 4px solid #93a1af;
		background-color: #5d6670;
		border-style: inset;
		border-radius: 6px;
	}

	.tags {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		width: calc(100% - 5em);
		margin-bottom: 1em;
	}

	.tag {
		cursor: default;
		border: 2px solid #93a1af;
		background-color: #5d6670;
		border-style: inset;
		border-radius: 500px;
		padding: 0.35em 1em;
		margin: 0.5em;
		margin-top: 0;
		font-size: 0.8em;
		width: 80px;
		text-align: center;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (max-width: 1200px) {
		/* .card {
			width: calc(600px - 4em);
			padding: 1.4em 2em;
		} */
	}
	@media only screen and (max-width: 800px) {
		/* .card {
			width: calc(100% - 1em);
			padding: 1.4em 0.5em;
		} */
	}
</style>

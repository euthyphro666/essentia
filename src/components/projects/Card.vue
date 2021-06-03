<template>
	<div class="card">
		<div class="card-header">
			<div class="card-title">{{ title }}</div>
			<div class="card-subtitle">{{ subtitle }}</div>
		</div>
		<div class="card-date">{{ date }}</div>
		<div v-if="hasLinks()" class="card-links">
			<div
				v-for="link in links"
				:key="link[1]"
				@click="onClick(link[1])"
				class="card-link"
			>
				<Github v-if="link[0] === 'repo'" />
				<PlayCircle v-else-if="link[0] === 'demo'" />
				<Link v-else-if="link[0] === 'site'" />
			</div>
		</div>
		<div v-for="image in imageUrls" :key="image">
			<video
				v-if="isMovie(image)"
				:src="require(`../../assets/portfolio/${image}`)"
				controls="true"
			></video>
			<iframe
				v-if="isLink(image)"
				width="560"
				height="315"
				:src="image"
				frameborder="0"
				allowfullscreen
			></iframe>

			<img v-else :src="require(`../../assets/portfolio/${image}`)" />
		</div>
		<div class="card-divider" />
		<div class="card-body">{{ about }}</div>
		<!-- <div v-if="hasLinks()" class="card-divider" /> -->
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from "vue-property-decorator";
	import Github from "vue-material-design-icons/Github.vue";
	import PlayCircle from "vue-material-design-icons/PlayCircle.vue";
	import Link from "vue-material-design-icons/Link.vue";
	@Component({
		components: { Github, PlayCircle, Link }
	})
	export default class Card extends Vue {
		@Prop({ default: "Title" })
		public title!: string;
		@Prop({ default: "Subtitle" })
		public subtitle!: string;
		@Prop({ default: "January" })
		public date!: string;
		@Prop({ default: "Description." })
		public about!: string;
		@Prop({ default: () => [] })
		public imageUrls!: string;
		@Prop({ default: () => [] })
		public links!: [string, string][];

		hasLinks(): boolean {
			return this.links.length > 0;
		}

		isMovie(image: string): boolean {
			const ext = image.split(".")[1];
			return ext.toLowerCase() === "mp4";
		}

		isLink(image: string): boolean {
			const prefix = image.split(":")[0];
			return (
				prefix.toLowerCase() === "https" ||
				prefix.toLowerCase() === "http"
			);
		}

		onClick(path: string): void {
			window.open(path, "_blank");
		}

		getEmptyArray(): [] {
			return [];
		}
	}
</script>

<style scoped>
	.card {
		background-color: #372963;
		border-top: 2px solid #00e676;
		border-bottom: 2px solid #00e676;
		color: #00e676;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: calc(800px - 8em);
		max-width: 100%;
		height: auto;
		margin: 1.4em;
		padding: 1.4em 4em;
	}
	.card-header {
		vertical-align: center;
		padding-bottom: 1em;
	}
	.card-title {
		font-size: 2em;
		font-weight: 300;
	}
	.card-subtitle {
		font-size: 1.4em;
		font-weight: 100;
	}
	.card-date {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 1em;
		font-weight: 600;
		padding: 0.8em;
	}
	.card-divider {
		height: 0;
		width: 60%;
		border: 1px solid #00e676;
		margin: 1.4em 0;
	}
	.card-links {
		position: absolute;
		padding: 0.8em;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: row;
	}
	.card-link {
		cursor: pointer;
		border-radius: 100px;
		height: 25px;
		margin: 0 4px;
	}
	.card-link:hover {
		color: #261d45;
		background-color: #00e676;
	}
	img {
		max-height: 60vh;
		max-width: calc(100% - 2.8em);
		height: auto;
		width: auto;
		/* padding-bottom: 1.4em; */
	}
	video {
		max-height: 60vh;
		max-width: calc(100% - 2.8em);
		height: auto;
		width: auto;
		/* padding-bottom: 1.4em; */
		outline: none;
	}
	.card-body {
		height: auto;
		white-space: pre-wrap;
		word-wrap: normal;
		font-family: inherit;
		/* padding-bottom: 1.4em; */
	}
	@media only screen and (max-width: 1200px) {
		.card {
			width: calc(600px - 4em);
			padding: 1.4em 2em;
		}
	}
	@media only screen and (max-width: 800px) {
		.card {
			width: calc(100% - 1em);
			padding: 1.4em 0.5em;
		}
	}
</style>

<template>
	<div class="card">
		<div class="card-header">{{ title }}</div>
		<img :src="require(`../../assets/portfolio/${imageUrl}`)" />
		<div class="card-body">{{ description }}</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from "vue-property-decorator";
	@Component({
		components: {}
	})
	export default class Card extends Vue {
		@Prop({ default: "Title" })
		public title!: string;
		@Prop({ default: "Subtitle" })
		public subtitle!: string;
		@Prop({ default: "JAN" })
		public date!: string;
		@Prop({ default: "Description." })
		public description!: string;
		@Prop({ default: "no-image.jpg" })
		public imageUrl!: string;
	}
</script>

<style scoped>
	.card {
		width: 80%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card-header {
		height: 10vh;
		vertical-align: center;
	}
	img {
		height: 60vh;
	}
	.card-body {
	}
</style>

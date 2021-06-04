<template>
	<div class="test">
		<div class="sidebar"></div>
		<div class="content">
			<div class="card">Card 1</div>
			<div class="card">Card 2</div>
			<div class="card">Card 3</div>
			<div class="card">Card 4</div>
			<div class="card">Card 5</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue } from 'vue-class-component'

	export default class Test extends Vue {}
</script>

<style scoped>
	.test {
		background-color: blueviolet;
		display: grid;
		grid-template-rows: 60px auto;
	}

	.sidebar {
		background-color: #FFD369;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		background-color: #FFD369;
	}

	.card {
		flex: 0 1 500px;
		margin: 5px;
		background: #393E46;
		color: #EEEEEE;
	}


</style>

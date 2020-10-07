<template>
	<div class="header">
		<h1>{{ title }}</h1>
		<h2>{{ subtitle }}</h2>
		<p>{{ body }}</p>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: {
			title: String,
			subtitle: String,
			body: String,
			isAlt: Boolean
		}
	};
</script>

<style scoped>
	.header {
		/* background-color: #ffffff; */
		padding: 30px;
		margin: 8px;
	}
	h1 {
		color: #353535;
		font-size: 2em;
		width: auto;
		text-align: center;
		font-weight: 100;
	}
	h2 {
		color: #838383;
		font-size: 11px;
		width: auto;
		text-align: center;
		/* letter-spacing: 6px; */
		font-weight: 200;
		text-transform: uppercase;
	}
	p {
		color: #838383;
		margin: auto;
		margin-top: 10px;
		font-size: 13px;
		width: auto;
		text-align: center;
		max-width: 800px;
	}
</style>

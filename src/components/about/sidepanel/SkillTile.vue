<template>
	<div class="skill-tile">
		<slot></slot>
		<div class="title">{{ title }}</div>
		<div class="description">{{ description }}</div>
	</div>
</template>

<script>
	export default {
		name: 'ContactCard',
		components: {},
		props: {
			title: String,
			description: String,
		},
	};
</script>

<style scoped>
	.skill-tile {
		color: #9f9fa2;
		height: 36px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
	}

	.skill-tile:hover {
		outline-color: #9f9fa2;
		outline-width: 2px;
		outline-style: solid;
	}
	.material-design-icon {
		height: 24px;
		width: 20%;
	}
	.material-design-icon > svg {
		height: 24px;
		width: 24px;
	}

	.title {
		width: 40%;
		color: #888888;
		font-size: 12px;
		text-align: left;
		letter-spacing: 1px;
		font-weight: 600;
		text-transform: uppercase;
	}
	.description {
		width: 40%;
		color: #777777;
		font-size: 11px;
		text-align: right;
		letter-spacing: 1px;
		font-weight: 200;
		text-transform: uppercase;
	}
</style>

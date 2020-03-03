<template>
	<div class="contact-card">
		<slot v-bind:class="image"></slot>
		<div class="content">{{ content }}</div>
	</div>
</template>

<script>
	export default {
		name: 'ContactCard',
		components: {},
		props: {
			content: String,
		},
	};
</script>

<style scoped>
	.contact-card {
		color: #999999;
		height: 36px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
	}
	.content {
		height: auto;
		margin: 6px;
		text-align: left;
		font-size: 12px;
	}
	.image {
		height: 24px;
	}

	.material-design-icon {
		height: 24px;
		width: 32px;
		margin: 6px;
		margin-left: 12px;
	}
	.material-design-icon > svg {
		height: 24px;
		width: 32px;
	}
</style>

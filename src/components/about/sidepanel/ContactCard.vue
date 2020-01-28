<template>
	<div class="contact-card">
		<slot v-bind:class="image"></slot>
		<div class="content">{{content}}</div>
	</div>
</template>

<script>
export default {
	name: "ContactCard",
	components: {},
	props: {
		content: String
	}
}
</script>

<style scoped>
.contact-card {
	color: #9f9fa2;
	height: 64px;
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
	height: 32px;
}

.material-design-icon {
  height: 32px;
  width: 32px;
  margin: 6px;
  margin-left: 12px;
}
.material-design-icon > svg {
  height: 32px;
  width: 32px;
}
</style>

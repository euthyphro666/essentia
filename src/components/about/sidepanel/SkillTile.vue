<template>
	<div class="skill-tile">
		<slot></slot>
		<!-- <div class="content">{{content}}</div> -->
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
.skill-tile {
	color: #9f9fa2;
  height: 38px;
  width: 38px;
	padding: 6px;
	margin: 4px;
	/* display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	align-content: center; */
}
.content {
	height: auto;
	margin: 12px;
	text-align: center;
}

.skill-tile:hover {
	outline-color: #9f9fa2;
	outline-width: 2px;
	outline-style: solid;
}
.material-design-icon {
  height: 38px;
  width: 38px;
}
.material-design-icon > svg {
  height: 38px;
  width: 38px;
}
</style>

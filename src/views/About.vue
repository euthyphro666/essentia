<template>
  <div class="about">
	<div class="two-pane">
		<SidePanel />
		<ResumeBody />
	</div>
  </div>
</template>

<script>
import SidePanel from "../components/about/SidePanel.vue";
import ResumeBody from "../components/about/ResumeBody.vue";
export default {
	name: "About",
	components: {
		SidePanel,
		ResumeBody
	}
}
</script>

<style scoped>
.about {
	background-color: #cccccc;
	height: 100%;
	overflow-y: visible;
}
.two-pane {
	height: auto;
	display: flex;
	flex-direction: row;
}
</style>

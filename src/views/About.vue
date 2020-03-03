<template>
	<div class="about">
		<div id="two-pane">
			<SidePanel />
			<ResumeBody />
		</div>
		<!-- <div class="floater" @click="print()">
			<Printer />
		</div> -->
	</div>
</template>

<script>
	import SidePanel from '../components/about/SidePanel.vue';
	import ResumeBody from '../components/about/ResumeBody.vue';
	// import Printer from 'vue-material-design-icons/Printer.vue';

	export default {
		name: 'About',
		components: {
			SidePanel,
			ResumeBody,
			// Printer,
		},
		methods: {
			print() {
				this.$htmlToPaper('two-pane');
			},
		},
	};
</script>

<style scoped>
	.about {
		background-color: #cccccc;
		height: 100%;
		overflow-y: visible;
	}
	#two-pane {
		min-height: 100%;
		display: flex;
		flex-direction: row;
	}
	.floater {
		position: absolute;
		top: 20px;
		right: 35px;
		width: 32px;
		height: 32px;
		padding: 4px;
		border-radius: 50px;
		border: 4px solid #333333;
	}
	.floater:hover {
		border: 5px solid #777777;
		top: 19px;
		right: 34px;
	}
	.floater:hover .material-design-icon > svg {
		color: #777777;
		height: 33px;
		width: 33px;
	}
	.material-design-icon {
		height: 32px;
		width: 32px;
	}
	.material-design-icon > svg {
		color: #333333;
		height: 32px;
		width: 32px;
	}
</style>

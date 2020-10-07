<template>
	<div class="social">
		<div
			class="card github"
			@click="onClick('https://www.github.com/euthyphro666')"
		>
			<Github />
			<div class="title githubfg">GitHub</div>
		</div>
		<div
			class="card linkedin"
			@click="onClick('https://www.linkedin.com/in/joshhess8/')"
		>
			<Linkedin />
			<div class="title linkedinfg">LinkedIn</div>
		</div>
		<div
			class="card twitter"
			@click="onClick('https://twitter.com/euthyphro666')"
		>
			<Twitter />
			<div class="title twitterfg">Twitter</div>
		</div>
		<div class="card gmail" @click="onClick('mailto:joshhess13@gmail.com')">
			<Gmail />
			<div class="title gmailfg">Gmail</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Github from "vue-material-design-icons/Github.vue";
	import Linkedin from "vue-material-design-icons/Linkedin.vue";
	import Twitter from "vue-material-design-icons/Twitter.vue";
	import Gmail from "vue-material-design-icons/Gmail.vue";

	@Component({
		components: {
			Github,
			Linkedin,
			Twitter,
			Gmail
		}
	})
	export default class Social extends Vue {
		private onClick(path: string): void {
			window.location.href = path;
		}
	}
</script>

<style scoped>
	.social {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.card {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 25%;
	}
	.title {
		width: auto;
		height: auto;
		font-size: 2em;
		margin-left: 10px;
	}
	.material-design-icon {
		width: 10%;
		max-width: 100px;
		min-width: 40px;
		margin-right: 25px;
	}
	.material-design-icon > svg {
		height: 100%;
		width: 100%;
		color: #bebfc1;
	}

	.github {
		background: #24292e;
	}
	.github:hover {
		background: #3f4448;
	}
	.githubfg {
		color: #bebfc1;
	}

	.linkedin {
		background: #0077b5;
	}
	.linkedin:hover {
		background: #008cd8;
	}
	.linkedinfg {
		color: #e1e9ee;
	}

	.twitter {
		background: #15202b;
	}
	.twitter:hover {
		background: #243a52;
	}
	.twitterfg {
		color: #bebfc1;
	}

	.gmail {
		background: #b43424;
	}
	.gmail:hover {
		background: #c93b28;
	}
	.gmailfg {
		color: #e1e7d1;
	}
</style>

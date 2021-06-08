<template>
	<div class="plugs">
		<div
			class="plug github"
			@click="onClick('https://www.github.com/euthyphro666')"
		>
			<Github />
		</div>
		<div
			class="plug linkedin"
			@click="onClick('https://www.linkedin.com/in/joshhess8/')"
		>
			<Linkedin />
		</div>
		<div
			class="plug twitter"
			@click="onClick('https://twitter.com/euthyphro666')"
		>
			<Twitter />
		</div>
		<div class="plug gmail" @click="onClick('mailto:joshhess13@gmail.com')">
			<Gmail />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Github from '@/components/icons/Github.vue';
	import Linkedin from '@/components/icons/Linkedin.vue';
	import Twitter from '@/components/icons/Twitter.vue';
	import Gmail from '@/components/icons/Gmail.vue';

	export default defineComponent({
		name: 'Plugs',
		components: {
			Github,
			Linkedin,
			Twitter,
			Gmail,
		},
		setup() {
			const onClick = (path: string) => {
				window.open(path, '_blank');
			};
			return { onClick };
		},
	});
</script>

<style scoped>
	.plugs {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #ffd369;
		height: 100%;
		width: 100%;
	}
	.plug {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.plug > svg {
		height: 10vh;
	}
	.github {
		background: #24292e;
	}
	.github:hover {
		background: #3f4448;
	}
	.github > svg {
		fill: #bebfc1;
	}
	.linkedin {
		background: #0077b5;
	}
	.linkedin:hover {
		background: #008cd8;
	}
	.linkedin > svg {
		fill: #e1e9ee;
	}
	.twitter {
		background: #15202b;
	}
	.twitter:hover {
		background: #243a52;
	}
	.twitter > svg {
		fill: #bebfc1;
	}
	.gmail {
		background: #b43424;
	}
	.gmail:hover {
		background: #c93b28;
	}
	.gmail > svg {
		fill: #e1e7d1;
	}
</style>

<template>
	<div class="sidepanel">
		<img src="@/assets/profile.jpg" alt="Profile Picture" />
		<h1>CONTACT</h1>
		<div class="contact-container">
			<ContactCard
				v-for="contact in contacts"
				v-bind:key="contact.id"
				:content="contact.description"
			>
				<component :is="contact.icon" />
			</ContactCard>
		</div>
		<h1>Languages</h1>
		<div class="skill-container">
			<SkillTile
				v-for="skill in skills"
				v-bind:key="skill.id"
				:title="skill.description"
				:description="skill.proficiency"
			>
				<component :is="skill.icon" />
			</SkillTile>
		</div>
		<h1>Frameworks</h1>
		<div class="skill-container">
			<SkillTile
				v-for="skill in frames"
				v-bind:key="skill.id"
				:title="skill.description"
				:description="skill.proficiency"
			>
				<component :is="skill.icon" />
			</SkillTile>
		</div>
	</div>
</template>

<script>
	import ContactCard from "./sidepanel/ContactCard.vue";
	import SkillTile from "./sidepanel/SkillTile.vue";

	import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
	import LocationCity from "vue-material-design-icons/City.vue";
	import Phone from "vue-material-design-icons/Phone.vue";
	import Email from "vue-material-design-icons/Email.vue";
	import Web from "vue-material-design-icons/Web.vue";
	import Github from "vue-material-design-icons/Github.vue";
	import Linkedin from "vue-material-design-icons/Linkedin.vue";

	import LanguageCpp from "vue-material-design-icons/LanguageCpp.vue";
	import LanguageCsharp from "vue-material-design-icons/LanguageCsharp.vue";
	import LanguageGo from "vue-material-design-icons/LanguageGo.vue";
	import Cogs from "vue-material-design-icons/Cogs.vue";
	import Script from "vue-material-design-icons/Script.vue";
	import LanguageHtml5 from "vue-material-design-icons/LanguageHtml5.vue";
	import LanguageJava from "vue-material-design-icons/LanguageJava.vue";
	import LanguageJavascript from "vue-material-design-icons/LanguageJavascript.vue";
	import LanguagePython from "vue-material-design-icons/LanguagePython.vue";
	import LanguageTypescript from "vue-material-design-icons/LanguageTypescript.vue";
	import LanguageSwift from "vue-material-design-icons/LanguageSwift.vue";

	import LibraryShelves from "vue-material-design-icons/LibraryShelves.vue";

	import Unity from "vue-material-design-icons/Unity.vue";
	import VueJs from "vue-material-design-icons/Vuejs.vue";
	import Electron from "vue-material-design-icons/ElectronFramework.vue";
	import WebRTC from "vue-material-design-icons/Webrtc.vue";
	import Microsoft from "vue-material-design-icons/Microsoft.vue";
	import Angular from "vue-material-design-icons/Angular.vue";
	import Google from "vue-material-design-icons/Google.vue";
	// import XDA from 'vue-material-design-icons/Xda.vue';
	import Xaml from "vue-material-design-icons/LanguageXaml.vue";
	import Database from "vue-material-design-icons/Database.vue";

	export default {
		name: "SidePanel",
		components: {
			ContactCard,
			SkillTile,

			AccountCircle,
			LocationCity,
			Phone,
			Email,
			Web,

			LanguageCpp
		},
		data() {
			return {
				contacts: [
					{
						id: "birth",
						icon: AccountCircle,
						description: "Born 1997 in SLC, UT"
					},
					{
						id: "address",
						icon: LocationCity,
						description: "525 South 225 West Cedar City, UT"
					},
					{
						id: "phone",
						icon: Phone,
						description: "(435) 609-0045"
					},
					{
						id: "email",
						icon: Email,
						description: "joshhess13@gmail.com"
					},
					{
						id: "website",
						icon: Web,
						description: "joshess.info"
					},
					{
						id: "github",
						icon: Github,
						description: "github.com/euthyphro666"
					},
					{
						id: "linkedin",
						icon: Linkedin,
						description: "linkedin.com/in/joshhess8"
					}
				],
				skills: [
					{
						id: "csharp",
						icon: LanguageCsharp,
						description: "C Sharp",
						proficiency: "Adept"
					},
					{
						id: "ts",
						icon: LanguageTypescript,
						description: "TypeScript",
						proficiency: "Adept"
					},
					{
						id: "js",
						icon: LanguageJavascript,
						description: "JavaScript",
						proficiency: "Adept"
					},
					{
						id: "cpp",
						icon: LanguageCpp,
						description: "C Plus Plus",
						proficiency: "Advanced"
					},
					{
						id: "py",
						icon: LanguagePython,
						description: "Python",
						proficiency: "Advanced"
					},
					{
						id: "kotlin",
						icon: Script,
						description: "Kotlin",
						proficiency: "Advanced"
					},
					{
						id: "html5",
						icon: LanguageHtml5,
						description: "HTML / CSS",
						proficiency: "Advanced"
					},
					{
						id: "psql",
						icon: Database,
						description: "Postgres",
						proficiency: "Advanced"
					},
					{
						id: "batch",
						icon: Script,
						description: "Batch / Shell",
						proficiency: "Advanced"
					},
					{
						id: "ci",
						icon: Cogs,
						description: "CI / CD (Gitlab)",
						proficiency: "Advanced"
					},
					{
						id: "java",
						icon: LanguageJava,
						description: "Java",
						proficiency: "Advanced"
					},
					{
						id: "go",
						icon: LanguageGo,
						description: "Go Lang",
						proficiency: "Novice"
					},
					{
						id: "swift",
						icon: LanguageSwift,
						description: "Swift",
						proficiency: "Novice"
					}
				],
				frames: [
					{
						id: "rtc",
						icon: WebRTC,
						description: "WebRTC",
						proficiency: "Heavy"
					},
					{
						id: "vue",
						icon: VueJs,
						description: "Vue",
						proficiency: "Heavy"
					},
					{
						id: "electron",
						icon: Electron,
						description: "Electron",
						proficiency: "Heavy"
					},
					{
						id: "dotnet",
						icon: Microsoft,
						description: "DotNet",
						proficiency: "Heavy"
					},
					{
						id: "wpf",
						icon: Xaml,
						description: "WPF / Forms",
						proficiency: "Heavy"
					},
					{
						id: "unity",
						icon: Unity,
						description: "Unity",
						proficiency: "Heavy"
					},
					// {
					// 	id: 'mono',
					// 	icon: XDA,
					// 	description: 'MonoGame',
					// 	proficiency: 'Medium',
					// },
					{
						id: "gdx",
						icon: LibraryShelves,
						description: "LibGDX",
						proficiency: "Medium"
					},
					{
						id: "cv",
						icon: LibraryShelves,
						description: "OpenCV",
						proficiency: "Medium"
					},
					{
						id: "gl",
						icon: LibraryShelves,
						description: "OpenGL",
						proficiency: "Medium"
					},
					{
						id: "direct",
						icon: LibraryShelves,
						description: "Direct X",
						proficiency: "Light"
					},
					{
						id: "angular",
						icon: Angular,
						description: "Angular",
						proficiency: "Light"
					},
					{
						id: "tensor",
						icon: Google,
						description: "Tensor flow",
						proficiency: "Light"
					}
				]
			};
		}
	};
</script>

<style scoped>
	.sidepanel {
		background-color: #16151c;
		/* height: 100%; */
		width: 280px;
		min-width: 200px;
		/* flex-basis: 0; */
	}
	img {
		width: 100%;
	}
	.contact-container {
		display: flex;
		flex-direction: column;
	}
	.skill-container {
		display: flex;
		flex-direction: column;
		flex-wrap: none;
		justify-content: space-evenly;
		margin: 12px;
		width: calc(100% - 24px);
	}
	h1 {
		margin: 25px;
		margin-top: 35px;
		margin-bottom: 10px;
		font-size: 14px;
		color: #9f9fa2;
		width: auto;
		text-align: left;
		letter-spacing: 3px;
	}
</style>

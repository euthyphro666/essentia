<template>
	<div class="sidepanel">
		<img src="@/assets/profile.jpg" alt="Profile Picture">
		<h1>CONTACT</h1>
		<div class="contact-container">
			<ContactCard v-for="contact in contacts" v-bind:key="contact.id" :content="contact.description">
				<component :is="contact.icon"/>
			</ContactCard>
		</div>
		<h1>SKILLS</h1>
		<div class="skill-container">
			<SkillTile v-for="skill in skills" v-bind:key="skill.id" :content="skill.description">
				<component :is="skill.icon"/>
			</SkillTile>
		</div>
	</div>
</template>

<script>
import ContactCard from "./sidepanel/ContactCard.vue";
import SkillTile from "./sidepanel/SkillTile.vue";

import AccountCircle from 'vue-material-design-icons/AccountCircle.vue';
import LocationCity from 'vue-material-design-icons/City.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Web from 'vue-material-design-icons/Web.vue';

import LanguageCpp from 'vue-material-design-icons/LanguageCpp.vue';
import LanguageCsharp from 'vue-material-design-icons/LanguageCsharp.vue';
import LanguageCss3 from 'vue-material-design-icons/LanguageCss3.vue';
import LanguageGo from 'vue-material-design-icons/LanguageGo.vue';
import LanguageHaskell from 'vue-material-design-icons/LanguageHaskell.vue';
import LanguageHtml5 from 'vue-material-design-icons/LanguageHtml5.vue';
import LanguageJava from 'vue-material-design-icons/LanguageJava.vue';
import LanguageJavascript from 'vue-material-design-icons/LanguageJavascript.vue';
import LanguagePython from 'vue-material-design-icons/LanguagePython.vue';
import LanguageSwift from 'vue-material-design-icons/LanguageSwift.vue';
import LanguageTypescript from 'vue-material-design-icons/LanguageTypescript.vue';

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
					id: 'birth',
					icon: AccountCircle,
					description: 'Born 1997 in SLC, UT'
				},
				{
					id: 'address',
					icon: LocationCity,
					description: '525 South 225 West Cedar City, UT'
				},
				{
					id: 'phone',
					icon: Phone,
					description: '(435) 609-0045'
				},
				{
					id: 'email',
					icon: Email,
					description: 'joshhess13@gmail.com'
				},
				{
					id: 'website',
					icon: Web,
					description: 'joshess.info'
				}
			],
			skills: [
				{
					id: 'csharp',
					icon: LanguageCsharp,
					description: 'C++'
				},
				{
					id: 'ts',
					icon: LanguageTypescript,
					description: 'C++'
				},
				{
					id: 'js',
					icon: LanguageJavascript,
					description: 'C++'
				},
				{
					id: 'cpp',
					icon: LanguageCpp,
					description: 'C++'
				},
				{
					id: 'html5',
					icon: LanguageHtml5,
					description: 'C++'
				},
				{
					id: 'css3',
					icon: LanguageCss3,
					description: 'C++'
				},
				{
					id: 'py',
					icon: LanguagePython,
					description: 'C++'
				},
				{
					id: 'go',
					icon: LanguageGo,
					description: 'C++'
				},
				{
					id: 'haskell',
					icon: LanguageHaskell,
					description: 'C++'
				},
				{
					id: 'java',
					icon: LanguageJava,
					description: 'C++'
				},
				{
					id: 'swift',
					icon: LanguageSwift,
					description: 'C++'
				},
			]
		}
	}
}
</script>

<style scoped>
.sidepanel {
	background-color: #16151c;
	/* height: 100%; */
	width: 280px;
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
	flex-direction: row;
	flex-wrap: wrap;
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

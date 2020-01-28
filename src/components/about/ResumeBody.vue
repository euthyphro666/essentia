<template>
	<div class="resume-body">
		<h1>Josh Hess</h1>
		<h2>Sofware Engineer</h2>
		<h3>Experience</h3>
		<ContentCard v-for="exp in experiences" v-bind:key="exp.id" :title="exp.title" :subtitle="exp.subtitle" :body="exp.body" />
		<h3>Education</h3>
		<ContentCard v-for="exp in education" v-bind:key="exp.id" :title="exp.title" :subtitle="exp.subtitle" :body="exp.body" />
	</div>
</template>

<script>
import ContentCard from "./ContentCard";
export default {
	name: "ResumeBody",
	components: {
		ContentCard
	},
	data() {
		return {
			experiences: [
				{
					id: "cgm",
					title: "Software Engineer - Casino Game Maker",
					subtitle: "December 2017 - Present",
					body: "Full stack development, mostly focusing on communication protocols, video streaming, and tool development & integration (including CI/CD)."
				},
				{
					id: "suu",
					title: "Math Tutor/Grader - Southern Utah University",
					subtitle: "August 2016 - December 2017",
					body: "In the fall semester of 2016 I proctored and graded quizzes for a College Algebra class. In spring semester I graded assignments and tests for an Intermediate and Linear Algebra class."
				},
				{
					id: "inn",
					title: "Laundry Worker - Rodeway Inn",
					subtitle: "June 2015 - August 2015",
					body: "I was solely responsible for doing all of the hotels laundry."
				},
				{
					id: "ht",
					title: "Cashier - Hometown Market",
					subtitle: "July 2014 - April 2015",
					body: "Dealt with numerous people daily. Handled money, occasionally stocked inventory, and routinely cleaned."
				},
				{
					id: "jna",
					title: "Vehicle Transporter - JN Auto",
					subtitle: "May 2014 - August 2014",
					body: "Responsible for shuttling newly purchased cars from auction house storage to dealership - a three hour drive one way."
				},
				{
					id: "gen",
					title: "Custodian - Genco",
					subtitle: "August 2011 - July 2013",
					body: "Mostly cleaned up after mechanics and kept their shop tidy. Also occasionally handled a power washer to clean the finished products, and organized inventory."
				}
			],			
			education: [
				{
					id: "suu",
					title: "Computer Science",
					subtitle: "August 2015 - April 2020",
					body: ""
				},
			]
		};
	}
}
</script>

<style scoped>
.resume-body{
	padding: 25px;
	width: calc(100% - 50px);
	height: auto;
}
h1 {
	color: rgba(0, 0, 0, 0.7);
	font-size: 20px;
	width: auto;
	text-align: left;
	letter-spacing: 8px;
	font-weight: 100;
	text-transform: uppercase;
}
h2 {
	color: rgba(63, 61, 60, 0.71);
	margin-top: 25px;
	font-size: 11px;
	width: auto;
	text-align: left;
	letter-spacing: 8px;
	font-weight: 200;
	text-transform: uppercase;

}
h3 {
	color: rgb(63, 61, 60);
	margin-top: 25px;
	font-size: 14px;
	width: auto;
	text-align: left;
	letter-spacing: 3px;
	font-weight: 600;
	text-transform: uppercase;
}
.content-card {
	margin-top: 25px;
}
</style>

<template>
	<div class="resume-body">
		<h1>Josh Hess</h1>
		<h2>Sofware Engineer</h2>
		<h3>Education</h3>
		<ContentCard
			v-for="exp in education"
			v-bind:key="exp.id"
			:title="exp.title"
			:subtitle="exp.subtitle"
			:body="exp.body"
		/>
		<h3>Experience</h3>
		<ContentCard
			v-for="exp in experiences"
			v-bind:key="exp.id"
			:title="exp.title"
			:subtitle="exp.subtitle"
			:body="exp.body"
		/>
		<h3>Awards</h3>
		<ContentCard
			v-for="exp in awards"
			v-bind:key="exp.id"
			:title="exp.title"
			:subtitle="exp.subtitle"
			:body="exp.body"
		/>
	</div>
</template>

<script>
	/**

		Maybe add highschool
		Probably don't put description
		Probably nic the laundary
		Certifications,


	**/
	import ContentCard from './ContentCard';
	export default {
		name: 'ResumeBody',
		components: {
			ContentCard
		},
		data() {
			return {
				experiences: [
					{
						id: 'cgm',
						title: 'Software Engineer - Casino Game Maker',
						subtitle: 'December 2017 - Present',
						body:
							'Full stack development mostly focusing on communication protocols, video streaming, tool development & integration (including CI/CD).'
					},
					{
						id: 'suu',
						title: 'Math Tutor/Grader - Southern Utah University',
						subtitle: 'August 2016 - December 2017',
						body:
							'I proctored and graded for College Algebra and Linear Algebra classes. I also tutored for all levels of Math classes.'
					},
					{
						id: 'inn',
						title: 'Laundry Worker - Rodeway Inn',
						subtitle: 'June 2015 - August 2015',
						body:
							'I was solely responsible for doing all of the hotels laundry.'
					},
					{
						id: 'ht',
						title: 'Cashier - Hometown Market',
						subtitle: 'July 2014 - April 2015',
						body:
							'Dealt with numerous people daily. Handled money, occasionally stocked inventory, and routinely cleaned.'
					},
					{
						id: 'jna',
						title: 'Vehicle Transporter - JN Auto',
						subtitle: 'May 2014 - August 2014',
						body:
							'Responsible for shuttling newly purchased cars from auction house storage to dealership - a three hour drive one way.'
					},
					{
						id: 'gen',
						title: 'Custodian - Genco',
						subtitle: 'August 2011 - July 2013',
						body:
							'Mostly cleaned up after mechanics and kept their shop tidy. Also occasionally handled a power washer to clean the finished products, and organized inventory.'
					}
				],
				education: [
					{
						id: 'suu-math',
						title: 'Bachelor of Science - Southern Utah University',
						subtitle: 'April 2020',
						body:
							'Majored in Pure Mathematics - Minored in Philosophy - With Honors - 3.7 GPA'
					},
					{
						id: 'suu-cs',
						title: 'Bachelor of Science - Southern Utah University',
						subtitle: 'April 2020',
						body:
							'Majored in Computer Science - With Honors - 3.8 GPA'
					},
					{
						id: 'hs',
						title: 'High School Dimploma - Emery County Utah',
						subtitle: 'May 2015',
						body: 'Graduated with Honors - 3.9 GPA'
					}
				],
				awards: [
					{
						id: 'gamejam',
						title: 'Game Jam',
						subtitle: 'November 2018/2017',
						body:
							'Two time third place winner at Southern Utah Code Camp. First year with a live network simulator in VR. Second a game from scratch in Java.'
					},
					{
						id: 'sterling',
						title: 'Sterling Scholar',
						subtitle: 'April 2015',
						body:
							'Competed for and won the Utah Sterling Scholar High Excellence award for Math.'
					},
					{
						id: 'cad',
						title: 'CSWA',
						subtitle: 'August 2014',
						body: 'Associate certification in Solidworks'
					}
				]
			};
		}
	};
</script>

<style scoped>
	.resume-body {
		padding: 25px;
		min-width: 400px;
		width: calc(100% - 50px);
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
		margin-top: 15px;
	}
</style>

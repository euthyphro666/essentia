<template>
	<div class="content-card">
		<h1>{{title}}</h1>
		<h2>{{subtitle}}</h2>
		<p>{{body}}</p>
	</div>
</template>

<script>
export default {
	name: "ContentCard",
	props: {
		title: String,
		subtitle: String,
		body: String
	}
}
</script>

<style scoped>
.content-card {
	background-color: #ffffff;
	padding: 25px;
  	box-shadow: 0px 2px 3px 2px grey;
}
h1 {
	color: rgba(0, 0, 0, 0.7);
	font-size: 16px;
	width: auto;
	text-align: left;
	font-weight: 100;
}
h2 {
	color: rgba(63, 61, 60, 0.71);
	font-size: 11px;
	width: auto;
	text-align: left;
	/* letter-spacing: 6px; */
	font-weight: 200;
	text-transform: uppercase;

}
p {
	color: rgb(63, 61, 60);
	margin-top: 10px;
	font-size: 13px;
	width: auto;
	text-align: left;
}
</style>
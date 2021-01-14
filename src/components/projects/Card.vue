<template>
	<div :class="['demo-card', `demo-card--step${number}`]">
		<div class="head">
			<div class="number-box">
				<span>{{ date }}</span>
			</div>
			<h2>
				<span class="small">{{ subtitle }}</span> {{ title }}
			</h2>
		</div>
		<div class="body">
			<p>{{ description }}</p>
			<img :src="require(`../../assets/portfolio/${imageUrl}`)" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card",
		props: {
			title: String,
			subtitle: String,
			date: String,
			description: String,
			imageUrl: String,
			number: String
		}
	};
</script>

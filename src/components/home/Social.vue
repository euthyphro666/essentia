<template>
    <a href="./#/Social">
        <div class="container">
            <img src="../../assets/logo.png" width="200px" height="200px" />
            <h1>Social</h1>
        </div>
    </a>
</template>

<script>
export default {
    name: "Social"

}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        align-content: space-around;

        background: #dddddd;
        width: 100%;
        height: 100%;
    }

    h1 {
        color: #333333;
    }
</style>
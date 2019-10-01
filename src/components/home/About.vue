<template>
    <a href="./#/About">
        <div class="container">
            <img src="../../assets/logo-alt.png" width="200px" height="200px" />
            <h1>About</h1>
        </div>
    </a>
</template>

<script>
export default {
    name: "About"

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

        background: #333333;
        width: 100%;
        height: 100%;
    }

    h1 {
        color: #dddddd;
    }
</style>
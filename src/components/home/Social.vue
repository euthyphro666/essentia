<template>
  <div class="container">
      <img src="../../assets/logo.png" width="200px" height="200px" />
      <h1>Josh Hess</h1>
  </div>
</template>

<script>
export default {
    name: "Social"

}
</script>

<style scoped>
    .container {
        background: #dddddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
    }

    img {
        padding: 50px;
    }
    h1 {
        color: #333333;
        padding: 20px;
    }
</style>
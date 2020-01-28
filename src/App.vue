<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

*{
  padding: 0;
  margin: 0;
  overflow: hidden;
}

html {
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
}

</style>

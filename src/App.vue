<template>
  <div id="app">
    <router-link class="button" to="/eng">Go to English</router-link>
    <router-link class="button" to="/srb">Go to Serbian</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  background-color: #222222;
  position: relative;
}

.button {
  padding: 8px 14px;
  background-color: pink;
  margin-right: 2px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 10px;
}

  .button:first-child {
    left: 750px;
  }

  .button:last-child {
    left: 1045px;
  }

</style>

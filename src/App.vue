<template>
  <div id="app">
    <router-link @click="saveCookieEng" class="button" to="/eng">Go to English</router-link>
    <router-link @click="saveCookieSrb" class="button" to="/srb">Go to Serbian</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
      return {
          // eslint-disable-next-line
          goTo: agCookie.read('lang')
      }
  },
  mounted() {
      window.location.replace("http://localhost:8080/#/" + this.goTo);
  },
  methods: {
      saveCookieEng() {
          // eslint-disable-next-line
          agCookie.erase('lang');
          // eslint-disable-next-line
          agCookie.create('lang', 'eng', 200);
      },
      saveCookieSrb() {
          // eslint-disable-next-line
          agCookie.erase('lang');
          // eslint-disable-next-line
          agCookie.create('lang', 'srb', 200);
      }
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
  left: 750px;
}

  .button:first-child {
    top: 10px;
  }

  .button:nth-child(2) {
    top: 60px;
  }

</style>

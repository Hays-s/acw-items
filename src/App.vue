<template>
  <div id="app">
    <router-view/>
    <!-- <bottom-nav></bottom-nav> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
   mounted() {
    var documentElement = document.documentElement;

    function callback() {
      var clientWidth = documentElement.clientWidth;
      // 屏幕宽度大于1980，不在放大
      clientWidth = clientWidth < 1980 ? clientWidth : 1980;
      documentElement.style.fontSize = clientWidth / 10 + "px";
    }

    document.addEventListener("DOMContentLoaded", callback);
    window.addEventListener(
      "orientationchange" in window ? "orientationchange" : "resize",
      callback
    );
  }
}
</script>

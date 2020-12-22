<template>
  <div class="div_h1">
    <mt-header class="color_h1" fixed>
      <router-link to="/" slot="left">
        <mt-button>
          <img class="img_h1" src="../assets/details/logo.png" alt="" />
        </mt-button>
      </router-link>
      <div slot="right">
        <a href="javascript:history.go(-1)">
          <mt-button>
            <img class="img_h2" src="../assets/details/menu.png" alt=""/>
          </mt-button>
        </a>
      </div>
    </mt-header>
  </div>
</template>
<style>
.color_h1 {
  background-color: #ffd358 !important;
  height: 1.3rem !important;
}
.img_h1 {
  height: 0.8rem;
  width: 5.49rem;
  margin: 0 auto;
  margin-left: 0rem;
}
.img_h2 {
  height: 0.7rem;
  width: 0.8rem;
  margin: 0 auto;
  margin-right: 0rem;
}
</style>

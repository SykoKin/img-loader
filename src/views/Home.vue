<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
    <img-loader
      class="none"
      :src="'img/1.png'"
    ></img-loader>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import image from '../components/Img'

export default {
  name: 'home',
  components: {
    HelloWorld,
    'img-loader': image
  }
}
</script>

<style scoped>
.none {
  display: none;
}
</style>

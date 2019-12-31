<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return {
      cnt: 0,
      loaded: 0,
    }
  },
  created(){
    // 测试事件总线
    console.log(this.$eventBus)
    this.$eventBus.on('imgCreate', ()=>{
      this.cnt += 1
      console.log('总数：', this.cnt)
    })
    this.$eventBus.on('imgLoaded', ()=> {
      this.loaded += 1
      console.log('已加载：', this.loaded)
      if(this.loaded >= this.cnt) {
        console.log('加载完成')
      }
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

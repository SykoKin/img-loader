<template>
  <div>
    <img
      :src="src"
      :alt="alt"
    >
  </div>
</template>

<script>
export default {
  name: 'imgloader',
  props: {
    src: String,
    alt: String
  },
  data(){
    return {
    }
  },
  // 由事件总线接管加载状态
  created(){
    if(!this.src) return

    // 1. 获取参数并在总队列中新增加载项
    this.$eventBus.emit('imgCreate')
    // 2. 开始加载
    let img = new Image()
    img.onload = ()=>{
      this.$eventBus.emit('imgLoaded')
    }
    img.src = this.src
  }
}
</script>

<style scoped>
</style>
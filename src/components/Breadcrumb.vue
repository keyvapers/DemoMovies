<template>
  <div id="breadcrumb">
    <div class="item cursor-pointer hover:text-white" @click="goToHome()">Home </div><div class="item mx-2">/</div><div class="item font-bold title" v-if="title.length > 0">{{title}}</div>
  </div>
</template>
<script>
import '@/assets/css/Breadcrumb.css'
export default {
  name: 'Breadcrumb',
  props:{
    title:{
      type: String,
      default: ''
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>
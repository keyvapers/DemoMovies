<template>
  <div id="breadcrumb" class="bg-secondary h-12 py-2 px-4">
    <div class="inline-block align-middle cursor-pointer hover:text-white" @click="goToHome()">Home </div><div class="inline-block align-middle mx-2">/</div><div class="inline-block align-middle font-bold" v-if="title.length > 0">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props:{
    title:{
      type: String,
      default: ''
    }
  }
}
</script>
<template>
  <div>
    <Header/>
    <div id="body" class="font-sans">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import '@/assets/css/Main.css'

export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>

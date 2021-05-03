<template>
  <div>
    <Header/>
    <div id="body" class="font-sans">
      <router-view></router-view>
    </div>
    <div id="footer">
      <div class="align-middle">@keyvapers</div>
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

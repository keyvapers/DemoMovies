<template>
  <div>
    <Header/>
    <div class="px-4 pt-2">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>

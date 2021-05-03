<template>
  <div>
    <div id="search-bar" class="bg-secondary">
      <input v-model="search" placeholder="Search">
    </div>
    <containerCards :search="search"/>
  </div>
</template>
<script>
import '@/assets/css/List.css'
import containerCards from '@/components/ContainerCards.vue'

export default {
  name: 'List',
  components: {
    containerCards
  },
  data () {
    return {
      search: "",
    }
  }
}
</script>
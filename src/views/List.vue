<template>
  <div>
    <div id="search-bar" class="bg-secondary">
      <input v-model="search" placeholder="Search">
    </div>
    <containerCards :search="search" :movies="movies"/>
  </div>
</template>
<script>
import '@/assets/css/List.css'
import containerCards from '@/components/ContainerCards.vue'
import axios from 'axios'

export default {
  name: 'List',
  components: {
    containerCards
  },
  data () {
    return {
      search: "",
      movies: []
    }
  },
  methods:{
    async getMovies () {
      const apiURL = process.env.VUE_APP_API_URL || ''
      const url = '/films?limit=250'
      axios.get(`${apiURL + url}`, {})
        .then(response => {
          this.movies = response.data
        }).catch(() => {

        })      
    },
  },
  created () {
    this.getMovies()
  },
}
</script>
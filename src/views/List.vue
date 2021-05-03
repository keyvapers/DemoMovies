<template>
  <div>
    <div id="search-bar" class="bg-secondary">
      <input v-model="search" placeholder="Search">
    </div>
    <div class="container-cards">
      <card v-for="item in options" v-bind:key="item.id" 
        :title="item.title"
        :description="item.description"
        :director="item.director"
        :producer="item.producer"
        :id="item.id"
      />
    </div>
    <div class="w-full text-center py-4" v-if="options.length === 0">Not found matches</div>
  </div>
</template>
<script>
import axios from 'axios'
import card from '@/components/Card.vue'
import '@/assets/css/List.css'

export default {
  name: 'List',
  components: {
    card
  },
  data () {
    return {
      movies: [],
      search: "",
    }
  },
  methods: {
    async getMovies () {
      const apiURL = process.env.VUE_APP_API_URL || ''
      const url = '/films?limit=250'
      axios.get(`${apiURL + url}`, {})
        .then(response => {
          this.movies = response.data
        }).catch(() => {

        })      
    },
    filterBy(option){
      return (option.title || '').toLowerCase().indexOf(this.search.toLowerCase()) > -1
    }
  },
  created () {
    this.getMovies()
  },
  computed: {
    options () {
      return this.movies.filter(option => {
        return this.filterBy(option);
      });
    } 
  },
}
</script>
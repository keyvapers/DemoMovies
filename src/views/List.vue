<template>
  <div>
    <div id="search-bar">
      <input v-model="search" placeholder="Search" list="options">
      <datalist id="options" v-if="autocomplete">
        <option :value="item.title" v-for="item in options" v-bind:key="item.id" />
      </datalist>
      <span @click="search = ''" v-if="search.length > 0">
        <iconBase 
          :width="18" 
          :height="18" 
          iconColor="#ffff" 
          class="iconClean" 
          title="Clean search"
        ><iconClose/>
      </iconBase> </span>
    </div>
    <containerCards :search="search" :movies="movies"/>
  </div>
</template>
<script>
import '@/assets/css/List.css'
import containerCards from '@/components/ContainerCards.vue'
import axios from 'axios'
import iconBase from '@/components/icons/iconBase.vue'
import iconClose from '@/components/icons/iconClose.vue'

export default {
  name: 'List',
  components: {
    containerCards,
    iconBase,
    iconClose
  },
  data () {
    return {
      search: "",
      movies: [],
      autocomplete: process.env.VUE_APP_AUTOCOMPLETE
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
    cleanSearch(){
      console.log('clean')
    }
  },
  created () {
    this.getMovies()
  },
  computed: {
    options () {
      return this.movies.filter(option => {
        return (option.title || '').toLowerCase().indexOf(this.search.toLowerCase()) > -1
      });
    } 
  },
}
</script>
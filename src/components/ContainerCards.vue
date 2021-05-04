<template>
  <div>
    <div class="container-cards">
      <card v-for="(item,index) in options" v-bind:key="item.id" 
        :title="item.title"
        :description="item.description"
        :director="item.director"
        :producer="item.producer"
        :runningTime="item.running_time"
        :score="item.rt_score"
        :releaseDate="item.release_date"
        :id="item.id"
        v-show="(page - 1) * perPage <= index  && page * perPage > index"
      />
    </div>
    <div class="text-center">
      <button class="button-paginate" v-show="page != 1" @click.prevent="back()">Back</button>
      <button class="button-paginate"
        v-show="page * perPage / options.length < 1" 
        @click.prevent="next()"
      >Next</button>
    </div>
    
    <div class="text-center text-2xl py-4 w-full text-dark" v-if="options.length === 0">Not matches found</div>
  </div>
</template>
<script>
import card from '@/components/Card.vue'
import '@/assets/css/ContainerCards.css'

export default {
  name: 'ContainerCards',
  props:{
    search:{
      type: String,
      default: ''
    },
    movies:{
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      perPage: 6, 
      page: 1
    }
  },
  components: {
    card
  },
  methods:{
    back () {   
      this.page -= 1
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    next () {  
      this.page += 1 
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  computed: {
    options () {
      return this.movies.filter(option => {
        return (option.title || '').toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    } 
  }
}
</script>
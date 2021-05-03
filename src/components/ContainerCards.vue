<template>
  <div>
    <div class="container-cards">
      <card v-for="item in options" v-bind:key="item.id" 
        :title="item.title"
        :description="item.description"
        :director="item.director"
        :producer="item.producer"
        :runningTime="item.running_time"
        :score="item.rt_score"
        :releaseDate="item.release_date"
        :id="item.id"
      />
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
      default: function () {
        return []
      }
    }
  },
  components: {
    card
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
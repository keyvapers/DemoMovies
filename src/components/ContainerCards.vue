<template>
  <div>
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
import card from '@/components/Card.vue'
import '@/assets/css/List.css'

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
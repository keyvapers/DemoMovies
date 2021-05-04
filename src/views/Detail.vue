<template>
  <div>
    <breadcrumb :title="movie ? movie.title : ''" />
    <div v-if="error" class="text-center font-bold text-3xl p-4">Not Found</div>
    <card-complete
      v-if="!error && movie != null"
      :title="movie.title"
      :producer="movie.producer"
      :director="movie.director"
      :description="movie.description"
      :runningTime="movie.running_time"
      :score="movie.rt_score"
      :releaseDate="movie.release_date"
      :originalTitle="movie.original_title"
      :titleRomanised="movie.original_title_romanised"
    />
  </div>
</template>
<script>
import axios from 'axios'
import cardComplete from '@/components/CardComplete.vue'
import breadcrumb from '@/components/Breadcrumb.vue'

export default {
  name: 'Detail',
  components:{
    cardComplete,
    breadcrumb
  },
  data () {
    return {
      id: this.$route.params.id,
      movie: null,
      error: false
    }
  },
  methods: {
    async getMovie () {
      const apiURL = process.env.VUE_APP_API_URL || ''
      axios.get(`${apiURL}/films/${this.id}`, {})
        .then(response => {
          this.movie = response.data
        }).catch(() => {
          this.error = true
        })      
    }
  },
  created () {
    this.getMovie()
  }
}
</script>
<template>
  <div>
    <div id="breadcrumb" class="bg-secondary">
      <div class="inline-block align-middle cursor-pointer hover:text-white" @click="goToHome()">Home </div><div class="inline-block align-middle mx-2">/</div><div class="inline-block align-middle font-bold">{{movie.title}}</div>
    </div>
    <div class="p-4">
      <div v-if="error" class="text-center font-bold text-3xl">Not Found</div>
      <div v-if="!error && movie != null" class="p-6 shadow-lg rounded-lg bg-white">
        <div class="text-3xl mb-2 text-center">{{movie.title}}</div>
        <div class="mb-2 text-center">
          <div class="inline-block">
            <iconBase :width="18" :height="18" iconColor="" class="align-middle inline-block" title="Running time"><iconClock/></iconBase>  
            <span class="align-middle inline-block ml-1">{{movie.running_time}}</span>
          </div>
          <div class="inline-block ml-5">
            <iconBase :width="18" :height="18" iconColor="" class="align-middle inline-block" title="Score"><iconStar/></iconBase>  
            <span class="align-middle inline-block ml-1">{{movie.rt_score}}</span>
          </div>
          <div class="inline-block ml-5">
            <iconBase :width="18" :height="18" iconColor="" class="align-middle inline-block" title="Relese date"><iconCalendar/></iconBase>  
            <span class="align-middle inline-block ml-1">{{movie.release_date}}</span>
          </div>
        </div>
        <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4 mt-4"><span class="font-bold">Original title: </span>{{movie.original_title}}</div>
        <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4"><span class="font-bold">Original title romanised: </span>{{movie.original_title_romanised}}</div>
        <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4"><span class="font-bold">Director: </span>{{movie.director}}</div>
        <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4"><span class="font-bold">Producer: </span>{{movie.producer}}</div>
        <p class="text-justify mt-8">{{movie.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/css/Detail.css'
import axios from 'axios'
import iconBase from '@/components/icons/iconBase.vue'
import iconStar from '@/components/icons/iconStar.vue'
import iconClock from '@/components/icons/iconClock.vue'
import iconCalendar from '@/components/icons/iconCalendar.vue'

export default {
  name: 'Detail',
  components:{
    iconBase,
    iconStar,
    iconClock,
    iconCalendar
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
    },
    goToHome(){
      this.$router.push('/')
    }
  },
  created () {
    this.getMovie()
  },
}
</script>
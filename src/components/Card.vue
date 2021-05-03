<template>
  <div class="card bg-white m-2 p-4 pb-14 shadow-lg relative rounded-lg  ">
    <div class="mb-3 text-3xl title text-center text-dark">{{title || '--'}}</div>
    <div class="mb-2 text-center">
      <div class="inline-block">
        <iconBase :width="18" :height="18" iconColor="#616161" class="align-middle inline-block" title="Running time"><iconClock/></iconBase>  
        <span class="align-middle inline-block ml-1 runningTime">{{runningTime || '--'}}</span>
      </div>
      <div class="inline-block ml-5">
        <iconBase :width="18" :height="18" iconColor="#FBC635" class="align-middle inline-block" title="Score"><iconStar/></iconBase>  
        <span class="align-middle inline-block ml-1 score">{{score || '--'}}</span>
      </div>
      <div class="inline-block ml-5">
        <iconBase :width="18" :height="18" iconColor="#8DC4D4" class="align-middle inline-block" title="Relese date"><iconCalendar/></iconBase>  
        <span class="align-middle inline-block ml-1 releaseDate">{{releaseDate || '--'}}</span>
      </div>
    </div>
    <p class="description my-2 text-sm text-justify">{{description || '--'}}</p>
    <button class="button" @click="goToDetail()" v-if="id">See More</button>
  </div>
</template>
<script>
import '@/assets/css/Card.css'
import iconBase from '@/components/icons/iconBase.vue'
import iconStar from '@/components/icons/iconStar.vue'
import iconClock from '@/components/icons/iconClock.vue'
import iconCalendar from '@/components/icons/iconCalendar.vue'

export default {
  name: 'Card',
  components:{
    iconBase,
    iconStar,
    iconClock,
    iconCalendar
  },
  props:{
    title:{
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    },
    id:{
      type: String,
      default: ''
    },
    runningTime:{
      type: String,
      default: ''
    },
    score:{
      type: String,
      default: ''
    },
    releaseDate:{
      type: String,
      default: ''
    },
  },
  methods: {
    goToDetail(){
      this.$router.push(`/movie-${this.normalize(this.title)}/${this.id}`)
    },
    normalize(title){
      let normalize = title.replaceAll(' ','-')
      return normalize.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  }
}
</script>
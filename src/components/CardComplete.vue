<template>
  <div class="p-4">
    <div  class="p-6 shadow-lg rounded-lg bg-white">
      <div class="text-3xl mb-2 text-center title">{{title || '--'}}</div>
      <div class="mb-2 text-center">
        <div class="inline-block">
          <iconBase :width="18" :height="18" iconColor="" class="align-middle inline-block" title="Running time"><iconClock/></iconBase>  
          <span class="align-middle inline-block ml-1 runningTime">{{runningTime || '--'}}</span>
        </div>
        <div class="inline-block ml-5">
          <iconBase :width="18" :height="18" iconColor="" class="align-middle inline-block" title="Score"><iconStar/></iconBase>  
          <span class="align-middle inline-block ml-1 score">{{score || '--'}}</span>
        </div>
        <div class="inline-block ml-5">
          <iconBase :width="18" :height="18" iconColor="" class="align-middle inline-block" title="Relese date"><iconCalendar/></iconBase>  
          <span class="align-middle inline-block ml-1 releaseDate">{{releaseDate || '--'}}</span>
        </div>
      </div>
      <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4 mt-4"><span class="font-bold">Original title: </span><span class="originalTitle">{{originalTitle || '--'}}</span></div>
      <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4"><span class="font-bold">Original title romanised: </span><span class="titleRomanised">{{titleRomanised || '--'}}</span></div>
      <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4"><span class="font-bold">Director: </span><span class="director">{{director || '--'}}</span></div>
      <div class="w-full sm:w-1/2 sm:inline-block py-2 pl-4"><span class="font-bold">Producer: </span><span class="producer">{{producer || '--'}}</span></div>
      <p class="text-justify mt-8">{{description || '--'}}</p>
    </div>
  </div>
</template>
<script>
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
  props:{
    title:{
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    },
    director:{
      type: String,
      default: ''
    },
    producer:{
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
    originalTitle:{
      type: String,
      default: ''
    },
    titleRomanised:{
      type: String,
      default: ''
    },
  }
}
</script>
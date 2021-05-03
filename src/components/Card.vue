<template>
  <div class="p-4 shadow-lg m-2 rounded-lg bg-white card">
    <div class="text-3xl mb-2 title">{{title || '--'}}</div>
    <div class="text-sm director">Director: {{director || '--'}}</div>
    <div class="text-sm producer">Producer: {{producer || '--'}}</div>
    <p class="text-sm text-justify mt-2 description">{{description || '--'}}</p>
    <div>
      <button class="bg-blue-100 p-2 rounded-lg button" @click="goToDetail()" v-if="id">See More</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
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
    id:{
      type: String,
      default: ''
    }
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
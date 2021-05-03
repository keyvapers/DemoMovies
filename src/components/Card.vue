<template>
  <div class="p-4 shadow-lg m-2 rounded-lg bg-white">
    <div class="text-3xl mb-2">{{title}}</div>
    <div class="text-sm">Director: {{director}}</div>
    <div class="text-sm">Producer: {{producer}}</div>
    <p class="text-sm text-justify mt-2">{{description}}</p>
    <div>
      <button class="bg-blue-100 p-2 rounded-lg" @click="goToDetail()">See More</button>
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
      required: true
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
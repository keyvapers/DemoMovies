<template>
  <div class="p-4 shadow-lg m-2 rounded-lg bg-white">
    <div class="text-3xl mb-2">{{title}}</div>
    <div class="text-sm">Director: {{director}}</div>
    <div class="text-sm">Producer: {{producer}}</div>
    <p class="text-sm text-justify mt-2">{{description}}</p>
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
  }
}
</script>
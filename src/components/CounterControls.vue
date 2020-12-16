<template>
    <div class="counter-controls">
      <button class="btn" @click="$emit('increment')">+</button>
      <button class="btn btn-rm" @click="decrement">-</button>
    </div>
</template>

<script>
  export default {
    name: 'CounterControls',
    methods: {
      decrement(){
        this.$emit("decrement")
      }
    }
  }
</script>

<style scoped>
  .counter-controls{
  display:flex;
  flex-direction: row;
  justify-content: center;
}
.btn {
  background-color: green;
  border-radius: 5px;
}
.btn-rem{
  background-color: red;
}

</style>
<template>
<div class="counter">
    <h1>Counter Page</h1>
    <b>{{value}}</b>
    <CounterControls @increment="value++" @decrement="onDecrement"/>
  </div>
</template>

<script>
import CounterControls from './../components/CounterControls'
export default {
  name:"Counter",
  data(){
    return {
      value: 0
    }
  },
  components: {
    CounterControls
  },
  methods:{
    onDecrement(){
      this.value--
    }
  }
}
</script>

<style scoped>
.counter{
  display: flex;
  text-align: center;
  margin: 3rem;
  flex-direction: column;
}
</style>

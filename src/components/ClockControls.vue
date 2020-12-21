<template>
  <div class="btn-container">
    <button @click="$emit('change-time')" id='1'>Time in London, UK</button>
    <button @click="$emit('change-time')" id='2'>Time in New York, USA</button>
    <button @click="$emit('change-time')" id='3'>Time in Nuuk, Greenland</button>
    </div>
</template>

<script>
export default {
  name: "ClockControls"
}
</script>

<style>
  .btn-container{
    display: flex;
    flex-direction: row;
  }
  button{
    margin-top: 10rem;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 14px;
  }
</style>
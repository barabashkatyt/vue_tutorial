<template>
  <div>
    <h2>Time in our timezone is {{time}}</h2>

    <h1>Time in {{timezone}}</h1>
    <h2>{{localtime}}</h2>
    <div class="btn-container">
    <button v-on:click="handleClick" id='1'>Time in London, UK</button>
    <button v-on:click="handleClick" id='2'>Time in New York, USA</button>
    <button v-on:click="handleClick" id='3'>Time in Nuuk, Greenland</button>
    </div>
  </div>
</template>

<script>
export default {
name:"Clocks",
data(){
  return {
    time: new Date().toLocaleString(),
    localtime: new Date().toLocaleString(),
    timezone: 'Minsk BY'
  }
},
methods:{
  handleClick(){
    let id = event.currentTarget.id
    switch(id){
      case '1':
        this.localtime = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
        this.timezone = "London UK"
      break;
      case '2':
        this.localtime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York'})
        this.timezone = "New York USA"
      break;
      case '3':
    this.localtime = new Date().toLocaleString('en-GL', { timeZone: 'America/Nuuk'})  
    this.timezone = "Nuuk Greenland"
      break;
      default: this.localtime = this.time
    };
  },
},
mounted(){
  let id = setInterval(()=>{
    this.time = new Date().toLocaleString()
  },1000)
},
beforeDestroy(){
  clearInterval(this.id)
}
}
</script>

<style scoped>
*{
  margin-top: 2rem;
  text-align: center;
  justify-content: center;
}
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
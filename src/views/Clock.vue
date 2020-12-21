<template>
  <div>
    <h2>Time in our timezone is {{time}}</h2>

    <h1>Time in {{city}}</h1>
    <h2>{{hasInterval?localtime:time}}</h2>
    <ClockControls @change-time="handleClick"/>
    
  </div>
</template>

<script>
import ClockControls from '@/components/ClockControls'
export default {
name:"Clock",
data(){
  return {
    time: new Date().toLocaleString(),
    city: 'Minsk BY',
    zone: 'ru-RU',
    timezone: 'GMT', 
    localtime: new Date().toLocaleString(),
    hasInterval: false,
    intervalArr: []
  }
},
components:{
  ClockControls
},
methods:{
  handleClick(){
    let id = event.currentTarget.id
    switch(id){
      case '1':
        this.zone = 'en-GB'
        this.city = "London UK"
        this.timezone = { timeZone: 'UTC' }
        this.setTimezone()
      break;
      case '2':
        this.zone = 'en-US'
        this.city = "New York USA"
        this.timezone = { timeZone: 'America/New_York'}
        this.setTimezone()
      break;
      case '3':
        this.zone = 'en-GL'
        this.city = "Nuuk Greenland"
        this.timezone = { timeZone: 'America/Nuuk'}
        this.setTimezone()
      break;
      default: this.setTimezone(this.zone, this.timezone)
    };
  },
  setTimezone(){
    if (this.hasInterval){
      clearInterval(this.intervalArr[0])
      this.hasInterval = false
    }
    let interval = setInterval(()=>{
    this.localtime = new Date().toLocaleString(this.zone,this.timezone)
  },1000)
  this.hasInterval= true
  this.intervalArr.push(interval)
  }
},
mounted(){
  let id = setInterval(()=>{
    this.time = new Date().toLocaleString()
  },1000)
},
beforeDestroy(){
  clearInterval(this.id)
  this.hasInterval = false
  this.intervalArr = []
  console.log(this.intervalArr,this.hasInterval)
},
}
</script>

<style scoped>
*{
  margin-top: 2rem;
  text-align: center;
  justify-content: center;
}

</style>
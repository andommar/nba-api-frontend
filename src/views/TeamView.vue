<template>
<div class="col-md-12 d-flex justify-content-center">
  <div class="d-flex flex-column">
    <div class="logo">
      <img :src='stateTeam.logo' alt="">
    </div>
    <h3>{{ stateTeam.full_name }}</h3>
    <h6>{{ stateTeam.stadium }} · {{ stateTeam.location }}</h6>
    <h6>{{ stateTeam.wins }} <span class="record wins">W</span> - {{ stateTeam.loses }} <span class="record loses">L</span></h6>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute} from 'vue-router';
export default {

    setup () {
        const route = useRoute();
        const teamId = route.params.id;
        const stateTeam = ref({});


        const getTeams = async() =>{
          try{
            const res = await fetch('https://nba-stats-deploy-nodejs.herokuapp.com/api/teams/'+teamId)
            const data = await res.json()
            console.log(data)
            stateTeam.value = data

          } catch (error) {
            console.log(error)
          }
        }
        onMounted(()=>{
          getTeams()
        })

        return {stateTeam}
    }
}
</script>

<style>
.logo img {
  height: 240px;
}
.record {
  font-weight: bold;
}
.wins{
  color: green
}
.loses{
color:red
}
</style>
<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div v-for="team in stateTeams" :key="team.id" class="col-md-4 d-flex flex-column my-2">
            <TeamCard :logo='team.logo' :team_name='team.name' :team='team' :id='team.id' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TeamCard from '../components/TeamCard.vue'
import {onMounted, ref} from 'vue'
export default {
  name: 'HomeView',
  components: { TeamCard },
  setup(){

    const stateTeams = ref()

    const getTeams = async() =>{
        try{
          const res = await fetch('https://nba-stats-deploy-nodejs.herokuapp.com/api/teams')
          const data = await res.json()
          stateTeams.value = data.map(team => ({id: team._id, name: team.full_name, logo: team.logo, team: team.name}));
        } catch (error) {
          console.log(error)
        }
      }


    onMounted(()=>{
      getTeams()
    })
    return {stateTeams}
  }
}
</script>

<style>

</style>

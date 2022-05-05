<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div v-for="player in statePlayers" :key="player._id" class="col-md-4 d-flex flex-column my-2">
            <PlayerCard :player_img="player.picture" :first_name="player.first_name" :last_name="player.last_name" :id="player._id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import PlayerCard from '../components/PlayerCard.vue'

export default {
    components: { PlayerCard },
    setup(){
    
    const statePlayers = ref()

    const getPlayers = async() =>{
        try{
          const res = await fetch('https://nba-stats-deploy-nodejs.herokuapp.com/api/players')
          const data = await res.json()
          console.log(data)
            statePlayers.value = data;
        } catch (error) {
          console.log(error)
        }
      }


    onMounted(()=>{
      getPlayers()
    })
    return {statePlayers}
  }

}
</script>

<style>

</style>
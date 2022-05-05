<template>
<div class="col-md-12 d-flex justify-content-center">
  <div class="d-flex flex-column">
    <div class="player-pic">
        <div v-if="statePlayer.picture!=null">
            <img :src='statePlayer.picture' alt="">
        </div>
        <div v-else>
            <img src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" alt="">
        </div>
    </div>
    <h3>{{ statePlayer.first_name }} {{ statePlayer.last_name }}</h3>
    <h6>{{ statePlayer.height_cm }} cms, {{ statePlayer.position }}</h6>
    <h6>{{ statePlayer.team }}</h6>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
        setup () {
        const route = useRoute();
        const playerId = route.params.id;
        const statePlayer = ref({});


        const getPlayer = async() =>{
          try{
            const res = await fetch('https://nba-stats-deploy-nodejs.herokuapp.com/api/players/'+playerId)
            const data = await res.json()
            console.log(data)
            statePlayer.value = data

          } catch (error) {
            console.log(error)
          }
        }
        onMounted(()=>{
          getPlayer()
        })

        return {statePlayer}
    }
}

</script>

<style>
.player-pic img{
    height: 240px;
}
</style>
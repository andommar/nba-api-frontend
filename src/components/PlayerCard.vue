<template>
<div>
    <div class="player-picture">
        <div v-if="player_img!=null">
            <img :src='player_img' alt="">
        </div>
        <div v-else>
            <img src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" alt="">
        </div>
    </div>
    <router-link :to="{name: 'player-page', params: {id: id}}">
        <div>{{first_name}} {{last_name}}</div>
    </router-link>

</div>
</template>

<script>

export default {
props: ['first_name', 'last_name', 'player_img', 'id'],
    setup(){
        
    }
}
</script>

<style>
.player-picture img{
  height: 120px;
}
</style>
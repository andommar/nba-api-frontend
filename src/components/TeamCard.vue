<template>
<div>
    <div class="main-logo">
        <img :src='logo' alt="">
    </div>
    <router-link :to="{name: 'team-page', params: {id: id, name: team_name, team: team}}">
        <div>{{team_name}}</div>
    </router-link>

</div>
</template>

<script>
export default {
props: ['team_name', 'logo', 'id', 'team']
}
</script>

<style>
.main-logo img{
  height: 180px;
}
</style>
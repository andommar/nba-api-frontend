<template>
    <div class="container">
      <div class="row d-flex justify-content-center">
          <div v-for="article in newsData" :key="article.url">
              <NewsArticle :article="article"/>
              <!-- {{ article.title }} -->
          </div>
      </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import NewsArticle from '../components/NewsArticle.vue'
export default {
    components:{
        NewsArticle
    },
    setup(){
        const newsData = ref()

        const news = computed (()=>{

        })

        const getNews = async() =>{
          try{
            const res = await fetch('https://nba-stats-deploy-nodejs.herokuapp.com/api/news')
            const data = await res.json()
            console.log(data)
            newsData.value = data
          } catch (error) {
            console.log(error)
          }
        }

        onMounted(()=>{
            getNews()
        })
    return {newsData}
    }
}
</script>

<style>

</style>
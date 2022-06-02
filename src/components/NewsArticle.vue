<template>
  <div class="d-flex justify-content-center align-items-center news-article-card ">
        <!-- <img  class="article-news-headline" :src="article.image" alt=""> -->
      <div><span class="emoji">🏀</span>
        <span><a :href="article.url">{{article.title}}</a></span>
      </div>
  </div>
</template>

<script>
export default {
    props:['article']

}
</script>

<style scoped>
.article-news-headline{
    width: 15%;
}
.news-article-card{
    margin: 10px 0px
}
</style>
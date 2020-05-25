<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <article-detail/>
    <article-detail-side-column/>
  </div>
</template>

<script>
import ArticleDetail from '@/components/templates/ArticleDetail.vue'
import ArticleDetailSideColumn from '@/components/templates/ArticleDetailSideColumn.vue'

export default {
  ArticleDetail,
  ArticleDetailSideColumn
}
</script>

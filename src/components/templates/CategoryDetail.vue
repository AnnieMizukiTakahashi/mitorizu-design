<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <div class="container mb-48 ml-16 mr-16 ml-32-pc mr-32-pc">
      <nav class="breadcrumb has-arrow-separator mt-16" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{ name: 'top'}">
              <p class="has-text-underline main-text-color">トップページ</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'category'}">
              <p class="has-text-underline main-text-color">学問分野から探す</p>
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">心理学</a>
          </li>
        </ul>
      </nav>
          <p>Category_detail_learn</p>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
</style>

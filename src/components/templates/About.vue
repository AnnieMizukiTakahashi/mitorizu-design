<template>
  <div class="container mb-48 ml-16 mr-16 ml-32-pc mr-32-pc">
    <nav class="breadcrumb has-arrow-separator mt-16" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{ name: 'top'}">
            <p class="has-text-underline main-text-color">トップページ</p>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">知の見取り図とは?</a></li>
      </ul>
    </nav>
    <headding
    class="mt-48"
    :headding="'知の見取り図とは'"/>
      <p class="mt-16">知の見取り図は、2014年の12月に動き出したプロジェクトです。目的は「学びたいことがあるのに、学び方がわからなくて困っている人たちを助ける」ことを通して、知的好奇心に優しい社会を創ることです。
知の見取り図の説明とサイトにはじめに来た人たちに伝えたい理念をここに掲載します。</p>
    <headding
    class="mt-48"
    :headding="'記事や本棚の見つけ方'"/>
    <div class="columns mt-16 mb-16">
      <div class="column is-one-quarter">
        <router-link :to="{ name: 'theme' }">
          <p class="is-size-5 has-text-underline main-text-color">テーマから探す</p>
        </router-link>
      </div>
      <div class="column">
        <p class="is-size-6">話題のトピックから普遍的な命題まで、心の琴線に触れるようなテーマから、本棚や記事を見ることができます。</p>
      </div>
    </div>
    <div class="columns mt-16">
      <div class="column is-one-quarter">
        <router-link :to="{ name: 'category' }">
          <p class="is-size-5 has-text-underline main-text-color">学問分野から探す</p>
        </router-link>
      </div>
      <div class="column">
        <p class="is-size-6">知りたい学問分野がある程度明確な方はこちらから。複数の学問にまたがったような記事や本棚にも検索できます。</p>
      </div>
    </div>
    <div class="columns mt-48 has-text-centered">
      <div class="column">
        <div class="has-text-weight-bold is-size-5">
          学ぶ前に、勉強法や学習マインドから知りたい方はこちら！
        </div>
        <router-link :to="{ name: 'category-detail' }">
          <round-button
          class="mt-16"
          :title="'学習法についての記事・本棚'"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Headding from '@/components/atoms/Headding.vue'
import RoundButton from '@/components/atoms/RoundButton.vue'
export default {
  components: {
    Headding,
    RoundButton
  }
}
</script>

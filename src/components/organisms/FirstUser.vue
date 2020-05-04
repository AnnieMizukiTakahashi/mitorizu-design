<template>
  <div class="container">
    <div class="is-size-5 has-text-weight-bold has-text-centered">初めての方へ</div>
    <p class= "mt-16-pc mt-8 mb-8 is-size-5-pc is-size-6 has-text-centered">知の見取り図は「学知を可視化し、アクセス可能にする」ことを目的としたサービスです。<br>
専門家へのインタビュー、学習時に役立つ参考文献など様々な学問学習者の方の学びをサポートするメディアです。</p>
  <router-link :to="{ name: 'about' }">
    <round-button
      class="mt-32-pc mt-16 mb-16"
      :title="'詳しく見る'"/>
  </router-link>
  </div>
</template>

<script>
import RoundButton from '../atoms/RoundButton.vue'

export default {
  components: {
    RoundButton
  }
}
</script>

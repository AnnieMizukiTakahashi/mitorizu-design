<template>
  <footer>
    <div class="container ">
      <div class="columns has-text-left pl-16 pr-16 pt-16 pb-32">
        <div class="column is-one-quarter image elements display is-flex">
          <router-link to="/">
          <img src="@/assets/ic_logo_white.png" art="" contain height="48" width="186"/>
          </router-link>
        </div>
        <div class="column is-one-quarter is-size-6">
          <ul>
              <li>
              <router-link class="has-text-white" to="about">知の見取り図とは？</router-link>
              </li>
              <li>
              <router-link class="has-text-white" to="learn">うまく学習するには？</router-link>
              </li>
              <li>
              <router-link class="has-text-white" to="theme">テーマから記事を探す</router-link>
              </li>
              <li>
              <router-link class="has-text-white" to="academic">学術分野から記事を探す</router-link>
              </li>
          </ul>
        </div>

        <div class="column is-one-quarter">
          <ul>
            <li>
                <p>お問い合わせはこちら！</p>
            </li>
          </ul>
        </div>

        <div class="column is-one-quarter">
          <ul>
            <li>
                <p>SNSのフォローお願いします！</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
footer{
  background-color: $dark-blue;

  li{
    padding-top: 1rem;
    color: $white;
  }
}
</style>

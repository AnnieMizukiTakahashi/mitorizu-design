<template>
  <div>
    <p class="is-size-6 is-size-5-pc has-text-weight-bold">{{ headding }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headding: {
      type: String,
      required: true
    }
  }
}
</script>

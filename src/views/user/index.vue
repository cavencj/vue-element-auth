<template>
  <div class="user">
    <div class="search-form"></div>
    <div class="result-list"></div>
    <div class="page"></div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      searchForm: {
        username: '',
        name: ''
      }
    }
  }
}
</script>

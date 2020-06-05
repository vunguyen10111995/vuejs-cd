<template>
  <div id="app">
    <router-link to="/">Go to Foo</router-link>
    <router-link to="/about">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<template>
  <div id="app">
    <home></home>
    <!--<TuftBox tboxno="0"/>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TuftBox from './components/TuftBox.vue'
import Home from './components/home.vue'

@Component({
  components: {
    Home,
    TuftBox
  }
})
export default class App extends Vue {}
</script>
  TuftBox {
    display:flex;
  }
<style>
#app {
  font-family: Calibri, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

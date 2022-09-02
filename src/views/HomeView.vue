<template>
  <div class="home">
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainComponent from "@/components/MainComponent";

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<template>
  <div class="about">
    <HeaderComponent />
    <FilmComponent />
  </div>
</template>

<script>
import FilmComponent from "@/components/FilmComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    FilmComponent,
    HeaderComponent
  }
}
</script>

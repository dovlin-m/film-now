<template>
  <div class="main">
    <div>
      <div class="linkHome">
        <router-link to="/" class="d-flex">
          <img class="mr-20" src="@/assets/vector.svg">
          <p class="text-back">
            Назад к списку
          </p>
        </router-link>
      </div>
      <hr>
    </div>
    <CardFilm
        v-if="byFilm"
        :film="byFilm"
    />
    <p class="filmFailed" v-else>
      К сожалению, по вашему запросу ничего не найдено...
    </p>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import CardFilm from '@/components/CardFilm.vue'

export default {
  name: "FilmComponent",

  components: {
    CardFilm
  },

  computed: mapGetters(['byFilm']),

  methods: {
    ...mapMutations(['updateFilm']),
  }
}
</script>

<style lang="scss">
.main {
  .linkHome {
    width: 176px;
  }
}

.filmFailed {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;

  text-align: left;

  color: #FFFFFF;

}
</style>

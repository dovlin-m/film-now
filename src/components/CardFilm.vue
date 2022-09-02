<template>
  <div :class="{ 'hover': byActiveLink }" class="d-flex mb-26">
    <div class="image-block d-flex">
      <img width="112" height="168" :src=film.poster>
    </div>
    <div class="description-film">
      <router-link v-if="byActiveLink"
          class="h2"
          to="/about"
          @click="openFilm(film)"
      >{{ film.title }}
      </router-link>
      <h2 v-else class="h2">{{ film.title }}</h2>
      <h4 class="h4 mb-8 mt-12">{{ film.year}}, {{ film.genres[0] }}</h4>
      <h4 class="mb-8 h4">
        режиссёр:
        <span
            class="h4"
            v-for="(director, index) of film.directors"
            :key="index"
        >
          {{ director }}
        </span >
      </h4>
      <h4 class="h4 mb-16">
        Актёры:
        <span
            v-for="(actors, index) of film.actors"
            :key="index"
        >
          <span v-if="index < film.actors.length - 1">{{ actors }}, </span>
          <span v-else> {{ actors }}</span>
        </span>
      </h4>
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CardFilm',

  props: {
    film: {
      type: Object,
      required: true
    }
  },

  computed: mapGetters(['byActiveLink']),

  methods: {
    ...mapMutations(['updateFilm']),
    ...mapMutations(['updateActiveLink']),

    openFilm (film) {
      this.updateActiveLink(false)
      this.updateFilm(film)
    }
  }
}

</script>

<style lang="scss">

.hover:hover {
  transform: translate(0, -8px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
}
.image-block {
  padding-left: 28px;
  padding-right: 28px;
  width: 112px;
  min-height: 168px;
  background: #C4C4C4;
  vertical-align: middle;
}

.description-film {
  padding: 32px 32px 32px 24px;
  width: 100%;
  min-height: 104px;
  text-align: left;
  background: #4D4747;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;

    text-decoration: none;

    color: #FFFFFF;
  }

  .h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;

    text-transform: uppercase;

    color: #988F8F;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #E5E5E5;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;


    color: #FFFFFF;
  }
}

img {
  margin-top: auto;
  margin-bottom: auto;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-16 {
  margin-bottom: 16px;
}

.mb-26 {
  margin-bottom: 26px;
}

.mt-12 {
  margin-top: 12px;
}
</style>

<template>
  <div class="main">
    <div>
      <h3 class="h3">Фильмы</h3>
      <div class="d-flex">
        <div class="d-flex mr-34">
          <button
              class="btn mr-10 "
              :class="{ 'active-btn': sortTitleActive }"
              @click="sortByTitle"
          >
            <img v-if="sortTitleActive"  src="@/assets/sort.svg">
          </button>
          <p class="text-sort">Отсортировать по названию</p>
        </div>
        <div class="d-flex">
          <button
              class="btn mr-10"
              :class="{ 'active-btn': sortYearActive }"
              @click="sortByYear"
          >
            <img v-if="sortYearActive"  src="@/assets/sort.svg">
          </button>
          <p class="text-sort">Отсортировать по году</p>
        </div>
      </div>
      <hr>
    </div>
    <div class="loader" v-if="byLoading">
      <img src="@/assets/loader.svg">
    </div>
    <div v-else>
      <CardFilm
          v-for="(film, index) of allFilms"
          :key='index'
          :film="film"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import CardFilm from '@/components/CardFilm.vue'

export default {
  name: 'MainComponent',

  components: {
    CardFilm
  },

  computed: {
    ...mapGetters(['allFilms']),
    ...mapGetters(['byLoading'])
  },

  methods: {
    ...mapActions(['fetchFilms']),
    ...mapMutations(['sortTitle']),
    ...mapMutations(['sortYear']),

    sortByTitle() {
      this.sortTitleActive = true
      this.sortYearActive = false
      this.sortTitle()
    },

    sortByYear() {
      this.sortTitleActive = false
      this.sortYearActive = true
      this.sortYear()
    }
  },

  async mounted() {
    await this.fetchFilms()
  }
}
</script>

<style lang="scss">
.main {
  padding: 40px 260px 40px 260px;
  background: #363232;
  min-height: 1080px;
}

.h3 {
  margin-bottom: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;

  text-align: left;

  color: #FFFFFF;
}

.d-flex {
  display: flex;
}

.btn {
  width: 15px;
  height: 15px;
  background: none;
  border: 1px solid #C4C4C4;
}

.active-btn {
  border: none;
  background: rgba(255, 82, 82, 0.98);
}

.loader {
  margin-top: 248px;
}

.text-sort {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  color: #C4C4C4;
}

.text-back {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  text-decoration-line: underline;

  color: rgba(255, 82, 82, 0.98);
}

.mr-10 {
  margin-right: 10.5px;
}

.mr-34 {
  margin-right: 34.5px;
}

.mr-20 {
  margin-right: 20px;
}

hr {
  margin-top: 18px;
  margin-bottom: 40px;
}
</style>

import { createStore } from 'vuex'

export default createStore({
  state: {
    films: [],
    film: null,
    filmsPage: true,
    loading: true,
    activeLink: true
  },

  getters: {
    byFilm (state) {
      return state.film
    },

    allFilms (state) {
      return state.films
    },

    byFilmsPage (state) {
      return state.filmsPage
    },

    byLoading (state) {
      return state.loading
    },

    byActiveLink (state) {
      return state.activeLink
    }
  },

  mutations: {
    updateFilm(state, film) {
      state.film = film
    },

    updateFilms(state, films) {
      state.films = films
    },

    updateFilmsPage (state, value) {
      state.filmsPage = value
    },

    updateLoader (state, value) {
      state.loading = value
    },

    updateActiveLink (state, value) {
      state.activeLink = value
    },

    sortTitle (state) {
      state.films.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    },

    sortYear (state) {
      state.films.sort((a, b) => {
        return a.year < b.year ? -1 : 1
      })
    }
  },

  actions: {
    async fetchFilms(ctx) {
      const response = await fetch(`https://floating-sierra-20135.herokuapp.com/api/movies`)
      const films = await response.json()
      ctx.commit('updateActiveLink', true)
      ctx.commit('updateLoader', false)
      ctx.commit('updateFilms', films.data)
    }
  }
})

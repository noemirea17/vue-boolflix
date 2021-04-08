Vue.config.devtools = true;

var app = new Vue({
  el: "#app",
  data: {
    searchTitle: "",
    films: [],
    votes: [],
    aviableFlags: ["de", "en", "es", "fr", "it"],
  },

  methods: {
    addtext: function () {
      const self = this;

      self.films = [];
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=60d77243c9ba552e841e00e4f6b5b02b&query=" +
            self.searchTitle
        )
        .then((result) => {
          const films = result.data.results;
          self.films = self.films.concat(films);

          self.films.forEach((element) => {
            element.vote_average = self.roundedVote(element.vote_average);
          });
        });
      axios
        .get(
          "https://api.themoviedb.org/3/search/tv?api_key=60d77243c9ba552e841e00e4f6b5b02b&query=" +
            self.searchTitle
        )
        .then((result) => {
          const films = result.data.results;
          self.films = self.films.concat(films);

          self.films.forEach((element) => {
            element.vote_average = self.roundedVote(element.vote_average);
          });
        });
    },

    roundedVote(vote) {
      return Math.ceil(vote / 2);
    },

    getFlag(language) {
      return `img/${language}.png`;
    },
  },
});

Vue.config.devtools = true;

var app = new Vue({
  el: "#app",
  data: {
    searchTitle: "",
    films: [],
    series: [],
    votes: [],
  },

  methods: {
    addtext: function () {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=60d77243c9ba552e841e00e4f6b5b02b&query=" +
            this.searchTitle
        )
        .then((result) => {
          this.films = result.data.results;
          this.films.forEach((element) => {
            element.vote_average = element.vote_average / 2;
            element.vote_average = Math.ceil(element.vote_average);
          });
        });
      axios
        .get(
          "https://api.themoviedb.org/3/search/tv?api_key=60d77243c9ba552e841e00e4f6b5b02b&query=" +
            this.searchTitle
        )
        .then((result) => {
          console.log(result.data.results);
          this.series = result.data.results;
          this.series.forEach((element) => {
            element.vote_average = element.vote_average / 2;
            element.vote_average = Math.ceil(element.vote_average);
          });
        });
    },
  },
});

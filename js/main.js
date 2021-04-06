Vue.config.devtools = true;

var app = new Vue({
  el: "#app",
  data: {
    searchTitle: "",
    films: [],
  },

  methods: {
    addtext: function () {
      console.log(this.searchTitle);
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=60d77243c9ba552e841e00e4f6b5b02b&query=" +
            this.searchTitle
        )
        .then((result) => {
          console.log(result.data.results);
          this.films = result.data.results;
          console.log(this.films);
        });
    },
  },
});

const app = Vue.createApp({
  data: function () {
    return {
      name: "Marcelo",
      age: 41,
      imageUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=pexels-kmerriman-20787.jpg&fm=jpg",
    };
  },
  methods: {
    calculateAgeInFiveYears() {
      return this.age + 5;
    },
    calculateRandomNumber() {
      return Math.random();
    }
  },
});

app.mount("#assignment");

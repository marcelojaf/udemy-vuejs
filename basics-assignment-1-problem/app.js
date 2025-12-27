const app = Vue.createApp({
  data: function () {
    return {
      name: "Marcelo",
      age: 41,
      ageInFiveYears: 41 + 5,
    };
  },
  methods: {},
});

app.mount("#assignment");

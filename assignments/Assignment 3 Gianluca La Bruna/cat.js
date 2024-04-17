const cat = {
  alive: true,
  name: "Gustav",

  toggleAlive: function () {
    const randomNumber = Math.random();

    this.alive = randomNumber < 0.5;

    alert(
      "The cat name is Gustav: " +
        (this.alive ? "and it's alive" : "and it's dead")
    );
  },
};

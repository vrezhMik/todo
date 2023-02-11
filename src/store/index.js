import Vuex from "vuex";

const Store = new Vuex.Store({
  state: {
    tasks: [
      {
        date: "01/02/01",
        name: "Test",
        description: "lorem ipsum",
      },
      {
        date: "01/02/02",
        name: "Test2",
        description: "lorem ipsum",
      },
      {
        date: "01/02/03",
        name: "Test",
        description: "lorem ipsum",
      },
    ],
    current: null,
  },
});

export default Store;

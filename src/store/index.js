import Vuex from "vuex";

const Store = new Vuex.Store({
  state: {
    tasks: [],
    current: null,
    create_mode: false,
    edit_mode: false,
    current_id: null,
    sortByDate: () => {
      if (Store.state.tasks.length > 1) {
        Store.state.tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
    },
  },
});

export default Store;

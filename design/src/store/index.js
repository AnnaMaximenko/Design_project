import { createStore } from "vuex";

export default createStore({
  state: {
    project: {
      title: "Minimal Look Bedrooms",
      textOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ",
      textSecond:
        "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    },
  },
  getters: {
    partItem(state) {
      return state.title, state.textOne, state.textSecond;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

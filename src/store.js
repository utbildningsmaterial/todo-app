import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { done: false, text: 'Köp keso'},
      { done: false, text: 'Ketchup'},
      { done: true, text: 'Köp äpplen'}
    ],
    activeSlide: 0
  },
  mutations: {
    newTodo(state, todo){
      state.todos.push(todo);
    },
    updateTodo(state, index){
      state.todos[index].done = !state.todos[index].done;
    },
    swipe(state, activeSlide){
      state.activeSlide = activeSlide;
    }
  },
  actions: {

  }
})

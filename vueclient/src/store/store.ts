import Vue from 'vue';
import Vuex from 'vuex';
import { fileload } from './file.module';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      fileload
    },
    state:{
      snackbars:[],
    },
    actions:{
      setSnackbar({commit}, snackbar){
        snackbar.showing = true;
        commit('setSnackbar', snackbar);
      }
    },
    mutations:{
      setSnackbar(state,snackbar){
        state.snackbars = state.snackbars.concat(snackbar);
      }
    }
})
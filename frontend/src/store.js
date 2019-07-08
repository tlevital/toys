import Vue from 'vue'
import Vuex from 'vuex'

// Local
import ToyService from './services/ToyService.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toys: [],
    },
    mutations: {
        isLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },

        setToys(state, { toys }) {
            state.toys = toys
        },
        deleteToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1);
        },

        addToy(state, { addedToy }) {
            state.toys.unshift(addedToy);
        },
    },
    getters: {
        toysToShow(state) {
            return state.toys;
        }
    },
    actions: {
        loadToys(context) {
            context.commit({ type: 'isLoading', isLoading: true })
            ToyService.query()
                .then(toys => {
                    context.commit({ type: 'isLoading', isLoading: false })
                    context.commit({ type: 'setToys', toys })
                })
        },
        deleteToy(context, payload) {
            // console.log('toyId', payload.toyId);
            ToyService.remove(payload.toyId)
                .then(() => {
                    context.commit({ type: 'deleteToy', payload })
                })
        },
        saveToy(context, { toy }) {
            // console.log('save pushed at store', toy);
            return ToyService.save(toy)
                .then(addedToy => {
                    context.commit({ type: 'addToy', toy: addedToy })
                    return addedToy
                })
        },

    }
})
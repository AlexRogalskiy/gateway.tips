import Vue from 'vue';
import Vuex from 'vuex';
import { mainModule } from './main';
import { adminModule } from './admin';
Vue.use(Vuex);
const storeOptions = {
    modules: {
        main: mainModule,
        admin: adminModule,
    },
};
export const store = new Vuex.Store(storeOptions);
export default store;
//# sourceMappingURL=index.js.map
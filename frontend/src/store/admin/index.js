import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';
const defaultState = {
    users: [],
};
export const adminModule = {
    state: defaultState,
    mutations,
    actions,
    getters,
};
//# sourceMappingURL=index.js.map
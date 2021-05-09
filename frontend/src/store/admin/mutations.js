import { getStoreAccessors } from 'typesafe-vuex';
export const mutations = {
    setUsers(state, payload) {
        state.users = payload;
    },
    setUser(state, payload) {
        const users = state.users.filter((user) => user.id !== payload.id);
        users.push(payload);
        state.users = users;
    },
};
const { commit } = getStoreAccessors('');
export const commitSetUser = commit(mutations.setUser);
export const commitSetUsers = commit(mutations.setUsers);
//# sourceMappingURL=mutations.js.map
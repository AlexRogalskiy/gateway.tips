import { getStoreAccessors } from 'typesafe-vuex';
export const getters = {
    adminUsers: (state) => state.users,
    adminOneUser: (state) => (userId) => {
        const filteredUsers = state.users.filter((user) => user.id === userId);
        if (filteredUsers.length > 0) {
            return { ...filteredUsers[0] };
        }
    },
};
const { read } = getStoreAccessors('');
export const readAdminOneUser = read(getters.adminOneUser);
export const readAdminUsers = read(getters.adminUsers);
//# sourceMappingURL=getters.js.map
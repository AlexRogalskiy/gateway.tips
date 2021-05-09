import { getStoreAccessors } from 'typesafe-vuex';
export const mutations = {
    setToken(state, payload) {
        state.token = payload;
    },
    setLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setLogInError(state, payload) {
        state.logInError = payload;
    },
    setUserProfile(state, payload) {
        state.userProfile = payload;
    },
    setDashboardMiniDrawer(state, payload) {
        state.dashboardMiniDrawer = payload;
    },
    setDashboardShowDrawer(state, payload) {
        state.dashboardShowDrawer = payload;
    },
    addNotification(state, payload) {
        state.notifications.push(payload);
    },
    removeNotification(state, payload) {
        state.notifications = state.notifications.filter((notification) => notification !== payload);
    },
};
const { commit } = getStoreAccessors('');
export const commitSetDashboardMiniDrawer = commit(mutations.setDashboardMiniDrawer);
export const commitSetDashboardShowDrawer = commit(mutations.setDashboardShowDrawer);
export const commitSetLoggedIn = commit(mutations.setLoggedIn);
export const commitSetLogInError = commit(mutations.setLogInError);
export const commitSetToken = commit(mutations.setToken);
export const commitSetUserProfile = commit(mutations.setUserProfile);
export const commitAddNotification = commit(mutations.addNotification);
export const commitRemoveNotification = commit(mutations.removeNotification);
//# sourceMappingURL=mutations.js.map
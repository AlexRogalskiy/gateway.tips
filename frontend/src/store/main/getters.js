import { getStoreAccessors } from 'typesafe-vuex';
export const getters = {
    hasAdminAccess: (state) => {
        return (state.userProfile &&
            state.userProfile.is_superuser && state.userProfile.is_active);
    },
    loginError: (state) => state.logInError,
    dashboardShowDrawer: (state) => state.dashboardShowDrawer,
    dashboardMiniDrawer: (state) => state.dashboardMiniDrawer,
    userProfile: (state) => state.userProfile,
    token: (state) => state.token,
    isLoggedIn: (state) => state.isLoggedIn,
    firstNotification: (state) => state.notifications.length > 0 && state.notifications[0],
};
const { read } = getStoreAccessors('');
export const readDashboardMiniDrawer = read(getters.dashboardMiniDrawer);
export const readDashboardShowDrawer = read(getters.dashboardShowDrawer);
export const readHasAdminAccess = read(getters.hasAdminAccess);
export const readIsLoggedIn = read(getters.isLoggedIn);
export const readLoginError = read(getters.loginError);
export const readToken = read(getters.token);
export const readUserProfile = read(getters.userProfile);
export const readFirstNotification = read(getters.firstNotification);
//# sourceMappingURL=getters.js.map
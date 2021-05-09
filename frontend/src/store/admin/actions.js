import { api } from '@/api';
import { getStoreAccessors } from 'typesafe-vuex';
import { commitSetUsers, commitSetUser } from './mutations';
import { dispatchCheckApiError } from '../main/actions';
import { commitAddNotification, commitRemoveNotification } from '../main/mutations';
export const actions = {
    async actionGetUsers(context) {
        try {
            const response = await api.getUsers(context.rootState.main.token);
            if (response) {
                commitSetUsers(context, response.data);
            }
        }
        catch (error) {
            await dispatchCheckApiError(context, error);
        }
    },
    async actionUpdateUser(context, payload) {
        try {
            const loadingNotification = { content: 'saving', showProgress: true };
            commitAddNotification(context, loadingNotification);
            const response = (await Promise.all([
                api.updateUser(context.rootState.main.token, payload.id, payload.user),
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 500)),
            ]))[0];
            commitSetUser(context, response.data);
            commitRemoveNotification(context, loadingNotification);
            commitAddNotification(context, { content: 'User successfully updated', color: 'success' });
        }
        catch (error) {
            await dispatchCheckApiError(context, error);
        }
    },
    async actionCreateUser(context, payload) {
        try {
            const loadingNotification = { content: 'saving', showProgress: true };
            commitAddNotification(context, loadingNotification);
            const response = (await Promise.all([
                api.createUser(context.rootState.main.token, payload),
                await new Promise((resolve, reject) => setTimeout(() => resolve(), 500)),
            ]))[0];
            commitSetUser(context, response.data);
            commitRemoveNotification(context, loadingNotification);
            commitAddNotification(context, { content: 'User successfully created', color: 'success' });
        }
        catch (error) {
            await dispatchCheckApiError(context, error);
        }
    },
};
const { dispatch } = getStoreAccessors('');
export const dispatchCreateUser = dispatch(actions.actionCreateUser);
export const dispatchGetUsers = dispatch(actions.actionGetUsers);
export const dispatchUpdateUser = dispatch(actions.actionUpdateUser);
//# sourceMappingURL=actions.js.map
import { FuseLoadable } from '@fuse';
import { authRoles } from 'auth';

export const ProfilePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.user,
    routes: [
        {
            path: '/pages/profile',
            component: FuseLoadable({
                loader: () => import('./ProfilePage')
            })
        }
    ]
};

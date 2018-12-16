import { FuseLoadable } from '@fuse';
import { authRoles } from 'auth';

export const ProfilePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    //auth: authRoles.user,
    routes: [
        {
            path: '/profile',
            component: FuseLoadable({
                loader: () => import('./ProfilePage')
            })
        }
    ]
};

import { FuseLoadable } from '@fuse';
import { authRoles } from 'auth';

export const ChatAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.user,
    routes: [
        {
            path: '/chat',
            component: FuseLoadable({
                loader: () => import('./ChatApp')
            })
        }
    ]
};

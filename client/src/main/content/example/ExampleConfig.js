import Example from './Example';
import { authRoles } from 'auth';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.guess,
    routes: [
        {
            path: '/',
            component: Example
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Example')
            })
        }
    ]
};
*/

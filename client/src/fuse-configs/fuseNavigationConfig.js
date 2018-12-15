import { authRoles } from 'auth';

export const fuseNavigationConfig = [
    {
        'id': 'conquer-the-ages',
        'title': 'Conquer the Ages',
        'type': 'item',
        'icon': 'apps',
        'url': '/example',
        auth: authRoles.user
    },
    {
        'id': 'chat',
        'title': 'Chat',
        'type': 'item',
        'icon': 'chat',
        'url': '/chat',
        auth: authRoles.user,
        'badge': {
            'title': 13,
            'bg': 'rgb(9, 210, 97)',
            'fg': '#FFFFFF'
        }
    },
    {
        'id': 'profile',
        'title': 'Profile',
        'type': 'item',
        'icon': 'person',
        'url': '/profile',
        auth: authRoles.user
    },
    {
        'id': 'logout',
        'title': 'Logout',
        'type': 'item',
        auth: authRoles.user,
        'url': '/logout',
        'icon': 'exit_to_app'
    }

];

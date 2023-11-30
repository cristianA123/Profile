
export interface MenuNavigation {
    icon: string,
    path: string,
    name: string
}

export const menuNavigation: MenuNavigation[] = [
    {
        icon: 'fa-solid fa-user',
        path: '/',
        name: 'Empleados'
    },
    {
        icon: 'fa-solid fa-suitcase',
        path: '/home',
        name: 'Reclutamiento'
    },
    {
        icon: 'fa-solid fa-suitcase',
        path: '/auth/login',
        name: 'Auth'
    }
]
    
 
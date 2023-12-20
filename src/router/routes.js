
const routes = [
    {
        path: '/login',
        component: () => import('pages/Login.vue'),
    },
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/DashboardPage.vue') },
            { path: 'assets', component: () => import('pages/AssetsPage.vue') },
            { path: 'leave', component: () => import('pages/LeaveMgmtPage.vue') },
            { path: 'trainings', component: () => import('pages/TrainingsPage.vue') },
            { path: 'worksheet', component: () => import('pages/WorksheetPage.vue') },
            { path: 'policies', component: () => import('pages/PoliciesPage.vue') },
            { path: 'settings', component: () => import('pages/SettingsPage.vue') },
            { path: 'announcements', component: () => import('pages/AnnouncementsPage.vue') },
            // { path: 'login', component: () => import('pages/LoginPage.vue') },
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes

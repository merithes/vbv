
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: ()     => import('pages/Home.vue') },
      { path: 'about', component: ()   => import('pages/About.vue') },
      { path: 'projects', component: ()   => import('pages/Projects.vue') },
      { path: 'contact', component: ()   => import('pages/Contact.vue') },
      { path: 'legal-notices', component: ()   => import('pages/LegalNotices.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

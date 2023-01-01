export const Routes = [
  {
    path: '/',
    secure: false
  },
  {
    path: '/login',
    authSystem: true,
    secure: false
  },
  {
    path: '/private',
    secure: true
  },
  {
    path: '/with-slug/[slug]',
    slugs: [
      {
        value: 'slug-1',
        secure: false
      },
      {
        value: 'slug-2',
        secure: true
      }
    ],
    secure: false
  }
]

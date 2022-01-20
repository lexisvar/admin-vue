export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Jugadores',
  },
  // {
  //   component: 'CNavItem',
  //   name: 'Licencias',
  //   to: '/theme/licencias',
  //   icon: 'cil-notes',
  // },
  {
    component: 'CNavItem',
    name: 'Activas',
    to: '/theme/colors',
    icon: 'cil-airplay',
  },
  {
    component: 'CNavItem',
    name: 'Players',
    to: '/players/list',
    icon: 'cil-airplay',
  },
  {
    component: 'CNavItem',
    name: 'Vencidas',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    component: 'CNavTitle',
    name: 'Configuración',
  },
  {
    component: 'CNavItem',
    name: 'Usuarios',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Certificado',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'Perfil',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
]

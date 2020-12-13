import {
  Signin,
  Signup,
  Reports,
  Dashboard,
  Notfound,
  ServerError,
  Zones,
  Branches,
  Preachers,
  Fellowships,
  Events,
  Downloads,
  Categories,
  Roles,
  Users,
  Permissions as Permission,
} from "../pages";

const routes = [
  {
    path: "/",
    component: Signin,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    protected: true,
  },
  /* USERS */
  {
    path: "/users",
    component: Users,
    protected: true,
  },
  {
    path: "/users/:id",
    component: Users,
    protected: true,
  },
  {
    path: "/users/create/user",
    component: Users,
    protected: true,
  },
  {
    path: "/users/:id/details",
    component: Users,
    protected: true,
  },
  /* REPORTS */
  {
    path: "/reports/generate",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/submit/attendance",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/submit/activity",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/submit/membership",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/submit/training",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/submit/group",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/submit/freport",
    component: Reports,
    protected: true,
  },

  /* ZONES */
  {
    path: "/settings/zones",
    component: Zones,
    protected: true,
  },
  {
    path: "/settings/zones/:id",
    component: Zones,
    protected: true,
  },
  {
    path: "/settings/zones/create/zone",
    component: Zones,
    protected: true,
  },

  /* BRANCHES */
  {
    path: "/settings/branches",
    component: Branches,
    protected: true,
  },
  {
    path: "/settings/branches/:id",
    component: Branches,
    protected: true,
  },
  {
    path: "/settings/branches/create/branch",
    component: Branches,
    protected: true,
  },
  
  /* FELLOWSHIPS */
  {
    path: "/settings/fellowships",
    component: Fellowships,
    protected: true,
  },
  {
    path: "/settings/fellowships/:id",
    component: Fellowships,
    protected: true,
  },
  {
    path: "/settings/fellowships/create/fellowship",
    component: Fellowships,
    protected: true,
  },
  
  /* PREACHERS */
  {
    path: "/settings/preachers",
    component: Preachers,
    protected: true,
  },
  {
    path: "/settings/preachers/:id",
    component: Preachers,
    protected: true,
  },
  {
    path: "/settings/preachers/create/preacher",
    component: Preachers,
    protected: true,
  },
  
  /* DOWNLOADS */
  {
    path: "/downloads",
    component: Downloads,
    protected: true,
  },
  {
    path: "/settings/downloads",
    component: Downloads,
    protected: true,
  },
  {
    path: "/settings/downloads/:id",
    component: Downloads,
    protected: true,
  },
  {
    path: "/settings/downloads/create/download",
    component: Downloads,
    protected: true,
  },
  
  /* EVENTS */
  {
    path: "/settings/events",
    component: Events,
    protected: true,
  },
  {
    path: "/settings/events/:id",
    component: Events,
    protected: true,
  },
  {
    path: "/settings/events/create/event",
    component: Events,
    protected: true,
  },
  
  /* CATEGORIES */
  {
    path: "/settings/categories",
    component: Categories,
    protected: true,
  },
  {
    path: "/settings/categories/:id",
    component: Categories,
    protected: true,
  },
  {
    path: "/settings/categories/create/category",
    component: Categories,
    protected: true,
  },
  
  /* ROLES */
  {
    path: "/roles",
    component: Roles,
    protected: true,
  },
  {
    path: "/roles/:id",
    component: Roles,
    protected: true,
  },
  {
    path: "/roles/create/role",
    component: Roles,
    protected: true,
  },
  
  /* PERMISSIONS */
  {
    path: "/permissions",
    component: Permission,
    protected: true,
  },
  {
    path: "/permissions/:id",
    component: Permission,
    protected: true,
  },
  {
    path: "/permissions/create/permission",
    component: Permission,
    protected: true,
  },
  
  /* DEFAULTS */
  {
    path: "/servererror",
    component: ServerError,
  },
  {
    path: "*",
    component: Notfound,
  },
];

export default routes;

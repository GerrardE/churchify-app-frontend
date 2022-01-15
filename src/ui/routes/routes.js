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
  ApiLogs,
  Configs,
  Activities,
  Trainings,
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
    path: "/settings/users",
    component: Users,
    protected: true,
  },
  {
    path: "/settings/users/:id",
    component: Users,
    protected: true,
  },
  {
    path: "/settings/users/create/user",
    component: Users,
    protected: true,
  },
  {
    path: "/settings/users/:id/details",
    component: Users,
    protected: true,
  },
  /* REPORTS */
  {
    path: "/reports/generate/zones",
    component: Reports,
    protected: true,
  },
  {
    path: "/reports/generate/branches",
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
    path: "/settings/roles",
    component: Roles,
    protected: true,
  },
  {
    path: "/settings/roles/:id",
    component: Roles,
    protected: true,
  },
  {
    path: "/settings/roles/create/role",
    component: Roles,
    protected: true,
  },
  {
    path: "/settings/roles/:id/details",
    component: Roles,
    protected: true,
  },

  /* APILOGS */
  {
    path: "/system/apilogs",
    component: ApiLogs,
    protected: true,
  },
  {
    path: "/system/apilogs/:id/details",
    component: ApiLogs,
    protected: true,
  },

  /* PERMISSIONS */
  {
    path: "/settings/permissions",
    component: Permission,
    protected: true,
  },
  {
    path: "/settings/permissions/:id",
    component: Permission,
    protected: true,
  },
  {
    path: "/settings/permissions/create/permission",
    component: Permission,
    protected: true,
  },

  /* CONFIGS */
  {
    path: "/system/configs",
    component: Configs,
    protected: true,
  },
  {
    path: "/system/configs/:id",
    component: Configs,
    protected: true,
  },
  {
    path: "/system/configs/create/config",
    component: Configs,
    protected: true,
  },
  {
    path: "/system/configs/:id/details",
    component: Configs,
    protected: true,
  },
  /* ACTIVITIES */
  {
    path: "/settings/activities",
    component: Activities,
    protected: true,
  },
  {
    path: "/settings/activities/:id",
    component: Activities,
    protected: true,
  },
  {
    path: "/settings/activities/create/activity",
    component: Activities,
    protected: true,
  },
  {
    path: "/settings/activities/:id/details",
    component: Activities,
    protected: true,
  },
  /* TRAININGS */
  {
    path: "/settings/trainings",
    component: Trainings,
    protected: true,
  },
  {
    path: "/settings/trainings/:id",
    component: Trainings,
    protected: true,
  },
  {
    path: "/settings/trainings/create/training",
    component: Trainings,
    protected: true,
  },
  {
    path: "/settings/trainings/:id/details",
    component: Trainings,
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

import {
  Signin,
  Reports,
  Notfound,
  ServerError,
  Zones,
  Branches,
  Preachers,
  Fellowships,
  Events,
  Downloads,
  Categories,
} from "../pages";

const routes = [
  {
    path: "/",
    component: Signin,
  },
  {
    path: "/dashboard",
    component: Reports,
    protected: true,
  },
  
  /* ZONES */
  {
    path: "/dashboard/settings/zones",
    component: Zones,
    protected: true,
  },
  {
    path: "/dashboard/settings/zones/:id",
    component: Zones,
    protected: true,
  },
  {
    path: "/dashboard/settings/zones/create/zone",
    component: Zones,
    protected: true,
  },

  /* BRANCHES */
  {
    path: "/dashboard/settings/branches",
    component: Branches,
    protected: true,
  },
  {
    path: "/dashboard/settings/branches/:id",
    component: Branches,
    protected: true,
  },
  {
    path: "/dashboard/settings/branches/create/branch",
    component: Branches,
    protected: true,
  },
  
  /* FELLOWSHIPS */
  {
    path: "/dashboard/settings/fellowships",
    component: Fellowships,
    protected: true,
  },
  {
    path: "/dashboard/settings/fellowships/:id",
    component: Fellowships,
    protected: true,
  },
  {
    path: "/dashboard/settings/fellowships/create/fellowship",
    component: Fellowships,
    protected: true,
  },
  
  /* PREACHERS */
  {
    path: "/dashboard/settings/preachers",
    component: Preachers,
    protected: true,
  },
  {
    path: "/dashboard/settings/preachers/:id",
    component: Preachers,
    protected: true,
  },
  {
    path: "/dashboard/settings/preachers/create/preacher",
    component: Preachers,
    protected: true,
  },
  
  /* DOWNLOADS */
  {
    path: "/dashboard/settings/downloads",
    component: Downloads,
    protected: true,
  },
  {
    path: "/dashboard/settings/downloads/:id",
    component: Downloads,
    protected: true,
  },
  {
    path: "/dashboard/settings/downloads/create/download",
    component: Downloads,
    protected: true,
  },
  
  /* EVENTS */
  {
    path: "/dashboard/settings/events",
    component: Events,
    protected: true,
  },
  {
    path: "/dashboard/settings/events/:id",
    component: Events,
    protected: true,
  },
  {
    path: "/dashboard/settings/events/create/event",
    component: Events,
    protected: true,
  },
  
  /* CATEGORIES */
  {
    path: "/dashboard/settings/categories",
    component: Categories,
    protected: true,
  },
  {
    path: "/dashboard/settings/categories/:id",
    component: Categories,
    protected: true,
  },
  {
    path: "/dashboard/settings/categories/create/category",
    component: Categories,
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

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
  Membership,
  Group,
  ActivityReports,
  TrainingReports,
  Attendance,
  Freports,
  Remunerations,
  Receipts,
  Payments,
  Finances,
  Assets,
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
  /**
   * ACTIVITY REPORTS
   */
  {
    path: "/reports/activityreports",
    component: ActivityReports,
    protected: true,
  },
  {
    path: "/reports/activityreports/:id",
    component: ActivityReports,
    protected: true,
  },
  {
    path: "/reports/activityreports/create/activityreport",
    component: ActivityReports,
    protected: true,
  },
  {
    path: "/reports/activityreports/:id/details",
    component: ActivityReports,
    protected: true,
  },
  /**
   * MEMBERSHIP REPORTS
   */
  {
    path: "/reports/memberships",
    component: Membership,
    protected: true,
  },
  {
    path: "/reports/memberships/:id",
    component: Membership,
    protected: true,
  },
  {
    path: "/reports/memberships/create/membership",
    component: Membership,
    protected: true,
  },
  {
    path: "/reports/memberships/:id/details",
    component: Membership,
    protected: true,
  },
  /**
   * GROUP REPORTS
   */
  {
    path: "/reports/groups",
    component: Group,
    protected: true,
  },
  {
    path: "/reports/groups/:id",
    component: Group,
    protected: true,
  },
  {
    path: "/reports/groups/create/group",
    component: Group,
    protected: true,
  },
  {
    path: "/reports/groups/:id/details",
    component: Group,
    protected: true,
  },
  /**
   * ATTENDANCE REPORTS
   */
  {
    path: "/reports/attendances",
    component: Attendance,
    protected: true,
  },
  {
    path: "/reports/attendances/:id",
    component: Attendance,
    protected: true,
  },
  {
    path: "/reports/attendances/create/attendance",
    component: Attendance,
    protected: true,
  },
  {
    path: "/reports/attendances/:id/details",
    component: Attendance,
    protected: true,
  },
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
    path: "/reports/generate/global",
    component: Reports,
    protected: true,
  },
  /**
   * FREPORT REPORTS
   */
  {
    path: "/reports/cells",
    component: Freports,
    protected: true,
  },
  {
    path: "/reports/cells/:id",
    component: Freports,
    protected: true,
  },
  {
    path: "/reports/cells/create/cell",
    component: Freports,
    protected: true,
  },
  {
    path: "/reports/cells/:id/details",
    component: Freports,
    protected: true,
  },
  /**
   * TRAINING REPORTS
   */
  {
    path: "/reports/trainingreports",
    component: TrainingReports,
    protected: true,
  },
  {
    path: "/reports/trainingreports/:id",
    component: TrainingReports,
    protected: true,
  },
  {
    path: "/reports/trainingreports/create/trainingreport",
    component: TrainingReports,
    protected: true,
  },
  {
    path: "/reports/trainingreports/:id/details",
    component: TrainingReports,
    protected: true,
  },
  // /**
  //  * ACTIVITY REPORTS
  //  */
  // {
  //   path: "/reports/activitys",
  //   component: Group,
  //   protected: true,
  // },
  // {
  //   path: "/reports/activitys/:id",
  //   component: Group,
  //   protected: true,
  // },
  // {
  //   path: "/reports/activitys/create/activity",
  //   component: Group,
  //   protected: true,
  // },
  // {
  //   path: "/reports/activitys/:id/details",
  //   component: Group,
  //   protected: true,
  // },
  /*
  {
    path: "/reports/membership",
    component: Membership,
    protected: true,
  },
  
  // {
  //   path: "/reports/submit/attendance",
  //   component: Reports,
  //   protected: true,
  // },
  // {
  //   path: "/reports/submit/activity",
  //   component: Reports,
  //   protected: true,
  // },
  // {
  //   path: "/reports/submit/membership",
  //   component: Reports,
  //   protected: true,
  // },
  // {
  //   path: "/reports/submit/training",
  //   component: Reports,
  //   protected: true,
  // },
  // {
  //   path: "/reports/submit/group",
  //   component: Reports,
  //   protected: true,
  // },
  // {
  //   path: "/reports/submit/cell",
  //   component: Reports,
  //   protected: true,
  // },

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
    path: "/settings/activitytypes",
    component: Activities,
    protected: true,
  },
  {
    path: "/settings/activitytypes/:id",
    component: Activities,
    protected: true,
  },
  {
    path: "/settings/activitytypes/create/activitytype",
    component: Activities,
    protected: true,
  },
  {
    path: "/settings/activitytypes/:id/details",
    component: Activities,
    protected: true,
  },
  /* TRAININGS */
  {
    path: "/settings/trainingtypes",
    component: Trainings,
    protected: true,
  },
  {
    path: "/settings/trainingtypes/:id",
    component: Trainings,
    protected: true,
  },
  {
    path: "/settings/trainingtypes/create/trainingtype",
    component: Trainings,
    protected: true,
  },
  {
    path: "/settings/trainingtypes/:id/details",
    component: Trainings,
    protected: true,
  },
  /**
   * FINANCE
   */
  {
    path: "/finances/finances",
    component: Finances,
    protected: true,
  },
  {
    path: "/finances/finances/:id",
    component: Finances,
    protected: true,
  },
  {
    path: "/finances/finances/create/finance",
    component: Finances,
    protected: true,
  },
  {
    path: "/finances/finances/:id/details",
    component: Finances,
    protected: true,
  },
  /**
   * PAYMENTS
   */
  {
    path: "/finances/payments",
    component: Payments,
    protected: true,
  },
  {
    path: "/finances/payments/:id",
    component: Payments,
    protected: true,
  },
  {
    path: "/finances/payments/create/payment",
    component: Payments,
    protected: true,
  },
  {
    path: "/finances/payments/:id/details",
    component: Payments,
    protected: true,
  },
  /**
   * ASSETS
   */
  {
    path: "/finances/assets",
    component: Assets,
    protected: true,
  },
  {
    path: "/finances/assets/:id",
    component: Assets,
    protected: true,
  },
  {
    path: "/finances/assets/create/asset",
    component: Assets,
    protected: true,
  },
  {
    path: "/finances/assets/:id/details",
    component: Assets,
    protected: true,
  },
  /**
   * REMUNERATIONS
   */
  {
    path: "/finances/remunerations",
    component: Remunerations,
    protected: true,
  },
  {
    path: "/finances/remunerations/:id",
    component: Remunerations,
    protected: true,
  },
  {
    path: "/finances/remunerations/create/remuneration",
    component: Remunerations,
    protected: true,
  },
  {
    path: "/finances/remunerations/:id/details",
    component: Remunerations,
    protected: true,
  },
  /**
   * RECEIPTS
   */
  {
    path: "/finances/receipts",
    component: Receipts,
    protected: true,
  },
  {
    path: "/finances/receipts/:id",
    component: Receipts,
    protected: true,
  },
  {
    path: "/finances/receipts/create/receipt",
    component: Receipts,
    protected: true,
  },
  {
    path: "/finances/receipts/:id/details",
    component: Receipts,
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

export const Routes = {
  DROPSITE_ADMIN: `/dropsite/:id/admin`,
  DROPSITE_CONTACT: `/dropsite/:id/contact`,
  DROPSITE_CONTACT_CONFIRMATION: `/dropsite/:id/contact/confirmation`,
  DROPSITE_DETAIL: `/dropsite/:id`,
  DROPSITE_NEW_ADMIN: `/dropsite/new/admin/:id`,
  FACILITY_CONFIRMATION: '/facility/confirmation',
  FACILITY_EDIT: '/facility/:id/edit',
  FAQ: '/learn-more',
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  PENDING_DOMAINS: '/pending-domains',
  PROFILE: '/profile',
  NEW_FACILITY: '/new-facility',
  REQUEST_SERVICES: '/request-services',
  REQUEST_SUPPLIES: '/request',
  SIGNUP_DROPSITE: `/signup/:id`,
  SIGNUP_DROPSITE_CONFIRMATION: `/signup/:id/confirmation`,
  SIGNUP_FINISH_DROPSITE: `/signup/finish/:id`,
  STYLE_GUIDE: '/style-guide',
  SUPPLY_NEW_ADMIN: `/new/admin/supply/:id`,
  SUPPLY_NEW_ADMIN_CONFIRMATION: `/new/admin/supply/:id/confirmation/:requestId`,

  // MVP Routes
  FACILITY: `/facility`,
  DASHBOARD: '/dashboard',
  EMAIL_SIGNUP_FORM: `/signup`,
  EMAIL_SIGNUP_SENT: `/signup/confirm`,
  EMAIL_SIGNUP_COMPLETE: `/signup/complete`,
  CONTACT_FORM: `/contact`,
  CONTACT_CONFIRMATION: `/contact/confirm`,
  SERVICE_TYPE: '/service',
  SERVICE_GROCERIES_WHERE: '/service/grocery/location/:id',
  SERVICE_GROCERIES_WHEN: '/service/grocery/date/:id',
  SERVICE_GROCERIES_WHAT: '/service/grocery/items/:id',
  SERVICE_ADDITIONAL_INFO: '/service/additionalinfo/:id',
};

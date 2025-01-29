const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/terms",
    component: "TermsOfService",
    exact: true,
  },
];

export default routes;

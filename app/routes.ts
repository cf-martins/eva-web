import { type RouteConfig, prefix } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  ...prefix(":locale?", await flatRoutes()),
] satisfies RouteConfig;

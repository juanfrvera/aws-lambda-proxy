import { authRoutes } from "./auth.routes";
import { itemRoutes } from "./item.routes";

export const routes = [
    ...authRoutes,
    ...itemRoutes
]
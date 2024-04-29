import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from 'remix-flat-routes'

installGlobals();

export default defineConfig({
  plugins: [
		remix({
			ignoredRouteFiles: ['**/*'],
			serverModuleFormat: 'esm',
			routes: async defineRoutes => {
				return flatRoutes('routes', defineRoutes, {
					ignoredRouteFiles: [
						'.*',
						'**/*.css',
						'**/*.test.{js,jsx,ts,tsx}',
						'**/__*.*',
						// This is for server-side utilities you want to colocate
						// next to your routes without making an additional
						// directory. If you need a route that includes "server" or
						// "client" in the filename, use the escape brackets like:
						// my-route.[server].tsx
						'**/*.server.*',
						'**/*.client.*',
					],
				})
			},
		})

  // ]
  // plugins: [remix()
    
  // //   remix({
  // //   routes(defineRoutes) {
  // //     return defineRoutes((route) => {
  // //       route("/", "./routes/_index.tsx", { index: true });
  // //       route("/block/authentication-01", "./routes/block/authentication-01.tsx");
  // //       route("/block/authentication-02", "./routes/block/authentication-02.tsx");
  // //       route("/block/authentication-03", "./routes/block/authentication-03.tsx");
  // //       route("/block/authentication-04", "./routes/block/authentication-04.tsx");
  // //       // route("concerts", "concerts/layout.tsx", () => {
  // //       //   route("", "concerts/home.tsx", { index: true });
  // //       //   route("trending", "concerts/trending.tsx");
  // //       //   route(":city", "concerts/city.tsx");
  // //       // });
  // //     });
  // //   },
  // // })
  
  
  , tsconfigPaths()],
});

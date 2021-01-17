import { ScullyConfig } from "@scullyio/scully";

export const config: ScullyConfig = {
	projectRoot: "./src",
	projectName: "x5group",
	outDir: "./dist/static",
	routes: {
		"/projects/:projectId": {
			type: "json",
			projectId: {
				url:
					"https://twvnmtyq1g.execute-api.eu-west-1.amazonaws.com/dev/projects",
				resultsHandler: res => res.items,
				property: 'projectId',
			},
		},
	},
};

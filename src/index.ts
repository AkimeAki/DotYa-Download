import { BetaAnalyticsDataClient } from "@google-analytics/data";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(process.env.GOOGLE_ANALYTICS_PROPERTY_ID);
	},
} satisfies ExportedHandler<Env>;

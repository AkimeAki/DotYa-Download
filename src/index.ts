import { BetaAnalyticsDataClient } from "@google-analytics/data";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const analyticsDataClient = new BetaAnalyticsDataClient();

		const [response] = await analyticsDataClient.runReport({
			property: `properties/${env.GOOGLE_ANALYTICS_PROPERTY_ID}`,
			dateRanges: [
				{
					startDate: "2021-01-01",
					endDate: "today",
				},
			],
			metrics: [
				{
					name: "activeUsers",
				},
			],
		});

		console.log("Report result:");
		console.log(response);

		return new Response("aaa");
	},
} satisfies ExportedHandler<Env>;

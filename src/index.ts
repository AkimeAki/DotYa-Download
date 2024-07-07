export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response("Hello Worldtest");
	},
} satisfies ExportedHandler<Env>;

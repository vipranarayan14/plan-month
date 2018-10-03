export const parseQuery = searchQuery => {

	const o = {};

	searchQuery
	.split('?')[1]
	.split('&').forEach(q => {
		
		const [key, value] = q.split('=');
		
		o[key] = value;

	});

	return o;
	
};
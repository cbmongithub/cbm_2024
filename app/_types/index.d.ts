export type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
	image?: string;
	imageAlt?: string;
};

export type MetadataWithSlug = {
	slug: string;
	metadata: Metadata;
	content: string;
};
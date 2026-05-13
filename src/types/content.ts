export interface DetailParagraph {
	type: 'paragraph';
	text: string;
}

export interface DetailImage {
	type: 'image';
	src: string;
	alt: string;
	caption?: string;
}

export interface DetailLink {
	type: 'link';
	href: string;
	label: string;
}

export type DetailBlock = DetailParagraph | DetailImage | DetailLink;

export interface TileItem {
	id: string;
	title: string;
	blurb: string;
	image: { src: string; alt: string };
	badges: string[];
	details: DetailBlock[];
}

export interface HobbyItem {
	id: string;
	blurb: string;
	image: { src: string; alt: string };
	rotation?: number;
	span?: 'narrow' | 'medium' | 'wide';
}

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

/** Paragraphs and links shown next to `media` inside a `split` block. */
export type DetailSplitContentBlock = DetailParagraph | DetailLink;

export interface DetailSplit {
	type: 'split';
	media: {
		src: string;
		alt: string;
		caption?: string;
	};
	content: DetailSplitContentBlock[];
	/**
	 * `start`: media on the left in LTR (above text when stacked on narrow screens).
	 * `end`: media on the right (below text when stacked).
	 */
	mediaPosition?: 'start' | 'end';
}

export type DetailBlock = DetailParagraph | DetailImage | DetailLink | DetailSplit;

/** Month-level range using `YYYY-MM` (e.g. `"2024-06"`). Omit or null `end` for Present. */
export interface TileTenure {
	start: string;
	end?: string | null;
}

export interface TileItem {
	id: string;
	title: string;
	blurb: string;
	/** Shown when `organization` + `role` are not both set (e.g. projects / games). */
	image: { src: string; alt: string; objectFit?: 'cover' | 'contain' };
	badges: string[];
	details: DetailBlock[];
	organization?: string;
	role?: string;
	tenure?: TileTenure;
}

export interface HobbyItem {
	id: string;
	blurb: string;
	image: { src: string; alt: string };
	/** Opens in a new tab when set (e.g. YouTube). */
	href?: string;
	linkLabel?: string;
	rotation?: number;
	span?: 'narrow' | 'medium' | 'wide';
}

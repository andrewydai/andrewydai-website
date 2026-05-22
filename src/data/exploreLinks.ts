export const exploreLinks = [
	{ href: '/work', label: 'Work', symbol: 'briefcase' },
	{ href: '/projects', label: 'Projects', symbol: 'layers' },
	{ href: '/games', label: 'Games', symbol: 'gamepad' },
	{ href: '/hobbies', label: 'Hobbies', symbol: 'compass' },
] as const;

export type ExploreSymbol = (typeof exploreLinks)[number]['symbol'];

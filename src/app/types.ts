export interface Book {
	name: string;
	chapters: Chapter[];
}

export interface BookShortVersion {
	name: string;
	chapters: number;
	versesPerChapter: number[];
}

export interface BookGroup {
	title: string;
	books: string[];
}

export interface Verse {
	id: string;
	text: string;
}

export interface Chapter {
	id: string;
	verses: Verse[];
}
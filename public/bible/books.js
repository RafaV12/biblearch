const oldTestamentBooks = [
	{
		name: 'Genesis',
		chapters: 50,
		versesPerChapter: [
			31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33,
			38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43,
			36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
		],
	},
	{
		name: 'Exodus',
		chapters: 40,
		versesPerChapter: [
			22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27,
			25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38,
			29, 31, 43, 38,
		],
	},
	{
		name: 'Leviticus',
		chapters: 27,
		versesPerChapter: [
			17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37,
			27, 24, 33, 44, 23, 55, 46, 34,
		],
	},
	{
		name: 'Numbers',
		chapters: 36,
		versesPerChapter: [
			54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 35, 28, 32,
			22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13,
		],
	},
	{
		name: 'Deuteronomy',
		chapters: 34,
		versesPerChapter: [
			46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22,
			21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
		],
	},
	{
		name: 'Joshua',
		chapters: 24,
		versesPerChapter: [
			18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28,
			51, 9, 45, 34, 16, 33,
		],
	},
	{
		name: 'Judges',
		chapters: 21,
		versesPerChapter: [
			36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31,
			30, 48, 25,
		],
	},
	{
		name: 'Ruth',
		chapters: 4,
		versesPerChapter: [22, 23, 18, 22],
	},
	{
		name: '1-Samuel',
		chapters: 31,
		versesPerChapter: [
			28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 28, 25, 44, 23, 25, 12, 25, 11,
			31, 13,
		],
	},
	{
		name: '2-Samuel',
		chapters: 24,
		versesPerChapter: [
			27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33,
			43, 26, 22, 51, 39, 25,
		],
	},
	{
		name: '1-Kings',
		chapters: 22,
		versesPerChapter: [
			53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46,
			21, 43, 29, 53,
		],
	},
	{
		name: '2-Kings',
		chapters: 25,
		versesPerChapter: [
			18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37,
			37, 21, 26, 20, 37, 20, 30,
		],
	},
	{
		name: '1-Chronicles',
		chapters: 29,
		versesPerChapter: [
			54, 55, 24, 43, 41, 66, 40, 40, 44, 14, 47, 41, 14, 17, 29, 43, 27, 17,
			19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30,
		],
	},
	{
		name: '2-Chronicles',
		chapters: 36,
		versesPerChapter: [
			17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34,
			11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
		],
	},
	{
		name: 'Ezra',
		chapters: 10,
		versesPerChapter: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
	},
	{
		name: 'Nehemiah',
		chapters: 13,
		versesPerChapter: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
	},
	{
		name: 'Esther',
		chapters: 10,
		versesPerChapter: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],
	},
	{
		name: 'Job',
		chapters: 42,
		versesPerChapter: [
			22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21,
			29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24,
			41, 30, 32, 26, 17,
		],
	},
	{
		name: 'Psalms',
		chapters: 150,
		versesPerChapter: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7],
	},
	{
		name: 'Proverbs',
		chapters: 31,
		versesPerChapter: [
			33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24,
			29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33,
		],
	},
	{
		name: 'Ecclesiastes',
		chapters: 12,
		versesPerChapter: [
			18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14, 17, 10, 8, 9, 12, 29, 20,
			16, 15, 17, 10, 14, 6, 12, 8, 17, 9, 20, 17, 32, 14, 14, 26, 17,
		],
	},
	{
		name: 'Song of Solomon',
		chapters: 8,
		versesPerChapter: [17, 17, 11, 16, 16, 13, 13, 14],
	},
	{
		name: 'Isaiah',
		chapters: 66,
		versesPerChapter: [
			31, 22, 26, 6, 30, 13, 25, 23, 20, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6,
			17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8,
			31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21,
			14, 21, 22, 11, 12, 19, 12, 25, 24,
		],
	},
	{
		name: 'Jeremiah',
		chapters: 52,
		versesPerChapter: [
			19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23,
			15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32,
			21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34,
		],
	},
	{
		name: 'Lamentations',
		chapters: 5,
		versesPerChapter: [22, 22, 66, 22, 22],
	},
	{
		name: 'Ezekiel',
		chapters: 48,
		versesPerChapter: [
			28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14,
			49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28,
			23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35,
		],
	},
	{
		name: 'Daniel',
		chapters: 12,
		versesPerChapter: [21, 49, 30, 32, 33, 28, 28, 27, 27, 21, 45, 13],
	},
	{
		name: 'Hosea',
		chapters: 14,
		versesPerChapter: [9, 25, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
	},
	{
		name: 'Joel',
		chapters: 3,
		versesPerChapter: [20, 32, 21],
	},
	{
		name: 'Amos',
		chapters: 9,
		versesPerChapter: [15, 16, 15, 13, 27, 14, 17, 14, 15],
	},
	{
		name: 'Obadiah',
		chapters: 1,
		versesPerChapter: [21],
	},
	{
		name: 'Jonah',
		chapters: 4,
		versesPerChapter: [17, 10, 10, 11],
	},
	{
		name: 'Micah',
		chapters: 7,
		versesPerChapter: [16, 13, 12, 13, 15, 16, 20],
	},
	{
		name: 'Nahum',
		chapters: 3,
		versesPerChapter: [15, 13, 19],
	},
	{
		name: 'Habakkuk',
		chapters: 3,
		versesPerChapter: [17, 20, 19],
	},
	{
		name: 'Zephaniah',
		chapters: 3,
		versesPerChapter: [18, 15, 20],
	},
	{
		name: 'Haggai',
		chapters: 2,
		versesPerChapter: [15, 23],
	},
	{
		name: 'Zechariah',
		chapters: 14,
		versesPerChapter: [
			21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21, 24,
		],
	},
	{
		name: 'Malachi',
		chapters: 4,
		versesPerChapter: [14, 17, 18, 6],
	},
];

export default oldTestamentBooks;

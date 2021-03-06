import { log } from '../../lib';
import { pipe } from '../../lib/fp';
import { collectToArray, first, map, skip, split } from '../../lib/fp/generators';

const input: number[] = pipe(
	split(','),
	map(Number.parseInt),
	collectToArray,
)(process.argv[2]);

pipe(
	game,
	skip(2019),
	first,
	log('Part 1:'),
)(input);

pipe(
	game,
	skip(30000000 - 1),
	first,
	log('Part 2:'),
)(input);


function* game(seed: number[]): IterableIterator<number> {
	const cache = new Map<number, number>(
		seed.map((value, index) => [value, index]));

	yield* seed;

	let last = seed[seed.length - 1];

	for (let turn = seed.length; ; turn++) {
		const current = cache.has(last) ? turn - 1 - cache.get(last)! : 0;
		yield current;
		cache.set(last, turn - 1);
		last = current;
	}
}

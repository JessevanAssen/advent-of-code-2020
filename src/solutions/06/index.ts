import { removeDuplicates } from '../../lib';
import { length, pipe } from '../../lib/fp';
import { collect, map, split, sum, flatten } from '../../lib/fp/generators';
import { readFromStdin } from '../../lib/fs';


const answers = pipe(
	split('\n\n'),
	map(pipe(
		split('\n'),
		map(pipe(
			split(),
			collect,
		)),
		collect
	)),
	collect,
)(readFromStdin());

const unionOfAnswers: (x: typeof answers) => number = pipe(
	map(
		pipe(
			flatten,
			removeDuplicates,
			length,
		),
	),
	sum,
);
console.log('Part 1:', unionOfAnswers(answers));

const intersectionOfAnswers: (x: typeof answers) => number = pipe(
	map(
		pipe(
			intersection,
			length,
		),
	),
	sum,
);
console.log('Part 2:', intersectionOfAnswers(answers));

function intersection<T>([first, ...rest]: T[][]): T[] {
	if (!first) return [];
	if (rest.length === 0) return first;
	return first.filter(x => rest.every(y => y.includes(x)));
}

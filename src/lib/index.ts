export function removeDuplicates<T>(input: Iterable<T>): T[] {
	return [...new Set([...input])];
}

export function* combinations2<T>(input: T[]): IterableIterator<T[]> {
	for (let i = 0; i < input.length - 1; i++) {
		for (let j = i + 1; j < input.length; j++) {
			yield [input[i], input[j]];
		}
	}
}

export function isBetween(start: number, endInclusive: number) {
	return (n: number): boolean => start <= n && n <= endInclusive;
}

export function log(prefix?: string) {
	return (...x: unknown[]): void => prefix ? console.log(prefix, ...x) : console.log(...x);
}

export function remove<T>(index: number, array: T[]): T[] {
	return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function modulo(divident: number, divider: number): number {
	return ((divident % divider) + divider) % divider;
}

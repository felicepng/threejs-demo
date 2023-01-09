import type { Mesh } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export const load = (url: string): Promise<Mesh[]> => {
	const loader = new OBJLoader();

	return new Promise((resolve, reject) => {
		loader.load(
			url,
			(group) => {
				resolve(group.children as Mesh[]);
			},
			undefined,
			reject
		);
	});
};

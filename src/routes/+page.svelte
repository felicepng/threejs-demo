<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { load } from '../utils/loader';
	import '../app.css';

	let spin = -200;
	let direction = -1;

	SC.onFrame(() => {
		spin += 0.01 * direction;
	});

	window.addEventListener('scroll', (e) => {
		if (!direction) {
			direction = 1;
		}
		spin += 0.2 * direction;
	});

	window.addEventListener('keydown', (e) => {
		if (e.code === 'ArrowLeft') {
			direction = -1;
		} else if (e.code === 'ArrowRight') {
			direction = 1;
		} else if (e.code === 'ArrowDown') {
			direction = 0;
		}
	});
</script>

<SC.Canvas antialias background={new THREE.Color(0x000)}>
	{#await load('/models/tree.obj') then meshes}
		{#each meshes as mesh}
			<SC.Mesh
				geometry={mesh.geometry}
				material={new THREE.MeshNormalMaterial()}
				rotation={[0, spin, 0]}
				position={[0, 0, 0]}
			/>
		{/each}
	{/await}
	<SC.PerspectiveCamera position={[0, 0, 450]} />
	<SC.OrbitControls enableDamping enableZoom={false} enablePan={false} />
	<SC.Mesh
		geometry={new THREE.IcosahedronGeometry(10, 1)}
		material={new THREE.MeshNormalMaterial({
			flatShading: true
		})}
		position={[75, 80, 90]}
		rotation={[0, spin, spin]}
	/>
</SC.Canvas>

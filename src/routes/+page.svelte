<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import '../app.css';

	let scrollY = 0;
	let spin = 0;

	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<svelte:window bind:scrollY />

<SC.Canvas antialias background={new THREE.Color(0x000)}>
	<SC.Mesh
		geometry={new THREE.IcosahedronGeometry(3)}
		material={new THREE.MeshNormalMaterial({ flatShading: true })}
		rotation={[-scrollY / 3, 0, spin]}
	/>
	<SC.PerspectiveCamera position={[0, 0, 20]} />
	<SC.OrbitControls enableDamping enableZoom={false} />
	<!-- <SC.PointLight color={0xffffff} intensity={1} distance={100} position={[0, 10, 10]} />
	<SC.DirectionalLight color={0x9090aa} position={[-10, 10, -10]} />
	<SC.HemisphereLight color={0xffffff} groundColor={0x444444} /> -->
	<SC.Primitive object={new THREE.GridHelper(100, 50, 0x444444, 0x555555)} position={[0, -3, 0]} />
</SC.Canvas>

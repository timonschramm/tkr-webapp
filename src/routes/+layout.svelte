<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	console.log(Math.random())
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	<nav>
		<ul>
			<li><a href="/">Home<a/></li>
			<li><a href="/anzeigen">Anzeigen</a></li>
			<li><a href="/projekte">Projekte</a></li>
		</ul>
	</nav>
	{#if data.loggedin}
	 	<h3> eingeloggt </h3>
	{:else}
		<h3> nicht eingeloggt </h3>
	{/if}
</div>
<slot/>
<style>
	nav ul {
		list-style-type: none;
		color: black;
	}
	nav ul li {
		display: inline-block;
	}
	nav ul li a {
		color: black;
	}
	nav ul li a:hover {
		color: pink;
	}
	

</style>


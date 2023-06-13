<script>
	import Header from './Header.svelte';
	import './styles.css';
	console.log(Math.random())
</script>

<div>
	<nav>
		<ul>
			<li><a href="/">Home<a/></li>
			<li><a href="/anzeigen">Anzeigen</a></li>
			<li><a href="/projekte">Projekte</a></li>
		</ul>
	</nav>
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


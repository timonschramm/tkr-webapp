<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	console.log(Math.random())
	// import type { PageData } from './$types';
	// export let data: PageData;
</script>

<div id="nav-container">
	<nav>
		<ul>
			<li><a href="/">Home<a/></li>
			<li><a href="/anzeigen">Anzeigen</a></li>
			<li><a href="/projekte">Projekte</a></li>
			<li><a href="/register">Register</a></li>
			<li><a href="/login">Login</a></li>
			<li><a href="/logout">Logout</a></li>
		</ul>
	</nav>
	<!-- {#if data.loggedin}
	 	<div class="status-indicator logged-in"> eingeloggt </div>
	{:else}
		<div class="status-indicator"> nicht eingeloggt </div>
	{/if} -->
</div>
<slot/>

<style>
	#nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		background-color: #fff;
		box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
	}

	nav ul {
		list-style-type: none;
		color: black;
		display: flex;
		gap: 20px;
	}

	nav ul li {
		display: inline-block;
	}

	nav ul li a {
		color: black;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	nav ul li a:hover {
		color: #007BFF;
	}

	.status-indicator {
		color: #DC3545;
		font-weight: bold;
	}

	.status-indicator.logged-in {
		color: #28A745;
	}
</style>
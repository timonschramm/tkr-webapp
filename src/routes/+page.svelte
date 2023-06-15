<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Banane from "./banane.jpg"
</script>

<div class="standard-wrapper">
	<h1 class="bananenliste">Hallo</h1>
	<p>Lorem ipsum </p>
	<a href="https://www.rewe.de/produkte/rewe-beste-wahl-banane-ca-200g/1028378/?ecid=pla_google_vs_nonbr_pm%7Cem-rewebestewahl_obst-gem%C3%BCse_lia_1879499994_71811829322_pid%3A1028378_ch%3Alocal_nn_d%3Ac&marketCode=440486">Rewe Banane</a>
	<ol class="bananenliste">
		<li>Banane</li>
		<li>Banane</li>
		<li>Banane</li>
		<li>Banane</li>
	</ol>
	<ul class="bananenliste">
		<li>Banane</li>
		<li>Banane</li>
		<li id="extraitem">Banane</li>
		<li>Banane</li>
	</ul>
	<ul>
		<li>Äpfel</li>
		<li>Äpfel</li>
		<li>Äpfel</li>
		<li>Äpfel</li>
	</ul>
	<h2>Heading</h2>
	<img src={Banane}/>
	<ul>
		<li><a href="/">Home<a/></li>
		<li><a href="/anzeigen">Anzeigen</a></li>
		<li><a href="/projekte">Projekte</a></li>
	</ul>

	<form action="?/createRecipe" method="POST">
		<label>
			Rezeptname
			<input name="Rezeptname" placeholder="Nudeln mit Pesto" type="text"/>
		</label>
		<label>
			Password
			<input name="Password" placeholder="Nudeln mit Pesto" type="password"/>
		</label>
		<input type="submit"/>
	</form>
</div>

<style>
	body {
		background-color: white;
		color: black;
		font-family: Arial, sans-serif;
	}

	img {
		width: 200px;
		border-radius: 10px;
	}

	.bananenliste {
		color: black;
		background-color: white;
		padding: 30px;
		border: 2px solid #000000;
		list-style-type: none;
	}

	#extraitem {
		color: blue;
		font-weight: bold;
	}

	.standard-wrapper {
		margin: 40px;
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	h1, h2 {
		color: black;
	}

	p, li {
		color: black;
	}

	a {
		color: blue;
		text-decoration: none;
	}

	a:hover {
		color: black;
		text-decoration: underline;
	}

	form {
		color: black;
	}

	input[type="submit"] {
		background-color: blue;
		color: white;
		border: none;
		padding: 10px 20px;
		text-decoration: none;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 5px;
	}

	input[type="submit"]:hover {
		background-color: black;
	}

	input[type="text"], input[type="password"] {
		border: 2px solid black;
		border-radius: 5px;
		padding: 5px;
	}
</style>

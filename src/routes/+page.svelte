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
	img {
		width: 200px;
	}
	.bananenliste {
		color: yellow;
		background-color: brown;
		padding: 30px;
	}
	#extraitem {
		color: brown;
	}

	.standard-wrapper {
		margin: 40px
	}
</style>
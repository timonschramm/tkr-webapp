<script lang="ts">
	import { text } from "svelte/internal";
    import EbaySinglpepost from "../../lib/components/Ebay_singlpepost.svelte";
    export let data;
    console.log(data.postDaten)
  
</script>

<div class="main-container">
    <h1> Anzeigen</h1>

    {#if data.loggedin == 1}
    <div class="post-container">
        {#each data.postDaten as singlePost}
        <EbaySinglpepost externtitel={singlePost.titel} externpreis={singlePost.preis}/>
        {/each}
    </div>
    {:else}
        <h2>Du hast keine Berechtigung den Content zu sehen</h2>
    {/if}

    <div class="form-container">
        <h2>Create New Post</h2>
        <form action="?/createPost" method="POST">
            <label class="input-field"> 
                Produktname
                <input name="name" type="text"/>
            </label>

            <label class="input-field"> 
                Preis
                <input name="price" type="text"/>
            </label>
            <input class="submit-button" type="submit"/>
        </form>
    </div>
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Arial, sans-serif;
        color: #333;
        padding: 20px;
        max-width: 1200px;
        margin: auto;
    }

    .post-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 50px;
    }

    .form-container {
        width: 100%;
        max-width: 500px;
    }

    .input-field {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .submit-button {
        padding: 10px 20px;
        border: none;
        background-color: #007BFF;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .submit-button:hover {
        background-color: #0056b3;
    }
</style>

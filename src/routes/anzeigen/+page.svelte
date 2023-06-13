<script lang="ts">
	import { text } from "svelte/internal";
    import EbaySinglpepost from "../../lib/components/Ebay_singlpepost.svelte";
    export let data;
    console.log(data.postDaten)
  
</script>
<h1> Anzeigen</h1>

<div>
    {#each data.postDaten as singlePost}
    <EbaySinglpepost externtitel={singlePost.titel} externpreis={singlePost.preis}/>
    {/each}
</div>
<div>
    <form action="?/createPost" method="POST">
        <label> 
            Produktname
            <input name="name" type="text"/>
        </label>
       
        <label> 
            Preis
            <input name="price" type="text"/>
        </label>
        <input type="submit"/>

    </form>
</div>

<style>
    img {
        width: 300px;
    }
</style>
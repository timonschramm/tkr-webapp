<script lang="ts">
    
</script>

<h1> Login</h1>
<form class="auth-form" action="?/login" method="POST">
    <input name="mail" placeholder="Deine Mail"/>
    <input name="password" placeholder="Dein Password" type="password"/>
    <input class="submit-button" name="submitButton" type="submit"/>
</form>

<style>
    .auth-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
        margin: auto;
    }

    .auth-form input {
        padding: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    }

    .submit-button {
        background-color: #007BFF;
        color: #ffffff;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .submit-button:hover {
        background-color: #0056b3;
    }
</style>

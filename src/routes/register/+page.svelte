<h1>Register</h1>
<div>

<form class="register-form" action="?/register" method="POST">
    <input type="email" name="email" placeholder="Email" required/>
    <input type="password" name="password" placeholder="Password" required/>
    <input type="password" name="confirm_password" placeholder="Confirm Password" required/>
    <button type="submit">Register</button>
  </form>
</div>

<style>
     div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .register-form {
      padding: 20px;
      background-color: #f8f8f8;
      border-radius: 8px;
      box-shadow: 0px 0px 10px 2px #00000033;
      width: 300px;
      padding-right: 50px;
    }
    .register-form input {
      margin: 10px 0;
      padding: 10px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
    .register-form button {
      margin: 20px 0;
      padding: 10px;
      width: 100%;
      border: none;
      background-color: #007bff;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
    .register-form button:hover {
      background-color: #0056b3;
    }
</style>
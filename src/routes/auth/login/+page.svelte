<script>
  import './styles.css'

  import loginUser from '$lib/helpers/loginUser';  
</script>

<form on:submit={(event) => loginUser(event)}>
  <label for="username">
    Username:
    <input type="text" id="username" name="username" placeholder="John_doe">
  </label>
  <label for="password">
    Password:
    <input type="password" id="password" name="password" placeholder="********">
  </label>
  <button type="submit">Login</button>
</form>
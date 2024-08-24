<!-- LoginPage.svelte -->

<script>
    import { getUserByUsername } from './db.js';
    import { navigate } from 'svelte-routing'; // Assuming you're using Svelte routing
  
    let username = '';
    let password = '';
    let error = '';
  
    async function handleLogin() {
      try {
        const user = await getUserByUsername(username);
        if (!user) {
          error = 'User not found';
          return;
        }
  
        // Compare passwords
        const match = await bcrypt.compare(password, user.password_hash);
        if (match) {
          // Authentication successful, redirect to dashboard or home page
          navigate('/dashboard'); // Example route
        } else {
          error = 'Incorrect password';
        }
      } catch (error) {
        console.error('Error logging in:', error);
        error = 'Internal server error';
      }
    }
  </script>
  
  <main>
    <h1>Login</h1>
    {#if error}
      <p>{error}</p>
    {/if}
    <form on:submit|preventDefault={handleLogin}>
      <label>
        Username:
        <input type="text" bind:value={username}>
      </label>
      <label>
        Password:
        <input type="password" bind:value={password}>
      </label>
      <button type="submit">Login</button>
    </form>
  </main>
  
  <style>
    /* Styles for your component */
  </style>
  
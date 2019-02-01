<template>
  <div id="app">
    <div id="nav">
      <router-link to="/team">Team</router-link> |
      <router-link to="/your-team">Your Team</router-link> |
      <router-link to="/">Login</router-link>
      <button id="signout">Sign Out</button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a:hover{
  color: #131b22;
}
#signout{
  margin: 20px;
  background-color: transparent;
  border: solid 1px #a4dbc5;
  padding: 10px
}
</style>

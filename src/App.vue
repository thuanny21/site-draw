<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Sobre">Sobre</router-link> |
      <router-link to="/Servicos">Serviços</router-link> | 
      <router-link to="/Produtos">Produtos</router-link> | 
      <router-link to="/Contato">Contato</router-link> | 
  </div>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

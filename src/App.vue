<script setup>
import Panels from './components/Panels.vue';
</script>

<template>
  <div>
    <section class="flex-centered">
      <h1>Hello!</h1>
    </section>

    <Panels>
      <section class=".flex-centered maroon">
        <p>1</p>
      </section>
      <section data-left class=".flex-centered dark">
        <p>2</p>
      </section>
      <section class=".flex-centered indigo">
        <p>3</p>
      </section>
    </Panels>

    <section class="flex-centered">
      <h1>byeee!</h1>
    </section>
  </div>
</template>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 300%;
}
body,
html {
  margin: 0;
  padding: 0;
}

.flex-centered {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup lang="ts">
import ParentComponent from "./ParentComponent.vue";
import { wrapper } from "../src/wrapper";

const value = wrapper;
</script>

<template>
  <div className="App">
    <header class="App-header">
      <img alt="Vue logo" src="./assets/logo.png" class="App-logo" />
    </header>
    <ParentComponent :parent="value.parent" />
    <pre style="background: lightgray; padding: 1rem">{{ value }}</pre>
  </div>
</template>

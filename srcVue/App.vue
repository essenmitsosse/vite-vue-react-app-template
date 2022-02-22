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
    {{ value }}
    <ParentComponent :parent="value.parent" />
  </div>
</template>

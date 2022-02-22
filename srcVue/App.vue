<script setup lang="ts">
import ParentComponent from "./ParentComponent.vue";
import { wrapper } from "../src/wrapper";
import { Parent } from "../src/types";
import { shallowRef, readonly } from "vue";

let value = shallowRef(wrapper);
const onInput = (parent: Parent) => {
  value.value = { parent };
};
</script>

<template>
  <div className="App">
    <header class="App-header">
      <img alt="Vue logo" src="./assets/logo.png" class="App-logo" />
    </header>
    <ParentComponent :parent="readonly(value.parent)" @input="onInput" />
    <pre>{{ value }}</pre>
  </div>
</template>

<script setup lang="ts">
import ParentComponent from "./ParentComponent.vue";
import { wrapperDefault } from "../src/wrapper";
import { Parent } from "../src/types";
import { shallowRef, readonly } from "vue";
import { updateParentOnWrapper } from "../src/helper";

let wrapper = shallowRef(wrapperDefault);

const onInput = (parent: Parent) => {
  wrapper.value = updateParentOnWrapper(wrapper.value, parent);
};
</script>

<template>
  <div className="App">
    <header class="App-header">
      <img alt="Vue logo" src="./assets/logo.png" class="App-logo" />
    </header>
    <ParentComponent :parent="readonly(wrapper.parent)" @input="onInput" />
    <pre>{{ wrapper }}</pre>
  </div>
</template>

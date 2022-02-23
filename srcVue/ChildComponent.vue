<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";
import { getGetEmitVue } from "./getGetEmit";

const emit = defineEmits<{
  (event: "input", child: Child): void;
  (event: "remove"): void;
}>();
const props = defineProps<{ child: Child }>();
const getEmit = getGetEmitVue(emit, () => props.child);
const onInput = getEmit(updateValueOnChild);
</script>

<template>
  <div class="child">
    <input
      type="text"
      :value="child.value"
      @input="onInput(($event.currentTarget as HTMLInputElement).value)"
    />
    <button @click="emit('remove')">-</button>
  </div>
</template>

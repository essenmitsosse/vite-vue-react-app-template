<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";
import { pipe } from "rambda";

const emit = defineEmits<{
  (event: "input", child: Child): void;
  (event: "remove"): void;
}>();
defineProps<{ child: Child }>();
const emitCurry = (child: Child) => emit("input", child);

const onInput = pipe(updateValueOnChild, emitCurry);
</script>

<template>
  <div class="child">
    <input
      type="text"
      :value="child.value"
      @input="onInput(child, ($event.currentTarget as HTMLInputElement).value)"
    />
    <button @click="emit('remove')">-</button>
  </div>
</template>

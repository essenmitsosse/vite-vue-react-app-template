<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Child } from "../src/types";
import { updateValueOnChild } from "../src/helper";

const emit = defineEmits<{
  (event: "input", child: Child): void;
  (event: "remove"): void;
}>();
const props = defineProps<{ child: Child }>();
const onInput = (event: Event) =>
  emit(
    "input",
    updateValueOnChild((event.currentTarget as HTMLInputElement).value)(
      props.child
    )
  );
</script>

<template>
  <div class="child">
    <input type="text" :value="props.child.value" @input="onInput" />
    <button @click="emit('remove')">-</button>
  </div>
</template>

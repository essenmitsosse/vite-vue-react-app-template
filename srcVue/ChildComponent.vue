<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Child } from "../src/types";

const emit = defineEmits<{ (event: "input", child: Child): void }>();
const props = defineProps<{ child: Child }>();
const onInput = (event: Event) =>
  emit("input", { value: (event.currentTarget as HTMLInputElement).value });
</script>

<template>
  <div class="child">
    <input type="text" :value="props.child.value" @input="onInput" />
  </div>
</template>

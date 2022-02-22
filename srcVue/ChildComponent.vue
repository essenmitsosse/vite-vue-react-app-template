<script setup lang="ts">
import { defineProps } from "vue";
import { Child } from "../src/types";

const props = defineProps<{ child: Child }>();
</script>

<template>
  <div style="background: grey; margin-bottom: 0.5rem; padding: 0.25rem">
    {{ props.child.value }}
  </div>
</template>

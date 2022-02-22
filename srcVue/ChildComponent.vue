<script setup lang="ts">
import { defineProps } from "vue";
import { Child } from "../src/types";

const props = defineProps<{ child: Child }>();
</script>

<template>
  <div>{{ props.child.value }}</div>
</template>

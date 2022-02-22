<script setup lang="ts">
import { defineProps } from "vue";
import ChildComponent from "./ChildComponent.vue";
import { Parent } from "../src/types";

const props = defineProps<{ parent: Parent }>();
</script>

<template>
  <ul>
    <li v-for="(child, index) in props.parent.listChild" :key="index">
      <ChildComponent :child="child" />
    </li>
  </ul>
</template>

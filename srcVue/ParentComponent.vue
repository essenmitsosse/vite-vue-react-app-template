<script setup lang="ts">
import { computed, defineProps } from "vue";
import ChildComponent from "./ChildComponent.vue";
import { Parent } from "../src/types";

const props = defineProps<{ parent: Parent }>();
const size = computed(() => props.parent.listChild.length);
</script>

<template>
  <div
    style="
      border: 1px solid black;
      margin: 1rem;
      padding: 1rem;
      background: lightgrey;
    "
  >
    Anzahl: {{ size }}
    <ul>
      <li v-for="(child, index) in props.parent.listChild" :key="index">
        <ChildComponent :child="child" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
import ChildComponent from "./ChildComponent.vue";
import { Parent } from "../src/types";
import { addNewChildToParent } from "../src/helper";

const emit = defineEmits<{
  (event: "add", parent: Parent): void;
}>();
const props = defineProps<{ parent: Parent }>();
const size = computed(() => props.parent.listChild.length);
const add = () => {
  emit("add", addNewChildToParent(props.parent));
};
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
    Anzahl: {{ size }} <button @click="add">+</button>
    <ul>
      <li v-for="(child, index) in props.parent.listChild" :key="index">
        <ChildComponent :child="child" />
      </li>
    </ul>
  </div>
</template>

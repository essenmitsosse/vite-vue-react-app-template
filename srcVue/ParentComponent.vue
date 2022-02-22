<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
import ChildComponent from "./ChildComponent.vue";
import { Parent } from "../src/types";
import { addNewChildToParent } from "../src/helper";

const emit = defineEmits<{
  (event: "input", parent: Parent): void;
}>();
const props = defineProps<{ parent: Parent }>();
const size = computed(() => props.parent.listChild.length);
const onClickAdd = () => {
  emit("input", addNewChildToParent(props.parent));
};
</script>

<template>
  <div class="parent">
    Anzahl: {{ size }} <button @click="onClickAdd">+</button>
    <ul>
      <li v-for="(child, index) in props.parent.listChild" :key="index">
        <ChildComponent :child="child" />
      </li>
    </ul>
  </div>
</template>

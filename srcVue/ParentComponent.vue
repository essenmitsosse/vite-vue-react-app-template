<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
import ChildComponent from "./ChildComponent.vue";
import { Child, Parent } from "../src/types";
import {
  addNewChildToParent,
  removeChildAtIndexFromParent,
  replaceChildInListChildOnParent,
} from "../src/helper";

const emit = defineEmits<{ (event: "input", parent: Parent): void }>();
const props = defineProps<{ parent: Parent }>();
const size = computed(() => props.parent.listChild.length);
const onClickAdd = () => {
  emit("input", addNewChildToParent(props.parent));
};
const onClickRemove = (index: number) => {
  emit("input", removeChildAtIndexFromParent(index)(props.parent));
};
const onInputChild = (index: number, child: Child) =>
  emit("input", replaceChildInListChildOnParent(props.parent)(index)(child));
</script>

<template>
  <div class="parent">
    Anzahl: {{ size }} <button @click="onClickAdd">+</button>
    <ul>
      <li v-for="(child, index) in props.parent.listChild" :key="index">
        <ChildComponent
          :child="child"
          @input="onInputChild(index, $event)"
          @remove="onClickRemove(index)"
        />
      </li>
    </ul>
  </div>
</template>

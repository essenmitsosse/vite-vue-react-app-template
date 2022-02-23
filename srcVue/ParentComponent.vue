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
    <TransitionGroup tag="ul" name="fade" class="container">
      <li
        v-for="(child, index) in props.parent.listChild"
        :key="child.idUnique"
      >
        <ChildComponent
          :child="child"
          @input="onInputChild(index, $event)"
          @remove="onClickRemove(index)"
        />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>

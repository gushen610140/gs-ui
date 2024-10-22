<script lang="ts" setup>
import { defineOptions } from "vue";
import { ButtonProps } from "./type";

defineOptions({
  name: "GsButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
});
</script>

<template>
  <component :is="tag"> </component>
</template>

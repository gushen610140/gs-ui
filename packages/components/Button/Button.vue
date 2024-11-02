<script lang="ts" setup>
import type { ButtonProps } from "./type";

defineOptions({
  name: "GsButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
});
</script>

<template>
  <button>123</button>
</template>

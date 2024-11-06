<script lang="ts" setup>
import { type ButtonProps } from "./types.ts";
import {ref} from "vue";

defineOptions({
  name: "GsButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const _ref = ref<HTMLButtonElement>();
const slots = defineSlots();

</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="gs-button"
    :class="{
      [`gs-button--${type}`]: type,
      [`gs-button--${size}`]: size,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
  >
    <slot></slot>
  </component>
</template>

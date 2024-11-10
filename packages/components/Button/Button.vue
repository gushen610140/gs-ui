<script lang="ts" setup>
import {type ButtonEmits, type ButtonInstance, type ButtonProps} from "./types.ts";
import {computed, ref} from "vue";
import {throttle} from "lodash-es";
import GsIcon from "../Icon/Icon.vue"

defineOptions({
  name: "GsButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>()

const handleBtnClick = (e: MouseEvent) => {
  emits("click", e);
};

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

const _ref = ref<HTMLButtonElement>();
const slots = defineSlots();

const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}))

defineExpose<ButtonInstance>({
  ref: _ref,
})

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
    :autofocus="autofocus"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <gs-icon :icon="loadingIcon?? 'spinner'" class="loading-icon" spin :style="iconStyle" size="1x"></gs-icon>
      </slot>
    </template>
    <gs-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x"></gs-icon>
    <slot></slot>
  </component>
</template>

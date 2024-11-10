<script setup lang="ts">
import { type IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({
  name: "GsIcon",
  // 关闭透传 识别props到主要元素 识别非主要的attrs到根元素
  inheritAttrs: false,
});

const props = defineProps<IconProps>();

const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
  <i
      class="gs-icon"
      :class="{ [`gs-icon--${type}`]: type }"
      :style="customStyles"
      v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
</style>

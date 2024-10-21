<script lang="ts" setup>
import { defineOptions } from "vue";

defineOptions({
  name: "GsButton",
});
</script>

<template>
  <button><slot></slot></button>
</template>

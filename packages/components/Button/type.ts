import type { Component } from "vue";

export type ButtonTypes = "default" | "primary";

export type ButtonProps = {
  tag?: string | Component;
  size?: number;
  disabled?: boolean;
  type?: ButtonTypes;
  loading?: boolean;
  rounded?: boolean;
};

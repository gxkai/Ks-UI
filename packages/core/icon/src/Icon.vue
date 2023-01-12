<template>
  <i v-bind="$attrs" class="ks-icon">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { iconProps } from './icon.type'

defineOptions({
  name: 'KsIcon',
  inheritAttrs: false
})

defineProps(iconProps)
</script>

<style lang="ts">
css({
  '.ks-icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    color: (props) => props.color
  }
})
</style>

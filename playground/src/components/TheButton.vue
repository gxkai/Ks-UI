<template>
  <h2>color</h2>
  <div class="demo-block">
    <KsButton color="primary">primary</KsButton>
    <KsButton color="danger">danger</KsButton>
    <KsButton color="success">success</KsButton>
    <KsButton color="warning">warning</KsButton>
    <KsButton color="info">info</KsButton>
  </div>
  <h2>variant</h2>
  <div class="demo-block">
    <KsButton color="primary">primary</KsButton>
    <KsButton color="primary" variant="light">danger</KsButton>
    <KsButton color="primary" variant="outline">success</KsButton>
    <KsButton color="primary" variant="subtle">warning</KsButton>
    <KsButton color="primary" variant="default">info</KsButton>
    <KsButton color="primary" variant="white">info</KsButton>
  </div>
  <h2>Size</h2>
  <div class="demo-block">
    <KsButton color="primary" size="xs">Settings</KsButton>
    <KsButton color="primary" size="sm">Settings</KsButton>
    <KsButton color="primary" size="md">Settings</KsButton>
    <KsButton color="primary" size="lg">Settings</KsButton>
    <KsButton color="primary" size="xl">Settings</KsButton>
  </div>
  <h2>roundend</h2>
  <div class="demo-block">
    <KsButton color="primary" radius="xs">Settings</KsButton>
    <KsButton color="primary" radius="sm">Settings</KsButton>
    <KsButton color="primary" radius="md">Settings</KsButton>
    <KsButton color="primary" radius="lg">Settings</KsButton>
    <KsButton color="primary" radius="xl">Settings</KsButton>
  </div>
  <h2>loading</h2>
  <div class="demo-block">
    <KsButton color="primary" loading>Settings</KsButton>
    <KsButton color="primary" loading loadingPosition="right">Settings</KsButton>
    <KsButton color="primary" :leftIcon="Ks24HoursFill">Settings</KsButton>
    <KsButton color="primary" :rightIcon="Ks24HoursFill">Settings</KsButton>
  </div>
  <h2>disabled</h2>
  <div class="demo-block">
    <KsButton disabled>Settings</KsButton>
  </div>
</template>

<script lang="ts" setup>
import { Ks24HoursFill } from '@ks-ui/icon'
</script>

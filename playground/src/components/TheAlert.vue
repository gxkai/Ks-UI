<template>
  <h1>variant</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <KsAlert title="Bummer!">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" variant="light">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" variant="outline">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
    </div>
  </div>
  <h1>color</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <KsAlert title="Bummer!">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </KsAlert>
    <KsAlert title="Bummer!" color="danger">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </KsAlert>
    <KsAlert title="Bummer!" color="warning">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </KsAlert>
    <KsAlert title="Bummer!" color="info">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </KsAlert>
    <KsAlert title="Bummer!" color="success">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </KsAlert>
    </div>
  </div>
  <h1>radius</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <KsAlert title="Bummer!" radius="xs">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" radius="sm">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" radius="md">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" radius="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" radius="lg">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
      <KsAlert title="Bummer!" radius="xs"></KsAlert>
      <KsAlert title="Bummer!" radius="sm"></KsAlert>
      <KsAlert title="Bummer!" radius="md"></KsAlert>
      <KsAlert title="Bummer!" radius="lg"></KsAlert>
      <KsAlert title="Bummer!" radius="xl"></KsAlert>
    </div>
  </div>
  <h1>icon</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <KsAlert :icon="KsStarLine" title="Bummer!"></KsAlert>
      <KsAlert :icon="KsStarLine" title="Bummer!">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </KsAlert>
    </div>
  </div>
  <h1>toggle</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <KsAlert v-model="visible" :icon="KsStarLine" title="Bummer!" show-close></KsAlert>
      <KsButton @click="toggleVisible()">toggle</KsButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { KsStarLine } from '@ks-ui/icon'

const [visible, toggleVisible] = useToggle(true)
</script>

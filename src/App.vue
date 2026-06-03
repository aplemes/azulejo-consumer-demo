<script setup>
import { ref, watchEffect } from 'vue'
import { AzButton } from '@ptlm-azulejo/button'

const brand = ref('preset-lm')
const mode = ref('light')

// Apply brand + light/dark on the root element, the same mechanism Mozaic uses.
watchEffect(() => {
  const root = document.documentElement
  root.classList.remove('preset-lm', 'preset-adeo')
  root.classList.add(brand.value)
  root.setAttribute('data-theme', mode.value)
})
</script>

<template>
  <div class="page">
    <header>
      <h1>@ptlm-azulejo — external consumer</h1>
      <p>
        Imported from the published entry points (<code>themes/base.css</code> +
        a preset + <code>button/style.css</code>). Switch brand/mode to see the
        same components re-theme at runtime.
      </p>

      <div class="toolbar">
        <label>
          Brand:
          <select v-model="brand">
            <option value="preset-lm">Leroy Merlin</option>
            <option value="preset-adeo">Adeo</option>
          </select>
        </label>
        <label>
          Mode:
          <select v-model="mode">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </header>

    <section>
      <h2>Appearances</h2>
      <div class="row">
        <AzButton>Standard</AzButton>
        <AzButton appearance="accent">Accent</AzButton>
        <AzButton appearance="danger">Danger</AzButton>
        <AzButton appearance="inverse">Inverse</AzButton>
      </div>
    </section>

    <section>
      <h2>Modifiers &amp; sizes</h2>
      <div class="row">
        <AzButton ghost>Ghost</AzButton>
        <AzButton outlined>Outlined</AzButton>
        <AzButton size="s">Small</AzButton>
        <AzButton size="l">Large</AzButton>
        <AzButton disabled>Disabled</AzButton>
        <AzButton is-loading>Loading</AzButton>
      </div>
    </section>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  /* Drives the page background from the active theme so dark mode is visible. */
  background: var(--color-background-primary);
  color: var(--color-text-primary);
  transition: background 0.2s ease, color 0.2s ease;
}

.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

h1 {
  font-size: 1.5rem;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0 2rem;
  padding: 1rem;
  border: var(--border-s) solid var(--color-border-primary);
  border-radius: var(--border-radius-l);
  background: var(--color-background-secondary);
}

.toolbar label {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-size: var(--font-size-02);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-tertiary);
}

.toolbar select {
  appearance: none;
  min-width: 12rem;
  padding: 0.5rem 2.25rem 0.5rem 0.75rem;
  font-size: var(--font-size-04);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  border: var(--border-s) solid var(--color-border-secondary);
  border-radius: var(--border-radius-m);
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  /* Chevron drawn with an inline SVG so it inherits the theme text color. */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.625rem center;
  background-size: 1rem;
}

.toolbar select:hover {
  border-color: var(--color-text-accent);
}

.toolbar select:focus-visible {
  outline: none;
  border-color: var(--color-text-accent);
  box-shadow: 0 0 0 3px var(--color-background-accent);
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-tertiary);
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
</style>

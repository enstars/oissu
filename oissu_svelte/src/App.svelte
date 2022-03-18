<script lang="ts">
  import { onMount } from "svelte";
  import LineGroup from "./components/line-group.svelte";
  import ThemeLoader from "./components/theme-loader.svelte";
  import parse from "./parse";
  export let ast;
  const elementList = parse(ast.children[0].children);
  // const elementList = [];
  // console.debug(elementList);

  onMount(() => {
    // console.debug("awa");
    // console.debug(parse(ast.children[0].children));
  });
</script>

<template>
  <ThemeLoader />
  <div class="oissu__embed">
    <div class="oissu">
      {#each elementList as unit}
        <LineGroup {unit} />{/each}
    </div>
  </div>
</template>

<style global lang="scss">
  .oissu__embed {
    margin: 10px auto 10px;
    box-sizing: border-box;
    background: var(--os-background-color);
    border-radius: 6px;
    border: var(--os-border);
    overflow: hidden;
    position: relative;
    color: var(--os-text-color);
    filter: var(--os-shadow);
    /* min-height: 370px; */

    * {
      transition: all var(--os-animation-duration) ease;
    }

    .oissu {
      padding: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.75em;
      font: var(--os-text-font);
      letter-spacing: 0;
      /* min-height: 250px; */

      p {
        margin: 0;
      }

      a {
        color: var(--os-link-color);

        &:hover {
          color: var(--os-link-color__hover);
        }
      }
    }
  }
  .os-unit {
    display: grid;
    grid-template: auto / var(--os-identifier-width) 1fr;
    column-gap: 10px;
    row-gap: 0.5em;

    .os-content {
      grid-column: 2/3;

      &.os-lines {
        display: flex;
        flex-direction: column;

        p {
          margin: 0px 0px 0.5em 0px;
          border-radius: var(--os-bubble-radius-small)
            var(--os-bubble-radius-large) var(--os-bubble-radius-large)
            var(--os-bubble-radius-small);
          align-self: flex-start;
          position: relative;

          &:last-child {
            margin: 0px;
            border-bottom-left-radius: var(--os-bubble-radius-large);
          }

          &:first-child {
            border-top-left-radius: 0;
          }
        }
      }

      &.os-rich {
        border-radius: 5px;
        overflow: hidden;
        flex: 0 0 auto;
        grid-column: 1/3;

        img {
          width: 100%;
          height: auto;
          filter: var(--os-shadow);
        }
      }
    }

    span.os-identifier {
      color: var(--os-identifier-color);
      font-weight: 700;
      text-align: right;
    }

    img.os-identifier {
      grid-row: 1/3;
      display: none;
      border-radius: var(--os-identifier-radius);
      background: var(--q-character-color);
      width: var(--os-identifier-width-display);
      margin: 0 auto 0 0;
    }

    .os-content.os-lines {
      p:hover {
        transform: translate(1.5px, 0px);
      }
    }
  }
</style>

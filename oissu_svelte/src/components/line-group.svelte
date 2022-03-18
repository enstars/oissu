<script>
  export let unit;
  const { character, content } = unit;
</script>

<template>
  <div class="os-unit" {character}>
    <img
      alt={character}
      class="os-identifier"
      src="https://uchuu.yuukun.dev/oissu/icons/enstars/es-unit-outfit/Kohaku.png"
    />
    <span class="os-identifier">{character}</span>
    <div class="os-content os-lines" {character}>
      {#each content as line}
        <p>{@html line}</p>
      {/each}
    </div>
  </div>
</template>

<style global lang="scss">
  .speaker {
    font-weight: 700;
    a {
      font-weight: 400;
    }
  }
</style>

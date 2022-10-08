<template>
  <div class="test-svg">
    <svg width="200px" height="200px" viewBox="0 0 100 100">
      <circle r="5" cx="10" cy="25" fill="currentColor" />
      <circle r="5" cx="10" cy="50" fill="currentColor" />
      <circle r="5" cx="10" cy="75" fill="currentColor" />
      <line
        x1="40"
        y1="25"
        x2="90"
        y2="25"
        stroke-width="8"
        stroke="currentColor"
      />
      <line
        x1="40"
        y1="50"
        x2="80"
        y2="50"
        stroke-width="8"
        stroke="currentColor"
      />
      <line
        x1="40"
        y1="75"
        x2="90"
        y2="75"
        stroke-width="8"
        stroke="currentColor"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Test1",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>

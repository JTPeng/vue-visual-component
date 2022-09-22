<template>
  <div class="test">{{ message }}</div>
  <div>double: {{ doubleCount }}</div>
  <h1>count:{{ count }}</h1>
  <button @click="clickBtn">clickBtn</button>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "TestComponent",
  setup() {
    const message = "hello rollup new";
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const clickBtn = () => {
      count.value++;
    };
    return {
      message,
      doubleCount,
      clickBtn,
      count,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>

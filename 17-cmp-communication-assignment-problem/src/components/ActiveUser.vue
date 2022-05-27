<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }} years</h3>
  </div>
</template>
<script>
export default {
  props: ["userName", "userAge"],
};
</script>

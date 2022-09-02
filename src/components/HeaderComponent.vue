<template>
  <div class="header">
    <h1 class="h1">#movienow</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped lang="scss">
.header {
  padding-top: 36px;
  width: 100%;
  height: 64px;
  background: rgba(250, 40, 40, 0.98);
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
}

.h1 {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;

  letter-spacing: 0.21em;
  text-transform: uppercase;

  color: #000000;
}
</style>

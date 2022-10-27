<template>
  <div class="my-programs">
    <h1 class="my-programs_title">Мои программы</h1>
    <input-search />
    <Table />
    <Activation />
    <Table />
    <div class="my-programs_more">
      <button-more />
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Activation from "@/components/Activation.vue";
export default {
  name: "MyPrograms",
  components: {
    Table,
    Activation
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.my-programs {
  flex: 1 1 auto;
  &_title {
    margin-bottom: 1.2em;
  }
  &_more {
    text-align: right;
  }
}
</style>

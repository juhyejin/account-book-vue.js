<template>
  <section role="document">
    <div id="usageHistoryZone">
      <div>수입 : {{ income }}</div>
      <div>지출 : {{ spending }}</div>
      <div>합계 :{{ total }}</div>
    </div>
    <DatePicker />
    <WriteMoneyFlow
      :writeMoneyFlowDialog="openWriteMoneyFlowDialog"
      @close-dialog="(val) => (this.openWriteMoneyFlowDialog = val)"
    ></WriteMoneyFlow>
    <div id="showWritePage">
      <button type="button" @click="openWriteMoneyFlowDialog = !openWriteMoneyFlowDialog">+</button>
    </div>
  </section>
</template>

<script>
import DatePicker from '@/components/DatePicker';
import WriteMoneyFlow from '@/components/WriteMoneyFlow';
export default {
  name: 'Main',
  components: {
    DatePicker,
    WriteMoneyFlow,
  },
  mounted() {
    this.total = this.priceComma(this.income - this.spending);
    this.income = this.priceComma(this.income);
    this.spending = this.priceComma(this.spending);
  },
  data() {
    return {
      income: 300000,
      spending: 150000,
      total: 0,
      openWriteMoneyFlowDialog: false,
    };
  },
  methods: {
    priceComma: function (num) {
      return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style>
section {
  height: 100%;
  overflow: scroll;
}
#usageHistoryZone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: lightskyblue;
}
#showWritePage {
  position: sticky;
  bottom: 0;
}
</style>

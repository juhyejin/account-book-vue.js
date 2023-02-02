<template>
  <section role="document">
    <div id="usageHistoryZone">
      <div>수입 : {{ income }}</div>
      <div>지출 : {{ spending }}</div>
      <div>합계 :{{ total }}</div>
    </div>
    <DatePicker />
  </section>
</template>

<script>
import DatePicker from '@/components/DatePicker';
export default {
  name: 'Main',
  components: {
    DatePicker,
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
</style>

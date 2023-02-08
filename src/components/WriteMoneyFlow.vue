<template>
  <div v-if="writeMoneyFlowDialog" id="write-money-flow">
    <div>
      <div class="close-section">
        <div class="gg-close" tabindex="0" role="doc-backlink" @click="closeDialog"></div>
      </div>
    </div>
    <ul class="money-flow-tab-ul">
      <li v-for="index in moneyFlowTab" :key="index.id">
        <input type="radio" :id="index.engName" v-model="chooseFlowTab" :value="index.id" />
        <label :for="index.engName">{{ index.koName }}</label>
      </li>
    </ul>
    <form @submit="submitMoneyFlow">
      <ul class="write-list-ul">
        <li v-for="index in writeMoneyList" :key="index.id">
          <div v-if="(index.list !== 'item') & (index.list !== 'form')">
            <label :for="index.list">{{ index.koName }}</label>
            <input :type="index.inputType" :id="index.list" required />
          </div>
          <div v-if="(index.list === 'item') & (chooseFlowTab !== index.hidden)">
            <label for="money-item">
              {{ index.koName }}
            </label>
            <select id="money-item">
              <option v-for="index in selectItemOption[chooseFlowTab]" :key="index">
                {{ index }}
              </option>
            </select>
          </div>
          <div v-if="(index.list === 'form') & (chooseFlowTab !== index.hidden)">
            <label for="money-item">
              {{ index.koName }}
            </label>
            <select id="money-item" v-model="selectFromValue">
              <option v-for="index in selectFromOption[chooseFlowTab]" :key="index">
                {{ index }}
              </option>
            </select>
            <div :class="{ hidden: selectFromValue !== '신용카드' }">
              <label for="creditCardInstallment"> 할부 개월 </label>
              <select id="creditCardInstallment">
                <option v-for="n in 12" :key="n">{{ n }}</option>
              </select>
            </div>
          </div>
        </li>
      </ul>
      <button type="submit">확인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'WriteMoneyFlow',
  props: {
    writeMoneyFlowDialog: Boolean,
  },
  watch: {
    writeMoneyFlowDialog(event) {
      if (event === false) this.resetData();
    },
  },
  data() {
    return {
      chooseFlowTab: 0,
      moneyFlowTab: [
        { id: 0, engName: 'income', koName: '수입' },
        { id: 1, engName: 'expenditure', koName: '지출' },
        { id: 2, engName: 'transfer', koName: '이체' },
      ],
      writeMoneyList: [
        { id: 0, list: 'day', koName: '날짜', inputType: 'date' },
        { id: 1, list: 'item', koName: '항목' },
        { id: 2, list: 'form', koName: '형태', hidden: 2 },
        { id: 3, list: 'amount', koName: '금액' },
        { id: 4, list: 'memo', koName: '메모' },
      ],
      selectItemOption: [
        //income
        ['소득', '저축', '차입'],
        //expenditure
        ['식비/주.부식', '식비/외식', '세금', '교육', '교통', '보건위생', '오락'],
        //transfer
        ['압출금', '적금', '청약', '대출'],
      ],
      selectFromOption: [
        ['현금', '계좌이체'],
        ['현금', '계좌이체', '체크카드', '신용카드'],
      ],
      selectFromValue: '현금',
    };
  },
  methods: {
    closeDialog: function () {
      this.$emit('close-dialog', false);
    },
    submitMoneyFlow: function (event) {
      event.preventDefault();
      alert('정상적으로 등록되었습니다.');
      this.closeDialog();
    },
    resetData: function () {
      this.chooseFlowTab = 0;
      this.selectFromValue = '현금';
    },
  },
};
</script>

<style>
#write-money-flow {
  position: absolute;
  display: flex;
  justify-content: start;
  flex-direction: column;
  top: 0;
  height: 100%;
  width: 100%;
  background: powderblue;
  z-index: 1;
}
.money-flow-tab-ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
.close-section {
  display: flex;
  justify-content: end;
}
.write-list-ul {
  list-style-type: none;
}
.write-list-ul li {
  margin: 5px 0;
}
form {
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
}
.gg-close {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;
}
.gg-close::after,
.gg-close::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px;
}
.gg-close::after {
  transform: rotate(-45deg);
}
.hidden {
  display: none;
}
</style>

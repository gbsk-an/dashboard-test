<template>
  <section class="section-table">
    <ul class="table">
      <li class="table-header">
        <div class="col-1 table-header_order p-mini">Номер заказа</div>
        <div class="col-2 table-header_prog p-mini">Программа</div>
        <div class="col-3 table-header_duration p-mini">Действует до</div>
        <div class="col-4 table-header_download p-mini">Скачать</div>
        <div class="col-5 table-header_manual p-mini">Руководство</div>
        <div class="col-6 table-header_status p-mini">Статус</div>
      </li>
      <li class="table-row order-info">
        <div class="col-1 table-row_order">112192</div>
        <div class="col-2 table-row_prog">(2) Детский сад: Питание</div>
        <div class="col-3 table-row_duration">08.09.2022</div>
        <div class="col-4 table-row_download">
          <button-download />
        </div>
        <div class="col-5 table-row_manual">
          <button-manual />
        </div>
        <div class="col-6 table-row_status">
          <p class="table-row_status-active">Активировано (1)</p>
          <p>Не активировано (1)</p>
        </div>
        <img
          @mouseover="tooltipOrderInfo = true"
          @mouseleave="tooltipOrderInfo = false"
          class="order-info_mark"
          src="@/assets/svg/ellipse-orange.svg"
        />
        <div v-show="tooltipOrderInfo" class="order-info_tooltip">
          <div class="triangle"></div>
          <div class="order-info_tooltip-text">
            <p class="p-mini">Продлите заказ</p>
          </div>
        </div>
      </li>
      <li class="table-row">
        <div class="col-1 table-row_order">112192</div>
        <div class="col-2 table-row_prog">(2) Детский сад: Питание</div>
        <div class="col-3 table-row_duration">08.09.2022</div>
        <div class="col-4 table-row_download">
          <button-download />
        </div>
        <div class="col-5 table-row_manual">
          <button-manual />
        </div>
        <div class="col-6 table-row_status">
          <p class="table-row_status-active">Активировано (1)</p>
          <p>Не активировано (1)</p>
        </div>
      </li>
      <li class="table-row">
        <div class="col-1 table-row_order">112192</div>
        <div class="col-2 table-row_prog">(2) Детский сад: Питание</div>
        <div class="col-3 table-row_duration">08.09.2022</div>
        <div class="col-4 table-row_download">
          <button-download />
        </div>
        <div class="col-5 table-row_manual">
          <button-manual />
        </div>
        <div class="col-6 table-row_status">
          <p class="table-row_status-active">Активировано (2)</p>
          <p>Не активировано (2)</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tooltipOrderInfo: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.section-table {
  width: 100%;
}

.table {
  display: flex;
  flex-direction: column;
  gap: 1.9em;
  & > li {
    display: flex;
    justify-content: space-between;
  }
  &-header {
    padding: 1.25em 1.25em 0;
    &_order {
      align-self: center;
    }
    &_prog {
      text-align: center;
      align-self: center;
    }
    &_duration {
      align-self: center;
    }
    &_download {
      text-align: center;
      align-self: center;
    }
    &_manual {
      text-align: center;
      align-self: center;
    }
    &_status {
      text-align: center;
      align-self: center;
    }
  }
  &-row {
    padding: 1.25em;
    border-radius: 10px;
    color: $white;
    box-shadow: $shadow1;
    &_order {
      align-self: center;
      color: $primaryGrey;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
    }
    &_prog {
      align-self: center;
      color: $primaryGrey;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
    }
    &_duration {
      align-self: center;
      color: $themeOrange;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
    &_download {
      text-align: center;
      align-self: center;
    }
    &_manual {
      text-align: center;
      align-self: center;
    }
    &_status {
      text-align: center;
      align-self: center;
      &-active {
        color: $themeGreen;
      }
    }
  }
  .col-1 {
    flex-basis: 12%;
  }
  .col-2 {
    flex-basis: 35%;
  }
  .col-3 {
    flex-basis: 15%;
  }
  .col-4 {
    flex-basis: 9%;
  }
  .col-5 {
    flex-basis: 9%;
  }
  .col-6 {
    flex-basis: 20%;
  }
}
.order-info {
  position: relative;
  &_mark {
    position: absolute;
    top: 0;
    left: 0;
  }
  &_tooltip {
    position: absolute;
    transform: translateY(-100%);
    z-index: 1000;
    display: flex;

    &-text {
      padding: 0.8em 1.5em;
      border-radius: 5px;
      background-color: $white;
      box-shadow: $shadow1;
    }
  }
}
.triangle {
  width: 0;
  height: 0;
  margin-top: 0.8em;
  border-top: 6px solid transparent;
  border-right: 10px solid #ffffff;
  border-bottom: 6px solid transparent;
}
</style>

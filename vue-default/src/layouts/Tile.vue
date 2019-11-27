<template>
    <a-layout-sider :width="width" theme="light">
        <a-row type="flex" justify="space-between" class="layout tile-layout" align="top">
            <a-col
                v-for="(item, idx) in getGrid"
                :key="idx"
                :span="24 / horizontal"
                :class="['grid', `${((idx + 1) % vertical) === 0 ? 'last' : ((idx + 1) % vertical) === (vertical - 1) ? 'middle' : '' }`]"
            >
                <slot name="tile" v-bind:index="idx"></slot>
            </a-col>
        </a-row>
    </a-layout-sider>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    vertical: {
      type: [String, Number],
      default: 2,
    },
    horizontal: {
      type: [String, Number],
      default: 1,
    },
    width: {
      type: [String, Number],
      default: '25%',
    },
    length: {
      type: Number,
    },
  },
  computed: {
    getGrid() {
      if (this.length) {
        return this.length;
      }
      return this.vertical * this.horizontal;
    },
  },
  methods: {
    getLast(idx) {
      if (idx === this.getGrid - this.horizontal || idx === this.getGrid - 1) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.tile-layout{
    flex-flow: column nowrap;
    align-items: stretch;

    .grid{
        align-self: stretch;
        &.middle {
            align-self: center;
        }
        &.last{
            margin-bottom:0;
            align-self: flex-end;
        }

        & > .ant-card{
            height: auto !important;
            & > .ant-card-head{
                padding:0 16px 0 24px;
            }

            & > .ant-card-body {
                padding: 14px 14px 12px;
                overflow-x: hidden;
                overflow-y: auto;
            }
        }

        &::after{
            content: '';
            display:block;
            clear: both;
        }
    }
}
</style>

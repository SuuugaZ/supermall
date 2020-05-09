<template>
    <div id="list">
      <div v-for="item in listData" :key="item.info" class="profileItem">
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    }
	}
</script>

<style>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .profileItem {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .icon svg {
    width: 18px;
    height: 18px;
  }

  .profileItem .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  #list .profileItem .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .profileItem:last-of-type .info {
    border-bottom: none;
  }
</style>

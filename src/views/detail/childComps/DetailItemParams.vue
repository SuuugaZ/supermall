<template>
	<div id="detail-item-params" v-if="Object.keys(itemParams).length !== 0 ">
		<table class="table-rule">
			<tr v-for='(item, index) in itemParams.rule' :key="index">
				<td v-for="index in item.length" :key="index">
					<!-- index =1,2 -->
					{{item[index-1]}}
				</td>
			</tr>
		</table>
		<table class="table-info">
			<tr v-for="(item, index) in itemParams.productInfo" :key="index">
				<!-- key value -->
				<td class="info-key">{{item.key}}</td>
				<td class="info-value">{{item.value}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'DetailItemParams',
	props: {
		itemParams: {
			type: Object,
			default() {
				return {}
			}
		}
	},
}
</script>

<style>
	#detail-item-params {
		padding: 10px 15px;
		font-size: 14px;
	}

	.table-rule {
		color: black;
		width: 100%;
		border-collapse: collapse;
		padding: 10px;
	}

	.table-rule tr {
		line-height: 40px;
    border-bottom: 1px solid rgba(100,100,100,.1);
	}

	.table-info {
		width: 100%;
		color: black;
		border-collapse: collapse;
	}

	.table-info tr {
		line-height: 40px;
    border-bottom: 1px solid rgba(100,100,100,.1);
	}

	.table-info .info-key {
		width: 80px;
	}

	.info-value {
		color: var(--color-high-text)
	}
</style>
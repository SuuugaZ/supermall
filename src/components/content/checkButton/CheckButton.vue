<template>
	<div class="check-button" :class="{check: isChecked}">
		<img src="../../../assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
export default {
	name: 'CheckButton',
	props: {
		isChecked: {
			type: Boolean,
			default() {
				return false
			}
		}
	}
}
</script>

<style>
	.check-button {
		border: 1px solid #333;	
		border-radius: 50%;
		width: 20px;
		height: 20px;
	}

	.check-button img {
		border-radius: 50%;
	}

	.check {
		border-color: var(--color-tint);
		background-color: var(--color-tint);
	}


</style>
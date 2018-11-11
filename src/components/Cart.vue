<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
			 class="alert alert-warning">
			Your cart is empty
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
					</tr>
				</thead>	
				<tbody>
					<tr v-for="product in products">
						<td>{{ product.title }}</td>
						<td>{{ product.price }}</td>
					</tr>
				</tbody>	
			</table>
			<button @click="onOrder"
					class="btn btn-success"
					>
				Order Now
			</button>
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('products', {
				productsAll: 'items'
			}),
			...mapGetters('cart', {
				productsInCart: 'products'
			}),
			products(){
				return this.productsAll.filter((elem) => {
					return this.productsInCart.indexOf(elem.id_product) !== -1;
				});
			},
			empty(){
				return this.products.length === 0;
			}
		},
		methods: {
			onOrder(){
				this.$router.push('/checkout');
			}
		}
	}
</script>
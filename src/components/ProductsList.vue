<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4" 
			     v-for="(product,index) in products"
			     :key="index"
			     >
			    <router-link tag="h3" :to="'/products/' + product.id_product">
				    <a>{{ product.title }}</a>
				</router-link>
				<div>{{ product.price }}</div>
				<button v-if="inCart.indexOf(product.id_product) === -1"
						@click="addToCart(product.id_product)"
						class="btn btn-primary"
						>
					Add to cart
				</button>
				<button v-else
						@click="removeFromCart(product.id_product)"
						class="btn btn-warning"
				>
					Remove to cart
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		data(){
			return {
			products:[
		{
			id_product: 10,
			title: 'Iphone 5',
			price: 20000
		},
		{
			id_product: 20,
			title: 'Iphone 6',
			price: 25000
		},
		{
			id_product: 30,
			title: 'Iphone 7',
			price: 30000
		}
	]
			} 
		},
		created(){
		
			
		},
		computed: {
			
			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>
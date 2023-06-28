<script>
export default {
      data() {
        return {
          products: [],
          cart: []
        }
      },
      mounted() {
        console.log("mount 됨");
        fetch("product.json")
        .then(res=>res.json())
        .then(res=>this.products = res)
      },
      methods: {
        addCart(name) {
            this.cart.push(name);
            alert("장바구니")
        },
      }
    }
</script>

<template>
  <div v-for="product in products" class="card" style="width: 18rem;">
    <img :src="product.img" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" v-text="product.name">Card title</h5>
      <p class="card-text" v-html="product.desc">Some quick example text to build on the card title and make up
        the bulk of the card's content.</p>

      <a href="#" v-show="product.cnt>0" @click.prevent="addCart(product.name)"
        class="btn btn-primary">장바구니담기</a>
    </div>
  </div>
</template>
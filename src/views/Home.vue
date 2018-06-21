<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1>Welcome to counter App</h1>
    <p>{{ this.countValue }}</p>
    <p>
        <a @click="this.add" href="#">Add</a> | <a @click="this.substract" href="#">Substract</a>
    </p>
    <p>
        <input type="text" ref="inputValueToAdd"> <a @click="this.addValue" href="#">Add Value</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    countValue: function() {
        return this.$store.state.countValue;
    }
  },
  methods: {
    add: function() {
        this.$store.dispatch('increment');
    },
    substract: function() {
        this.$store.dispatch('decrement');
    },
    addValue: function() {
        this.$store.dispatch('incrementByValue', { valueToAdd: this.getValueToAdd() });
    },
    getValueToAdd: function() {
        var inputText = this.$refs.inputValueToAdd.value.trim();
        if(inputText == '') 
            return 0;
        
        return parseInt(inputText, 10);
    },
  },
}
</script>

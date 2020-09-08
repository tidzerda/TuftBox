<template>
  <modal name="color-modal" @before-open="beforeOpen">
    <div class="modal-header">
      <slot name="header">
        {{name}}
      </slot>
    </div>
    <img :src='url'/>
  </modal>
</template>

<script>
  export default {
    data: function () {
        return {
            url: this.url,
            name: ''
        }
    },
    methods: {
        beforeOpen (event) {
            console.log('Before event: ' + JSON.stringify(event.params))
            this.url = event.params.url
            this.name = event.params.name
        }
    }
  }
</script>

<style scoped>
  .row {
      display: flex;
      flex: 1;
  }
  .col {
      display: flex;
      flex-direction: column;
  }
  .top {
      height: 80%;
      background-color: red;
  }
  .bottom {
      height: 20%;
  }
  modal {
    height: 100px;
    width: 100px;
    background-color: silver;
  }
</style>

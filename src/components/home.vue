<template>
  <div class='main'>
    <div class="row">
      <div class="col-space">
      </div>
      <div class="col">
        <img src="images/Hos_logo.png" @click="navigate">
        <div class="vspace"></div>
        <select name="boxes" id="boxes" v-model="value" style="background-color:#F4F4F4">
          <option value='0'>Tuft Box One</option>
          <option value="1">Tuft Box Two</option>
          <option value="2">Tuft Box Three</option>
          <option value="3">Tuft Box Four</option>
          <option value="4">Embellish</option>
        </select>
          <div class="vspace"></div>
          <div class="vspace"></div>
          <div class="line bld">Contact us.</div>
          <div class="line"></div>
          <div class="line bld">Americas:</div>
          <div class="line">3252 Dug Gap Rd.</div>
          <div class="line">Dalton, GA 30720</div>
          <div class="line">1.877.487.1208</div>
          <div class="line"></div>
          <div class="line bld">Europe:</div>
          <div class="line">Suite 10</div>
          <div class="line">Elgar House</div>
          <div class="line">Kidderminster, DY10 IJF</div>
          <div class="line">020 7604 5000</div>
          <div class="line">info@owhospitality.com</div>
          <div class="line"></div>
          <div class="line bld">Egypt:</div>
          <div class="line">8 El Shaheed Zakaria Khalil St.</div>
          <div class="line">Oriental Weavers Complex</div>
          <div class="line">P.O. Box 2489, Horreya, 11361</div>
          <div class="line">Heliopolis, Cairo, Egypt</div>
          <div class="line">0020222672121</div>
          <div class="line"></div>
          <div class="line bld">Dubai:</div>
          <div class="line">1107 Onyx Tower 2</div>
          <div class="line">The Greens</div>
          <div class="line">Sheikh Zayed Rd</div>
          <div class="line">Dubai UAE</div>
          <div class="line">+971 056 1398306</div>
          <div class="line">owhdubai@owhospitality.com</div>
      </div>
      <div class="col-space">
      </div>
      <div class="tbox-row">
        <TuftBox v-bind:tboxno="value"/>
      </div>
      <div class="selected">
      </div>
    </div>
  </div>
</template>
@Component({
  components: {
    TuftBox
  }
})
<script lang='ts'>
  import TuftBox from './TuftBox.vue'
  export default {
    name: 'home',
    components: {
      TuftBox
    },
    data () {
      return {
        value: '0'
      }
    },
    methods: {
        navigate () {
            window.location.href = 'http://www.owhospitality.com/'
        }
    }
  }

</script>

<style scoped>
.vspace {
  height:30px;
}
.tbox-row {
  flex:80%;
  display:flex;
  justify-content: center
}
img:hover {
  cursor:pointer
}
.bdr {
  border: 1px solid red;
}
.row {
  display: flex;
  flex:1;
}
.selected {
  width: 20%;
}
.col-space {
  display:flex;
  flex-direction: column;
  width: 40px;
}
.col {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  align-items:flex-start;
}
.line {
  height:20px;
  align-self: start;
  font-family: Calabri;
  font-size: 14px;
}
.bld {
  font-weight: bold;
}
img {
  padding-left: 5px;
  padding-right: 5px;
}
.left {
  width: 250px;
  background-color: #F4F4F4;
}
select {
  width: 100%;
  font-family: Calibri;
  font-size: 14px;
  font-weight: bold;
}
.vspace {
  height: 20px;
}
select:hover {
    cursor:pointer
}
</style>

<template>
  <div class='row main'>
    <div class='col lh'>
      <div v-if="tboxno < 4">
        <div class='row' v-for="row of getRowIndexes()" :key="row">
          <div v-for="col of getColIndexes()" :key="col" :set="t = a[row][col + (12 * tboxno)]">
            <div class="cell" v-if="!t.url.includes('blank')">
              <img :src='t.url'/>
              <div class="row wide">
                <div class='lbl'>{{t.name}}</div>
                <div class="wide"></div>
                <input type='checkbox' :checked='t.selected' v-on:click="onAClick(a[row][col + (12 * tboxno)])">
              </div>
            </div>
            <div v-else class="cell"></div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class='row' v-for="row of getERowIndexes()" :key="row">
          <div v-for="col of getEColIndexes()" :key="col" :set="t = a[row + 10][col]">
            <div class="cell">
              <img :src='t.url' v-on:click="onBClick(a[row + 10][col])"/>
              <div class="row wide">
                <div class='lbl'>{{t.name}}</div>
                <div class="wide"></div>
              <input type='checkbox' :checked='a[row + 10][col].selected' v-on:click="onAClick(a[row + 10][col])">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='col rh'>
      <div v-for="ti of getSelected()" :key="ti.id">
        <img :src="ti.url"/>
        {{ti.name}}
        <!--<input class='bdr' id="t.id" type='checkbox' v-model="t.selected" v-on:click="onClick(row, col, tboxno)"/>-->
        <input class='bdr' type='checkbox' :checked="t.selected" v-on:click="onAClick(ti)"/>
      </div>
    </div>
    <modal name="color-modal" :width='200' :height='200'></modal>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TuftItem, tuftService } from './../components/tuft.service'
import Modal from './Modal.vue'
@Component({
  components: {
    Modal
  }
})

export default class TuftBox extends Vue {
  private a: TuftItem[][];
  private b: Map<string, TuftItem>;
  constructor () {
    super()
    this.a = new Array<Array<TuftItem>>()
    this.b = new Map<string, TuftItem>()
    for (let n = 0; n < 10; n++) {
      const idx = tuftService.getIdx(n)
      const row: TuftItem[] = tuftService.getTuftRow(idx)
      row.forEach(t => {
        row.push(t)
      })
      this.a.push(row)
    }

    const allt: TuftItem[] = tuftService.getTuftRow('ZZ')
    let idx = 0
    for (let rc = 0; rc < 12; rc++) {
      let nrow: TuftItem[] = []
      for (let k = 0; k < 6; k++) {
        nrow = nrow.concat(allt[idx++])
      }
      this.a.push(nrow)
    }
  }

  @Prop() private tboxno!: number;
  getRowIndexes (): number[] {
    const num: number[] = []
    for (let n = 0; n < 10; n++) {
      num.push(n)
    }
    return num
  }

  getColIndexes (): number[] {
    const num: number[] = []
    for (let n = 0; n < 12; n++) {
      num.push(n)
    }
    return num
  }

  getERowIndexes (): number[] {
    const num: number[] = []
    for (let n = 0; n < 12; n++) {
      num.push(n)
    }
    return num
  }

  getEColIndexes (): number[] {
    const num: number[] = []
    for (let n = 0; n < 6; n++) {
      num.push(n)
    }
    return num
  }

  onAClick (t: TuftItem) {
    console.log('Item: ' + JSON.stringify(t))
    t.selected = !t.selected
    if (this.b.has(t.name)) {
      this.b.delete(t.name)
    } else {
      this.b.set(t.name, t)
    }
    // const ss: TuftItem = new TuftItem(555, 'name', 'url', false)
    // this.b.set('mouse', ss)
  }

  getSelected () {
    const res: TuftItem[] = []
    this.b.forEach(val => {
      res.push(val)
    })
    return res
  }

  onBClick (t: TuftItem) {
    this.$modal.show('color-modal', { name: t.name, url: 'images/large/' + t.name + '.jpg' })
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.lbl {
  padding-left: 20px;
  font-family: Calibri;
}
.header {
  margin-left: 5px;
}
.row {
  display: flex;
  width: 100%;
}
.sel-item {
  align-self: center;
}
.col {
  display: flex;
  flex-direction: column;
}
.lh {
  flex: 65%;
}
.rh {
  flex: 1
}.cell {
  width: 80px;
  margin: 2px;
}
.blank {
  width: 60px;
}
.wide {
  flex:1;
}
img {
  max-width:75px;
  height:auto;
}
.bdr {
  border:1px solid red;
}
.wide {
  flex: 1;
}
input {
  align-self: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  padding: 5px;
}
.blank {
  width:60px;
}
modal {
  width: 200px;
  height: 200px;
  background-color: hotpink;
}
</style>

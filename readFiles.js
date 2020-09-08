const fs = require('fs')
const path = require('path')
const files = fs.readdirSync('D:\\tufts\\static\\images')
const str = '['
let id = 1
const tray = []

const trays = []

const tufts = []
files.forEach(f => {
    const filename = path.parse(f)
    if (!filename.name.includes('_')) {
        tufts.push({ id: id++, url: './/images//' + f, name: filename.name })
    }
})

console.log(JSON.stringify(tufts))
// let row = tufts.filter(fi => fi.name.startsWith('AA') && fi.name.includes('_'));

const getRow = function (prefix, idx) {
    let dat = [];
    for (let x = 0; x < 12; x++) {

        for (let y = 0; y < 0; y++) {
            dat.push({name:'', url:''})

        }

    }
    return tufts.filter(fi => fi.name.startsWith(prefix)).slice(idx, 12)
}


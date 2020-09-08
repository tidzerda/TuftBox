import { tuftsData } from './tufts.data'
export class TuftItem {
    constructor (id: number, name: string, url: string, selected: boolean) {
        this.id = id
        this.name = name
        this.url = url
        this.selected = selected
    }

    id: number;
    name: string;
    url: string;
    selected?: boolean;
}
export class TuftRow {
    private row: TuftItem[]
    constructor () {
        this.row = []
    }

    addTuftItem (ti: TuftItem) {
        this.row.push(ti)
    }
}
export class Tufts {
    private rows: TuftRow[]
    constructor () {
        this.rows = []
    }

    addRow (row: TuftRow) {
        this.rows.push(row)
    }

    getRow (idx: number) {
        return this.rows[idx]
    }
}
class TuftService {
    getAllTufts (): TuftItem[] {
        return tuftsData.getData()
    }

    getTuftRow (prefix: string): TuftItem[] {
        const res: TuftItem[] = []
        tuftsData.getData().filter(fi => fi.name.startsWith(prefix)).map(i => {
            res.push(i)
        })
        return res
    }

    getIdx (idx: number): string {
        let res = ''
        switch (idx) {
            case 0: {
                res = 'AA'
                break
            }
            case 1: {
                res = 'BB'
                break
            }
            case 2: {
                res = 'CC'
                break
            }
            case 3: {
                res = 'DD'
                break
            }
            case 4: {
                res = 'EE'
                break
            }
            case 5: {
                res = 'FF'
                break
            }
            case 6: {
                res = 'GG'
                break
            }
            case 7: {
                res = 'HH'
                break
            }
            case 8: {
                res = 'II'
                break
            }
            case 9: {
                res = 'JJ'
                break
            }
        }
        return res
    }
}

export const tuftService = new TuftService()

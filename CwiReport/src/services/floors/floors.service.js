import { BaseService } from '../base/base.service'

export class FloorsService extends BaseService {
    constructor() {
        super("http://5c9f66fe1afd060014668747.mockapi.io/cwi/report")
    }

    getFloors() {
        return super.get("/floors")
    }

}
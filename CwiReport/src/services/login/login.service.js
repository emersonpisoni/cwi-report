import { BaseService } from '../base/base.service'

export class LoginService extends BaseService {
    constructor() {
        super("http://5c9f66fe1afd060014668747.mockapi.io/cwi/report")
    }

    getUsers() {
        return super.get("/users")
    }

    getReports() {
        return super.get("/reports")
    }
}
import { BaseService } from '../base/base.service'

export class ReportsService extends BaseService {

    constructor() {
        super("http://5c9f66fe1afd060014668747.mockapi.io/cwi/report")
    }

    getAll() {
        return super.get("/reports")
    }

    getTodayReports() {
        return this.getAll().then(result => {
            let todayReports = result.filter((report) => {
                return report.today === 'true';
            })
            return todayReports
        }).catch(err => alert(err))
    }

    getMyReports() {
        return this.getAll().then(result => {
            let myReports = result.filter((report) => {
                return report.owner === 'Natália Lanes';
            })
            return myReports
        }).catch(err => alert(err))
    }

    getUnsolvedReports() {
        return this.getAll().then(result => {
            let myReports = result.filter((report) => {
                return report.resolved === 'false';
            })
            return myReports
        }).catch(err => alert(err))
    }

    getUnderAnalysisReports() {
        return this.getAll().then(result => {
            let underAnalysis = result.filter((report) => {
                return report.underAnalysis === 'true';
            })
            return underAnalysis
        }).catch(err => alert(err))
    }
}
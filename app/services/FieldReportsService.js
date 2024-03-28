import { AppState } from "../AppState.js";
import { FieldReport } from "../models/FieldReport.js"
import { loadState, saveState } from "../utils/Store.js";

class FieldReportsService {

  createFieldReport(fieldReportFormData) {
    const newFieldReport = new FieldReport(fieldReportFormData)
    // console.log('Fancy new report', newFieldReport);
    AppState.fieldReports.push(newFieldReport)
    // console.log('Field reports in appstate', AppState.fieldReports);
    this.saveFieldReports()
  }

  setActiveFieldReport(reportId) {
    const foundReport = AppState.fieldReports.find(fieldReport => fieldReport.id == reportId)
    console.log('found a report', foundReport);
    AppState.activeFieldReport = foundReport
  }

  saveFieldReports() {
    saveState('fieldReports', AppState.fieldReports)
  }

  loadFieldReports() {
    const fieldReportsFromLocalStorage = loadState('fieldReports', [FieldReport])
    AppState.fieldReports = fieldReportsFromLocalStorage
  }
}

export const fieldReportsService = new FieldReportsService()
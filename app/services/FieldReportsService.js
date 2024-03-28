import { AppState } from "../AppState.js";
import { FieldReport } from "../models/FieldReport.js"

class FieldReportsService {
  createFieldReport(fieldReportFormData) {
    const newFieldReport = new FieldReport(fieldReportFormData)
    console.log('Fancy new report', newFieldReport);
    AppState.fieldReports.push(newFieldReport)
    console.log('Field reports in appstate', AppState.fieldReports);
  }
}

export const fieldReportsService = new FieldReportsService()
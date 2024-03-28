import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class FieldReportsController {
  constructor() {
    console.log('Field reports controller loaded!');
    this.drawFieldReports()
  }

  drawFieldReports() {
    const fieldReports = AppState.fieldReports
    let fieldReportsContent = ''
    fieldReports.forEach(fieldReport => fieldReportsContent += fieldReport.ListTemplate)
    setHTML('fieldReportList', fieldReportsContent)
  }
}
import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
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

  createFieldReport() {
    try {
      event.preventDefault()
      console.log('Creating field report');
      const form = event.target
      const fieldReportFormData = getFormData(form)
      console.log('here is your data', fieldReportFormData);

    } catch (error) {
      console.error('[CREATING FIELD REPORT]', error)
      window.alert(error.message)
    }
  }
}
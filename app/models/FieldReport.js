import { generateId } from "../utils/GenerateId.js"

export class FieldReport {
  constructor(data) {
    // FIXME this might break later
    this.id = generateId()
    this.title = data.title
    this.threatLevel = data.threatLevel
    this.body = data.body || ''
    this.author = data.author
    this.entryDate = new Date()
    this.securityLevel = data.securityLevel
  }

  get ListTemplate() {
    return `
    <div class="col-12">
      <div class="d-flex gap-4 fs-3">
        <p>${this.title}</p>
        <p>${this.securityLevel}</p>
        <p>${this.entryDate}</p>
      </div>
    </div>
    `
  }
}
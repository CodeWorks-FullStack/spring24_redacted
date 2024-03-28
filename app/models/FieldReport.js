import { generateId } from "../utils/GenerateId.js"

export class FieldReport {
  constructor(data) {
    // FIXME this might break later
    this.id = generateId()
    this.title = data.title
    this.threatLevel = data.threatLevel
    this.body = data.body || ''
    this.author = data.author
    // FIXME this needs to save!
    this.createdAt = new Date()
    this.lastViewed = new Date()
    this.securityLevel = data.securityLevel
  }

  get ListTemplate() {
    return `
    <div onclick="app.FieldReportsController.setActiveFieldReport('${this.id}')" class="col-12 selectable" role="button">
      <div class="d-flex gap-4 fs-3">
        <p>${this.title}</p>
        <p>${this.securityLevel}</p>
        <p>${this.CreatedDate}</p>
      </div>
    </div>
    `
  }

  get ActiveDetailsTemplate() {
    return `
    <div class="col-8">
      <h1>${this.title}</h1>
      <h2>Reported by ${this.author} on ${this.CreatedDate} ${this.CreatedTime}</h2>
      <h2>Last viewed ${this.LastViewedDateAndTime}</h2>
      <h2 style="color: ${this.threatLevel};">${this.securityLevel}</h2>
      <div>
        <label for="reportBody">Report Body</label>
        <textarea name="body" id="reportBody">
          ${this.body}
        </textarea>
      </div>
    </div>
    `
  }

  get CreatedDate() {
    return this.createdAt.toLocaleDateString()
  }

  get CreatedTime() {
    return this.createdAt.toLocaleTimeString()
  }

  get LastViewedDateAndTime() {
    return this.lastViewed.toLocaleString()
  }
}
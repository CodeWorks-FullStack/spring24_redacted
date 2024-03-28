import { FieldReport } from './models/FieldReport.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  fieldReports = [
    new FieldReport({
      title: 'Bigfoot',
      threatLevel: '#ff0022',
      author: 'Jeremy',
      securityLevel: 'Midnight'
    }),
    new FieldReport({
      title: 'Dolphins',
      threatLevel: '#008eff',
      author: 'Mick',
      securityLevel: 'High Noon'
    }),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())
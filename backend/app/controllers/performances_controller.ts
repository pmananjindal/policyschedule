// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'

export default class PerformancesController {
  public async getData({ request, response }: HttpContext) {
    // const data1 = [
    //   { date: 'Nov 21', readIOPS: 21200, writeIOPS: 0 },
    //   { date: 'Nov 22', readIOPS: 23, writeIOPS: 21500 },
    //   { date: 'Nov 23', readIOPS: 22000, writeIOPS: 230 },
    //   { date: 'Nov 24', readIOPS: 22300, writeIOPS: 22000 },
    //   { date: 'Nov 25', readIOPS: 21800, writeIOPS: 230 },
    //   { date: 'Nov 26', readIOPS: 22500, writeIOPS: 21800 },
    // ]
    return 'Hello World'
  }
}

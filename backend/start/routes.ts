/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PerformancesController from '#controllers/performances_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/getData', async () => {
  console.log('Hello')
  const data1 = [
    { date: 'Nov 21', readIOPS: 21200, writeIOPS: 0 },
    { date: 'Nov 22', readIOPS: 23, writeIOPS: 21500 },
    { date: 'Nov 23', readIOPS: 22000, writeIOPS: 230 },
    { date: 'Nov 24', readIOPS: 22300, writeIOPS: 22000 },
    { date: 'Nov 25', readIOPS: 21800, writeIOPS: 230 },
    { date: 'Nov 26', readIOPS: 22500, writeIOPS: 21800 },
  ]
  const data2 = [
    { date: 'Nov 21', readThroughput: 10.5, writeThroughput: 8.3 },
    { date: 'Nov 22', readThroughput: 11.0, writeThroughput: 9.1 },
    { date: 'Nov 23', readThroughput: 12.2, writeThroughput: 10.4 },
    { date: 'Nov 24', readThroughput: 13.1, writeThroughput: 11.7 },
    { date: 'Nov 25', readThroughput: 14.0, writeThroughput: 12.5 },
    { date: 'Nov 26', readThroughput: 13.8, writeThroughput: 11.9 },
  ]
  const obj = {
    iopsData: data1,
    throughputData: data2,
  }
  return obj
})
router.post('/savePolicySchedule', async ({ request }) => {
  const obj = {
    isSuccess: true,
    message: 'Policy Saved Successfully',
    data: request.body(),
  }
  return obj
})

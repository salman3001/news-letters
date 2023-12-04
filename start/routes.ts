/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import '../routes/authRoutes'
import '../routes/helpcenterRoutes'
import '../routes/adminRoutes'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})

Route.get('/admin/dashboard', async ({ inertia }) => {
  return inertia.render('admin/dashboard')
}).as('admin.dashboard')

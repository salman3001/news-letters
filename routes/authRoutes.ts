import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('login', 'AuthController.adminLoginForm').as('admin.login.form')
  Route.post('login', 'AuthController.adminLogin').as('admin.login')
  Route.get('logout', 'AuthController.adminLogout').as('admin.logout')
})
  .middleware('guest')
  .prefix('admin')

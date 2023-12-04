import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('login', 'AuthController.adminLoginForm').as('admin.login.form')
  Route.post('login', 'AuthController.adminLogin').as('admin.login')
})
  .middleware('guest:webAdmin')
  .prefix('admin')

Route.get('admin/logout', 'AuthController.adminLogout').as('admin.logout')

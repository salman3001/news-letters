import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/admin-users/unique-field', 'adminUser/AdminUsersController.uniqueField')
  Route.get('admin-users/change-role/:id', 'adminUser/AdminUsersController.changeRole')
  Route.get('admin-users/ban/:id', 'adminUser/AdminUsersController.banUser')
  Route.get('admin-users/query', 'adminUser/AdminUsersController.banUser').as('admin_users.query')
  Route.resource('admin-users', 'adminUser/AdminUsersController')
  Route.resource('roles', 'adminUser/RolesController')
  Route.resource('permissions', 'adminUser/PermissionsController')
})
  .prefix('admin')
  .middleware('auth:webAdmin')

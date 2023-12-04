/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  flash: (ctx) => {
    return ctx.session.flashMessages.all()
  },
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))

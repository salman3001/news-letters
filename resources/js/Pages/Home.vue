<script setup>
import { Link } from '@inertiajs/vue3'
import { stardust } from '@eidellev/adonis-stardust/client';

</script>

<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
  </head>

  <body>
    <div
      style="display: flex;flex-direction: column; width: 100%;min-height:100vh;justify-content: center;align-items: center;">
      <h1 class="title text-h6">Public Pages are under maintenance</h1>
      <Link :href="stardust.route('admin.login.form')" style="font-size: larger">Checkout Admin Dashboard</Link>
    </div>
  </body>

  </html>
</template>

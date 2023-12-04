<script setup >
import BrandLogo from '../../components/BrandLogo.vue';
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { stardust } from '@eidellev/adonis-stardust/client';

const isPwd = ref(true);

const props = defineProps({
  flash: Object
})

const form = useForm({
  rememberMe: false,
  email: '',
  password: '',
});


const login = async () => {
  form.post(stardust.route('admin.login'))
};

console.log(props);

</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="row items-center justify-evenly" style="
          background-image: url('/images/login-bg.png');
          background-repeat: no-repeat;
          background-position: center;
        ">
        <div class="q-pa-md">
          <q-card class="my-card q-pa-md" style="min-width: 400px; border-radius: 15px">
            <q-card-section>
              <div class="row justify-center">
                <BrandLogo />
              </div>
              <div class="text-h5 text-weight-bold text-center">
                Welcome Back!
              </div>
              <div class="text-body2 text-grey-8 text-center">
                Please enter your crendtials to login
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <form class="q-gutter-y-md" @submit.prevent="login">
                <p v-if="flash?.message" class="text-red-5">{{ flash.message }}</p>
                <div>
                  <label>Email</label>
                  <q-input outlined v-model="form.email" dense />
                </div>
                <div>
                  <label>Password</label>
                  <q-input dense v-model="form.password" outlined :type="isPwd ? 'password' : 'text'">
                    <template v-slot:append>
                      <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                        @click="isPwd = !isPwd" />
                    </template>
                  </q-input>
                  <div class="row items-center justify-between">
                    <q-checkbox v-model="form.rememberMe" label="Remember Me" />
                    <a style="text-decoration: none; color: black">Forgot
                      Password</a>
                  </div>
                </div>
                <q-btn type="submit" color="primary" style="width: 100%">Submit</q-btn>
              </form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<template>
  <!-- <>react fragment</> -->
  <!-- <template>vue fragment</template> -->
  <template v-if="true">
    <div>{{store.msg}}</div>
  </template>
  <template v-if="true">
    <div>{{store.getMsg}}</div>
    <!-- <pre>{{jsonString}}</pre> -->
    <pre>❓ {{store.msg}}</pre>
    <span v-pre>{{ this will not be compiled }}❓ {{store.msg}}</span>
    <button @click="updateMsg">Pinia 🍍</button>
  </template>
  <!-- <a href="https://github.com/posva/pinia">
    <svg class="logo" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
        fill="currentColor"
      />
    </svg>
    GitHub
  </a> -->
  <div>
    <svg class="pinia-container" width="408" height="520" viewBox="0 0 408 520" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2c7144b8="" data-v-7ba5bd90="">
      <g class="leaves" data-v-2c7144b8=""><path fill-rule="evenodd" clip-rule="evenodd" d="M178.604 253.684C210.877 222.936 201.029 184.907 171.8 138.825C142.571 92.7423 83.7343 76.3478 72.7579 86.8057C61.7814 97.2637 59.3484 172.034 88.577 218.116C117.806 264.198 146.331 284.432 178.604 253.684Z" fill="url(#paint0_linear)" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M206.508 257.94C230.384 295.582 262.303 281.819 301.811 244.176C341.32 206.534 357.702 134.428 349.582 121.625C341.462 108.822 279.752 109.464 240.243 147.107C200.734 184.749 182.633 220.298 206.508 257.94Z" fill="url(#paint1_linear)" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M193.454 237.231C233.099 242.099 248.689 205.474 255.958 146.272C263.227 87.0698 233.262 24.497 219.778 22.8414C206.295 21.1858 160.995 74.5172 153.726 133.719C146.457 192.922 153.81 232.364 193.454 237.231Z" fill="url(#paint2_linear)" data-v-2c7144b8=""></path></g><g class="body" data-v-2c7144b8=""><path fill-rule="evenodd" clip-rule="evenodd" d="M192.63 519.038C275.748 519.038 343.156 494.893 343.156 385.393C343.156 275.893 275.748 186.038 192.63 186.038C109.511 186.038 42.156 275.893 42.156 385.393C42.156 494.893 109.511 519.038 192.63 519.038Z" fill="url(#paint3_linear)" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M310.811 401.034C308.621 398.93 305.139 398.999 303.034 401.189L229.034 478.189C226.93 480.379 226.999 483.861 229.189 485.966C231.379 488.07 234.861 488.001 236.966 485.811L310.966 408.811C313.07 406.621 313.001 403.139 310.811 401.034Z" fill="#ECB732" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M239.233 409.993C237.02 412.073 236.912 415.554 238.993 417.767L285.993 467.767C288.073 469.98 291.554 470.088 293.767 468.007C295.98 465.927 296.088 462.446 294.007 460.233L247.007 410.233C244.927 408.02 241.446 407.912 239.233 409.993Z" fill="#ECB732" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M225.889 225.111C228.037 227.259 228.037 230.741 225.889 232.889L176.889 281.889C174.741 284.037 171.259 284.037 169.111 281.889C166.963 279.741 166.963 276.259 169.111 274.111L218.111 225.111C220.259 222.963 223.741 222.963 225.889 225.111Z" fill="#FFC73B" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M215.889 281.889C218.037 279.741 218.037 276.259 215.889 274.111L166.889 225.111C164.741 222.963 161.259 222.963 159.111 225.111C156.963 227.259 156.963 230.741 159.111 232.889L208.111 281.889C210.259 284.037 213.741 284.037 215.889 281.889Z" fill="#FFC73B" data-v-2c7144b8=""></path><g class="eye-left" data-v-2c7144b8=""><path d="M111.34 359.471C123.125 360.918 133.225 357.648 133.898 352.166C134.571 346.684 125.563 341.067 113.777 339.62C101.992 338.173 91.8918 341.444 91.2187 346.925C90.5456 352.407 99.5541 358.024 111.34 359.471Z" fill="#EAADCC" data-v-2c7144b8=""></path><path d="M150.023 321.156C149.513 335.783 137.241 347.226 122.615 346.715C107.988 346.205 96.545 333.933 97.0557 319.307C97.5665 304.68 109.838 293.237 124.464 293.748C139.091 294.258 150.534 306.53 150.023 321.156Z" fill="white" data-v-2c7144b8=""></path><g class="eyeball" data-v-2c7144b8=""><path d="M141.046 320.343C140.719 329.726 132.847 337.067 123.463 336.739C114.08 336.411 106.739 328.539 107.067 319.156C107.395 309.773 115.267 302.432 124.65 302.76C134.033 303.087 141.374 310.959 141.046 320.343Z" fill="black" data-v-2c7144b8=""></path><path d="M125.161 316.786C125.026 320.65 121.784 323.672 117.921 323.537C114.057 323.403 111.034 320.161 111.169 316.297C111.304 312.434 114.546 309.411 118.409 309.546C122.273 309.681 125.296 312.922 125.161 316.786Z" fill="white" data-v-2c7144b8=""></path></g></g><g class="eye-right" data-v-2c7144b8=""><path d="M263.558 365.546C275.433 365.546 285.058 361.069 285.058 355.546C285.058 350.023 275.433 345.546 263.558 345.546C251.684 345.546 242.058 350.023 242.058 355.546C242.058 361.069 251.684 365.546 263.558 365.546Z" fill="#EAADCC" data-v-2c7144b8=""></path><path d="M279.944 325.693C279.433 340.32 267.162 351.763 252.536 351.252C237.909 350.742 226.466 338.47 226.977 323.844C227.487 309.217 239.759 297.774 254.385 298.285C269.012 298.795 280.455 311.067 279.944 325.693Z" fill="white" data-v-2c7144b8=""></path><g class="eyeball" data-v-2c7144b8=""><path d="M270.967 324.879C270.64 334.263 262.767 341.604 253.384 341.276C244.001 340.948 236.66 333.076 236.988 323.693C237.316 314.31 245.188 306.969 254.571 307.297C263.954 307.624 271.295 315.496 270.967 324.879Z" fill="black" data-v-2c7144b8=""></path><path d="M255.082 321.323C254.947 325.187 251.705 328.209 247.842 328.074C243.978 327.939 240.955 324.698 241.09 320.834C241.225 316.971 244.467 313.948 248.33 314.083C252.194 314.218 255.217 317.459 255.082 321.323Z" fill="white" data-v-2c7144b8=""></path></g></g><path fill-rule="evenodd" clip-rule="evenodd" d="M70.1889 401.034C72.379 398.93 75.8608 398.999 77.9656 401.189L151.966 478.189C154.07 480.379 154.001 483.861 151.811 485.966C149.621 488.07 146.139 488.001 144.034 485.811L70.0344 408.811C67.9296 406.621 67.9988 403.139 70.1889 401.034Z" fill="#ECB732" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M141.767 409.993C143.98 412.073 144.088 415.554 142.007 417.767L95.0074 467.767C92.927 469.98 89.4462 470.088 87.233 468.007C85.0197 465.927 84.9121 462.446 86.9925 460.233L133.993 410.233C136.073 408.02 139.554 407.912 141.767 409.993Z" fill="#ECB732" data-v-2c7144b8=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M163.323 337.658C161.949 338.584 161.586 340.448 162.512 341.822C167.176 348.743 174.321 352.632 183.51 353.682C192.767 354.74 201.051 352.375 208.164 346.594C209.45 345.549 209.645 343.66 208.6 342.374C207.555 341.088 205.666 340.893 204.38 341.938C198.552 346.675 191.887 348.6 184.191 347.721C176.425 346.834 171.003 343.686 167.488 338.469C166.562 337.095 164.697 336.732 163.323 337.658Z" fill="black" data-v-2c7144b8=""></path>
    </g>
      <defs data-v-2c7144b8="">
        <linearGradient id="paint0_linear" x1="68.5172" y1="90.0774" x2="85.0979" y2="170.543" gradientUnits="userSpaceOnUse" data-v-2c7144b8=""><stop stop-color="#52CE63" data-v-2c7144b8=""></stop><stop offset="1" stop-color="#51A256" data-v-2c7144b8=""></stop></linearGradient>
        <linearGradient id="paint1_linear" x1="359.841" y1="134.702" x2="279.366" y2="151.265" gradientUnits="userSpaceOnUse" data-v-2c7144b8=""><stop stop-color="#52CE63" data-v-2c7144b8=""></stop><stop offset="1" stop-color="#51A256" data-v-2c7144b8=""></stop></linearGradient>
        <linearGradient id="paint2_linear" x1="219.235" y1="22.7747" x2="203.754" y2="148.86" gradientUnits="userSpaceOnUse" data-v-2c7144b8=""><stop stop-color="#8AE99C" data-v-2c7144b8=""></stop><stop offset="1" stop-color="#52CE63" data-v-2c7144b8=""></stop></linearGradient>
        <linearGradient id="paint3_linear" x1="196.803" y1="244.222" x2="171.815" y2="518.625" gradientUnits="userSpaceOnUse" data-v-2c7144b8=""><stop stop-color="#FFE56C" data-v-2c7144b8=""></stop><stop offset="1" stop-color="#FFC63A" data-v-2c7144b8=""></stop></linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { appStore } from "@/store/index";
// import { appStore } from "../store/index";
// import { useAppStore } from "../store/index";
import { useAppStore } from "@/store/index";
// 实例化 store
// const store = appStore();
const store = useAppStore();
const log = console.log;
log(`store =`, store);

// const props = defineProps({
//   id: Number,
//   name: String,
// });

defineProps<{
  id: number,
  name: string,
}>();


// const remoteUrl = `https://cdn.xgqfrms.xyz/json/cat.json`;
// const localUrl = `@/json/cat.json`;

// dynamic import JSON default ❌ 不支持 var 开头 path
// const remoteJson = import(remoteUrl).default;
// const localJson = import(localUrl).default;
// console.log('remoteJson =', remoteJson);
// console.log('localJson =', localJson);

// dynamic import JSON default ✅
const fetchJSON = async () => {
  // local promise default ✅
  const localJson = (await import('@/json/cat.json')).default;
  console.log('localJson =', localJson);
  // ❌
  const remoteJson = await import('https://cdn.xgqfrms.xyz/json/cat.json').then(res => {
    console.log('res =', res);
    return res.json();
  });
  // console.log('remoteJson =', remoteJson);
};
fetchJSON();



let jsonString = ref('');
const url = `https://cdn.xgqfrms.xyz/json/cat.json`;

// async await
store.fetchData(url).then(json => {
  // console.log('fetchData =', json);
  jsonString.value = JSON.stringify(json, null, 4);
  // console.log('jsonString.value =', jsonString.value);
});

// const promise = store.fetchData(url);
// promise.then(json => {
//   console.log('fetchData =', json);
// });

const updateMsg = () => {
  store.$patch({
    msg: "Hello Pinia 🍍!",
  });
  // store.updateMsg('Pinia 🍍');
}
</script>

<style scoped lang="scss">
.className {
  color: #000;
  background: #fff;
}
</style>

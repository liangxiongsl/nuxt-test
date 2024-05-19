<template>
  <div>
    <!--<link rel="stylesheet" type="text/css" href="">-->
    <section>
      <p id="p" class="test m-32">
        听声辩位功夫
        what are you doing?
      </p>
      <p>三位立体混元劲</p>
      <img src="@/public/favicon.ico" alt="img">
      <el-select v-model="sel" @change="on_change">
        <el-option v-for="v in font" :key="v" :value="v" :label="v" :style="{'font-family': v}" />
      </el-select>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'nuxt/app'

const sel = ref('')
const font = ['"Jersey 25 Charted", sans-serif', 'Impact,Charcoal,sans-serif', '"Jacquard 12"', 'Danfo', 'Poetsen One', 'Noto Sans Simplified Chinese', 'Ma Shan Zheng', 'Liu Jian Mao Cao']

// eslint-disable-next-line camelcase
const on_change = (val) => {
  document.body.style.fontFamily = val
}
</script>

<style scoped>
</style>

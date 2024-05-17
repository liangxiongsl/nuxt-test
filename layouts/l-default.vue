<script setup>
</script>

<template>
  <div>
    <el-menu default-active="" mode="horizontal" router>
      <el-menu-item index="/home">
        home
      </el-menu-item>
      <el-menu-item index="/home">
        my
      </el-menu-item>
      <el-sub-menu index="/home">
        <template #title>
          explore
        </template>
        <el-menu-item index="/home">
          recommend
        </el-menu-item>
        <el-menu-item index="/home">
          rank
        </el-menu-item>
        <el-menu-item index="/home">
          songs
        </el-menu-item>
        <el-menu-item index="/home">
          artist
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    <slot />
  </div>
</template>

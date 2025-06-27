<script setup lang="ts">
import logoUrl from '~/assets/logo.svg'
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
    <!-- Logo 区域 -->
    <div class="mb-8 animate-bounce">
      <img :src="logoUrl" alt="Vue 3 Template Logo" class="w-32 h-32 drop-shadow-lg">
    </div>

    <!-- 标题区域 -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
        Vue 3 现代化模板
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
        一个现代化的开发起点
      </p>
    </div>

    <!-- 特性展示 -->
    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
      <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div class="text-2xl mb-2">
          🚀
        </div>
        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
          Vue 3
        </div>
      </div>
      <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div class="text-2xl mb-2">
          🔥
        </div>
        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
          TypeScript
        </div>
      </div>
      <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div class="text-2xl mb-2">
          ⚡
        </div>
        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
          Vite
        </div>
      </div>
      <div class="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div class="text-2xl mb-2">
          🎨
        </div>
        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
          UnoCSS
        </div>
      </div>
    </div>

    <!-- 深色模式切换按钮 -->
    <button
      class="fixed top-4 right-4 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
      @click="toggleDark()"
    >
      <div class="text-xl">
        {{ isDark ? '☀️' : '🌙' }}
      </div>
    </button>
  </div>
</template>

<template>
    <div class="app bg-slate-100 dark:bg-slate-950">
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
        <PAlertDialog/>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
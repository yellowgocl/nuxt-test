<template>
  <div class='navbar relative flex items-center justify-center w-screen bg-cover h-navbar md:h-navbar-md lg:h-navbar-lg xl:h-navbar-xl'>
    <img class='logo' src='/images/app_logo.png' />
    <div class="divider absolute w-screen "></div>
  </div>
</template>
<style>
.navbar{
  background: url('../assets/images/top_bg.png');
  transition: all .1s ease-out;
  @apply bg-primary;
}
.navbar .logo{
  width: 6vw;
  min-width: 2.0rem;
  max-width: 4.4rem;
}
.navbar .divider{
  background: url('../assets/images/divider_primary.jpg') 50% 0 no-repeat;
  height: 3px;
  @apply bg-divider-primary;
  bottom: 0px;

}
</style>

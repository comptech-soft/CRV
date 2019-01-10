<template>
    <div class="m-grid m-grid--hor m-grid--root m-page">
        <header id="m_header" class="m-grid__item m-header" m-minimize="minimize" m-minimize-offset="200" m-minimize-mobile-offset="200">
            <div class="m-header__top">
                <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
                    <div class="m-stack m-stack--ver m-stack--desktop">
                        <brand>
                        </brand>

                        <topbar>
                        </topbar>
                    </div>
                </div>
            </div>

            <!-- doar daca avem user logat -->
            <div v-if="$app.user" class="m-header__bottom">
                <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
                    <div class="m-stack m-stack--ver m-stack--desktop">

                        <horizontal-menu>
                        </horizontal-menu>

                        <search>
                        </search>
                    </div>
                </div>
            </div>
        </header>

        <div class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop m-container m-container--responsive m-container--xxl m-page__container m-body">
            <div class="m-grid__item m-grid__item--fluid m-wrapper">

                <!-- doar daca avem user logat -->
                <transition name="fade" mode="out-in" v-if="$app.user">
                    <router-view name="subheader">                        
                    </router-view>
                </transition>
                
                <!-- content -->
                <div class="m-content">
                    <transition name="fade" mode="out-in">
                        <router-view>
                        </router-view>
                    </transition>
                </div>
            </div>
        </div>

        <page-footer>
        </page-footer>
    </div>
</template>

<script>
    export default {
        
        name: 'main-page'
    }
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

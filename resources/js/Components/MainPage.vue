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
                <sub-header
                    v-if="$app.user"
                >
                </sub-header>
                
                <div class="m-content">
                    
                    User: {{ $app.user }}<br/>
                    Role: {{ $app.role }}
                </div>
            </div>
        </div>

        <page-footer>
        </page-footer>
    </div>
</template>
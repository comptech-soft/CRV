<template>
    <div class="m-stack__item m-brand">
        <div class="m-stack m-stack--ver m-stack--general m-stack--inline">

            <div class="m-stack__item m-stack__item--middle m-brand__logo">
                <a href="#" class="m-brand__logo-wrapper" @click.prevent="$router.push({name: 'welcome'})">
                    <img alt="logo" :src="$app.url + '/metronic/media/img/logo/logo.png'" />
                </a>
            </div>

            <!-- 
                doar daca avem user logat
            -->
            <div v-if="$app.user" class="m-stack__item m-stack__item--middle m-brand__tools">
                <div 
                    class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-left m-dropdown--align-push"
                    m-dropdown-toggle="click" 
                    aria-expanded="true"
                    id="m-brand-dropdown"
                >
                    <a v-if="$brand.menu" href="#" class="dropdown-toggle m-dropdown__toggle btn btn-outline-metal m-btn m-btn--icon m-btn--pill">
                        <span>
                            {{$brand.menu.caption}}
                        </span>
                    </a>
                    <div v-if="$brand.menu" class="m-dropdown__wrapper">
                        <span class="m-dropdown__arrow m-dropdown__arrow--left m-dropdown__arrow--adjust">
                        </span>
                        <div class="m-dropdown__inner">
                            <div class="m-dropdown__body">
                                <div class="m-dropdown__content">
                                    <ul class="m-nav">
                                        <li class="m-nav__section m-nav__section--first m--hide">
                                            <span class="m-nav__section-text">
                                                {{$brand.menu.caption}}
                                            </span>
                                        </li>
                                        <li 
                                            v-for="item in $brand.menu.options"
                                            :key="'brand-menu-item' + item.name"
                                            class="m-nav__item"
                                        >
                                            <a href="#" class="m-nav__link" @click="onClick(item)">
                                                <i class="m-nav__link-icon flaticon-share"></i>
                                                <span class="m-nav__link-text">{{ item.caption }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Responsive Header Menu Toggler -->
                <a 
                    id="m_aside_header_menu_mobile_toggle" 
                    href="javascript:;" 
                    class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block"
                >
                    <span></span>
                </a>

                <!-- Topbar Toggler -->
                <a 
                    id="m_aside_header_topbar_mobile_toggle" 
                    href="javascript:;" 
                    class="m-brand__icon m--visible-tablet-and-mobile-inline-block"
                >
                    <i class="flaticon-more"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        methods: {
            onClick(item) {
                let element = $('#m-brand-dropdown').parent().trigger('click')
                this.menuOptionClick(item)
            },    
        },
        
    }
</script>

<template>
    <li 
        class="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light"
        m-dropdown-toggle="click"
        id="m-quick-actions-dropdown"
    >
        <a href="#" class="m-nav__link m-dropdown__toggle">
            <span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
            <span class="m-nav__link-icon">
                <span class="m-nav__link-icon-wrapper">
                    <i class="flaticon-share"></i>
                </span>
            </span>
        </a>
        <div class="m-dropdown__wrapper">
            <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust">
            </span>
            <div class="m-dropdown__inner">
                <div 
                    class="m-dropdown__header m--align-center"
                    :style="{
                        'background': 'url(' + $app.url + '/metronic/media/img/misc/quick_actions_bg.jpg)', 
                        'background-size': 'cover',
                    }"
                >
                    <span class="m-dropdown__header-title">
                        {{$quick_actions.menu.caption}}
                    </span>
                    <span v-if="false" class="m-dropdown__header-subtitle">
                        Shortcuts
                    </span>
                </div>

                <div class="m-dropdown__body m-dropdown__body--paddingless">
                    <div class="m-dropdown__content">
                        <div class="m-scrollable" data-scrollable="false" data-height="380" data-mobile-height="200">
                            <div class="m-nav-grid m-nav-grid--skin-light">
                                <div class="m-nav-grid__row">
                                    <a 
                                        v-for="item in $quick_actions.menu.options"
                                        :key="'quick-action-item-' + item.name"
                                        href="#" 
                                        class="m-nav-grid__item"
                                        @click.prevent="onClick(item)"
                                    >
                                        <i class="m-nav-grid__icon flaticon-file"></i>
                                        <span class="m-nav-grid__text">
                                            {{ item.caption }}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    export default {

        methods: {
            onClick(item) {
                let element = $('#m-quick-actions-dropdown').parent().trigger('click')
                this.menuOptionClick(item)
            },    
        },
        
    }
</script>

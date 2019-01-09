<template>
    <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
        <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
            <div class="m-stack__item m-topbar__nav-wrapper">
                <ul class="m-topbar__nav m-nav m-nav--inline">
                    
                    <user-profile>
                    </user-profile>

                    <!-- doar daca avem user logat -->
                    <!-- deocamdata NU folosesc notificarile -->
                    <notifications
                        v-if="$app.user && false"
                    >
                    </notifications>

                    <!-- doar daca avem user logat -->
                    <quick-actions
                        v-if="$app.user"
                    >
                    </quick-actions>
                    
                    <!-- Not working -->
                    <quick-sidebar-toggle
                        v-if="false"
                    >
                    </quick-sidebar-toggle>
                </ul>
            </div>
        </div>
    </div>
</template>
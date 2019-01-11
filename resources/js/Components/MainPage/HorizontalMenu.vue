<template>
	<div class="m-stack__item m-stack__item--middle m-stack__item--fluid">
		<button 
			class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light" 
			id="m_aside_header_menu_mobile_close_btn"
		>
			<i class="la la-close"></i>
		</button>
	
		<div 
			id="m_header_menu" 
			class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light"
		>
			<ul class="m-menu__nav  m-menu__nav--submenu-arrow">

				<li 
					class="m-menu__item m-menu__item--submenu m-menu__item--rel" 
					m-menu-submenu-toggle="click" 
					aria-haspopup="true"
					v-for="item in $horizontal_menu.menu.options"
					:key="'horizontal-menu-item-' + item.name"
					@click="menuOptionClick(item)"
				>
					<a 
						href="javascript:;" 
						class="m-menu__link m-menu__toggle" 
						title=""
					>
						<span v-if="menuOptionHasSubmenu(item)" class="m-menu__item-here">
						</span>
						<span class="m-menu__link-text">
							{{ item.caption}}
						</span>
						<i v-if="menuOptionHasSubmenu(item)" class="m-menu__hor-arrow la la-angle-down"></i>
						<i v-if="menuOptionHasSubmenu(item)" class="m-menu__ver-arrow la la-angle-right"></i>
					</a>
					<div 
						v-if="menuOptionHasSubmenu(item)" 
						class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left"
					>
						<span class="m-menu__arrow m-menu__arrow--adjust">
						</span>
						<ul class="m-menu__subnav">
							<li 
								class="m-menu__item" 
								aria-haspopup="true"
								v-for="subitem in item.options"
								:key="'horizontal-menu-subitem-' + subitem.name"
							>
								<a href="#" class="m-menu__link" @click="menuOptionClick(subitem)">
									<i :class="'m-menu__link-icon ' + subitem.icon"></i>
									<span class="m-menu__link-title">
										<span class="m-menu__link-wrap">
											<span class="m-menu__link-text">
												{{ subitem.caption }}
											</span>
										</span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
	
		
	}
</script>


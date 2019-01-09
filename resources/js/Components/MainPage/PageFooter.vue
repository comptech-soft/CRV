<template>
	<footer class="m-grid__item m-footer ">
		<div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
			<div class="m-footer__wrapper">
				<div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
					

					<div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
						<span class="m-footer__copyright">
							2018 - {{$datetime.Year() }} &copy;
							<a href="#" class="m-link">{{ $app.config.name }}</a>
						</span>
					</div>

					<div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
						<ul class="m-footer__nav m-nav m-nav--inline m--pull-right">
							
							<li 
								class="m-nav__item"
								v-for="item in $footer.menu.options"
								:key="'footer-item-option-' + item.name"
							>	
								<a href="#" class="m-nav__link" @click.prevent="menuOptionClick(item)">
									<span class="m-nav__link-text">{{ item.caption }}</span>
								</a>
							</li>

							<li class="m-nav__item m-nav__item--last">
								<a href="#" class="m-nav__link" data-toggle="m-tooltip" title="Support Center" data-placement="left">
									<i class="m-nav__link-icon flaticon-info m--icon-font-size-lg3">
									</i>
								</a>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	</footer>
</template>

<script>


	export default {
		
	}
</script>

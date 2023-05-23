<template>
	<main>
		<section class="no-margin hero">
			<div class="image-wrapper">
				<NuxtPicture
					src="/kontakty-hero.jpg"
					alt=""
					width="1920"
					height="1080"
					:img-attrs="{ style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }" />
			</div>
			<div class="container">
				<div class="columns col-2 align-center">
					<div class="column">
						<h1>Kontakty</h1>
						<p><strong>Sídlo společnosti</strong> <br /></p>
						<p>
							MirandaMedia Group, s.r.o. <br />
							Jankovcova 1596/14b <br />
							Praha 7 - Holešovice
						</p>
						<p>
							<strong>IČO: 08272930</strong> <br />
							<strong>DIČ: CZ08272930</strong>
						</p>
						<p><strong>BÚ: 2201649999/2010</strong></p>
					</div>
					<div class="column">
						<div class="tiles-grid">
							<div class="tile email">
								<a href="mailto:info@mirandamedia.cz">
									<svg
										width="72"
										height="72"
										viewBox="0 0 72 72"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M12 12H60C63.3 12 66 14.7 66 18V54C66 57.3 63.3 60 60 60H12C8.7 60 6 57.3 6 54V18C6 14.7 8.7 12 12 12Z"
											stroke="#222E27"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"></path>
										<path
											d="M66 18L36 39L6 18"
											stroke="#222E27"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"></path>
									</svg>
									<span>info@mirandamedia.cz</span>
								</a>
							</div>
							<div class="tile phone">
								<a href="tel:00420732264251">
									<svg
										width="72"
										height="72"
										viewBox="0 0 72 72"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M66.0042 50.7603V59.7603C66.0076 60.5958 65.8364 61.4228 65.5017 62.1883C65.167 62.9539 64.6761 63.6411 64.0604 64.2059C63.4448 64.7707 62.7179 65.2007 61.9264 65.4684C61.135 65.7361 60.2963 65.8355 59.4642 65.7603C50.2327 64.7572 41.3652 61.6027 33.5742 56.5503C26.3257 51.9443 20.1802 45.7988 15.5742 38.5503C10.5041 30.7239 7.34892 21.8133 6.36419 12.5403C6.28923 11.7107 6.38782 10.8746 6.6537 10.0852C6.91957 9.29576 7.34691 8.57036 7.90849 7.95515C8.47008 7.33995 9.15361 6.84842 9.91557 6.51186C10.6775 6.17529 11.5012 6.00108 12.3342 6.00029H21.3342C22.7901 5.98596 24.2016 6.50153 25.3055 7.45089C26.4094 8.40025 27.1304 9.71863 27.3342 11.1603C27.7141 14.0405 28.4185 16.8685 29.4342 19.5903C29.8378 20.6641 29.9252 21.831 29.6859 22.9529C29.4466 24.0748 28.8908 25.1046 28.0842 25.9203L24.2742 29.7303C28.5449 37.2409 34.7636 43.4596 42.2742 47.7303L46.0842 43.9203C46.8999 43.1137 47.9297 42.5578 49.0516 42.3186C50.1734 42.0793 51.3404 42.1667 52.4142 42.5703C55.136 43.5859 57.964 44.2904 60.8442 44.6703C62.3015 44.8759 63.6324 45.6099 64.5838 46.7328C65.5352 47.8556 66.0407 49.289 66.0042 50.7603Z"
											stroke="#222E27"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"></path>
									</svg>
									<span>+420 732 264 251</span>
								</a>
							</div>
							<div class="tile address">
								<a href="#mapa">
									<svg
										width="72"
										height="72"
										viewBox="0 0 72 72"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M56.7143 28.8571C56.7143 31.7598 55.3838 35.4791 53.2578 39.5208C51.1482 43.5315 48.324 47.734 45.4824 51.5669C42.6435 55.3961 39.8024 58.8363 37.6698 61.3202C36.604 62.5617 35.7162 63.563 35.0957 64.2532C35.0111 64.3472 34.9315 64.4355 34.8571 64.5178C34.7827 64.4355 34.7032 64.3472 34.6186 64.2532C33.998 63.563 33.1103 62.5617 32.0444 61.3202C29.9119 58.8363 27.0707 55.3961 24.2319 51.5669C21.3903 47.734 18.5661 43.5315 16.4565 39.5208C14.3305 35.4791 13 31.7598 13 28.8571C13 16.7858 22.7858 7 34.8571 7C46.9285 7 56.7143 16.7858 56.7143 28.8571Z"
											stroke="#222E27"
											stroke-width="2"></path>
										<circle
											cx="34.8573"
											cy="27.7142"
											r="10.4286"
											stroke="#222E27"
											stroke-width="2"></circle>
									</svg>
									<span>
										Jankovcova 1596/14b, 170 00 <br />Praha 7 - Holešovice <br />
										Vchod B
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section
			id="mapa"
			class="no-margin">
			<GoogleMap
				api-key="AIzaSyAu8MzTDuTbDCe9Jvwy10SqJtDxy-W9Uc0"
				style="width: 100%; height: 600px"
				:zoom="15"
				:center="{ lat: 50.1080258, lng: 14.4544731 }">
				<Marker :options="{ position: { lat: 50.1080258, lng: 14.4544731 } }"></Marker>
			</GoogleMap>
		</section>
		<section class="no-margin">
			<ContactForm />
		</section>
	</main>
</template>
<script setup>
	import { GoogleMap, Marker } from 'vue3-google-map'
</script>

<style lang="scss" scoped>
	.hero {
		height: 100vh;
		position: relative;
		.container {
			padding-top: 180px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: $color-white;
		}
		h1 {
			font-size: rem(64);
			margin-top: 0;
		}
		.image-wrapper {
			width: 100%;
			height: 100%;
			div {
				width: 100%;
				height: 100%;
			}
		}
	}
	.tiles-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(1px, 1fr));
		justify-items: center;
		.email {
			grid-column: 2 / 4;
			grid-row: 1 / 2;
			background-color: #7ae3a5;
			margin-bottom: -40px;
		}
		.phone {
			grid-column: 1 / 3;
			grid-row: 2 / 3;
			background-color: #59dc8e;
			margin-top: -20px;
			margin-right: -50px;
		}
		.address {
			grid-column: 3 / 5;
			grid-row: 2 / 3;
			background-color: #9beabb;
			margin-left: -60px;
		}
		.tile {
			aspect-ratio: 1 / 1;
			max-width: 260px;
			border: 10px solid $color-font;
      &.phone:hover svg {
        animation: swing 1s ease-in-out;
      }
      &.email:hover svg {
        animation: slideEmail .7s ease-in-out;
      }
      &.address:hover svg {
        animation: shakeY 1.5s ease-in-out;
      }
			a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				text-decoration: none;
				color: $color-font;
				height: 100%;
				padding: 30px;
				font-weight: 700;
				line-height: 1.6em;
				svg {
					margin-bottom: 10px;
				}
			}
		}
	}
	@media (max-width: 1140px) {
		.tiles-grid {
			.email {
				margin-bottom: -20px;
			}
			.phone {
				margin-right: -20px;
			}
			.address {
				margin-left: -20px;
			}
		}
	}
	@media (max-width: 998px) {
		.hero {
			.container {
				position: relative;
				top: unset;
				left: unset;
				transform: none;
				height: calc(50vh + 50px);
				margin-top: -50px;
				background: linear-gradient(180deg, transparent 0, #000 50px);
				padding-bottom: 2rem;
				padding-top: 2rem;
				display: flex;
				align-items: flex-end;
				.columns {
					width: 100%;
				}
			}
			.image-wrapper {
				height: 50vh;
			}
		}
		.tiles-grid {
			display: flex;
			flex-direction: column;
			gap: 20px;
			.tile {
				border: 0;
				max-width: unset;
				aspect-ratio: unset;
				a {
					flex-direction: row;
					gap: 10px;
					padding: 10px;
					svg {
						max-width: 32px;
						max-height: 32px;
						margin-bottom: 0;
					}
				}
			}
			.email,
			.phone,
			.address {
				margin: 0;
			}
			.address {
				display: none;
			}
		}
	}
	@media (max-width: 767px) {
		.hero h1 {
			font-size: rem(48);
		}
	}
  @keyframes slideEmail {
    50% {
      transform: translateX(30px);
    }
    51% {
      transform: scale(0);
      opacity: 0;
    }
    52% {
      transform: translateX(-30px);
    }
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  @keyframes shakeY {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
    10%,
    50% {
      transform: translate3d(0, -10px, 0);
    }

    30%,
    70% {
      transform: translate3d(0, 10px, 0);
    }
  }
</style>

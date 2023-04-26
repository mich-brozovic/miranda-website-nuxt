<template>
	<main>
		<HeroBig
			:imgUrl="screenWidth > 767 ? '/shoptetnamiru-hero.jpg' : '/shoptetnamiru-hero-mobile.jpg'"
			heading="Postavíme vám Shoptet na míru"
			subheading="Kompletní e-shopové řešení za nejkratší možnou dobu" />
		<section class="container anchors-wrapper">
			<nav>
				<ul>
					<li><a href="#reference">Reference</a></li>
					<li><a href="#sluzby">Služby</a></li>
					<li><a href="#proc-shoptet">Proč Shoptet</a></li>
					<li><a href="#reakce">Reakce zákazníků</a></li>
					<li><a href="#konfigurator">Konfigurátor</a></li>
					<li><a href="#kontakt">Kontakty</a></li>
				</ul>
			</nav>
		</section>
		<section
			id="reference"
			class="container">
			<h2 class="text-center">Naše e-shopy na Shoptetu na míru</h2>
			<ReferenceGrid type="shop" />
		</section>
		<section class="container">
			<div class="shoptet-sluzby-grid">
				<div class="large item">
					<NuxtPicture
						src="/shoptet-premium-logo.webp"
						:imgAttrs="{ style: `max-width: 160px; width: auto;` }" />
					<h2>Služby, které nabízíme</h2>
					<p class="large">
						Postavíme celý e-shop na klíč, zaškolíme vás v práci s administrací a posuneme výkon vašich kampaní na zcela jinou
						úroveň.
					</p>
					<ul class="checked">
						<li>Napojení jakéhokoliv systému pomocí API</li>
						<li>Možnost programovat vlastní funkce</li>
						<li>Neomezený počet produktů, uživatelů, e-mailů</li>
						<li>Bez nutnosti vlastních programátorů</li>
					</ul>
					<a
						href="#kontakt"
						class="btn-secondary"
						>Poptat služby</a
					>
				</div>
				<div class="item">
					<div class="init">
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.667 12.8334C11.667 10.6675 12.5274 8.59026 14.059 7.05871C15.5905 5.52716 17.6677 4.66675 19.8337 4.66675H28.0003V21.0001H19.8337C17.6677 21.0001 15.5905 20.1397 14.059 18.6081C12.5274 17.0766 11.667 14.9993 11.667 12.8334Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M28 4.66675H36.1667C37.2391 4.66675 38.3011 4.87798 39.2919 5.2884C40.2827 5.69881 41.183 6.30036 41.9414 7.05871C42.6997 7.81705 43.3013 8.71734 43.7117 9.70817C44.1221 10.699 44.3333 11.761 44.3333 12.8334C44.3333 13.9059 44.1221 14.9678 43.7117 15.9587C43.3013 16.9495 42.6997 17.8498 41.9414 18.6081C41.183 19.3665 40.2827 19.968 39.2919 20.3784C38.3011 20.7888 37.2391 21.0001 36.1667 21.0001H28V4.66675Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M28 29.1667C28 28.0942 28.2112 27.0322 28.6216 26.0414C29.0321 25.0506 29.6336 24.1503 30.392 23.392C31.1503 22.6336 32.0506 22.0321 33.0414 21.6216C34.0322 21.2112 35.0942 21 36.1667 21C37.2391 21 38.3011 21.2112 39.2919 21.6216C40.2827 22.0321 41.183 22.6336 41.9414 23.392C42.6997 24.1503 43.3013 25.0506 43.7117 26.0414C44.1221 27.0322 44.3333 28.0942 44.3333 29.1667C44.3333 30.2391 44.1221 31.3011 43.7117 32.2919C43.3013 33.2827 42.6997 34.183 41.9414 34.9414C41.183 35.6997 40.2827 36.3013 39.2919 36.7117C38.3011 37.1221 37.2391 37.3333 36.1667 37.3333C35.0942 37.3333 34.0322 37.1221 33.0414 36.7117C32.0506 36.3013 31.1503 35.6997 30.392 34.9414C29.6336 34.183 29.0321 33.2827 28.6216 32.2919C28.2112 31.3011 28 30.2391 28 29.1667V29.1667Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M11.667 45.4999C11.667 43.334 12.5274 41.2568 14.059 39.7252C15.5905 38.1937 17.6677 37.3333 19.8337 37.3333H28.0003V45.4999C28.0003 47.6658 27.1399 49.7431 25.6084 51.2746C24.0768 52.8062 21.9996 53.6666 19.8337 53.6666C17.6677 53.6666 15.5905 52.8062 14.059 51.2746C12.5274 49.7431 11.667 47.6658 11.667 45.4999Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M11.667 29.1667C11.667 27.0007 12.5274 24.9235 14.059 23.392C15.5905 21.8604 17.6677 21 19.8337 21H28.0003V37.3333H19.8337C17.6677 37.3333 15.5905 36.4729 14.059 34.9414C12.5274 33.4098 11.667 31.3326 11.667 29.1667Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
						<h3>Úchvatná grafika a webdesign</h3>
					</div>
					<div class="info">
						<p>Moderní, líbivý a především plně responzivní e-shop je základním předpokladem úspěšného prodeje.</p>
					</div>
				</div>
				<div class="item">
					<div class="init">
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14 4.66675L7 14.0001V46.6668C7 47.9044 7.49167 49.0914 8.36683 49.9666C9.242 50.8418 10.429 51.3334 11.6667 51.3334H44.3333C45.571 51.3334 46.758 50.8418 47.6332 49.9666C48.5083 49.0914 49 47.9044 49 46.6668V14.0001L42 4.66675H14Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M7 14H49"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M37.3337 23.3333C37.3337 25.8086 36.3503 28.1826 34.6 29.9329C32.8497 31.6833 30.4757 32.6666 28.0003 32.6666C25.525 32.6666 23.151 31.6833 21.4007 29.9329C19.6503 28.1826 18.667 25.8086 18.667 23.3333"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
						<h3>Převod e-shopu od konkurence</h3>
					</div>
					<div class="info">
						<p>Starý e-shop vám už nevyhovuje a je na čase nutně modernizovat.</p>
					</div>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/nabizime1.webp"
						:imgAttrs="{ style: 'width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="item">
					<div class="init">
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M28.0003 4.66675L35.2103 19.2734L51.3337 21.6301L39.667 32.9934L42.4203 49.0467L28.0003 41.4634L13.5803 49.0467L16.3337 32.9934L4.66699 21.6301L20.7903 19.2734L28.0003 4.66675Z"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
						<h3>PPC a zbožové vyhledávače</h3>
					</div>
					<div class="info">
						<p>E-shop je připraven ke spuštění a nastává moment, dát o sobě vědět zákazníkům.</p>
					</div>
				</div>
				<div class="item">
					<div class="init">
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M47.25 10.5V19.25H29.75V10.5H47.25ZM47.25 7H29.75C28.8217 7 27.9315 7.36875 27.2751 8.02513C26.6187 8.6815 26.25 9.57174 26.25 10.5V19.25C26.25 20.1783 26.6187 21.0685 27.2751 21.7249C27.9315 22.3813 28.8217 22.75 29.75 22.75H47.25C48.1783 22.75 49.0685 22.3813 49.7249 21.7249C50.3812 21.0685 50.75 20.1783 50.75 19.25V10.5C50.75 9.57174 50.3812 8.6815 49.7249 8.02513C49.0685 7.36875 48.1783 7 47.25 7ZM21 43.75H10.5V29.75H21V26.25H10.5C9.57174 26.25 8.6815 26.6187 8.02513 27.2751C7.36875 27.9315 7 28.8217 7 29.75V43.75C7 44.6783 7.36875 45.5685 8.02513 46.2249C8.6815 46.8812 9.57174 47.25 10.5 47.25H21V43.75ZM52.5 35H29.449L33.9745 30.4745L31.5 28L22.75 36.75L31.5 45.5L33.9745 43.0255L29.449 38.5H52.5V35ZM19.25 10.5V19.25H10.5V10.5H19.25ZM19.25 7H10.5C9.57174 7 8.6815 7.36875 8.02513 8.02513C7.36875 8.6815 7 9.57174 7 10.5V19.25C7 20.1783 7.36875 21.0685 8.02513 21.7249C8.6815 22.3813 9.57174 22.75 10.5 22.75H19.25C20.1783 22.75 21.0685 22.3813 21.7249 21.7249C22.3813 21.0685 22.75 20.1783 22.75 19.25V10.5C22.75 9.57174 22.3813 8.6815 21.7249 8.02513C21.0685 7.36875 20.1783 7 19.25 7Z"
								fill="#59DC8E"></path>
						</svg>
						<h3>Import a synchronizace dat v reálném čase</h3>
					</div>
					<div class="info">
						<p>E-shop už máte, ale zatím nevíte, jak využít jeho maximální potenciál.</p>
					</div>
				</div>
				<div class="item image">
					<NuxtPicture
						src="/nabizime2.webp"
						:imgAttrs="{ style: 'width: 100%; height: 100%; object-fit: cover;' }" />
				</div>
				<div class="item">
					<div class="init">
						<svg
							width="57"
							height="56"
							viewBox="0 0 57 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_1785_7157)">
								<path
									d="M21.033 25.258C21.033 24.1948 20.1715 23.3333 19.1084 23.3333H16.8925C15.8278 23.3333 14.9663 24.1948 14.9663 25.258C14.9663 26.1346 14.3657 26.8869 13.5483 27.2084C13.4193 27.26 13.2904 27.3146 13.1645 27.3692C12.3592 27.718 11.4022 27.6119 10.7803 26.9915C10.4194 26.6309 9.9301 26.4283 9.41989 26.4283C8.90968 26.4283 8.42034 26.6309 8.05944 26.9915L6.49121 28.5598C6.13056 28.9207 5.92797 29.41 5.92797 29.9202C5.92797 30.4304 6.13056 30.9198 6.49121 31.2807C7.11304 31.9025 7.21921 32.858 6.86734 33.6649C6.81206 33.7918 6.75897 33.9198 6.70809 34.0486C6.38656 34.8661 5.63429 35.4667 4.75766 35.4667C3.69447 35.4667 2.83301 36.3281 2.83301 37.3913V39.6087C2.83301 40.6719 3.69447 41.5333 4.75766 41.5333C5.63429 41.5333 6.38656 42.1339 6.70809 42.9514C6.75966 43.0803 6.81426 43.2093 6.86734 43.3351C7.21769 44.1405 7.11152 45.0975 6.49121 45.7193C6.13056 46.0802 5.92797 46.5696 5.92797 47.0798C5.92797 47.59 6.13056 48.0793 6.49121 48.4402L8.05944 50.0085C8.42034 50.3691 8.90968 50.5717 9.41989 50.5717C9.9301 50.5717 10.4194 50.3691 10.7803 50.0085C11.4022 49.3866 12.3577 49.2805 13.1645 49.6308C13.2904 49.6869 13.4193 49.74 13.5483 49.7916C14.3657 50.1131 14.9663 50.8654 14.9663 51.742C14.9663 52.8052 15.8278 53.6667 16.891 53.6667H19.1084C20.1715 53.6667 21.033 52.8052 21.033 51.742C21.033 50.8654 21.6336 50.1131 22.4511 49.7901C22.58 49.74 22.7089 49.6869 22.8348 49.6323C23.6402 49.2805 24.5972 49.3881 25.2175 50.0085C25.3962 50.1873 25.6084 50.3291 25.842 50.4259C26.0755 50.5226 26.3259 50.5725 26.5787 50.5725C26.8315 50.5725 27.0819 50.5226 27.3154 50.4259C27.549 50.3291 27.7612 50.1873 27.9399 50.0085L29.5081 48.4402C29.8688 48.0793 30.0714 47.59 30.0714 47.0798C30.0714 46.5696 29.8688 46.0802 29.5081 45.7193C28.8863 45.0975 28.7801 44.142 29.1305 43.3351C29.1866 43.2093 29.2397 43.0803 29.2913 42.9514C29.6128 42.1339 30.3651 41.5333 31.2417 41.5333C32.3049 41.5333 33.1663 40.6719 33.1663 39.6087V37.3928C33.1663 36.3297 32.3049 35.4682 31.2417 35.4682C30.3651 35.4682 29.6128 34.8676 29.2897 34.0501C29.2389 33.9213 29.1858 33.7933 29.1305 33.6664C28.7817 32.861 28.8878 31.904 29.5081 31.2822C29.8688 30.9213 30.0714 30.4319 30.0714 29.9217C30.0714 29.4115 29.8688 28.9222 29.5081 28.5613L27.9399 26.9931C27.579 26.6324 27.0897 26.4298 26.5795 26.4298C26.0692 26.4298 25.5799 26.6324 25.219 26.9931C24.5972 27.6149 23.6417 27.7211 22.8348 27.3707C22.7078 27.3149 22.5799 27.2613 22.4511 27.2099C21.6336 26.8869 21.033 26.1346 21.033 25.2595V25.258Z"
									stroke="#59DC8E"
									stroke-width="2"></path>
								<path
									d="M21.5 38.5C21.5 39.4283 21.1313 40.3185 20.4749 40.9749C19.8185 41.6313 18.9283 42 18 42C17.0717 42 16.1815 41.6313 15.5251 40.9749C14.8687 40.3185 14.5 39.4283 14.5 38.5C14.5 37.5717 14.8687 36.6815 15.5251 36.0251C16.1815 35.3687 17.0717 35 18 35C18.9283 35 19.8185 35.3687 20.4749 36.0251C21.1313 36.6815 21.5 37.5717 21.5 38.5V38.5Z"
									stroke="#59DC8E"
									stroke-width="2"></path>
								<path
									d="M47.2109 7.35667C47.5526 6.5245 47.1552 5.5733 46.323 5.23155L44.5887 4.51929C43.7553 4.17705 42.8041 4.57443 42.4623 5.4066C42.1806 6.09276 41.4686 6.48852 40.7254 6.47742C40.6079 6.47634 40.4895 6.47764 40.3734 6.47991C39.6309 6.49408 38.916 6.10336 38.6286 5.41794C38.4621 5.01965 38.1442 4.70379 37.7448 4.53978C37.3455 4.37578 36.8973 4.37706 36.4989 4.54334L34.7674 5.26673C34.3691 5.43329 34.0532 5.75119 33.8892 6.15054C33.7252 6.54989 33.7265 6.99803 33.8927 7.39644C34.1796 8.08304 33.9555 8.86506 33.4208 9.38351C33.3367 9.46513 33.254 9.54819 33.1728 9.63266C32.6583 10.1692 31.8765 10.3975 31.1903 10.1157C30.3581 9.77393 29.4069 10.1713 29.0652 11.0035L28.3524 12.7391C28.0107 13.5712 28.4081 14.5224 29.2402 14.8642C29.9264 15.146 30.3222 15.8579 30.3111 16.6011C30.31 16.7186 30.3113 16.837 30.3124 16.9526C30.3277 17.6956 29.937 18.4106 29.2516 18.6979C28.8533 18.8644 28.5374 19.1823 28.3734 19.5817C28.2094 19.9811 28.2107 20.4292 28.377 20.8276L29.1004 22.5592C29.2669 22.9575 29.5848 23.2733 29.9842 23.4373C30.3835 23.6013 30.8317 23.6001 31.2301 23.4338C31.9167 23.1469 32.6987 23.371 33.2176 23.9046C33.2981 23.989 33.382 24.0719 33.4663 24.1537C34.0028 24.6682 34.2311 25.4501 33.9493 26.1362C33.6076 26.9684 34.0049 27.9196 34.8371 28.2613L36.5727 28.9741C37.4049 29.3158 38.3561 28.9185 38.6978 28.0863C38.9796 27.4001 39.6915 27.0044 40.4352 27.0143C40.5522 27.0165 40.6702 27.0164 40.7863 27.0142C41.5297 26.9976 42.2442 27.3895 42.5303 28.0745C42.6128 28.2719 42.7333 28.4511 42.885 28.6019C43.0367 28.7527 43.2166 28.8722 43.4145 28.9535C43.6124 29.0347 43.8243 29.0762 44.0383 29.0755C44.2522 29.0749 44.4639 29.0321 44.6612 28.9496L46.3928 28.2262C46.7911 28.0596 47.107 27.7417 47.271 27.3424C47.435 26.943 47.4337 26.4949 47.2674 26.0965C46.9806 25.4098 47.2046 24.6278 47.7382 24.1089C47.8226 24.0284 47.9056 23.9446 47.9874 23.8602C48.5018 23.3237 49.2837 23.0954 49.9699 23.3772C50.802 23.719 51.7532 23.3216 52.095 22.4894L52.8072 20.755C53.149 19.9228 52.7516 18.9716 51.9194 18.6299C51.2333 18.3481 50.8375 17.6362 50.8474 16.8925C50.8491 16.7753 50.8486 16.6581 50.8461 16.541C50.832 15.7985 51.2227 15.0835 51.9081 14.7962C52.3064 14.6296 52.6223 14.3117 52.7863 13.9124C52.9503 13.513 52.949 13.0649 52.7827 12.6665L52.0593 10.9349C51.8927 10.5366 51.5749 10.2207 51.1755 10.0567C50.7761 9.89274 50.328 9.89402 49.9296 10.0603C49.243 10.3471 48.461 10.1231 47.942 9.58951C47.8606 9.50502 47.7777 9.42195 47.6934 9.34034C47.1574 8.82471 46.9291 8.04283 47.2104 7.35786L47.2109 7.35667Z"
									stroke="#59DC8E"
									stroke-width="2"></path>
								<path
									d="M43.3198 17.8715C43.0215 18.5981 42.4467 19.1763 41.7219 19.4791C40.9972 19.7819 40.1818 19.7844 39.4553 19.486C38.7287 19.1876 38.1504 18.6128 37.8476 17.8881C37.5449 17.1633 37.5424 16.348 37.8408 15.6214C38.1392 14.8948 38.7139 14.3166 39.4387 14.0138C40.1634 13.711 40.9788 13.7085 41.7053 14.0069C42.4319 14.3053 43.0102 14.8801 43.313 15.6048C43.6157 16.3296 43.6182 17.1449 43.3198 17.8715V17.8715Z"
									stroke="#59DC8E"
									stroke-width="2"></path>
							</g>
							<defs>
								<clipPath id="clip0_1785_7157">
									<rect
										width="56"
										height="56"
										fill="white"
										transform="translate(0.5)"></rect>
								</clipPath>
							</defs>
						</svg>
						<h3>Pravidelná správa Shoptetu</h3>
					</div>
					<div class="info">
						<p>Jde vám hlava kolem z množství práce nad správou? Tak si oddechněte a nechte to na nás.</p>
					</div>
				</div>
				<div class="item">
					<div class="init">
						<svg
							width="57"
							height="56"
							viewBox="0 0 57 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M37.833 42L51.833 28L37.833 14"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path
								d="M19.167 14L5.16699 28L19.167 42"
								stroke="#59DC8E"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
						<h3>Programování a kódování</h3>
					</div>
					<div class="info">
						<p>Potřebujete realizovat své nápady nad rámec běžných řešení?</p>
					</div>
				</div>
			</div>
		</section>
		<section class="container">
			<NuxtLink
				class="banner-link"
				to="/reference/expresmenu">
				<div
					class="banner"
					style="background-color: rgb(247, 244, 213)">
					<div class="banner__logo">
						<NuxtPicture
							src="/expresmenu-logo.webp"
							:img-attrs="{ style: 'max-width: 100%; width: auto;' }" />
					</div>
					<div class="banner__info">
						<strong>o 3278%</strong>
						nárůst tržeb
					</div>
					<div class="banner__mockup">
						<NuxtPicture src="/expresmenu-mockup.webp" />
					</div>
					<div class="banner__arrow">
						<svg
							width="52"
							height="24"
							viewBox="0 0 52 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
						</svg>
					</div>
				</div>
			</NuxtLink>
		</section>
		<section class="proc-shoptet container">
			<div class="columns col-1-2">
				<div class="column">
					<NuxtPicture src="/proc-shoptet.webp" />
				</div>
				<div class="column">
					<h2>Proč zvolit Shoptet?</h2>
					<p class="large">
						Jednička mezi e-commerce platformami v Česku a na na Slovensku s obrovskou podporou a minimálními náklady na provoz.
					</p>
					<div class="mobile-mockup">
						<NuxtPicture src="/mobil-mockup-mobile.jpg" />
					</div>
					<ol class="vyhody">
						<li>
							Shoptet je na českém trhu <strong>TOP on-line platforma</strong> určená pro provozování e-shopu.
							<strong>S Mirandou dokážete</strong> krabicové řešení posunout na úroveň <strong>řešení na míru!</strong>
						</li>
						<li>
							<strong>Shoptet na míru znamená vlastní e-shop</strong> s možností individuálních a téměř neomezených úprav
							grafiky, struktury a funkcionalit.
						</li>
						<li><strong>Řešení na míru od Mirandy</strong> vám pomůže vystoupit z davu a odlišit se od konkurence.</li>
						<li>
							<strong>Intuitivní a jednoduchá obsluha</strong>, kterou zvládne každý a hlavně vám vše vysvětlíme a do
							administrace <strong>zaškolíme</strong>.
						</li>
					</ol>
					<h3>Napojíme váš Shoptet na podkladní, informační, účetní a podnikové systémy ERP a CRM</h3>
					<ul class="checked">
						<li>Synchronizace dat v reálném čase</li>
						<li>Možnost doprogramovat vlastní funkcionality</li>
					</ul>
				</div>
			</div>
			<div class="systemy">
				<NuxtPicture src="/eso9.webp" />
				<NuxtPicture src="/money.webp" />
				<NuxtPicture src="/helios.webp" />
				<NuxtPicture src="/abra.webp" />
				<NuxtPicture src="/pohoda.webp" />
				<NuxtPicture src="/k2.webp" />
				<NuxtPicture src="/nevim.webp" />
			</div>
			<div class="buttons-center">
				<BtnSecondary
					to="#kontakt"
					text="Pojďme se dohodnout"></BtnSecondary>
			</div>
		</section>
		<section class="container">
			<NuxtLink
				class="banner-link"
				to="/reference/epiderma">
				<div
					class="banner"
					style="background-color: rgb(244, 235, 228)">
					<div class="banner__logo">
						<NuxtPicture
							src="/epiderma-logo.png"
							:img-attrs="{ style: 'max-width: 100%; width: auto;' }" />
					</div>
					<div class="banner__info">
						<strong>305%</strong>
						nárůst obratu po redesignu
					</div>
					<div class="banner__mockup">
						<NuxtPicture src="/epiderma-mockup.png" />
					</div>
					<div class="banner__arrow">
						<svg
							width="52"
							height="24"
							viewBox="0 0 52 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"></path>
						</svg>
					</div>
				</div>
			</NuxtLink>
		</section>
		<section class="commentary">
			<div class="container">
				<h2 class="text-center">Co říkáte na Mirandu?</h2>
				<div class="text-center container narrow">
					<p>
						I ten slavnej českej šéfík z televize, co zatopil nejednomu gastru, pustil pár slov o Mirandě. No a jak jsme dopadli
						s jeho novým, parádně vymazleným e-shopem a co na nás říkají další vybraní klienti...
					</p>
				</div>
				<CoONasRikaji />
			</div>
		</section>
		<!-- <section>
			<div class="container">
				<div class="konfigurator">
					<div class="pripravujeme">
						<svg
							width="214"
							height="211"
							viewBox="0 0 214 211"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.9697 190.222L-3.14957e-07 203.192L12.9697 210.397L12.9697 190.222Z"
								fill="#9BEABB" />
							<path
								d="M-3.60421e-06 120.737L-1.51248e-06 168.591L0 203.192L204.633 0.000219937L118.586 0.000223698L-3.60421e-06 120.737Z"
								fill="#59DC8E" />
							<path
								d="M25.2754 133.462C25.7865 133.986 26.1355 134.584 26.3222 135.257C26.5006 135.921 26.4705 136.629 26.232 137.382C25.9935 138.134 25.5048 138.87 24.766 139.591L23.4001 140.923L26.5672 144.17L24.3637 146.32L15.5411 137.274L19.1105 133.792C19.8321 133.088 20.5636 132.618 21.3048 132.381C22.046 132.144 22.7549 132.124 23.4313 132.319C24.1077 132.514 24.7224 132.895 25.2754 133.462ZM22.8893 138.002C23.3102 137.591 23.5274 137.187 23.5409 136.788C23.5544 136.389 23.3852 136.01 23.0333 135.649C22.6814 135.288 22.306 135.109 21.9071 135.113C21.5082 135.116 21.0983 135.323 20.6774 135.734L19.479 136.903L21.6909 139.171L22.8893 138.002ZM39.5953 131.464L34.3834 129.884L33.8551 130.399L37.1856 133.814L34.9821 135.963L26.1595 126.917L29.8578 123.31C30.5708 122.615 31.2979 122.149 32.0392 121.912C32.789 121.667 33.5021 121.642 34.1786 121.837C34.8466 122.023 35.4404 122.383 35.9598 122.916C36.5463 123.517 36.8982 124.222 37.0154 125.029C37.1412 125.828 36.9697 126.649 36.5009 127.492L42.0823 129.038L39.5953 131.464ZM32.3344 128.84L33.7003 127.508C34.1041 127.114 34.3084 126.722 34.3133 126.332C34.3268 125.933 34.1575 125.553 33.8057 125.193C33.4705 124.849 33.1035 124.679 32.7046 124.682C32.3143 124.678 31.9173 124.872 31.5135 125.266L30.1476 126.598L32.3344 128.84ZM29.9987 120.181L28.9942 123.147L26.004 124.077L24.521 122.556L27.6118 121.729L28.5157 118.66L29.9987 120.181ZM39.3463 114.056L48.1689 123.102L45.9654 125.251L37.1428 116.205L39.3463 114.056ZM53.2547 106.174C53.7658 106.698 54.1147 107.296 54.3015 107.969C54.4799 108.633 54.4498 109.341 54.2113 110.093C53.9728 110.846 53.4841 111.582 52.7453 112.303L51.3794 113.635L54.5465 116.882L52.343 119.031L43.5204 109.985L47.0898 106.504C47.8114 105.8 48.5428 105.33 49.2841 105.093C50.0253 104.856 50.7342 104.835 51.4106 105.03C52.087 105.226 52.7017 105.607 53.2547 106.174ZM50.8686 110.713C51.2895 110.303 51.5067 109.898 51.5202 109.5C51.5337 109.101 51.3645 108.721 51.0126 108.36C50.6607 108 50.2853 107.821 49.8864 107.824C49.4875 107.828 49.0776 108.035 48.6566 108.446L47.4582 109.614L49.6702 111.882L50.8686 110.713ZM67.5746 104.176L62.3627 102.596L61.8344 103.111L65.1649 106.526L62.9614 108.675L54.1388 99.629L57.8371 96.022C58.5501 95.3266 59.2772 94.8604 60.0185 94.6236C60.7683 94.3784 61.4814 94.3534 62.1578 94.5485C62.8259 94.7351 63.4197 95.0947 63.9391 95.6273C64.5256 96.2286 64.8775 96.9331 64.9947 97.7408C65.1205 98.54 64.949 99.361 64.4802 100.204L70.0616 101.75L67.5746 104.176ZM60.3137 101.552L61.6796 100.22C62.0834 99.8259 62.2877 99.4338 62.2926 99.0435C62.3061 98.6449 62.1368 98.2651 61.7849 97.9043C61.4498 97.5607 61.0828 97.3906 60.6839 97.3941C60.2936 97.3892 59.8966 97.5837 59.4928 97.9775L58.1269 99.3097L60.3137 101.552ZM78.0175 90.8728L74.6413 94.1656L75.6585 96.2913L73.3519 98.541L67.8024 86.3027L70.3538 83.8143L82.4495 89.6681L80.1171 91.9429L78.0175 90.8728ZM75.7916 89.7249L71.4405 87.5066L73.5623 91.8991L75.7916 89.7249ZM85.6921 68.8548L91.3061 81.0302L88.5485 83.7197L76.5173 77.8031L78.8625 75.5157L87.7656 80.1585L83.3597 71.1295L85.6921 68.8548ZM91.3551 63.3316L96.6336 68.7437C97.1615 69.285 97.701 69.5717 98.2522 69.6041C98.8033 69.6364 99.3367 69.4012 99.8521 68.8985C100.368 68.3958 100.62 67.8644 100.61 67.3042C100.6 66.744 100.331 66.1933 99.8036 65.6521L94.5251 60.2399L96.7286 58.0908L101.995 63.4901C102.782 64.2976 103.276 65.1481 103.477 66.0417C103.678 66.9352 103.625 67.8086 103.317 68.6618C103.018 69.5067 102.512 70.2768 101.799 70.9722C101.086 71.6676 100.312 72.1544 99.477 72.4325C98.6421 72.6936 97.7891 72.7041 96.9181 72.4641C96.0386 72.2155 95.2051 71.6875 94.4175 70.88L89.1516 65.4807L91.3551 63.3316ZM106.523 48.5383L112.53 54.6978C113.46 55.6514 113.906 56.6498 113.868 57.6931C113.838 58.728 113.368 59.6895 112.457 60.5777C111.503 61.5077 110.475 61.9828 109.371 62.0029C108.268 62.0231 107.23 61.5349 106.258 60.5384L108.449 58.4018C108.818 58.7798 109.176 58.9922 109.523 59.039C109.862 59.0771 110.178 58.9538 110.47 58.6689C110.736 58.4092 110.858 58.1222 110.837 57.808C110.815 57.4937 110.645 57.1734 110.327 56.8469L104.319 50.6874L106.523 48.5383ZM114.805 43.9051L116.59 45.7349L119.541 42.8569L121.2 44.5578L118.249 47.4359L120.184 49.4203L123.522 46.1652L125.244 47.9306L119.703 53.3348L110.88 44.2888L116.421 38.8846L118.143 40.65L114.805 43.9051ZM130.673 24.9844L139.496 34.0304L137.292 36.1795L132.001 30.7545L135.269 38.1527L133.491 39.887L126.151 36.4348L131.455 41.8727L129.251 44.0218L120.429 34.9758L123.032 32.4371L131.678 36.2239L128.083 27.5105L130.673 24.9844ZM138.76 20.5417L140.545 22.3715L143.496 19.4935L145.155 21.1944L142.204 24.0725L144.139 26.0569L147.477 22.8018L149.199 24.5672L143.658 29.9714L134.835 20.9254L140.376 15.5212L142.098 17.2866L138.76 20.5417Z"
								fill="#222E27" />
							<path
								d="M204.633 0.000273138L191.663 12.97L214 12.97L204.633 0.000273138Z"
								fill="#9BEABB" />
						</svg>
					</div>
					<NuxtPicture
						class="background-image"
						src="/konfigurator-bg.jpg"
						:imgAttrs="{ style: 'width:100%; height:100%; object-fit:cover;' }"
						loading="lazy" />
					<div class="columns col-2">
						<div class="column">
							<h2>Zkuste si nakofigurovat váš Shoptet na míru</h2>
							<p>
								<strong>Zaberete jo jen chvílku</strong> (pár drag&amp;drop),
								<strong>dáte nám váš email a my vám obratem pošleme orientační nabídku.</strong> Kromě toho máte jedinečnou
								příležitost poznat, na čem závisí a z jakých kroků se skládá tvorba skutečně úspěšného e-shopu na Shoptetu.
							</p>
							<BtnSecondary
								class="disabled"
								to="#"
								text="Přejít na konfigurátor"></BtnSecondary>
						</div>
						<div class="column"></div>
					</div>
				</div>
			</div>
		</section> -->
		<section
			id="kontakt"
			class="no-margin">
			<ContactForm />
		</section>
	</main>
</template>
<script setup>
	const screenWidth = useState('screenWidth')
</script>
<style lang="scss" scoped>
	ul.checked {
		padding: 0;
		margin: 0 0 20px;
		list-style: none;
		li {
			display: flex;
			align-items: center;
			gap: 10px;
			margin-bottom: 0.4em;
			&::before {
				content: url(/list-marker.svg);
			}
		}
	}
	.shoptet-sluzby-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 15px;
		.item {
			position: relative;
			aspect-ratio: 1;
			&.large {
				grid-column-end: span 2;
				grid-row-end: span 2;
				align-self: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 20px;
				h2 {
					margin: em(20, 48) 0 0;
				}
				p {
					font-size: 1.5rem;
					margin-top: 0;
				}
			}
			&:not(.image):not(.large) {
				padding: 50px;
				display: flex;
				align-items: center;
				cursor: pointer;
				&:hover,
				&:focus {
					.info {
						max-height: 400px;
						padding: 50px;
					}
				}
			}
			h3 {
				font-size: 1.5rem;
				margin: em(20, 24) 0 0;
			}
			.init {
				text-align: center;
			}
			.info {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				height: 100%;
				text-align: center;
				padding: 0 50px;
				max-height: 0;
				overflow: hidden;
				display: flex;
				align-items: center;
				transition: all 0.15s ease-in-out;
				background-color: #59dc8e;
				p {
					line-height: 1.75em;
				}
			}
			&:nth-of-type(2),
			&:nth-of-type(5),
			&:nth-of-type(6),
			&:nth-of-type(8) {
				background-color: rgba($color-font, 0.05);
			}
			&:nth-of-type(3),
			&:nth-of-type(9) {
				background-color: rgba($color-font, 0.1);
			}
		}
	}
	.banner-link {
		color: $color-font;
		text-decoration: none;
	}
	.banner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 50px;
		padding: 40px 100px;
		& > div {
			flex: 0 1 auto;
		}
		.banner__logo {
			max-width: 175px;
		}
		.banner__info {
			font-size: rem(24);
			position: relative;
			z-index: 1;
			strong {
				display: block;
				font-size: rem(56);
			}
		}
		.banner__arrow {
			svg {
				fill: $color-font;
			}
		}
		.banner__mockup {
			margin: -30px 0 -30px -100px;
			background: radial-gradient(at center, #fff 0, transparent 80%);
			transition: all 0.15s ease-in-out;
		}
		&:hover,
		&:focus {
			.banner__mockup {
				transform: scale(1.1);
			}
		}
	}
	.proc-shoptet {
		h2 {
			margin-top: 0;
			margin-bottom: em(10, 48);
		}
		h3 {
			font-size: 1.5rem;
		}
	}
	.vyhody {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 70px 50px;
		margin: 40px 0 80px;
		padding: 0;
		list-style: none;
		counter-reset: vyhody;
		li {
			counter-increment: vyhody;
			line-height: 1.75em;
			&::before {
				content: '0' counter(vyhody);
				display: block;
				color: $color-accent;
				font-size: 2rem;
				line-height: 1.5em;
				font-weight: 700;
			}
		}
	}
	.systemy {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		gap: 20px;
		flex-wrap: wrap;
		margin: 40px 0;
		picture {
			filter: grayscale(1);
			transition: all 0.15s ease-in-out;
			&:hover,
			&:focus {
				filter: none;
			}
		}
	}
	.konfigurator {
		position: relative;
		padding: 100px;
		.columns {
			position: relative;
		}
		.background-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		h2 {
			margin: 0;
		}
		p {
			margin-bottom: em(26);
		}
		.pripravujeme {
			position: absolute;
			top: -12px;
			left: -12px;
			z-index: 1;
		}
	}
	@media (min-width: 701px) {
		.mobile-mockup {
			display: none;
		}
	}
	@media (max-width: 1360px) {
		.banner {
			flex-wrap: wrap;
			justify-content: center;
			text-align: center;
			.banner__logo,
			.banner__info,
			.banner__mockup,
			.banner__arrow {
				flex-basis: calc(50% - 25px);
				max-width: calc(50% - 25px);
			}
			.banner__mockup {
				margin: 0;
			}
		}
	}
	@media (max-width: 991px) {
		.konfigurator {
			h2 {
				font-size: rem(22);
			}
		}
	}
	@media (max-width: 767px) {
		.konfigurator {
			padding: 40px 20px;
			.pripravujeme {
				display: none;
			}
		}
	}
	@media (max-width: 700px) {
		.banner {
			flex-direction: column;
			padding: 40px 20px;
			.banner__logo,
			.banner__info,
			.banner__mockup,
			.banner__arrow {
				flex-basis: 100%;
				max-width: unset;
			}
		}
		.proc-shoptet {
			.columns .column:first-of-type {
				display: none;
			}
			h2,
			p.large {
				text-align: center;
			}
		}
		.vyhody {
			gap: 20px;
			margin: 30px 0;
		}
	}
	@media (max-width: 680px) {
		.shoptet-sluzby-grid {
			grid-template-columns: repeat(2, minmax(1px, 1fr));
			.item {
				h3 {
					font-size: 1rem;
				}
				svg {
					max-width: 30px;
					max-height: 30px;
				}
				.info {
					padding: 0 20px;
				}
				&:not(.image):not(.large) {
					padding: 20px;
					&:hover,
					&:focus {
						.info {
							padding: 20px;
						}
					}
				}
				&.large {
					text-align: center;
					.btn-secondary {
						align-self: center;
					}
				}
			}
		}
		.systemy {
			display: grid;
			grid-template-columns: repeat(3, minmax(1px, 1fr));
			background-color: rgba($color-font, 0.05);
			padding: 20px;
			picture:nth-of-type(n + 7) {
				display: none;
			}
		}
	}
	@media (max-width: 580px) {
		.shoptet-sluzby-grid {
			grid-template-columns: minmax(1px, 1fr);
			.item {
				&.large {
					grid-column-end: unset;
				}
				&.image {
					display: none;
				}
				&:not(.large):not(.image) {
					background-color: transparent;
					aspect-ratio: unset;
					flex-direction: column;
					align-items: stretch;
					padding: 0;
					.init {
						display: flex;
						align-items: center;
						gap: 10px;
						padding: 10px 0;
						h3 {
							margin: 0;
						}
					}
					.info {
						position: initial;
						text-align: left;
						background-color: rgba($color-font, 0.05);
						p {
							margin: 0;
						}
					}
				}
			}
		}
	}
</style>

<header class="bg-hub-blue text-hub-white shadow-lg">
    <nav class="container-max" aria-label="Main Navigation">
        <div class="flex justify-between items-center py-4">
            <a href="/" class="flex items-center space-x-3" aria-label="Engrave Everything - Home">
                <div class="relative w-20 h-20 md:w-24 md:h-24">
                    <img src="/images/engrave-everything-logo.png" alt="Engrave Everything Logo" class="w-full h-full object-contain">
                </div>
            </a>

            <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="hover:text-hub-silver transition-colors">Home</a>
                <div class="relative group">
                    <button class="hover:text-hub-silver transition-colors" aria-haspopup="true">
                        Industries
                    </button>
                    <div class="absolute top-full left-0 mt-2 w-48 bg-hub-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu">
                        <a href="/medical.php" class="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg" role="menuitem">Medical</a>
                        <a href="/professional.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Professional</a>
                        <a href="/restaurants.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Restaurants</a>
                        <a href="/real-estate.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Real Estate</a>
                        <a href="/agriculture.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Agriculture</a>
                        <a href="/retail.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Retail</a>
                        <a href="/industrial.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Industrial</a>
                        <a href="/tech.php" class="block px-4 py-2 hover:bg-gray-100" role="menuitem">Technology</a>
                        <a href="/hospitality.php" class="block px-4 py-2 hover:bg-gray-100 last:rounded-b-lg" role="menuitem">Hospitality</a>
                    </div>
                </div>
                <a href="/gifts.php" class="hover:text-hub-silver transition-colors">Gifts</a>
                <a href="/services.php" class="hover:text-hub-silver transition-colors">Services</a>
                <a href="/contact.php" class="hover:text-hub-silver transition-colors">Contact</a>
                <a href="tel:" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2" aria-label="Call us now">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>Call Now</span>
                </a>
            </div>

            <div class="md:hidden flex items-center space-x-3">
                <a href="tel:" class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1" aria-label="Call us now">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span class="text-sm">Call</span>
                </a>
                <button onclick="toggleMobileMenu()" class="md:hidden" aria-label="Toggle navigation menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div id="mobile-menu" class="md:hidden pb-4 hidden" role="menu">
            <a href="/" class="block py-2 hover:text-hub-silver" role="menuitem">Home</a>
            <a href="/medical.php" class="block py-2 hover:text-hub-silver" role="menuitem">Medical</a>
            <a href="/professional.php" class="block py-2 hover:text-hub-silver" role="menuitem">Professional</a>
            <a href="/restaurants.php" class="block py-2 hover:text-hub-silver" role="menuitem">Restaurants</a>
            <a href="/real-estate.php" class="block py-2 hover:text-hub-silver" role="menuitem">Real Estate</a>
            <a href="/agriculture.php" class="block py-2 hover:text-hub-silver" role="menuitem">Agriculture</a>
            <a href="/retail.php" class="block py-2 hover:text-hub-silver" role="menuitem">Retail</a>
            <a href="/industrial.php" class="block py-2 hover:text-hub-silver" role="menuitem">Industrial</a>
            <a href="/tech.php" class="block py-2 hover:text-hub-silver" role="menuitem">Technology</a>
            <a href="/hospitality.php" class="block py-2 hover:text-hub-silver" role="menuitem">Hospitality</a>
            <a href="/gifts.php" class="block py-2 hover:text-hub-silver" role="menuitem">Gifts</a>
            <a href="/services.php" class="block py-2 hover:text-hub-silver" role="menuitem">Services</a>
            <a href="/contact.php" class="block py-2 hover:text-hub-silver" role="menuitem">Contact</a>
        </div>
    </nav>
</header>

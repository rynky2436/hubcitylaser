<?php
$page_title = "Laser Engraving Services Hagerstown MD | Wood Metal Glass Cutting | Engrave Everything";
$page_description = "Complete laser engraving and cutting services in Hagerstown Maryland. Custom signs, plaques, nameplates, equipment tags, promotional items on wood, metal, glass. Serving MD, DE, VA businesses.";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <meta name="description" content="<?php echo $page_description; ?>">
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon.png" type="image/png">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'hub-blue': '#002B5C',
                        'hub-silver': '#A5ACAF',
                        'hub-white': '#FFFFFF'
                    }
                }
            }
        }
    </script>
    
    <!-- Custom CSS -->
    <style>
        .btn-primary { @apply bg-hub-blue text-hub-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200; }
        .btn-secondary { @apply bg-hub-silver text-hub-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200; }
        .section-padding { @apply py-16 px-4 sm:px-6 lg:px-8; }
        .container-max { @apply max-w-7xl mx-auto; }
        html { scroll-behavior: smooth; }
        body { font-family: system-ui, -apple-system, sans-serif; }
    </style>
</head>
<body class="bg-hub-white text-gray-900">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>
    
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center" style="background-image: url('/images/materials-wood-glass.png');">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <div class="relative z-10 container-max text-center text-white">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">Complete Laser Engraving Services Hagerstown Maryland</h1>
                <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Comprehensive laser engraving and cutting services for businesses and individuals in Hagerstown, MD. From professional signage to personalized gifts, we deliver precision laser craftsmanship on wood, metal, glass, and all materials for every project throughout Maryland, Delaware, and Virginia.</p>
            </div>
        </section>

        <section class="section-padding">
            <div class="container-max">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-hub-blue mb-4">Professional Laser Engraving on Wood, Metal, Glass & Everything</h2>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                        Engrave Everything provides expert laser engraving and cutting services on all materials. Located in
                        Hagerstown, Maryland, we serve businesses throughout the tri-state area with precision laser solutions.
                    </p>
                </div>

                <!-- Services Grid -->
                <div class="space-y-12 mb-12">
                    <!-- Custom Business Signage -->
                    <div id="custom-business-signage-solutions" class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div class="aspect-video relative rounded-lg overflow-hidden">
                                <img src="/images/professional.png" alt="Professional office signs and nameplates laser engraved Hagerstown MD" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-semibold text-hub-blue mb-4">Custom Business Signage Solutions</h3>
                            <ul class="space-y-3">
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Custom business signs laser engraved on wood, metal, glass
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Office door signs and professional nameplates
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Directional signage and wayfinding displays
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Safety and compliance signs for Maryland businesses
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Wayfinding displays laser cut for commercial properties
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Recognition & Awards -->
                    <div id="recognition-awards-laser-engraving" class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-col-dense">
                        <div class="lg:col-start-2">
                            <div class="aspect-video relative rounded-lg overflow-hidden">
                                <img src="/images/technology.png" alt="Corporate awards and achievement plaques laser engraved Maryland" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <div class="lg:col-start-1 lg:row-start-1">
                            <h3 class="text-2xl font-semibold text-hub-blue mb-4">Recognition & Awards Laser Engraving</h3>
                            <ul class="space-y-3">
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Achievement plaques laser engraved on premium materials
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Employee recognition awards for MD DE VA companies
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Sports trophies and athletic awards laser cutting
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Academic awards and graduation recognition
                                </li>
                                <li class="text-gray-700 flex items-start">
                                    <span class="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Corporate milestone recognition laser engraved plaques
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Continue with other services... -->
                </div>

                <!-- Materials Section -->
                <div class="bg-gray-50 p-8 rounded-lg mb-12">
                    <h3 class="text-2xl font-bold text-hub-blue mb-6 text-center">Materials We Laser Engrave in Hagerstown MD</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="aspect-square relative mb-4 rounded-lg overflow-hidden">
                                <img src="/images/materials-wood-glass.png" alt="Wood laser engraving materials Hagerstown MD" class="w-full h-full object-cover">
                            </div>
                            <h4 class="font-semibold text-hub-blue mb-2">Wood Laser Engraving</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>Hardwood</li>
                                <li>Bamboo</li>
                                <li>Plywood</li>
                                <li>MDF</li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <div class="aspect-square relative mb-4 rounded-lg overflow-hidden">
                                <img src="/images/materials-metal.png" alt="Metal laser cutting services Maryland" class="w-full h-full object-cover">
                            </div>
                            <h4 class="font-semibold text-hub-blue mb-2">Metal Laser Cutting</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>Stainless Steel</li>
                                <li>Aluminum</li>
                                <li>Brass</li>
                                <li>Anodized Metal</li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <div class="aspect-square relative mb-4 rounded-lg overflow-hidden">
                                <img src="/images/materials-glass-etching.png" alt="Glass laser etching services Hagerstown" class="w-full h-full object-cover">
                            </div>
                            <h4 class="font-semibold text-hub-blue mb-2">Glass Laser Etching</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>Tempered Glass</li>
                                <li>Mirrors</li>
                                <li>Glassware</li>
                                <li>Windows</li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <div class="aspect-square relative mb-4 rounded-lg overflow-hidden">
                                <img src="/images/materials-restaurant-hospitality.png" alt="Restaurant and hospitality materials laser engraved" class="w-full h-full object-cover">
                            </div>
                            <h4 class="font-semibold text-hub-blue mb-2">Other Materials</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li>Acrylic</li>
                                <li>Plastic</li>
                                <li>Leather</li>
                                <li>Everything!</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="bg-hub-blue text-hub-white p-8 rounded-lg text-center">
                    <h3 class="text-2xl font-bold mb-4">Ready to Start Your Laser Engraving Project in Hagerstown MD?</h3>
                    <p class="text-blue-100 mb-6">
                        Contact Engrave Everything today to discuss your laser engraving needs and receive a personalized quote
                        for wood, metal, glass cutting and engraving services in Maryland, Delaware, and Virginia.
                    </p>
                    <a href="/contact.php" class="btn-secondary">Get Your Free Laser Engraving Quote</a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Mobile Menu Toggle Script -->
    <script>
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        }
    </script>
</body>
</html>

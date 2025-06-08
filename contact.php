<?php
$page_title = "Contact Engrave Everything Hagerstown MD";
$page_description = "Ready to discuss your laser engraving project? Get in touch with Hagerstown Maryland's premier laser engraving service for a personalized quote on wood, metal, glass cutting and engraving. Serving businesses throughout Maryland, Delaware, and Virginia.";

// Handle form submission
$message = '';
$message_type = '';

if ($_POST) {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $project_message = trim($_POST['message'] ?? '');
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($project_message)) {
        $message = "All fields are required.";
        $message_type = "error";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "Invalid email format.";
        $message_type = "error";
    } else {
        // Process form (send email, save to database, etc.)
        // For now, we'll just show a success message
        $message = "Thank you for your message. We will contact you soon!";
        $message_type = "success";
        
        // Clear form data on success
        $name = $email = $project_message = '';
        
        // Here you would typically:
        // 1. Send email notification
        // 2. Save to database
        // 3. Integrate with CRM
    }
}
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
    <link rel="shortcut icon" href="/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="/favicon.png">
    
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
        .btn-primary {
            @apply bg-hub-blue text-hub-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200;
        }
        .section-padding {
            @apply py-16 px-4 sm:px-6 lg:px-8;
        }
        .container-max {
            @apply max-w-7xl mx-auto;
        }
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: system-ui, -apple-system, sans-serif;
        }
    </style>
</head>
<body class="bg-hub-white text-gray-900">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>
    
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center" style="background-image: url('/images/professional.png');">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <div class="relative z-10 container-max text-center text-white">
                <h1 class="text-4xl md:text-6xl font-bold mb-6"><?php echo $page_title; ?></h1>
                <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"><?php echo $page_description; ?></p>
            </div>
        </section>

        <section class="section-padding">
            <div class="container-max">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 class="text-3xl font-bold text-hub-blue mb-6">Get Your Free Laser Engraving Quote</h2>
                        <p class="text-gray-700 mb-6">
                            Contact Engrave Everything for professional laser engraving services in Hagerstown, Maryland. We provide
                            laser cutting and engraving on wood, metal, glass, and all materials for businesses throughout MD, DE,
                            and VA.
                        </p>

                        <div class="mb-8">
                            <a href="tel:" class="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white bg-hub-blue rounded-lg hover:bg-opacity-90 transition-colors" aria-label="Call us now">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span>Call Us Now</span>
                            </a>
                        </div>

                        <form method="POST" class="space-y-6" aria-label="Contact form">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($name ?? ''); ?>" required aria-required="true" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hub-blue focus:border-transparent">
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($email ?? ''); ?>" required aria-required="true" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hub-blue focus:border-transparent">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Laser Engraving Project Details *</label>
                                <textarea id="message" name="message" required aria-required="true" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hub-blue focus:border-transparent" placeholder="Please describe your laser engraving project including materials (wood, metal, glass), quantities, timeline, and any specific requirements..."><?php echo htmlspecialchars($project_message ?? ''); ?></textarea>
                            </div>

                            <button type="submit" class="btn-primary w-full">Get Free Laser Engraving Quote</button>

                            <?php if ($message): ?>
                                <div class="p-4 rounded-lg <?php echo $message_type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'; ?>" role="alert" aria-live="assertive">
                                    <?php echo htmlspecialchars($message); ?>
                                </div>
                            <?php endif; ?>
                        </form>
                    </div>

                    <div>
                        <h3 class="text-2xl font-bold text-hub-blue mb-6">Why Choose Engrave Everything Hagerstown MD?</h3>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <span class="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Precision Laser Craftsmanship</h4>
                                    <p class="text-gray-600">
                                        State-of-the-art laser technology ensures perfect results on wood, metal, glass, and all materials
                                        every time.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <span class="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Fast Turnaround Maryland DE VA</h4>
                                    <p class="text-gray-600">
                                        Quick project completion for businesses throughout Maryland, Delaware, and Virginia without
                                        compromising quality.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <span class="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Competitive Laser Engraving Pricing</h4>
                                    <p class="text-gray-600">
                                        Fair, transparent pricing for laser engraving projects of all sizes in the Hagerstown MD area.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <span class="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <div>
                                    <h4 class="font-semibold text-gray-900">Expert Laser Consultation</h4>
                                    <p class="text-gray-600">
                                        Professional guidance on materials, design, and laser engraving techniques to bring your vision to
                                        life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                            <h4 class="font-semibold text-hub-blue mb-3">Service Areas</h4>
                            <ul class="text-gray-700 space-y-1">
                                <li>• Hagerstown, Maryland (Primary Location)</li>
                                <li>• Maryland (MD) - Statewide Service</li>
                                <li>• Delaware (DE) - All Counties</li>
                                <li>• Virginia (VA) - Northern Virginia</li>
                                <li>• Washington County MD</li>
                                <li>• Frederick County MD</li>
                            </ul>
                        </div>

                        <div class="mt-6 p-6 bg-hub-blue text-hub-white rounded-lg">
                            <h4 class="font-semibold mb-3">Materials We Laser Engrave</h4>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <div>• Wood laser engraving</div>
                                <div>• Metal laser cutting</div>
                                <div>• Glass laser etching</div>
                                <div>• Acrylic laser cutting</div>
                                <div>• Plastic laser marking</div>
                                <div>• Everything else!</div>
                            </div>
                        </div>
                    </div>
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

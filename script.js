// script.js

// Complete phone database with 30+ models and detailed camera information
const phones = {
    // Apple iPhones
    iphone14: {
        id: 'iphone14',
        name: "iPhone 14",
        brand: "Apple",
        price: "$799",
        display: "6.1-inch Super Retina XDR (2532x1170), 60Hz, HDR10, Dolby Vision, 800 nits",
        processor: "A15 Bionic (6-core CPU, 5-core GPU, 16-core Neural Engine)",
        ram: "6GB LPDDR4X",
        storage: "128GB NVMe",
        camera: "12MP Dual Camera System",
        cameraDetails: "Main: 12MP f/1.5, 1.9µm, sensor-shift OIS, 100% Focus Pixels | Ultra Wide: 12MP f/2.4, 120° FOV | Front: 12MP f/1.9, autofocus | Video: 4K Dolby Vision HDR, Cinematic mode, Action mode",
        battery: "3279mAh, 20W wired, 15W MagSafe, 7.5W Qi",
        os: "iOS 16 (upgradable to iOS 17)",
        rating: 4.7,
        icon: "🍎",
        year: 2022,
        weight: "172g",
        dimensions: "146.7 x 71.5 x 7.8 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Midnight, Purple, Starlight, Blue, Red"
    },
    iphone14pro: {
        id: 'iphone14pro',
        name: "iPhone 14 Pro",
        brand: "Apple",
        price: "$999",
        display: "6.1-inch Super Retina XDR Pro (2556x1179), 120Hz ProMotion, Always-On, 2000 nits peak",
        processor: "A16 Bionic (6-core CPU, 5-core GPU, 16-core Neural Engine)",
        ram: "6GB LPDDR5",
        storage: "256GB NVMe",
        camera: "48MP Triple Camera System",
        cameraDetails: "Main: 48MP f/1.78, 2nd-gen sensor-shift OIS, 100% Focus Pixels | Ultra Wide: 12MP f/2.2, 120° FOV | Telephoto: 12MP f/2.8, 3x optical zoom | LiDAR Scanner | Front: 12MP f/1.9, autofocus | Video: 4K Cinematic mode, ProRes, Action mode",
        battery: "3200mAh, 20W wired, 15W MagSafe, 7.5W Qi",
        os: "iOS 16 (upgradable to iOS 17)",
        rating: 4.9,
        icon: "🍎",
        year: 2022,
        weight: "206g",
        dimensions: "147.5 x 71.5 x 7.85 mm",
        build: "Glass front/back, stainless steel frame, IP68",
        colors: "Deep Purple, Gold, Silver, Space Black"
    },
    iphone13: {
        id: 'iphone13',
        name: "iPhone 13",
        brand: "Apple",
        price: "$699",
        display: "6.1-inch Super Retina XDR (2532x1170), 60Hz, HDR10, Dolby Vision, 800 nits",
        processor: "A15 Bionic (6-core CPU, 4-core GPU, 16-core Neural Engine)",
        ram: "4GB LPDDR4X",
        storage: "128GB NVMe",
        camera: "12MP Dual Camera System",
        cameraDetails: "Main: 12MP f/1.6, 1.7µm, sensor-shift OIS | Ultra Wide: 12MP f/2.4, 120° FOV | Front: 12MP f/2.2 | Video: 4K Dolby Vision HDR, Cinematic mode",
        battery: "3240mAh, 20W wired, 15W MagSafe, 7.5W Qi",
        os: "iOS 15 (upgradable to iOS 17)",
        rating: 4.8,
        icon: "🍎",
        year: 2021,
        weight: "174g",
        dimensions: "146.7 x 71.5 x 7.65 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Pink, Blue, Midnight, Starlight, Red"
    },
    iphone13mini: {
        id: 'iphone13mini',
        name: "iPhone 13 Mini",
        brand: "Apple",
        price: "$599",
        display: "5.4-inch Super Retina XDR (2340x1080), 60Hz, HDR10, Dolby Vision, 800 nits",
        processor: "A15 Bionic (6-core CPU, 4-core GPU, 16-core Neural Engine)",
        ram: "4GB LPDDR4X",
        storage: "128GB NVMe",
        camera: "12MP Dual Camera System",
        cameraDetails: "Main: 12MP f/1.6, 1.7µm, sensor-shift OIS | Ultra Wide: 12MP f/2.4, 120° FOV | Front: 12MP f/2.2 | Video: 4K Dolby Vision HDR, Cinematic mode",
        battery: "2438mAh, 20W wired, 15W MagSafe, 7.5W Qi",
        os: "iOS 15 (upgradable to iOS 17)",
        rating: 4.6,
        icon: "🍎",
        year: 2021,
        weight: "141g",
        dimensions: "131.5 x 64.2 x 7.65 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Pink, Blue, Midnight, Starlight, Red"
    },
    iphone12: {
        id: 'iphone12',
        name: "iPhone 12",
        brand: "Apple",
        price: "$599",
        display: "6.1-inch Super Retina XDR (2532x1170), 60Hz, HDR10, Dolby Vision, 625 nits",
        processor: "A14 Bionic (6-core CPU, 4-core GPU, 16-core Neural Engine)",
        ram: "4GB LPDDR4",
        storage: "64GB NVMe",
        camera: "12MP Dual Camera System",
        cameraDetails: "Main: 12MP f/1.6, 1.4µm, OIS | Ultra Wide: 12MP f/2.4, 120° FOV | Front: 12MP f/2.2 | Video: 4K Dolby Vision HDR",
        battery: "2815mAh, 20W wired, 15W MagSafe, 7.5W Qi",
        os: "iOS 14 (upgradable to iOS 17)",
        rating: 4.6,
        icon: "🍎",
        year: 2020,
        weight: "164g",
        dimensions: "146.7 x 71.5 x 7.4 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Black, White, Red, Green, Blue, Purple"
    },
    iphoneSE: {
        id: 'iphoneSE',
        name: "iPhone SE (2022)",
        brand: "Apple",
        price: "$429",
        display: "4.7-inch Retina HD (1334x750), 60Hz, True Tone, 625 nits",
        processor: "A15 Bionic (6-core CPU, 4-core GPU, 16-core Neural Engine)",
        ram: "4GB LPDDR4X",
        storage: "64GB NVMe",
        camera: "12MP Single Camera",
        cameraDetails: "Main: 12MP f/1.8, 1.7µm, OIS, Smart HDR 4 | Front: 7MP f/2.2 | Video: 4K, Cinematic stabilization",
        battery: "2018mAh, 20W wired, 7.5W Qi wireless",
        os: "iOS 15 (upgradable to iOS 17)",
        rating: 4.4,
        icon: "🍎",
        year: 2022,
        weight: "144g",
        dimensions: "138.4 x 67.3 x 7.3 mm",
        build: "Glass front/back, aluminum frame, IP67",
        colors: "Midnight, Starlight, Red"
    },

    // Samsung Galaxy
    s23: {
        id: 's23',
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        price: "$799",
        display: "6.1-inch Dynamic AMOLED 2X (2340x1080), 120Hz, HDR10+, 1750 nits peak, Always-On",
        processor: "Snapdragon 8 Gen 2 for Galaxy (4nm, 3.36GHz)",
        ram: "8GB LPDDR5X",
        storage: "128GB UFS 4.0",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.8, 1.0µm, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 120° FOV | Telephoto: 10MP f/2.4, 3x optical zoom | Front: 12MP f/2.2 | Video: 8K@24fps, 4K@60fps, Super Steady",
        battery: "3900mAh, 25W wired, 15W wireless, 4.5W reverse wireless",
        os: "Android 13 (One UI 5.1, upgradable to Android 14)",
        rating: 4.8,
        icon: "📱",
        year: 2023,
        weight: "168g",
        dimensions: "146.3 x 70.9 x 7.6 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Phantom Black, Cream, Green, Lavender"
    },
    s23ultra: {
        id: 's23ultra',
        name: "Samsung Galaxy S23 Ultra",
        brand: "Samsung",
        price: "$1199",
        display: "6.8-inch Dynamic AMOLED 2X (3088x1440), 120Hz LTPO, HDR10+, 1750 nits peak, Always-On",
        processor: "Snapdragon 8 Gen 2 for Galaxy (4nm, 3.36GHz)",
        ram: "12GB LPDDR5X",
        storage: "512GB UFS 4.0",
        camera: "200MP Quad Camera System",
        cameraDetails: "Main: 200MP f/1.7, 0.6µm, Pixel Binning, Laser AF, OIS | Ultra Wide: 12MP f/2.2, 120° FOV | Telephoto 1: 10MP f/2.4, 3x optical | Telephoto 2: 10MP f/4.9, 10x optical | Space Zoom 100x | Front: 12MP f/2.2 | Video: 8K@30fps, 4K@60fps, Super Steady",
        battery: "5000mAh, 45W wired, 15W wireless, 4.5W reverse wireless",
        os: "Android 13 (One UI 5.1, upgradable to Android 14)",
        rating: 4.9,
        icon: "📱",
        year: 2023,
        weight: "234g",
        dimensions: "163.4 x 78.1 x 8.9 mm",
        build: "Glass front/back, titanium frame, IP68, S-Pen",
        colors: "Phantom Black, Cream, Green, Lavender, Red, Sky Blue"
    },
    s22: {
        id: 's22',
        name: "Samsung Galaxy S22",
        brand: "Samsung",
        price: "$699",
        display: "6.1-inch Dynamic AMOLED 2X (2340x1080), 120Hz, HDR10+, 1300 nits peak, Always-On",
        processor: "Snapdragon 8 Gen 1 (4nm) or Exynos 2200",
        ram: "8GB LPDDR5",
        storage: "128GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.8, 1.0µm, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 120° FOV | Telephoto: 10MP f/2.4, 3x optical zoom | Front: 10MP f/2.2 | Video: 8K@24fps, 4K@60fps",
        battery: "3700mAh, 25W wired, 15W wireless, 4.5W reverse wireless",
        os: "Android 12 (One UI 4.1, upgradable to Android 14)",
        rating: 4.7,
        icon: "📱",
        year: 2022,
        weight: "167g",
        dimensions: "146 x 70.6 x 7.6 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Phantom Black, White, Pink Gold, Green, Graphite"
    },
    s22ultra: {
        id: 's22ultra',
        name: "Samsung Galaxy S22 Ultra",
        brand: "Samsung",
        price: "$999",
        display: "6.8-inch Dynamic AMOLED 2X (3088x1440), 120Hz LTPO, HDR10+, 1750 nits peak",
        processor: "Snapdragon 8 Gen 1 (4nm) or Exynos 2200",
        ram: "12GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "108MP Quad Camera System",
        cameraDetails: "Main: 108MP f/1.8, 0.8µm, Laser AF, OIS | Ultra Wide: 12MP f/2.2, 120° FOV | Telephoto 1: 10MP f/2.4, 3x optical | Telephoto 2: 10MP f/4.9, 10x optical | Space Zoom 100x | Front: 40MP f/2.2 | Video: 8K@24fps, 4K@60fps",
        battery: "5000mAh, 45W wired, 15W wireless, 4.5W reverse wireless",
        os: "Android 12 (One UI 4.1, upgradable to Android 14)",
        rating: 4.8,
        icon: "📱",
        year: 2022,
        weight: "229g",
        dimensions: "163.3 x 77.9 x 8.9 mm",
        build: "Glass front/back, aluminum frame, IP68, S-Pen",
        colors: "Phantom Black, White, Burgundy, Green, Graphite"
    },
    zfold4: {
        id: 'zfold4',
        name: "Samsung Galaxy Z Fold 4",
        brand: "Samsung",
        price: "$1799",
        display: "Main: 7.6-inch Dynamic AMOLED 2X (2176x1812), 120Hz, Cover: 6.2-inch Dynamic AMOLED (2316x904)",
        processor: "Snapdragon 8+ Gen 1 (4nm)",
        ram: "12GB LPDDR5",
        storage: "512GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.8, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 123° FOV | Telephoto: 10MP f/2.4, 3x optical | Under-display: 4MP f/1.8 | Cover: 10MP f/2.2 | Video: 8K@24fps, 4K@60fps",
        battery: "4400mAh, 25W wired, 15W wireless, 4.5W reverse wireless",
        os: "Android 12L (One UI 4.1.1, upgradable to Android 14)",
        rating: 4.6,
        icon: "📱",
        year: 2022,
        weight: "263g",
        dimensions: "Folded: 155.1 x 67.1 x 15.8 mm, Unfolded: 155.1 x 130.1 x 6.3 mm",
        build: "Glass front, plastic back, aluminum frame, IPX8",
        colors: "Graygreen, Phantom Black, Beige, Burgundy"
    },
    zflip4: {
        id: 'zflip4',
        name: "Samsung Galaxy Z Flip 4",
        brand: "Samsung",
        price: "$999",
        display: "Main: 6.7-inch Dynamic AMOLED 2X (2640x1080), 120Hz, Cover: 1.9-inch Super AMOLED",
        processor: "Snapdragon 8+ Gen 1 (4nm)",
        ram: "8GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "12MP Dual Camera System",
        cameraDetails: "Main: 12MP f/1.8, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 123° FOV | Front: 10MP f/2.4 | Video: 4K@60fps, HDR10+",
        battery: "3700mAh, 25W wired, 15W wireless, 4.5W reverse wireless",
        os: "Android 12 (One UI 4.1.1, upgradable to Android 14)",
        rating: 4.5,
        icon: "📱",
        year: 2022,
        weight: "187g",
        dimensions: "Folded: 84.9 x 71.9 x 17.1 mm, Unfolded: 165.2 x 71.9 x 6.9 mm",
        build: "Glass front, plastic back, aluminum frame, IPX8",
        colors: "Bora Purple, Graphite, Pink Gold, Blue"
    },
    a53: {
        id: 'a53',
        name: "Samsung Galaxy A53",
        brand: "Samsung",
        price: "$449",
        display: "6.5-inch Super AMOLED (1080x2400), 120Hz, Corning Gorilla Glass 5",
        processor: "Exynos 1280 (5nm, octa-core)",
        ram: "6GB LPDDR4X",
        storage: "128GB UFS 2.2, expandable via microSD",
        camera: "64MP Quad Camera System",
        cameraDetails: "Main: 64MP f/1.8, OIS | Ultra Wide: 12MP f/2.2, 123° FOV | Macro: 5MP f/2.4 | Depth: 5MP f/2.4 | Front: 32MP f/2.2 | Video: 4K@30fps",
        battery: "5000mAh, 25W wired",
        os: "Android 12 (One UI 4.1, upgradable to Android 14)",
        rating: 4.4,
        icon: "📱",
        year: 2022,
        weight: "189g",
        dimensions: "159.6 x 74.8 x 8.1 mm",
        build: "Glass front, plastic back, plastic frame, IP67",
        colors: "Black, White, Blue, Peach"
    },

    // Google Pixel
    pixel7: {
        id: 'pixel7',
        name: "Google Pixel 7",
        brand: "Google",
        price: "$599",
        display: "6.3-inch OLED (1080x2400), 90Hz, HDR10+, 1400 nits peak, Gorilla Glass Victus",
        processor: "Google Tensor G2 (5nm, octa-core)",
        ram: "8GB LPDDR5",
        storage: "128GB UFS 3.1",
        camera: "50MP Dual Camera System",
        cameraDetails: "Main: 50MP f/1.85, 1.2µm, Octa PD, OIS | Ultra Wide: 12MP f/2.2, 114° FOV | Front: 10.8MP f/2.2, 92.8° FOV | Video: 4K@60fps, 10-bit HDR, Magic Eraser, Photo Unblur",
        battery: "4355mAh, 20W wired, 20W wireless",
        os: "Android 13 (upgradable to Android 14)",
        rating: 4.7,
        icon: "📸",
        year: 2022,
        weight: "197g",
        dimensions: "155.6 x 73.2 x 8.7 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Obsidian, Snow, Lemongrass"
    },
    pixel7pro: {
        id: 'pixel7pro',
        name: "Google Pixel 7 Pro",
        brand: "Google",
        price: "$899",
        display: "6.7-inch OLED (1440x3120), 120Hz LTPO, HDR10+, 1500 nits peak, Gorilla Glass Victus",
        processor: "Google Tensor G2 (5nm, octa-core)",
        ram: "12GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.85, 1.2µm, Octa PD, OIS | Ultra Wide: 12MP f/2.2, 125.8° FOV | Telephoto: 48MP f/3.5, 5x optical zoom, Super Res Zoom up to 30x | Front: 10.8MP f/2.2, 92.8° FOV | Video: 4K@60fps, 10-bit HDR, Cinematic Blur",
        battery: "5000mAh, 23W wired, 23W wireless",
        os: "Android 13 (upgradable to Android 14)",
        rating: 4.8,
        icon: "📸",
        year: 2022,
        weight: "212g",
        dimensions: "162.9 x 76.6 x 8.9 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Obsidian, Snow, Hazel"
    },
    pixel6: {
        id: 'pixel6',
        name: "Google Pixel 6",
        brand: "Google",
        price: "$499",
        display: "6.4-inch OLED (1080x2340), 90Hz, HDR10+, Gorilla Glass Victus",
        processor: "Google Tensor (5nm, octa-core)",
        ram: "8GB LPDDR5",
        storage: "128GB UFS 3.1",
        camera: "50MP Dual Camera System",
        cameraDetails: "Main: 50MP f/1.85, 1.2µm, Laser AF, OIS | Ultra Wide: 12MP f/2.2, 114° FOV | Front: 8MP f/2.0 | Video: 4K@60fps, Magic Eraser",
        battery: "4614mAh, 30W wired, 21W wireless",
        os: "Android 12 (upgradable to Android 14)",
        rating: 4.6,
        icon: "📸",
        year: 2021,
        weight: "207g",
        dimensions: "158.6 x 74.8 x 8.9 mm",
        build: "Glass front, glass/plastic back, aluminum frame, IP68",
        colors: "Stormy Black, Kinda Coral, Sorta Seafoam"
    },
    pixel6a: {
        id: 'pixel6a',
        name: "Google Pixel 6a",
        brand: "Google",
        price: "$449",
        display: "6.1-inch OLED (1080x2400), 60Hz, HDR, Corning Gorilla Glass 3",
        processor: "Google Tensor (5nm, octa-core)",
        ram: "6GB LPDDR5",
        storage: "128GB UFS 3.1",
        camera: "12MP Dual Camera System",
        cameraDetails: "Main: 12.2MP f/1.7, 1.4µm, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 114° FOV | Front: 8MP f/2.0 | Video: 4K@30fps, Magic Eraser",
        battery: "4410mAh, 18W wired",
        os: "Android 12 (upgradable to Android 14)",
        rating: 4.5,
        icon: "📸",
        year: 2022,
        weight: "178g",
        dimensions: "152.2 x 71.8 x 8.9 mm",
        build: "Glass front, plastic back, aluminum frame, IP67",
        colors: "Chalk, Charcoal, Sage"
    },

    // Xiaomi
    mi12: {
        id: 'mi12',
        name: "Xiaomi 12",
        brand: "Xiaomi",
        price: "$649",
        display: "6.28-inch AMOLED (1080x2400), 120Hz, Dolby Vision, HDR10+, 1100 nits peak",
        processor: "Snapdragon 8 Gen 1 (4nm)",
        ram: "8GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.9, 1.0µm, PDAF, OIS | Ultra Wide: 13MP f/2.4, 123° FOV | Telephoto: 5MP f/2.4, 2x optical | Front: 32MP f/2.5 | Video: 8K@24fps, 4K@60fps, HDR10+",
        battery: "4500mAh, 67W wired, 50W wireless, 10W reverse wireless",
        os: "Android 12 (MIUI 13, upgradable to MIUI 14)",
        rating: 4.5,
        icon: "📱",
        year: 2022,
        weight: "180g",
        dimensions: "152.7 x 69.9 x 8.2 mm",
        build: "Glass front/back, aluminum frame",
        colors: "Gray, Blue, Purple, Green"
    },
    mi12pro: {
        id: 'mi12pro',
        name: "Xiaomi 12 Pro",
        brand: "Xiaomi",
        price: "$799",
        display: "6.73-inch AMOLED (1440x3200), 120Hz LTPO, Dolby Vision, HDR10+, 1500 nits peak",
        processor: "Snapdragon 8 Gen 1 (4nm)",
        ram: "12GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.9, 1.22µm, Dual Pixel PDAF, OIS | Ultra Wide: 50MP f/2.2, 115° FOV | Telephoto: 50MP f/1.9, 2x optical | Front: 32MP f/2.5 | Video: 8K@24fps, 4K@60fps, Dolby Vision HDR",
        battery: "4600mAh, 120W wired, 50W wireless, 10W reverse wireless",
        os: "Android 12 (MIUI 13, upgradable to MIUI 14)",
        rating: 4.6,
        icon: "📱",
        year: 2022,
        weight: "205g",
        dimensions: "163.6 x 74.6 x 8.2 mm",
        build: "Glass front/back, aluminum frame",
        colors: "Gray, Purple, Blue"
    },
    mi11: {
        id: 'mi11',
        name: "Xiaomi Mi 11",
        brand: "Xiaomi",
        price: "$749",
        display: "6.81-inch AMOLED (1440x3200), 120Hz, HDR10+, Dolby Vision, 1500 nits peak",
        processor: "Snapdragon 888 (5nm)",
        ram: "8GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "108MP Triple Camera System",
        cameraDetails: "Main: 108MP f/1.9, 0.8µm, PDAF, OIS | Ultra Wide: 13MP f/2.4, 123° FOV | Macro: 5MP f/2.4 | Front: 20MP f/2.2 | Video: 8K@30fps, 4K@60fps",
        battery: "4600mAh, 55W wired, 50W wireless, 10W reverse wireless",
        os: "Android 11 (MIUI 12.5, upgradable to MIUI 14)",
        rating: 4.5,
        icon: "📱",
        year: 2021,
        weight: "196g",
        dimensions: "164.3 x 74.6 x 8.1 mm",
        build: "Glass front/back, aluminum frame",
        colors: "Horizon Blue, Cloud White, Midnight Gray"
    },
    redminote11: {
        id: 'redminote11',
        name: "Xiaomi Redmi Note 11",
        brand: "Xiaomi",
        price: "$299",
        display: "6.43-inch AMOLED (1080x2400), 90Hz, Corning Gorilla Glass 3",
        processor: "Snapdragon 680 (6nm)",
        ram: "6GB LPDDR4X",
        storage: "128GB UFS 2.2, expandable via microSD",
        camera: "50MP Quad Camera System",
        cameraDetails: "Main: 50MP f/1.8, PDAF | Ultra Wide: 8MP f/2.2, 118° FOV | Macro: 2MP f/2.4 | Depth: 2MP f/2.4 | Front: 13MP f/2.4 | Video: 1080p@30fps",
        battery: "5000mAh, 33W wired",
        os: "Android 11 (MIUI 13)",
        rating: 4.3,
        icon: "📱",
        year: 2022,
        weight: "179g",
        dimensions: "159.9 x 73.9 x 8.1 mm",
        build: "Glass front, plastic back, plastic frame, IP53",
        colors: "Graphite Gray, Pearl White, Star Blue, Twilight Blue"
    },
    pocoF4: {
        id: 'pocoF4',
        name: "Xiaomi Poco F4",
        brand: "Xiaomi",
        price: "$399",
        display: "6.67-inch AMOLED (1080x2400), 120Hz, HDR10+, Dolby Vision, 1300 nits peak",
        processor: "Snapdragon 870 (7nm)",
        ram: "8GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "64MP Triple Camera System",
        cameraDetails: "Main: 64MP f/1.8, 0.7µm, PDAF, OIS | Ultra Wide: 8MP f/2.2, 119° FOV | Macro: 2MP f/2.4 | Front: 20MP f/2.4 | Video: 4K@30fps, 1080p@60fps",
        battery: "4500mAh, 67W wired",
        os: "Android 12 (MIUI 13, upgradable to MIUI 14)",
        rating: 4.4,
        icon: "⚡",
        year: 2022,
        weight: "195g",
        dimensions: "163.2 x 76 x 7.7 mm",
        build: "Glass front, plastic back, plastic frame",
        colors: "Night Black, Nebula Green, Moonlight Silver"
    },

    // OnePlus
    oneplus10pro: {
        id: 'oneplus10pro',
        name: "OnePlus 10 Pro",
        brand: "OnePlus",
        price: "$799",
        display: "6.7-inch Fluid AMOLED (1440x3216), 120Hz LTPO, HDR10+, 1300 nits peak",
        processor: "Snapdragon 8 Gen 1 (4nm)",
        ram: "12GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "48MP Triple Camera System (Hasselblad)",
        cameraDetails: "Main: 48MP f/1.8, 1.12µm, Dual Pixel PDAF, Laser AF, OIS | Ultra Wide: 50MP f/2.2, 150° FOV | Telephoto: 8MP f/2.4, 3.3x optical | Front: 32MP f/2.2 | Video: 8K@24fps, 4K@120fps, Hasselblad color calibration",
        battery: "5000mAh, 80W wired, 50W wireless",
        os: "Android 12 (OxygenOS 12.1, upgradable to OxygenOS 13)",
        rating: 4.6,
        icon: "⚡",
        year: 2022,
        weight: "200g",
        dimensions: "163 x 73.9 x 8.6 mm",
        build: "Glass front/back, aluminum frame",
        colors: "Volcanic Black, Emerald Forest"
    },
    oneplus9: {
        id: 'oneplus9',
        name: "OnePlus 9",
        brand: "OnePlus",
        price: "$729",
        display: "6.55-inch Fluid AMOLED (1080x2400), 120Hz, HDR10+, Corning Gorilla Glass",
        processor: "Snapdragon 888 (5nm)",
        ram: "8GB LPDDR5",
        storage: "128GB UFS 3.1",
        camera: "48MP Triple Camera System (Hasselblad)",
        cameraDetails: "Main: 48MP f/1.8, 1.12µm, Dual Pixel PDAF, OIS | Ultra Wide: 50MP f/2.2, 115° FOV | Macro: 2MP f/2.4 | Front: 16MP f/2.4 | Video: 8K@30fps, 4K@60fps, Hasselblad color calibration",
        battery: "4500mAh, 65W wired, 15W wireless",
        os: "Android 11 (OxygenOS 11, upgradable to OxygenOS 13)",
        rating: 4.6,
        icon: "⚡",
        year: 2021,
        weight: "192g",
        dimensions: "160 x 74.2 x 8.7 mm",
        build: "Glass front/back, plastic frame",
        colors: "Winter Mist, Arctic Sky, Astral Black"
    },
    oneplus9pro: {
        id: 'oneplus9pro',
        name: "OnePlus 9 Pro",
        brand: "OnePlus",
        price: "$899",
        display: "6.7-inch Fluid AMOLED (1440x3216), 120Hz LTPO, HDR10+, 1300 nits peak",
        processor: "Snapdragon 888 (5nm)",
        ram: "12GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "48MP Quad Camera System (Hasselblad)",
        cameraDetails: "Main: 48MP f/1.8, 1.12µm, Dual Pixel PDAF, Laser AF, OIS | Ultra Wide: 50MP f/2.2, 140° FOV | Telephoto: 8MP f/2.4, 3.3x optical | Depth: 2MP f/2.4 | Front: 16MP f/2.4 | Video: 8K@30fps, 4K@120fps",
        battery: "4500mAh, 65W wired, 50W wireless",
        os: "Android 11 (OxygenOS 11, upgradable to OxygenOS 13)",
        rating: 4.7,
        icon: "⚡",
        year: 2021,
        weight: "197g",
        dimensions: "163.2 x 73.6 x 8.7 mm",
        build: "Glass front/back, aluminum frame, IP68",
        colors: "Morning Mist, Pine Green, Stellar Black"
    },
    oneplusnord2: {
        id: 'oneplusnord2',
        name: "OnePlus Nord 2",
        brand: "OnePlus",
        price: "$399",
        display: "6.43-inch Fluid AMOLED (1080x2400), 90Hz, HDR10+",
        processor: "MediaTek Dimensity 1200-AI (6nm)",
        ram: "8GB LPDDR4X",
        storage: "128GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.9, 1.0µm, OIS | Ultra Wide: 8MP f/2.3, 119° FOV | Macro: 2MP f/2.4 | Front: 32MP f/2.5 | Video: 4K@30fps, 1080p@60fps",
        battery: "4500mAh, 65W wired",
        os: "Android 11 (OxygenOS 11.3, upgradable to OxygenOS 13)",
        rating: 4.4,
        icon: "⚡",
        year: 2021,
        weight: "189g",
        dimensions: "158.9 x 73.2 x 8.3 mm",
        build: "Glass front, plastic back, plastic frame",
        colors: "Blue Haze, Gray Sierra, Green Woods"
    },

    // Sony
    sony1iv: {
        id: 'sony1iv',
        name: "Sony Xperia 1 IV",
        brand: "Sony",
        price: "$1299",
        display: "6.5-inch 4K OLED (1644x3840), 120Hz, HDR BT.2020, 1B colors, Creator mode",
        processor: "Snapdragon 8 Gen 1 (4nm)",
        ram: "12GB LPDDR5",
        storage: "512GB UFS 3.1, expandable via microSD",
        camera: "12MP Triple Camera System (ZEISS)",
        cameraDetails: "Main: 12MP f/1.7, 1.8µm, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 124° FOV | Telephoto: 12MP f/2.3-2.8, 3.5x-5.2x continuous optical zoom | 3D iToF sensor | Front: 12MP f/2.0 | Video: 4K@120fps, 5x slo-mo, Eye AF, Real-time tracking",
        battery: "5000mAh, 30W wired, wireless",
        os: "Android 12",
        rating: 4.5,
        icon: "🎮",
        year: 2022,
        weight: "185g",
        dimensions: "165 x 71 x 8.2 mm",
        build: "Glass front/back, aluminum frame, IP65/IP68",
        colors: "Black, Violet, White"
    },
    sony5iii: {
        id: 'sony5iii',
        name: "Sony Xperia 5 III",
        brand: "Sony",
        price: "$999",
        display: "6.1-inch OLED (1080x2520), 120Hz, HDR, Creator mode",
        processor: "Snapdragon 888 (5nm)",
        ram: "8GB LPDDR5",
        storage: "256GB UFS 3.1, expandable via microSD",
        camera: "12MP Triple Camera System (ZEISS)",
        cameraDetails: "Main: 12MP f/1.7, 1.8µm, Dual Pixel PDAF, OIS | Ultra Wide: 12MP f/2.2, 124° FOV | Telephoto: 12MP f/2.3-2.8, 3x/4.4x optical zoom | 3D iToF sensor | Front: 8MP f/2.0 | Video: 4K@120fps, Eye AF",
        battery: "4500mAh, 30W wired, wireless",
        os: "Android 11",
        rating: 4.4,
        icon: "🎮",
        year: 2021,
        weight: "168g",
        dimensions: "157 x 68 x 8.2 mm",
        build: "Glass front/back, aluminum frame, IP65/IP68",
        colors: "Black, Green, Pink"
    },

    // Motorola
    motoedger30: {
        id: 'motoedger30',
        name: "Motorola Edge 30",
        brand: "Motorola",
        price: "$449",
        display: "6.5-inch OLED (1080x2400), 144Hz, HDR10+, 1200 nits peak",
        processor: "Snapdragon 778G+ (6nm)",
        ram: "8GB LPDDR4X",
        storage: "256GB UFS 2.2, expandable via microSD",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.8, 1.0µm, PDAF, OIS | Ultra Wide: 50MP f/2.2, 118° FOV | Depth: 2MP f/2.4 | Front: 32MP f/2.4 | Video: 4K@30fps, 1080p@60fps",
        battery: "4020mAh, 33W wired",
        os: "Android 12",
        rating: 4.3,
        icon: "📱",
        year: 2022,
        weight: "155g",
        dimensions: "159.4 x 74.2 x 6.8 mm",
        build: "Glass front, plastic back, plastic frame, IP52",
        colors: "Meteor Grey, Supermoon Silver"
    },
    motog82: {
        id: 'motog82',
        name: "Motorola Moto G82",
        brand: "Motorola",
        price: "$349",
        display: "6.6-inch AMOLED (1080x2400), 120Hz, 1000 nits peak",
        processor: "Snapdragon 695 (6nm)",
        ram: "6GB LPDDR4X",
        storage: "128GB UFS 2.2, expandable via microSD",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.8, 0.64µm, PDAF, OIS | Ultra Wide: 8MP f/2.2, 118° FOV | Macro: 2MP f/2.4 | Front: 16MP f/2.2 | Video: 1080p@60fps",
        battery: "5000mAh, 30W wired",
        os: "Android 12",
        rating: 4.2,
        icon: "📱",
        year: 2022,
        weight: "173g",
        dimensions: "160.9 x 74.5 x 8 mm",
        build: "Glass front, plastic back, plastic frame, IP52",
        colors: "Meteorite Gray, White"
    },

    // Nokia
    nokiax30: {
        id: 'nokiax30',
        name: "Nokia X30",
        brand: "Nokia",
        price: "$499",
        display: "6.43-inch AMOLED (1080x2400), 90Hz, Corning Gorilla Glass Victus",
        processor: "Snapdragon 695 (6nm)",
        ram: "8GB LPDDR4X",
        storage: "256GB UFS 2.2, expandable via microSD",
        camera: "50MP Dual Camera System (PureView)",
        cameraDetails: "Main: 50MP f/1.8, 1.0µm, PDAF, OIS | Ultra Wide: 13MP f/2.4, 123° FOV | Front: 16MP f/2.4 | Video: 1080p@60fps, OZO Audio",
        battery: "4200mAh, 33W wired",
        os: "Android 12",
        rating: 4.2,
        icon: "📱",
        year: 2022,
        weight: "185g",
        dimensions: "158.9 x 73.9 x 8 mm",
        build: "Glass front, plastic back, aluminum frame, IP67",
        colors: "Cloudy Blue, Ice White"
    },
    nokiag60: {
        id: 'nokiag60',
        name: "Nokia G60",
        brand: "Nokia",
        price: "$299",
        display: "6.58-inch IPS LCD (1080x2408), 120Hz, Corning Gorilla Glass 5",
        processor: "Snapdragon 695 (6nm)",
        ram: "6GB LPDDR4X",
        storage: "128GB UFS 2.2, expandable via microSD",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.8, PDAF | Ultra Wide: 5MP f/2.2 | Depth: 2MP f/2.4 | Front: 8MP f/2.0 | Video: 1080p@30fps",
        battery: "4500mAh, 20W wired",
        os: "Android 12",
        rating: 4.1,
        icon: "📱",
        year: 2022,
        weight: "190g",
        dimensions: "166 x 75.9 x 8.6 mm",
        build: "Plastic back, plastic frame, IP52",
        colors: "Ice Gray, Pure Black"
    },

    // Asus
    asusrog6: {
        id: 'asusrog6',
        name: "Asus ROG Phone 6",
        brand: "Asus",
        price: "$999",
        display: "6.78-inch AMOLED (1080x2448), 165Hz, HDR10+, 1200 nits peak, Gorilla Glass Victus",
        processor: "Snapdragon 8+ Gen 1 (4nm)",
        ram: "16GB LPDDR5",
        storage: "512GB UFS 3.1",
        camera: "50MP Triple Camera System",
        cameraDetails: "Main: 50MP f/1.9, 1.0µm, PDAF | Ultra Wide: 13MP f/2.2, 125° FOV | Macro: 5MP f/2.0 | Front: 12MP f/2.5 | Video: 8K@24fps, 4K@60fps",
        battery: "6000mAh, 65W wired",
        os: "Android 12",
        rating: 4.7,
        icon: "🎮",
        year: 2022,
        weight: "239g",
        dimensions: "173 x 77 x 10.3 mm",
        build: "Glass front, plastic back, aluminum frame, IPX4",
        colors: "Phantom Black, Storm White"
    },
    asuszenfone9: {
        id: 'asuszenfone9',
        name: "Asus Zenfone 9",
        brand: "Asus",
        price: "$699",
        display: "5.9-inch AMOLED (1080x2400), 120Hz, HDR10+, 1100 nits peak, Gorilla Glass Victus",
        processor: "Snapdragon 8+ Gen 1 (4nm)",
        ram: "8GB LPDDR5",
        storage: "256GB UFS 3.1",
        camera: "50MP Dual Camera System",
        cameraDetails: "Main: 50MP f/1.9, 1.0µm, PDAF, gimbal OIS | Ultra Wide: 12MP f/2.2, 113° FOV | Front: 12MP f/2.5 | Video: 8K@24fps, 4K@60fps, HyperSteady",
        battery: "4300mAh, 30W wired",
        os: "Android 12",
        rating: 4.6,
        icon: "📱",
        year: 2022,
        weight: "169g",
        dimensions: "146.5 x 68.1 x 9.1 mm",
        build: "Glass front, plastic back, aluminum frame, IP68",
        colors: "Black, Blue, Red, Silver"
    }
};

// Initialize select options
function initializeSelects() {
    const select1 = document.getElementById('phone1');
    const select2 = document.getElementById('phone2');
    
    let options = '<option value="">Select first phone</option>';
    
    // Sort phones by brand and name
    const sortedPhones = Object.values(phones).sort((a, b) => {
        if (a.brand === b.brand) {
            return a.name.localeCompare(b.name);
        }
        return a.brand.localeCompare(b.brand);
    });
    
    sortedPhones.forEach(phone => {
        options += `<option value="${phone.id}">${phone.brand} - ${phone.name} (${phone.price})</option>`;
    });
    
    select1.innerHTML = options;
    select2.innerHTML = options.replace('first', 'second');
}

// Filter phones by brand
function filterByBrand(brand) {
    // Update active button
    document.querySelectorAll('.brand-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const select1 = document.getElementById('phone1');
    const select2 = document.getElementById('phone2');
    
    let options = `<option value="">Select ${select1.id === 'phone1' ? 'first' : 'second'} phone</option>`;
    
    const sortedPhones = Object.values(phones)
        .filter(phone => brand === 'all' || phone.brand === brand)
        .sort((a, b) => {
            if (a.brand === b.brand) {
                return a.name.localeCompare(b.name);
            }
            return a.brand.localeCompare(b.brand);
        });
    
    sortedPhones.forEach(phone => {
        options += `<option value="${phone.id}">${phone.brand} - ${phone.name} (${phone.price})</option>`;
    });
    
    select1.innerHTML = options;
    select2.innerHTML = options.replace('first', 'second');
}

// Search phones
function filterPhones() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const select1 = document.getElementById('phone1');
    const select2 = document.getElementById('phone2');
    
    let options = '<option value="">Select phone</option>';
    
    const filteredPhones = Object.values(phones)
        .filter(phone => 
            phone.name.toLowerCase().includes(searchTerm) ||
            phone.brand.toLowerCase().includes(searchTerm) ||
            phone.processor.toLowerCase().includes(searchTerm)
        )
        .sort((a, b) => {
            if (a.brand === b.brand) {
                return a.name.localeCompare(b.name);
            }
            return a.brand.localeCompare(b.brand);
        });
    
    filteredPhones.forEach(phone => {
        options += `<option value="${phone.id}">${phone.brand} - ${phone.name} (${phone.price})</option>`;
    });
    
    select1.innerHTML = options;
    select2.innerHTML = options;
}

function comparePhones() {
    const phone1Select = document.getElementById('phone1');
    const phone2Select = document.getElementById('phone2');
    const phone1Id = phone1Select.value;
    const phone2Id = phone2Select.value;
    
    if (!phone1Id || !phone2Id) {
        alert('Please select both phones to compare!');
        return;
    }
    
    if (phone1Id === phone2Id) {
        alert('Please select two different phones!');
        return;
    }
    
    const phone1 = phones[phone1Id];
    const phone2 = phones[phone2Id];
    
    displayComparison(phone1, phone2);
}

function displayComparison(phone1, phone2) {
    const resultDiv = document.getElementById('comparisonResult');
    
    // Calculate wins
    const phone1SpecsWon = countWins(phone1, phone2);
    const phone2SpecsWon = countWins(phone2, phone1);
    const totalSpecs = 7;
    
    // Determine overall winner
    let overallWinner = '';
    let winnerName = '';
    let winnerEmoji = '';
    let winnerMessage = '';
    
    if (phone1SpecsWon > phone2SpecsWon) {
        overallWinner = '🏆 OVERALL WINNER 🏆';
        winnerName = phone1.name;
        winnerEmoji = '👑';
        winnerMessage = `${phone1.name} wins ${phone1SpecsWon}/${totalSpecs} categories!`;
    } else if (phone2SpecsWon > phone1SpecsWon) {
        overallWinner = '🏆 OVERALL WINNER 🏆';
        winnerName = phone2.name;
        winnerEmoji = '👑';
        winnerMessage = `${phone2.name} wins ${phone2SpecsWon}/${totalSpecs} categories!`;
    } else {
        overallWinner = '🤝 IT\'S A PERFECT TIE! 🤝';
        winnerName = `${phone1.name} & ${phone2.name}`;
        winnerEmoji = '⭐';
        winnerMessage = `Both phones won ${phone1SpecsWon}/${totalSpecs} categories each!`;
    }
    
    const phone1Percentage = Math.round((phone1SpecsWon / totalSpecs) * 100);
    const phone2Percentage = Math.round((phone2SpecsWon / totalSpecs) * 100);
    
    const specs = [
        { name: 'Brand', key: 'brand' },
        { name: 'Price', key: 'price' },
        { name: 'Display', key: 'display' },
        { name: 'Processor', key: 'processor' },
        { name: 'RAM', key: 'ram' },
        { name: 'Storage', key: 'storage' },
        { name: 'Camera', key: 'camera' },
        { name: 'Battery', key: 'battery' },
        { name: 'OS', key: 'os' },
        { name: 'Rating', key: 'rating' },
        { name: 'Year', key: 'year' },
        { name: 'Weight', key: 'weight' },
        { name: 'Dimensions', key: 'dimensions' },
        { name: 'Build', key: 'build' },
        { name: 'Colors', key: 'colors' }
    ];
    
    let html = `
        <div class="comparison-header">
            <div class="phone-card ${phone1SpecsWon > phone2SpecsWon ? 'winner' : ''}">
                <div class="phone-image">
                    ${phone1.image ? `<img src="${phone1.image}" alt="${phone1.name}" style="width:100%; height:100%; object-fit:cover; border-radius:20px;">` : phone1.icon}
                </div>
                <h3>${phone1.name}</h3>
                <div style="color: #666; margin-bottom: 10px;">${phone1.brand}</div>
                ${phone1SpecsWon > phone2SpecsWon ? '<div class="winner-badge" style="background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);">🏆 CHAMPION 🏆</div>' : ''}
                ${phone1SpecsWon === phone2SpecsWon ? '<div class="winner-badge" style="background: linear-gradient(135deg, #999 0%, #ccc 100%);">🤝 TIED</div>' : ''}
            </div>
            <div class="phone-card">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px;">
                    <i class="fas fa-bolt" style="font-size: 30px;"></i>
                    <h4 style="margin-top: 10px;">VS</h4>
                    <div style="font-size: 14px; margin-top: 10px; opacity: 0.9;">
                        ${phone1SpecsWon} - ${phone2SpecsWon}
                    </div>
                </div>
            </div>
            <div class="phone-card ${phone2SpecsWon > phone1SpecsWon ? 'winner' : ''}">
                <div class="phone-image">
                    ${phone2.image ? `<img src="${phone2.image}" alt="${phone2.name}" style="width:100%; height:100%; object-fit:cover; border-radius:20px;">` : phone2.icon}
                </div>
                <h3>${phone2.name}</h3>
                <div style="color: #666; margin-bottom: 10px;">${phone2.brand}</div>
                ${phone2SpecsWon > phone1SpecsWon ? '<div class="winner-badge" style="background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);">🏆 CHAMPION 🏆</div>' : ''}
                ${phone1SpecsWon === phone2SpecsWon ? '<div class="winner-badge" style="background: linear-gradient(135deg, #999 0%, #ccc 100%);">🤝 TIED</div>' : ''}
            </div>
        </div>
        
        <!-- WINNER BANNER -->
        <div style="
            background: linear-gradient(135deg, ${phone1SpecsWon > phone2SpecsWon ? '#ffd700' : phone2SpecsWon > phone1SpecsWon ? '#ffd700' : '#808080'} 0%, ${phone1SpecsWon > phone2SpecsWon ? '#ffed4e' : phone2SpecsWon > phone1SpecsWon ? '#ffed4e' : '#a0a0a0'} 100%);
            color: #000;
            padding: 25px;
            border-radius: 15px;
            margin: 20px 0;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border: 2px solid #fff;
        ">
            <div style="font-size: 40px; margin-bottom: 10px;">${winnerEmoji}</div>
            <div>${overallWinner}</div>
            <div style="font-size: 32px; color: #000; margin-top: 10px; text-shadow: 2px 2px 0 rgba(255,255,255,0.5);">
                ${winnerName}
            </div>
            <div style="font-size: 18px; margin-top: 15px; color: #333; background: rgba(255,255,255,0.5); padding: 10px; border-radius: 30px;">
                ${winnerMessage}
            </div>
        </div>
        
        <!-- PROGRESS BARS -->
        <div style="display: flex; gap: 20px; margin: 20px 0;">
            <div style="flex: 1; background: white; padding: 15px; border-radius: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-weight: bold;">${phone1.name}</span>
                    <span style="color: #667eea; font-weight: bold;">${phone1Percentage}%</span>
                </div>
                <div style="background: #e0e0e0; height: 10px; border-radius: 5px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: ${phone1Percentage}%; height: 10px; border-radius: 5px;"></div>
                </div>
            </div>
            <div style="flex: 1; background: white; padding: 15px; border-radius: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-weight: bold;">${phone2.name}</span>
                    <span style="color: #764ba2; font-weight: bold;">${phone2Percentage}%</span>
                </div>
                <div style="background: #e0e0e0; height: 10px; border-radius: 5px;">
                    <div style="background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); width: ${phone2Percentage}%; height: 10px; border-radius: 5px;"></div>
                </div>
            </div>
        </div>
        
        <div class="phone-details">
            <h3 style="margin-bottom: 20px; color: #333;">📊 Detailed Specifications</h3>
    `;
    
    specs.forEach(spec => {
        const value1 = phone1[spec.key];
        const value2 = phone2[spec.key];
        const isBetter = isBetterSpec(spec.key, value1, value2);
        
        let winnerIcon1 = '';
        let winnerIcon2 = '';
        
        if (isBetter === 1) winnerIcon1 = ' 🏆';
        if (isBetter === 2) winnerIcon2 = ' 🏆';
        
        html += `
            <div class="spec-comparison">
                <div class="spec-value ${isBetter === 1 ? 'better-spec' : ''}">${value1 || 'N/A'}${winnerIcon1}</div>
                <div class="spec-name">${spec.name}</div>
                <div class="spec-value ${isBetter === 2 ? 'better-spec' : ''}">${value2 || 'N/A'}${winnerIcon2}</div>
            </div>
        `;
    });
    
    // Add camera details section
    html += `
        <div style="margin-top: 30px;">
            <h4 style="color: #333; margin-bottom: 15px;">📸 Camera System Details</h4>
            <div class="spec-comparison">
                <div class="camera-details">${phone1.cameraDetails || phone1.camera}</div>
                <div class="spec-name">Camera Specs</div>
                <div class="camera-details">${phone2.cameraDetails || phone2.camera}</div>
            </div>
        </div>
    `;
    
    html += `
            <div class="stats-summary">
                <div class="stat-box ${phone1SpecsWon > phone2SpecsWon ? 'winner' : ''}">
                    <h4 style="color: #667eea; font-size: 32px;">${phone1SpecsWon}</h4>
                    <p style="color: #666; font-weight: bold; font-size: 18px;">${phone1.name}</p>
                    <div style="font-size: 14px; color: #999;">out of ${totalSpecs} categories</div>
                    ${phone1SpecsWon > phone2SpecsWon ? '<div style="margin-top: 10px; font-size: 24px;">🏆</div>' : ''}
                </div>
                <div class="stat-box ${phone2SpecsWon > phone1SpecsWon ? 'winner' : ''} ${phone1SpecsWon === phone2SpecsWon ? 'tie' : ''}">
                    <h4 style="color: #764ba2; font-size: 32px;">${phone2SpecsWon}</h4>
                    <p style="color: #666; font-weight: bold; font-size: 18px;">${phone2.name}</p>
                    <div style="font-size: 14px; color: #999;">out of ${totalSpecs} categories</div>
                    ${phone2SpecsWon > phone1SpecsWon ? '<div style="margin-top: 10px; font-size: 24px;">🏆</div>' : ''}
                </div>
            </div>
            <div style="margin-top: 30px; text-align: center; color: #666; background: white; padding: 15px; border-radius: 10px;">
                <i class="fas fa-info-circle"></i> 
                Green checkmarks (✓) and 🏆 indicate better specifications
                <br>
                <span style="font-size: 20px; margin-top: 10px; display: block;">
                    ${phone1SpecsWon > phone2SpecsWon ? '🏆 ' + phone1.name + ' is the winner!' : phone2SpecsWon > phone1SpecsWon ? '🏆 ' + phone2.name + ' is the winner!' : '🤝 It\'s a tie! Both phones are equally good!'}
                </span>
            </div>
        </div>
    `;
    
    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function getWinner(phone1, phone2) {
    const rating1 = parseFloat(phone1.rating);
    const rating2 = parseFloat(phone2.rating);
    
    if (rating1 > rating2) return 'phone1';
    if (rating2 > rating1) return 'phone2';
    return 'tie';
}

function isBetterSpec(key, value1, value2) {
    if (!value1 || !value2) return 0;
    
    if (key === 'price') {
        const price1 = parseInt(value1.replace(/[^0-9]/g, ''));
        const price2 = parseInt(value2.replace(/[^0-9]/g, ''));
        if (price1 < price2) return 1;
        if (price2 < price1) return 2;
    }
    
    if (key === 'rating' || key === 'year') {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        if (num1 > num2) return 1;
        if (num2 > num1) return 2;
    }
    
    if (key === 'ram' || key === 'storage') {
        const num1 = parseInt(value1);
        const num2 = parseInt(value2);
        if (num1 > num2) return 1;
        if (num2 > num1) return 2;
    }
    
    if (key === 'battery') {
        const num1 = parseInt(value1.replace(/[^0-9]/g, ''));
        const num2 = parseInt(value2.replace(/[^0-9]/g, ''));
        if (num1 > num2) return 1;
        if (num2 > num1) return 2;
    }
    
    if (key === 'weight') {
        const weight1 = parseInt(value1);
        const weight2 = parseInt(value2);
        if (weight1 < weight2) return 1;
        if (weight2 < weight1) return 2;
    }
    
    return 0;
}

function countWins(phone1, phone2) {
    let wins = 0;
    const specs = ['price', 'ram', 'storage', 'battery', 'rating', 'year', 'weight'];
    
    specs.forEach(spec => {
        const result = isBetterSpec(spec, phone1[spec], phone2[spec]);
        if (result === 1) wins++;
    });
    
    return wins;
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize selects
    initializeSelects();
    
    // Add search event listener
    document.getElementById('searchInput').addEventListener('keyup', filterPhones);
    
    // Add brand filter event listeners
    document.querySelectorAll('.brand-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const brand = this.getAttribute('data-brand');
            filterByBrand(brand);
        });
    });
    
    // Add compare button event listener
    document.getElementById('compareBtn').addEventListener('click', comparePhones);
});
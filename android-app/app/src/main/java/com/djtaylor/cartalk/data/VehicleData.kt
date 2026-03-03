package com.djtaylor.cartalk.data

/** Curated static list of popular consumer vehicle makes mapped to their common models. */
object VehicleData {

    val makeModels: Map<String, List<String>> = linkedMapOf(
        "Acura" to listOf("ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "TLX", "ZDX"),
        "Alfa Romeo" to listOf("Giulia", "Giulietta", "Stelvio", "Tonale"),
        "Aston Martin" to listOf("DB11", "DB12", "DBX", "Vantage"),
        "Audi" to listOf(
            "A3", "A4", "A5", "A6", "A7", "A8",
            "e-tron", "e-tron GT", "e-tron S",
            "Q3", "Q4 e-tron", "Q5", "Q7", "Q8",
            "R8", "RS3", "RS5", "RS6", "RS7", "RS e-tron GT",
            "S3", "S4", "S5", "S6", "S7", "S8",
            "SQ5", "SQ7", "SQ8", "TT"
        ),
        "Bentley" to listOf("Bentayga", "Continental GT", "Flying Spur", "Mulsanne"),
        "BMW" to listOf(
            "1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series",
            "i3", "i4", "i5", "i7", "iX", "iX1", "iX3",
            "M2", "M3", "M4", "M5", "M8",
            "X1", "X2", "X3", "X4", "X5", "X6", "X7", "XM",
            "Z4"
        ),
        "Buick" to listOf("Enclave", "Encore", "Encore GX", "Envision", "LaCrosse", "Verano"),
        "Cadillac" to listOf("CT4", "CT5", "Escalade", "Lyriq", "XT4", "XT5", "XT6"),
        "Chevrolet" to listOf(
            "Blazer", "Blazer EV", "Bolt EUV", "Bolt EV",
            "Camaro", "Colorado", "Corvette",
            "Equinox", "Equinox EV", "Express",
            "Malibu",
            "Silverado 1500", "Silverado 2500HD", "Silverado 3500HD", "Silverado EV",
            "Spark", "Suburban", "Tahoe", "Trailblazer", "Traverse", "Trax"
        ),
        "Chrysler" to listOf("300", "Pacifica", "Voyager"),
        "Dodge" to listOf("Challenger", "Charger", "Durango", "Hornet", "Ram 1500"),
        "Ferrari" to listOf("296 GTB", "296 GTS", "812 Superfast", "F8 Tributo", "Portofino", "Purosangue", "Roma", "SF90 Stradale"),
        "Fiat" to listOf("500", "500L", "500X"),
        "Ford" to listOf(
            "Bronco", "Bronco Sport",
            "EcoSport", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-150 Lightning",
            "Fusion",
            "Maverick", "Mustang", "Mustang Mach-E",
            "Puma", "Ranger",
            "Super Duty F-250", "Super Duty F-350", "Super Duty F-450",
            "Transit", "Transit Connect"
        ),
        "Genesis" to listOf("GV60", "GV70", "GV80", "G70", "G80", "G90"),
        "GMC" to listOf("Acadia", "Canyon", "Envoy", "Envoy XL", "Sierra 1500", "Sierra 2500HD", "Sierra 3500HD", "Terrain", "Yukon", "Yukon XL"),
        "Honda" to listOf(
            "Accord", "City", "Civic", "CR-V", "CR-Z", "Crosstour",
            "Element", "Fit", "HR-V",
            "Insight", "Jazz",
            "Odyssey", "Passport", "Pilot", "Prologue",
            "Ridgeline", "ZR-V"
        ),
        "Hyundai" to listOf(
            "Accent", "Azera",
            "Elantra", "Elantra GT", "Elantra N",
            "IONIQ", "IONIQ 5", "IONIQ 6",
            "Kona", "Kona Electric", "Kona N",
            "Nexo", "Palisade",
            "Santa Cruz", "Santa Fe",
            "Sonata", "Tucson", "Tucson Plug-in Hybrid",
            "Venue", "Veloster"
        ),
        "Infiniti" to listOf("Q50", "Q60", "QX50", "QX55", "QX60", "QX80"),
        "Jaguar" to listOf("E-Pace", "F-Pace", "F-Type", "I-Pace", "XE", "XF", "XJ"),
        "Jeep" to listOf("Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Grand Cherokee L", "Grand Wagoneer", "Renegade", "Wagoneer", "Wrangler"),
        "Kia" to listOf(
            "Carnival", "EV6", "EV9",
            "Forte", "K5",
            "Niro", "Niro EV", "Niro Plug-in",
            "Seltos", "Sorento", "Soul", "Sportage", "Stinger", "Telluride"
        ),
        "Land Rover" to listOf("Defender", "Discovery", "Discovery Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"),
        "Lexus" to listOf("ES", "GS", "GX", "IS", "LC", "LFA", "LS", "LX", "NX", "RC", "RX", "RZ", "TX", "UX"),
        "Lincoln" to listOf("Aviator", "Corsair", "MKZ", "Nautilus", "Navigator"),
        "Maserati" to listOf("Ghibli", "GranTurismo", "Grecale", "Levante", "MC20", "Quattroporte"),
        "Mazda" to listOf("CX-3", "CX-30", "CX-5", "CX-50", "CX-60", "CX-90", "Mazda2", "Mazda3", "Mazda6", "MX-5 Miata", "MX-30"),
        "McLaren" to listOf("570S", "600LT", "620R", "650S", "675LT", "720S", "750S", "Artura", "GT"),
        "Mercedes-Benz" to listOf(
            "A-Class", "B-Class", "C-Class", "CLA-Class", "CLS-Class",
            "E-Class",
            "EQA", "EQB", "EQC", "EQE", "EQE SUV", "EQS", "EQS SUV",
            "G-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLS-Class",
            "S-Class", "SL-Class", "SLK-Class",
            "Sprinter", "V-Class"
        ),
        "MINI" to listOf("Clubman", "Convertible", "Countryman", "Coupe", "Electric", "Hardtop", "Paceman", "Roadster"),
        "Mitsubishi" to listOf("Eclipse Cross", "Galant", "Lancer", "Mirage", "Mirage G4", "Outlander", "Outlander PHEV", "Outlander Sport"),
        "Nissan" to listOf(
            "Altima", "Ariya",
            "Frontier", "GT-R", "Kicks", "LEAF",
            "Maxima", "Murano",
            "Pathfinder", "Rogue", "Rogue Sport",
            "Sentra", "Titan", "Titan XD", "Versa", "Z"
        ),
        "Polestar" to listOf("Polestar 1", "Polestar 2", "Polestar 3", "Polestar 4"),
        "Porsche" to listOf("718 Boxster", "718 Cayman", "911", "Cayenne", "Macan", "Panamera", "Taycan"),
        "Ram" to listOf("1500", "2500", "3500", "ProMaster", "ProMaster City"),
        "Rivian" to listOf("R1S", "R1T"),
        "Rolls-Royce" to listOf("Cullinan", "Dawn", "Ghost", "Phantom", "Spectre", "Wraith"),
        "Subaru" to listOf("Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "Solterra", "WRX"),
        "Tesla" to listOf("Cybertruck", "Model 3", "Model S", "Model X", "Model Y", "Roadster"),
        "Toyota" to listOf(
            "4Runner",
            "Avalon", "Aygo", "bZ4X",
            "C-HR", "Camry", "Corolla", "Corolla Cross", "Crown",
            "GR86", "GR Corolla", "GR Supra",
            "Highlander", "Land Cruiser", "Mirai",
            "Prius", "Prius Prime", "Prius v (V)",
            "RAV4", "RAV4 Prime", "RAV4 Hybrid",
            "Sequoia", "Sienna", "Supra",
            "Tacoma", "Tundra",
            "Venza", "Yaris"
        ),
        "Volkswagen" to listOf(
            "Arteon", "Atlas", "Atlas Cross Sport",
            "Golf", "Golf GTI", "Golf R",
            "ID.4", "ID.5", "ID.6", "ID. Buzz",
            "Jetta", "Passat", "Polo",
            "Taigo", "Taos", "Tiguan", "Touareg"
        ),
        "Volvo" to listOf("C40 Recharge", "EX30", "EX40", "EX90", "S60", "S90", "V60", "V90", "XC40", "XC40 Recharge", "XC60", "XC90")
    )

    /** Sorted list of all makes. */
    val makes: List<String> = makeModels.keys.sorted()

    /** Returns sorted models for the given make, or an empty list if not found. */
    fun modelsFor(make: String): List<String> = makeModels[make]?.sorted() ?: emptyList()
}

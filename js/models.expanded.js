/* Database espanso marche e modelli auto - Aggiornato Gennaio 2026 - Database Globale Completo */
var carModels = {
    "Acura": [
        "1.6 EL", "2.2CL", "2.3CL", "3.0CL", "3.2CL", "3.5 RL", "CL", "CSX", "EL", "ILX", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RLX", "RSX", "SLX", "TL", "TLX", "TSX", "Vigor", "ZDX"
    ],
    "Alfa Romeo": [
        "105", "106", "115", "145", "146", "147", "155", "156", "159", "164", "166", "1750", "2000", "2300", "2600", "33", "4C", "6", "6C", "75", "8C", "8C Competizione", "90", "Alfasud", "Alfetta", "Arna", "Brera", "Giulia", "Giulia GT", "Giulia GTA", "Giulia Sprint", "Giulia Super", "Giulietta", "GT", "GT 1300 Junior", "GTV", "GTV6", "Junior Zagato", "Milano", "MiTo", "Montreal", "Quadrifoglio", "RZ", "Spider", "Sprint", "Stelvio", "SZ", "Tonale"
    ],
    "Aston Martin": [
        "AM Vantage", "Cygnet", "DB2", "DB4", "DB5", "DB6", "DB7", "DB9", "DB11", "DB12", "DBS", "DBS Superleggera", "DBX", "DBX707", "Lagonda", "One-77", "Rapide", "V12 Vantage", "V12 Zagato", "V8", "V8 Vantage", "Valhalla", "Valkyrie", "Vanquish", "Virage", "Vulcan", "Zagato"
    ],
    "Audi": [
        "100", "100 Avant", "200", "50", "80", "80 Avant", "90", "A1", "A1 Sportback", "A2", "A3", "A3 Cabriolet", "A3 Sportback", "A4", "A4 Allroad", "A4 Avant", "A5", "A5 Cabriolet", "A5 Sportback", "A6", "A6 Allroad", "A6 Avant", "A7", "A7 Sportback", "A8", "A8 L", "Allroad", "Cabriolet", "Coupe", "e-tron", "e-tron GT", "e-tron S", "e-tron Sportback", "Q2", "Q3", "Q3 Sportback", "Q4 e-tron", "Q4 Sportback e-tron", "Q5", "Q5 Sportback", "Q7", "Q8", "Q8 e-tron", "Quattro", "R8", "RS 2", "RS 3", "RS 4", "RS 5", "RS 6", "RS 7", "RS e-tron GT", "RS Q3", "RS Q8", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "Sport Quattro", "SQ2", "SQ5", "SQ5 Sportback", "SQ7", "SQ8", "TT", "TT RS", "TTS", "V8"
    ],
    "Bentley": [
        "Arnage", "Azure", "Bacalar", "Bentayga", "Bentayga EWB", "Bentayga S", "Brooklands", "Continental", "Continental Flying Spur", "Continental GT", "Continental GTC", "Continental Supersports", "Corniche", "Eight", "Flying Spur", "Mulsanne", "R-Type", "S-Type", "T-Series", "Turbo R", "Turbo RT", "Turbo S"
    ],
    "BMW": [
        "1 Series", "1 Series M", "114", "116", "118", "120", "123", "125", "128", "130", "135", "2 Series", "2 Series Active Tourer", "2 Series Gran Coupe", "2 Series Gran Tourer", "214", "216", "218", "220", "225", "228", "230", "235", "3 Series", "3 Series Gran Turismo", "315", "316", "318", "320", "323", "324", "325", "328", "330", "335", "340", "4 Series", "4 Series Gran Coupe", "418", "420", "425", "428", "430", "435", "440", "5 Series", "5 Series Gran Turismo", "518", "520", "523", "524", "525", "528", "530", "535", "540", "545", "550", "6 Series", "6 Series Gran Coupe", "6 Series Gran Turismo", "628", "630", "633", "635", "640", "645", "650", "7 Series", "725", "728", "730", "732", "735", "740", "745", "750", "760", "8 Series", "840", "850", "Alpina B3", "Alpina B5", "Alpina B7", "Alpina XB7", "CS", "CSL", "E21", "E30", "E36", "E46", "E60", "E90", "i3", "i4", "i5", "i7", "i8", "iX", "iX1", "iX3", "M", "M1", "M2", "M3", "M4", "M5", "M535i", "M6", "M635CSi", "M8", "X1", "X2", "X3", "X3 M", "X4", "X4 M", "X5", "X5 M", "X6", "X6 M", "X7", "XM", "Z1", "Z3", "Z3 M", "Z4", "Z4 M", "Z8"
    ],
    "Buick": [
        "Allure", "Cascada", "Century", "Electra", "Enclave", "Encore", "Encore GX", "Envision", "Envista", "LaCrosse", "LeSabre", "Lucerne", "Park Avenue", "Rainier", "Reatta", "Regal", "Regal GS", "Regal Sportback", "Regal TourX", "Rendezvous", "Riviera", "Roadmaster", "Skyhawk", "Skylark", "Somerset", "Terraza", "Verano", "Wildcat"
    ],
    "Cadillac": [
        "Allante", "ATS", "ATS-V", "Brougham", "Calais", "Catera", "Cimarron", "CT4", "CT4-V", "CT5", "CT5-V", "CT6", "CT6-V", "CTS", "CTS-V", "De Ville", "DeVille", "DTS", "Eldorado", "ELR", "Escalade", "Escalade ESV", "Escalade EXT", "Fleetwood", "Lyriq", "Seville", "Seville STS", "Sixty Special", "SRX", "STS", "XLR", "XT4", "XT5", "XT6", "XTS"
    ],
    "Chevrolet": [
        "Alero", "Astro", "Avalanche", "Aveo", "Aveo5", "Beretta", "Blazer", "Bolt", "Bolt EUV", "Brookwood", "C10", "C1500", "Camaro", "Caprice", "Captiva", "Cavalier", "Celebrity", "Chevelle", "Chevette", "Citation", "Classic", "Cobalt", "Colorado", "Corsica", "Corvair", "Corvette", "Cruze", "El Camino", "Epica", "Equinox", "Express", "G20", "G30", "HHR", "Impala", "K5 Blazer", "Lacetti", "Lumina", "Lumina APV", "Malibu", "Matiz", "Metro", "Monte Carlo", "Monza", "Nova", "Nubira", "Orlando", "Prizm", "S10", "Silverado", "Silverado 1500", "Silverado 2500", "Silverado 3500", "Sonic", "Spark", "Spectrum", "Sprint", "SSR", "Suburban", "Tahoe", "Tracker", "Trailblazer", "Traverse", "Trax", "Uplander", "Venture", "Volt"
    ],
    "Chrysler": [
        "200", "300", "300C", "300M", "Aspen", "Caravan", "Cirrus", "Concorde", "Conquest", "Crossfire", "E-Class", "Fifth Avenue", "Grand Voyager", "Imperial", "Intrepid", "Laser", "LeBaron", "LHS", "Neon", "New Yorker", "Newport", "Pacifica", "Prowler", "PT Cruiser", "Saratoga", "Sebring", "TC", "Town & Country", "Valiant", "Vision", "Voyager"
    ],
    "Citroën": [
        "2CV", "AX", "Berlingo", "BX", "C-Crosser", "C-Elysee", "C-Zero", "C1", "C2", "C3", "C3 Aircross", "C3 Picasso", "C3 Pluriel", "C4", "C4 Aircross", "C4 Cactus", "C4 Grand Picasso", "C4 Picasso", "C4 SpaceTourer", "C4 X", "C5", "C5 Aircross", "C5 X", "C6", "C8", "CX", "DS", "DS3", "DS4", "DS5", "Dyane", "ë-Berlingo", "ë-C4", "ë-SpaceTourer", "Evasion", "GS", "Jumper", "Jumpy", "LN", "Méhari", "Nemo", "Saxo", "SM", "SpaceTourer", "Visa", "Xantia", "XM", "Xsara", "Xsara Picasso", "ZX"
    ],
    "Dacia": [
        "Dokker", "Duster", "Jogger", "Logan", "Logan MCV", "Lodgy", "Sandero", "Sandero Stepway", "Spring"
    ],
    "Dodge": [
        "400", "600", "Aries", "Avenger", "Caliber", "Caravan", "Challenger", "Challenger SRT", "Charger", "Charger Daytona", "Charger SRT", "Colt", "Conquest", "Dakota", "Dart", "Daytona", "Diplomat", "Durango", "Durango SRT", "Dynasty", "Grand Caravan", "Hornet", "Intrepid", "Journey", "Lancer", "Magnum", "Mirada", "Monaco", "Neon", "Neon SRT-4", "Nitro", "Omni", "Ram 1500", "Ram 2500", "Ram 3500", "Ram SRT-10", "Ramcharger", "Shadow", "Spirit", "Sprinter", "SRT-4", "Stealth", "Stratus", "Viper", "Viper ACR", "Viper GTS"
    ],
    "Ferrari": [
        "208", "246", "250", "275", "288 GTO", "308", "308 GTB", "308 GTS", "328", "348", "360", "360 Modena", "360 Spider", "400", "412", "430", "456", "456 GT", "456M", "458 Italia", "458 Speciale", "458 Spider", "488", "488 GTB", "488 Pista", "488 Spider", "512", "512 BB", "512 M", "512 TR", "550", "550 Maranello", "575", "575M", "575M Maranello", "599", "599 GTB", "599 GTO", "612", "612 Scaglietti", "812", "812 GTS", "812 Superfast", "California", "California T", "Daytona", "Dino", "Enzo", "F12", "F12 TDF", "F12berlinetta", "F355", "F40", "F430", "F50", "F512 M", "F8", "F8 Spider", "F8 Tributo", "FF", "GTC4Lusso", "LaFerrari", "Mondial", "Portofino", "Portofino M", "Purosangue", "Roma", "SF90", "SF90 Stradale", "Testarossa"
    ],
    "FIAT": [
        "124", "124 Spider", "126", "127", "128", "131", "500", "500 Abarth", "500C", "500e", "500L", "500X", "600", "850", "Albea", "Argenta", "Barchetta", "Brava", "Bravo", "Cinquecento", "Coupe", "Croma", "Dino", "Doblo", "Ducato", "Fiorino", "Freemont", "Grande Punto", "Idea", "Linea", "Marea", "Multipla", "Palio", "Panda", "Panda 4x4", "Punto", "Punto Evo", "Qubo", "Regata", "Ritmo", "Scudo", "Sedici", "Seicento", "Siena", "Stilo", "Strada", "Talento", "Tempra", "Tipo", "Ulysse", "Uno", "X1/9"
    ],
    "Ford": [
        "Aerostar", "Anglia", "Aspire", "B-MAX", "Bronco", "Bronco II", "Bronco Sport", "C-MAX", "Capri", "Contour", "Cortina", "Cougar", "Courier", "Crown Victoria", "EcoSport", "Edge", "Escape", "Escort", "Escort RS", "Excursion", "Expedition", "Expedition MAX", "Explorer", "Explorer Sport Trac", "F-100", "F-150", "F-150 Lightning", "F-150 Raptor", "F-250", "F-250 Super Duty", "F-350", "F-350 Super Duty", "Fairlane", "Fairmont", "Falcon", "Festiva", "Fiesta", "Fiesta ST", "Five Hundred", "Flex", "Focus", "Focus RS", "Focus ST", "Freestar", "Freestyle", "Fusion", "Galaxy", "Granada", "GT", "GT40", "Ka", "Ka+", "Kuga", "LTD", "Maverick", "Mondeo", "Mustang", "Mustang GT", "Mustang Mach-E", "Mustang Shelby GT500", "Orion", "Pinto", "Probe", "Puma", "Ranger", "Ranger Raptor", "S-MAX", "Scorpio", "Sierra", "Taunus", "Taurus", "Taurus SHO", "Tempo", "Thunderbird", "Torino", "Tourneo", "Tourneo Connect", "Tourneo Custom", "Transit", "Transit Connect", "Transit Custom", "Windstar"
    ],
    "Genesis": [
        "G70", "G70 Sport", "G80", "G90", "GV60", "GV70", "GV80"
    ],
    "GMC": [
        "Acadia", "Canyon", "Envoy", "Hummer EV", "Jimmy", "Safari", "Savana", "Sierra", "Sierra 1500", "Sierra 2500", "Sierra 3500", "Sierra Denali", "Sonoma", "Suburban", "Terrain", "Typhoon", "Vandura", "Yukon", "Yukon Denali", "Yukon XL"
    ],
    "Honda": [
        "Accord", "Accord Coupe", "Accord Hybrid", "Accord Sport", "Aerodeck", "Beat", "City", "Civic", "Civic Coupe", "Civic Hatchback", "Civic Si", "Civic Type R", "Clarity", "Concerto", "CR-V", "CR-X", "CR-Z", "Crosstour", "Del Sol", "e", "Element", "Fit", "FR-V", "HR-V", "Insight", "Integra", "Jazz", "Legend", "Logo", "NSX", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "S2000", "S500", "S600", "S800", "Shuttle", "Stream", "ZR-V"
    ],
    "Hummer": [
        "H1", "H1 Alpha", "H2", "H2 SUT", "H3", "H3T"
    ],
    "Hyundai": [
        "Accent", "Alcazar", "Atos", "Atos Prime", "Azera", "Bayon", "Centennial", "Coupe", "Creta", "Dynasty", "Elantra", "Elantra GT", "Elantra N", "Entourage", "Equus", "Excel", "Galloper", "Genesis", "Genesis Coupe", "Getz", "Grace", "Grandeur", "H-1", "H100", "i10", "i20", "i20 N", "i30", "i30 Fastback", "i30 N", "i40", "Ioniq", "Ioniq 5", "Ioniq 6", "ix20", "ix35", "ix55", "Kona", "Kona Electric", "Kona N", "Lantra", "Lavita", "Marcia", "Matrix", "Nexo", "Palisade", "Pony", "Santa Cruz", "Santa Fe", "Santa Fe Sport", "Santamo", "Scoupe", "Sonata", "Sonata N Line", "Starex", "Staria", "Stellar", "Terracan", "Tiburon", "Trajet", "Tucson", "Veloster", "Veloster N", "Venue", "Veracruz", "Verna", "XG", "XG300", "XG350"
    ],
    "Infiniti": [
        "EX", "EX35", "EX37", "FX", "FX35", "FX37", "FX45", "FX50", "G", "G20", "G25", "G35", "G37", "I", "I30", "I35", "J", "J30", "JX", "JX35", "M", "M30", "M35", "M37", "M45", "M56", "Q30", "Q40", "Q45", "Q50", "Q60", "Q70", "QX", "QX30", "QX4", "QX50", "QX55", "QX56", "QX60", "QX70", "QX80"
    ],
    "Isuzu": [
        "Amigo", "Ascender", "Axiom", "D-MAX", "Gemini", "Hombre", "i-280", "i-290", "i-350", "i-370", "Impulse", "MU", "MU-X", "Oasis", "Pickup", "Rodeo", "Stylus", "Trooper", "Trooper II", "VehiCross"
    ],
    "Jaguar": [
        "E-PACE", "E-Type", "F-PACE", "F-PACE SVR", "F-TYPE", "F-TYPE R", "I-PACE", "Mark II", "S-TYPE", "S-Type R", "Sovereign", "Super V8", "Vanden Plas", "X-Type", "X-Type Estate", "XE", "XE SV", "XF", "XF Sportbrake", "XJ", "XJ Sport", "XJ Supersport", "XJ Vanden Plas", "XJ-S", "XJ12", "XJ6", "XJ8", "XJR", "XJS", "XK", "XK8", "XKR", "XKR-S"
    ],
    "Jeep": [
        "Cherokee", "Cherokee Sport", "Cherokee Trailhawk", "CJ", "CJ-5", "CJ-7", "Comanche", "Commander", "Compass", "Compass Sport", "Compass Trailhawk", "Gladiator", "Gladiator Mojave", "Gladiator Rubicon", "Grand Cherokee", "Grand Cherokee L", "Grand Cherokee SRT", "Grand Cherokee Trackhawk", "Grand Cherokee Trailhawk", "Grand Wagoneer", "Liberty", "Patriot", "Renegade", "Renegade Sport", "Renegade Trailhawk", "Scrambler", "Wagoneer", "Willys", "Wrangler", "Wrangler 4xe", "Wrangler Rubicon", "Wrangler Sahara", "Wrangler Sport", "Wrangler Unlimited"
    ],
    "Kia": [
        "Amanti", "Avella", "Besta", "Borrego", "Cadenza", "Capital", "Carens", "Carnival", "Carstar", "Cerato", "Ceed", "Ceed GT", "Clarus", "Concord", "Credos", "EV6", "EV6 GT", "EV9", "Forte", "Forte GT", "Forte5", "Joice", "K2500", "K2700", "K3", "K5", "K7", "K8", "K900", "Magentis", "Mentor", "Mohave", "Niro", "Niro EV", "Opirus", "Optima", "Optima Hybrid", "Pegas", "Picanto", "Potentia", "Pride", "ProCeed", "ProCeed GT", "Quoris", "Ray", "Retona", "Rio", "Rio5", "Rondo", "Sedona", "Sephia", "Shuma", "Sorento", "Soul", "Soul EV", "Spectra", "Spectra5", "Sportage", "Stinger", "Stinger GT", "Stonic", "Telluride", "Veng", "a", "Venga", "X-Trek", "XCeed"
    ],
    "Lamborghini": [
        "350 GT", "400 GT", "Aventador", "Aventador S", "Aventador SVJ", "Countach", "Countach LPI 800-4", "Diablo", "Diablo GT", "Diablo SV", "Diablo VT", "Espada", "Gallardo", "Gallardo LP560", "Gallardo Spyder", "Gallardo Superleggera", "Huracán", "Huracán EVO", "Huracán Performante", "Huracán STO", "Huracán Tecnica", "Jalpa", "Jarama", "LM002", "Miura", "Murciélago", "Murciélago LP640", "Reventon", "Sian", "Silhouette", "Urus", "Urus Performante", "Urus S"
    ],
    "Lancia": [
        "A112", "Aprilia", "Beta", "Dedra", "Delta", "Delta HF", "Delta Integrale", "Flavia", "Fulvia", "Gamma", "Kappa", "Lybra", "Musa", "Phedra", "Prisma", "Stratos", "Thema", "Thesis", "Trevi", "Voyager", "Ypsilon", "Zeta"
    ],
    "Land Rover": [
        "Defender", "Defender 90", "Defender 110", "Defender 130", "Discovery", "Discovery 3", "Discovery 4", "Discovery 5", "Discovery Sport", "Evoque", "Freelander", "Freelander 2", "Range Rover", "Range Rover Classic", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar", "Range Rover Vogue", "Series I", "Series II", "Series III"
    ],
    "Lexus": [
        "CT", "CT 200h", "ES", "ES 250", "ES 300", "ES 300h", "ES 330", "ES 350", "GS", "GS 300", "GS 350", "GS 400", "GS 430", "GS 450h", "GS 460", "GS F", "GX", "GX 460", "GX 470", "HS", "HS 250h", "IS", "IS 200", "IS 220d", "IS 250", "IS 300", "IS 350", "IS F", "LC", "LC 500", "LC 500h", "LFA", "LS", "LS 400", "LS 430", "LS 460", "LS 500", "LS 500h", "LS 600h", "LX", "LX 450", "LX 470", "LX 500d", "LX 570", "LX 600", "NX", "NX 200t", "NX 250", "NX 300", "NX 300h", "NX 350", "NX 350h", "NX 450h+", "RC", "RC 200t", "RC 300", "RC 350", "RC F", "RX", "RX 270", "RX 300", "RX 330", "RX 350", "RX 350L", "RX 400h", "RX 450h", "RX 450h+", "RX 450hL", "RZ", "RZ 450e", "SC", "SC 300", "SC 400", "SC 430", "UX", "UX 200", "UX 250h", "UX 300e"
    ],
    "Lincoln": [
        "Aviator", "Blackwood", "Continental", "Corsair", "LS", "Mark LT", "Mark VII", "Mark VIII", "MKC", "MKS", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Navigator L", "Town Car", "Zephyr"
    ],
    "Lotus": [
        "Eclat", "Elan", "Elise", "Elise S", "Elite", "Emira", "Esprit", "Europa", "Evija", "Evora", "Evora GT", "Exige", "Exige S"
    ],
    "Maserati": [
        "222", "228", "3200 GT", "420", "4200", "430", "Bora", "Biturbo", "Coupe", "Ghibli", "Ghibli S", "GranCabrio", "GranSport", "GranTurismo", "GranTurismo MC", "GranTurismo Sport", "Grecale", "Indy", "Khamsin", "Kyalami", "Levante", "Levante GT", "Levante S", "Levante Trofeo", "MC12", "MC20", "Merak", "Quattroporte", "Quattroporte GTS", "Quattroporte S", "Spyder", "Zagato"
    ],
    "Maybach": [
        "57", "57 S", "62", "62 S", "Landaulet", "S-Class", "S 560", "S 580", "S 650", "S 680"
    ],
    "Mazda": [
        "121", "2", "3", "3 MPS", "323", "5", "6", "6 MPS", "616", "626", "808", "818", "929", "Atenza", "Axela", "AZ-1", "B-Series", "B2000", "B2200", "B2300", "B2500", "B2600", "B3000", "B4000", "Bongo", "BT-50", "Carol", "Cosmo", "CX-3", "CX-30", "CX-5", "CX-50", "CX-60", "CX-7", "CX-70", "CX-8", "CX-9", "CX-90", "Demio", "E-Series", "Eunos", "Furai", "GLC", "Lantis", "Levante", "MPV", "Millenia", "MX-3", "MX-30", "MX-5", "MX-5 Miata", "MX-6", "Navajo", "Premacy", "Protege", "Protege5", "RX-2", "RX-3", "RX-4", "RX-7", "RX-8", "Tribute", "Xedos", "Xedos 6", "Xedos 9"
    ],
    "McLaren": [
        "540C", "570GT", "570S", "600LT", "620R", "650S", "650S Spider", "675LT", "675LT Spider", "720S", "720S Spider", "750S", "765LT", "Artura", "Elva", "F1", "GT", "MP4-12C", "P1", "P1 GTR", "Senna", "Senna GTR", "Speedtail"
    ],
    "Mercedes-Benz": [
        "190", "190 E", "A 150", "A 160", "A 170", "A 180", "A 190", "A 200", "A 220", "A 250", "A 35 AMG", "A 45 AMG", "A-Class", "AMG GT", "AMG GT 43", "AMG GT 53", "AMG GT 63", "AMG GT Black Series", "AMG GT C", "AMG GT R", "AMG GT S", "AMG One", "B 150", "B 160", "B 170", "B 180", "B 200", "B 220", "B 250", "B-Class", "C 180", "C 200", "C 220", "C 230", "C 240", "C 250", "C 270", "C 280", "C 300", "C 320", "C 350", "C 400", "C 43 AMG", "C 55 AMG", "C 63 AMG", "C-Class", "CL 500", "CL 550", "CL 600", "CL 63 AMG", "CL 65 AMG", "CL-Class", "CLA 180", "CLA 200", "CLA 220", "CLA 250", "CLA 35 AMG", "CLA 45 AMG", "CLA-Class", "CLK 200", "CLK 220", "CLK 230", "CLK 240", "CLK 270", "CLK 280", "CLK 320", "CLK 350", "CLK 430", "CLK 500", "CLK 55 AMG", "CLK 63 AMG", "CLK-Class", "CLS 250", "CLS 280", "CLS 300", "CLS 320", "CLS 350", "CLS 400", "CLS 450", "CLS 500", "CLS 53 AMG", "CLS 55 AMG", "CLS 63 AMG", "CLS-Class", "E 200", "E 220", "E 230", "E 240", "E 250", "E 270", "E 280", "E 300", "E 320", "E 350", "E 400", "E 420", "E 430", "E 500", "E 53 AMG", "E 55 AMG", "E 63 AMG", "E-Class", "EQA", "EQB", "EQC", "EQE", "EQE SUV", "EQS", "EQS SUV", "EQV", "G 230", "G 240", "G 250", "G 270", "G 280", "G 290", "G 300", "G 320", "G 350", "G 400", "G 500", "G 55 AMG", "G 63 AMG", "G 65 AMG", "G-Class", "GL 320", "GL 350", "GL 420", "GL 450", "GL 500", "GL 550", "GL 63 AMG", "GL-Class", "GLA 180", "GLA 200", "GLA 220", "GLA 250", "GLA 35 AMG", "GLA 45 AMG", "GLA-Class", "GLB 180", "GLB 200", "GLB 220", "GLB 250", "GLB 35 AMG", "GLB-Class", "GLC 200", "GLC 220", "GLC 250", "GLC 300", "GLC 350", "GLC 43 AMG", "GLC 63 AMG", "GLC-Class", "GLE 250", "GLE 300", "GLE 350", "GLE 400", "GLE 43 AMG", "GLE 450", "GLE 500", "GLE 53 AMG", "GLE 63 AMG", "GLE-Class", "GLK 200", "GLK 220", "GLK 250", "GLK 280", "GLK 300", "GLK 320", "GLK 350", "GLK-Class", "GLS 350", "GLS 400", "GLS 450", "GLS 500", "GLS 550", "GLS 580", "GLS 600", "GLS 63 AMG", "GLS-Class", "M 230", "M 250", "M 270", "M 280", "M 300", "M 320", "M 350", "M 400", "M 420", "M 430", "M 500", "M 55 AMG", "M-Class", "Maybach GLS 600", "Maybach S-Class", "ML 230", "ML 250", "ML 270", "ML 280", "ML 300", "ML 320", "ML 350", "ML 400", "ML 420", "ML 430", "ML 450", "ML 500", "ML 550", "ML 55 AMG", "ML 63 AMG", "ML-Class", "R 280", "R 300", "R 320", "R 350", "R 500", "R 63 AMG", "R-Class", "S 250", "S 280", "S 300", "S 320", "S 350", "S 400", "S 420", "S 430", "S 450", "S 500", "S 55 AMG", "S 560", "S 580", "S 600", "S 63 AMG", "S 65 AMG", "S-Class", "SL 280", "SL 300", "SL 320", "SL 350", "SL 400", "SL 420", "SL 450", "SL 500", "SL 55 AMG", "SL 560", "SL 600", "SL 63 AMG", "SL 65 AMG", "SL-Class", "SLC 180", "SLC 200", "SLC 250", "SLC 300", "SLC 43 AMG", "SLC-Class", "SLK 200", "SLK 230", "SLK 250", "SLK 280", "SLK 300", "SLK 320", "SLK 350", "SLK 55 AMG", "SLK-Class", "SLR McLaren", "SLS AMG", "SLS AMG Black Series", "Sprinter", "V 200", "V 220", "V 250", "V 280", "V 300", "V-Class", "Vaneo", "Viano", "Vito", "W123", "W124", "W201"
    ],
    "MINI": [
        "Clubman", "Clubman S", "Cooper", "Cooper Clubman", "Cooper Countryman", "Cooper S", "Countryman", "Countryman S", "Coupe", "Coupe S", "Hatch", "John Cooper Works", "One", "Paceman", "Paceman S", "Roadster", "Roadster S"
    ],
    "Mitsubishi": [
        "3000GT", "3000GT Spyder", "3000GT VR-4", "ASX", "Attrage", "Carisma", "Celeste", "Challenger", "Chariot", "Colt", "Cordia", "Diamante", "Eclipse", "Eclipse Cross", "Eclipse Spyder", "Endeavor", "Expo", "FTO", "Galant", "Galant VR-4", "Grandis", "GTO", "i-MiEV", "L200", "L300", "Lancer", "Lancer Evolution", "Lancer Sportback", "Magna", "Minica", "Mirage", "Montero", "Montero Sport", "Outlander", "Outlander PHEV", "Outlander Sport", "Pajero", "Pajero iO", "Pajero Pinin", "Pajero Sport", "Precis", "Raider", "RVR", "Sapporo", "Shogun", "Shogun Sport", "Sigma", "Space Gear", "Space Runner", "Space Star", "Space Wagon", "Starion", "Tredia", "Xpander"
    ],
    "Nissan": [
        "100 NX", "200SX", "240SX", "280ZX", "300ZX", "350Z", "350Z Roadster", "370Z", "370Z Roadster", "AD", "Almera", "Almera Tino", "Altima", "Altima Coupe", "Altima Hybrid", "Armada", "Ariya", "Axxess", "Bluebird", "Cabstar", "Cherry", "Cube", "Datsun", "Frontier", "GT-R", "Interstar", "Juke", "Juke Nismo", "Kicks", "Kubistar", "Laurel", "Leaf", "Maxima", "Maxima QX", "Micra", "Micra C+C", "Murano", "Murano CrossCabriolet", "Navara", "Note", "NP300", "NP300 Pickup", "NV", "NV200", "NV1500", "NV2500", "NV3500", "NX", "Pathfinder", "Pathfinder Armada", "Patrol", "Patrol GR", "Pixo", "Prairie", "Presage", "Primastar", "Primera", "Pulsar", "Qashqai", "Qashqai+2", "Quest", "Rogue", "Rogue Sport", "Sentra", "Serena", "Silvia", "Skyline", "Stanza", "Sunny", "Terrano", "Terrano II", "Tiida", "Titan", "Titan XD", "Trade", "Urvan", "Vanette", "Versa", "Versa Note", "X-Trail", "Xterra", "Z"
    ],
    "Opel": [
        "Adam", "Adam Rocks", "Agila", "Ampera", "Ampera-e", "Antara", "Ascona", "Astra", "Astra GTC", "Astra OPC", "Calibra", "Cascada", "Combo", "Combo Life", "Commodore", "Corsa", "Corsa OPC", "Crossland", "Crossland X", "Frontera", "Grandland", "Grandland X", "GT", "Insignia", "Insignia OPC", "Kadett", "Karl", "Manta", "Meriva", "Mokka", "Mokka X", "Monza", "Monterey", "Movano", "Omega", "Rekord", "Senator", "Signum", "Sintra", "Speedster", "Tigra", "Vectra", "Vectra OPC", "Vivaro", "Zafira", "Zafira Life", "Zafira Tourer"
    ],
    "Peugeot": [
        "1007", "104", "106", "107", "108", "2008", "205", "205 GTI", "206", "206 CC", "206 SW", "207", "207 CC", "207 SW", "208", "208 GTi", "3008", "301", "304", "305", "306", "307", "307 CC", "307 SW", "308", "308 CC", "308 GTi", "308 SW", "309", "4007", "4008", "404", "405", "406", "406 Coupe", "407", "407 Coupe", "5008", "504", "505", "508", "508 PSE", "508 RXH", "508 SW", "605", "607", "806", "807", "Bipper", "Boxer", "Expert", "Expert Tepee", "iOn", "J5", "Partner", "Partner Tepee", "RCZ", "RCZ R", "Rifter", "Traveller"
    ],
    "Pontiac": [
        "6000", "Aztek", "Bonneville", "Catalina", "Fiero", "Firebird", "Firebird Trans Am", "G3", "G5", "G6", "G6 GTP", "G8", "G8 GT", "Grand Am", "Grand Am GT", "Grand Prix", "Grand Prix GTP", "GTO", "Le Mans", "Montana", "Montana SV6", "Parisienne", "Phoenix", "Solstice", "Solstice GXP", "Sunbird", "Sunfire", "Torrent", "Trans Sport", "Vibe", "Vibe GT"
    ],
    "Porsche": [
        "356", "718", "718 Boxster", "718 Boxster GTS", "718 Boxster S", "718 Boxster T", "718 Cayman", "718 Cayman GT4", "718 Cayman GTS", "718 Cayman S", "718 Cayman T", "718 Spyder", "911", "911 Carrera", "911 Carrera 4", "911 Carrera 4S", "911 Carrera GTS", "911 Carrera S", "911 Carrera T", "911 Dakar", "911 GT2", "911 GT2 RS", "911 GT3", "911 GT3 RS", "911 GT3 Touring", "911 R", "911 Sport Classic", "911 Targa 4", "911 Targa 4S", "911 Turbo", "911 Turbo S", "914", "918", "918 Spyder", "924", "928", "930", "944", "944 S", "944 Turbo", "959", "968", "Boxster", "Boxster GTS", "Boxster S", "Boxster Spyder", "Carrera GT", "Cayenne", "Cayenne Coupe", "Cayenne E-Hybrid", "Cayenne GTS", "Cayenne S", "Cayenne Turbo", "Cayenne Turbo GT", "Cayenne Turbo S", "Cayman", "Cayman GT4", "Cayman GTS", "Cayman R", "Cayman S", "Macan", "Macan GTS", "Macan S", "Macan T", "Macan Turbo", "Panamera", "Panamera 4", "Panamera 4S", "Panamera E-Hybrid", "Panamera GTS", "Panamera Sport Turismo", "Panamera Turbo", "Panamera Turbo S", "Taycan", "Taycan 4S", "Taycan Cross Turismo", "Taycan GTS", "Taycan Turbo", "Taycan Turbo S"
    ],
    "Ram": [
        "1500", "1500 Classic", "1500 TRX", "2500", "3500", "C/V", "Dakota", "ProMaster", "ProMaster City"
    ],
    "Renault": [
        "11", "12", "14", "18", "19", "20", "21", "25", "4", "5", "5 GT Turbo", "9", "Alaskan", "Alpine A110", "Alpine A310", "Alpine V6", "Avantime", "Captur", "Clio", "Clio RS", "Clio V6", "Clio Williams", "Espace", "Express", "Fluence", "Fuego", "Grand Espace", "Grand Modus", "Grand Scenic", "Kadjar", "Kangoo", "Koleos", "Laguna", "Laguna Coupe", "Latitude", "Megane", "Megane CC", "Megane Coupe", "Megane RS", "Megane Scenic", "Modus", "Rapid", "Safrane", "Scenic", "Scenic RX4", "Scenic XMOD", "Spider", "Sport Spider", "Symbol", "Talisman", "Thalia", "Trafic", "Twingo", "Twingo GT", "Twizy", "Vel Satis", "Wind", "ZOE"
    ],
    "Rolls-Royce": [
        "Camargue", "Corniche", "Corniche II", "Corniche III", "Corniche IV", "Cullinan", "Cullinan Black Badge", "Dawn", "Dawn Black Badge", "Ghost", "Ghost Black Badge", "Ghost EWB", "Park Ward", "Phantom", "Phantom Coupe", "Phantom Drophead Coupe", "Phantom EWB", "Silver Cloud", "Silver Dawn", "Silver Seraph", "Silver Shadow", "Silver Spirit", "Silver Spur", "Wraith", "Wraith Black Badge"
    ],
    "Rover": [
        "100", "200", "214", "216", "218", "220", "25", "400", "414", "416", "418", "420", "45", "600", "618", "620", "623", "75", "800", "820", "825", "827", "Metro", "Mini", "Streetwise"
    ],
    "Saab": [
        "9-2X", "9-3", "9-3 Aero", "9-3 Convertible", "9-3 SportCombi", "9-3 Viggen", "9-4X", "9-5", "9-5 Aero", "9-5 SportCombi", "9-7X", "90", "900", "900 Convertible", "900 Turbo", "9000", "9000 Aero", "9000 CS", "9000 Turbo", "99", "99 Turbo", "Sonett"
    ],
    "Saturn": [
        "Astra", "Aura", "Aura XE", "Aura XR", "Ion", "Ion Red Line", "L-Series", "L100", "L200", "L300", "LW200", "LW300", "Outlook", "Relay", "S-Series", "SC1", "SC2", "Sky", "Sky Red Line", "SL", "SL1", "SL2", "SW1", "SW2", "Vue", "Vue Green Line", "Vue Hybrid", "Vue Red Line"
    ],
    "SEAT": [
        "Alhambra", "Altea", "Altea Freetrack", "Altea XL", "Arona", "Arosa", "Ateca", "Cordoba", "Cordoba Vario", "Exeo", "Exeo ST", "Fura", "Ibiza", "Ibiza Cupra", "Ibiza SC", "Ibiza ST", "Inca", "Leon", "Leon Cupra", "Leon Cupra R", "Leon FR", "Leon SC", "Leon ST", "Marbella", "Mii", "Terra", "Toledo", "Tarraco"
    ],
    "Škoda": [
        "105", "120", "130", "135", "Citigo", "Citigo-e", "Enyaq", "Enyaq Coupe", "Enyaq iV", "Fabia", "Fabia Combi", "Fabia RS", "Favorit", "Felicia", "Forman", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Octavia Combi", "Octavia RS", "Octavia Scout", "Praktik", "Rapid", "Rapid Spaceback", "Roomster", "Scala", "Superb", "Superb Combi", "Yeti"
    ],
    "Smart": [
        "#1", "#3", "Crossblade", "ForFour", "ForFour Brabus", "ForTwo", "ForTwo Brabus", "ForTwo Cabrio", "ForTwo Coupe", "ForTwo Electric Drive", "Roadster", "Roadster Coupe"
    ],
    "SsangYong": [
        "Actyon", "Actyon Sports", "Chairman", "Korando", "Korando Sports", "Kyron", "Musso", "Musso Sports", "Rexton", "Rexton Sports", "Rodius", "Stavic", "Tivoli", "Tivoli XLV"
    ],
    "Subaru": [
        "Alcyone", "Ascent", "B9 Tribeca", "Baja", "BRAT", "BRZ", "Chiffon", "Crosstrek", "Dex", "Dias Wagon", "Domingo", "Exiga", "Forester", "Forester STI", "Forester XT", "Impreza", "Impreza Outback Sport", "Impreza WRX", "Impreza WRX STI", "Justy", "Legacy", "Legacy B4", "Legacy Lancaster", "Legacy Outback", "Levorg", "Libero", "Loyale", "Lucra", "Outback", "Pleo", "R1", "R2", "Rex", "Sambar", "Solterra", "Stella", "SVX", "Trezia", "Tribeca", "Vivio", "WRX", "WRX STI", "XV", "XT"
    ],
    "Suzuki": [
        "Aerio", "Alto", "APV", "Baleno", "Cappuccino", "Cara", "Carry", "Celerio", "Ciaz", "Ertiga", "Escudo", "Esteem", "Every", "Forenza", "Grand Vitara", "Ignis", "Jimny", "Jimny Sierra", "Kei", "Kizashi", "Lapin", "Liana", "Maruti 800", "MR Wagon", "Palette", "Reno", "S-Cross", "Samurai", "Sidekick", "Solio", "Splash", "SX4", "SX4 S-Cross", "Swift", "Swift Sport", "Twin", "Verona", "Vitara", "Wagon R", "Wagon R+", "X-90", "XL-7"
    ],
    "Tesla": [
        "Cybertruck", "Model 3", "Model 3 Long Range", "Model 3 Performance", "Model S", "Model S Long Range", "Model S Plaid", "Model X", "Model X Long Range", "Model X Plaid", "Model Y", "Model Y Long Range", "Model Y Performance", "Roadster", "Roadster Sport", "Semi"
    ],
    "Toyota": [
        "4Runner", "4Runner SR5", "4Runner TRD Pro", "86", "Allion", "Alphard", "Aqua", "Auris", "Avalon", "Avalon Hybrid", "Avanza", "Avensis", "Avensis Verso", "Aygo", "Aygo X", "bZ4X", "C-HR", "C-HR Hybrid", "Caldina", "Camry", "Camry Hybrid", "Camry Solara", "Carina", "Carina E", "Celica", "Celica Supra", "Century", "Chaser", "Corolla", "Corolla Altis", "Corolla Cross", "Corolla Fielder", "Corolla Hatchback", "Corolla iM", "Corolla Sedan", "Corolla Verso", "Corona", "Cressida", "Crown", "Crown Majesta", "Cynos", "Echo", "Estima", "FJ Cruiser", "Fortuner", "GR Corolla", "GR Supra", "GR Yaris", "GR86", "Grand Hiace", "Granvia", "GT86", "Harrier", "Hiace", "Highlander", "Highlander Hybrid", "Hilux", "Innova", "iQ", "Ipsum", "Kluger", "Land Cruiser", "Land Cruiser 70", "Land Cruiser 100", "Land Cruiser 200", "Land Cruiser Prado", "Mark II", "Mark X", "Matrix", "Mirai", "MR2", "MR2 Spyder", "Noah", "Paseo", "Picnic", "Prado", "Previa", "Prius", "Prius c", "Prius Plug-in", "Prius Prime", "Prius v", "ProAce", "ProAce City", "ProAce Verso", "RAV4", "RAV4 EV", "RAV4 Hybrid", "RAV4 Prime", "Rush", "Sequoia", "Sienna", "Soarer", "Starlet", "Supra", "Tacoma", "Tercel", "Tundra", "Urban Cruiser", "Vanguard", "Vellfire", "Venza", "Verso", "Verso-S", "Vios", "Vitz", "Voxy", "Wish", "Yaris", "Yaris Cross", "Yaris GR", "Yaris iA", "Yaris Verso"
    ],
    "Volkswagen": [
        "Amarok", "Arteon", "Arteon R", "Arteon Shooting Brake", "Atlas", "Atlas Cross Sport", "Beetle", "Beetle Cabrio", "Beetle Dune", "Beetle R-Line", "Bora", "Caddy", "Caddy Maxi", "Caravelle", "CC", "CC R-Line", "Corrado", "Crafter", "CrossPolo", "Derby", "Eos", "Fox", "Golf", "Golf Alltrack", "Golf Cabriolet", "Golf GTD", "Golf GTE", "Golf GTI", "Golf Plus", "Golf R", "Golf R32", "Golf Sportsvan", "Golf Variant", "ID.3", "ID.4", "ID.4 GTX", "ID.5", "ID.5 GTX", "ID.Buzz", "Jetta", "Jetta GLI", "Jetta Hybrid", "Jetta SportWagen", "Karmann Ghia", "Lupo", "Lupo GTI", "New Beetle", "Passat", "Passat Alltrack", "Passat CC", "Passat GTE", "Passat R36", "Passat Variant", "Phaeton", "Pointer", "Polo", "Polo Beats", "Polo BlueGT", "Polo GTI", "Polo R WRC", "Quantum", "Rabbit", "Routan", "Santana", "Scirocco", "Scirocco R", "Sharan", "T-Cross", "T-Roc", "T-Roc Cabriolet", "T-Roc R", "Taos", "Tiguan", "Tiguan Allspace", "Tiguan R", "Touareg", "Touareg R", "Touran", "Transporter", "up!", "up! GTI", "Vento", "Voyage"
    ],
    "Volvo": [
        "120", "140", "164", "240", "240 GL", "240 Turbo", "260", "340", "360", "440", "460", "480", "740", "740 Turbo", "760", "760 Turbo", "780", "850", "850 R", "850 T-5", "850 T-5R", "850 Turbo", "940", "940 Turbo", "960", "C30", "C30 R-Design", "C40 Recharge", "C70", "EX90", "P1800", "S40", "S40 R-Design", "S60", "S60 Cross Country", "S60 Polestar", "S60 R", "S60 R-Design", "S60 Recharge", "S60 T8", "S70", "S80", "S80 Executive", "S80 V8", "S90", "S90 Recharge", "V40", "V40 Cross Country", "V40 R-Design", "V50", "V50 R-Design", "V60", "V60 Cross Country", "V60 Polestar", "V60 Recharge", "V70", "V70 Cross Country", "V70 R", "V70 XC", "V90", "V90 Cross Country", "V90 Recharge", "XC40", "XC40 Recharge", "XC60", "XC60 Polestar", "XC60 R-Design", "XC60 Recharge", "XC70", "XC90", "XC90 Excellence", "XC90 Recharge", "XC90 T8"
    ],
    "Abarth": [
        "124 Spider", "500", "500C", "500e", "595", "595 Competizione", "595 Turismo", "695", "695 Biposto", "695 Rivale", "Grande Punto", "Punto Evo"
    ],
    "Aiways": [
        "U5", "U6"
    ],
    "Alpine": [
        "A110", "A110 GT", "A110 S", "A310", "A610", "V6"
    ],
    "Arcfox": [
        "Alpha S", "Alpha T"
    ],
    "Aspark": [
        "Owl"
    ],
    "Baic": [
        "Beijing X3", "Beijing X5", "Beijing X7", "D20", "D50", "E-Series EV", "EU5", "EU7"
    ],
    "BYD": [
        "Atto 3", "Dolphin", "e2", "e3", "e5", "e6", "F0", "F3", "F6", "G3", "G5", "G6", "Han", "Han EV", "Qin", "Qin Plus", "S6", "S7", "Seal", "Song", "Song Plus", "Tang", "Tang EV", "Yuan Plus"
    ],
    "Chery": [
        "Alia", "Arrizo 3", "Arrizo 5", "Arrizo 6", "Arrizo 7", "Arrizo 8", "eQ", "eQ1", "Fulwin", "Omoda 5", "QQ", "Tiggo", "Tiggo 2", "Tiggo 3", "Tiggo 4", "Tiggo 5", "Tiggo 7", "Tiggo 8"
    ],
    "Cupra": [
        "Ateca", "Born", "Formentor", "Leon", "Leon Sportstourer", "Tavascan"
    ],
    "Daihatsu": [
        "Applause", "Charade", "Copen", "Cuore", "Feroza", "Gran Move", "Materia", "Move", "Rocky", "Sirion", "Terios", "YRV"
    ],
    "DS Automobiles": [
        "DS 3", "DS 3 Crossback", "DS 4", "DS 4 Crossback", "DS 5", "DS 7 Crossback", "DS 9"
    ],
    "Fisker": [
        "Karma", "Ocean", "Pear"
    ],
    "Geely": [
        "Emgrand", "Emgrand 7", "Emgrand EC7", "Emgrand GS", "Emgrand GT", "Emgrand X7", "GC9", "Geometry A", "Geometry C"
    ],
    "Great Wall": [
        "C30", "C50", "Florid", "Haval H2", "Haval H3", "Haval H5", "Haval H6", "Haval H9", "Hover", "M4", "Ora Funky Cat", "Ora Good Cat", "Pao", "Poer", "Voleex C10", "Voleex C30", "Wingle"
    ],
    "Haval": [
        "Dargo", "F7", "F7x", "H2", "H3", "H5", "H6", "H6 Coupe", "H8", "H9", "Jolion", "M6"
    ],
    "Hongqi": [
        "E-HS3", "E-HS9", "H5", "H7", "H9", "HS5", "HS7"
    ],
    "Lucid": [
        "Air", "Air Dream Edition", "Air Grand Touring", "Air Pure", "Air Touring", "Gravity"
    ],
    "Lynk & Co": [
        "01", "02", "03", "05", "06"
    ],
    "MG": [
        "3", "4", "5", "5 EV", "6", "EHS", "HS", "Marvel R", "MG3", "MG4", "MG4 EV", "MG5", "MG6", "MG7", "MGF", "TF", "ZR", "ZS", "ZS EV", "ZT"
    ],
    "NIO": [
        "EC6", "EC7", "ES6", "ES7", "ES8", "ET5", "ET7"
    ],
    "Polestar": [
        "1", "2", "3", "4"
    ],
    "Rivian": [
        "R1S", "R1T"
    ],
    "Seres": [
        "3", "5", "SF5"
    ],
    "Tata": [
        "Aria", "Bolt", "Harrier", "Hexa", "Indica", "Indigo", "Nano", "Nexon", "Nexon EV", "Safari", "Sumo", "Tiago", "Tigor", "Venture", "Vista", "Xenon", "Zest"
    ],
    "VinFast": [
        "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "VF e34"
    ],
    "Xpeng": [
        "G3", "G6", "G9", "P5", "P7", "P7 Wing"
    ],
    "Zeekr": [
        "001", "009", "X"
    ]
};

if (typeof module !== "undefined") module.exports = carModels;
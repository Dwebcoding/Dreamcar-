# Complete Database of Car Brands and Models

**Updated:** January 2026  
**File:** js/models.expanded.js

## Statistics

- **Total brands:** 86
- **Thousands of models** available
- **Global coverage:** Europe, Asia, America, Australia

## Included Brands

### Premium and Luxury Brands
- Acura, Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Cadillac, Genesis, Infiniti, Jaguar, Lamborghini, Land Rover, Lexus, Lincoln, Lotus, Maserati, Maybach, McLaren, Mercedes-Benz, Porsche, Rolls-Royce

### European Brands
- Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Citroën, Dacia, FIAT, Lancia, Mercedes-Benz, MINI, Opel, Peugeot, Renault, Rover, Saab, SEAT, Škoda, Smart, Volkswagen, Volvo
- New: Abarth, Alpine, Cupra, Daihatsu, DS Automobiles

### American Brands
- Buick, Cadillac, Chevrolet, Chrysler, Dodge, Ford, GMC, Hummer, Jeep, Lincoln, Pontiac, Ram, Saturn, Tesla

### Japanese and Korean Brands
- Acura, Honda, Hyundai, Infiniti, Isuzu, Kia, Lexus, Mazda, Mitsubishi, Nissan, Subaru, Suzuki, Toyota
- New: Genesis (Hyundai premium brand)

### Chinese Brands
- New: Aiways, Arcfox, Aspark, Baic, BYD, Chery, Geely, Great Wall, Haval, Hongqi, Lynk & Co, MG, NIO, Seres, Tata, VinFast, Xpeng, Zeekr

### Electric Brands
- Tesla, Lucid, Polestar, Rivian, NIO, BYD, Fisker, Aiways, Xpeng

## Key Features

### Brands with Most Expanded Models:
1. **Mercedes-Benz** - Over 150 models (all A-S classes, AMG, EQ)
2. **BMW** - Over 120 models (Series 1-8, X, M, i, Z)
3. **Toyota** - Over 100 models (SUVs, sedans, hybrids, trucks)
4. **Ford** - Over 90 models (Mustang, F-Series, Explorer)
5. **Volkswagen** - Over 80 models (Golf, Passat, ID)
6. **Porsche** - Over 60 variants (911, Taycan, Cayenne, Macan)
7. **Audi** - Over 70 models (A/Q/e-tron)
8. **Nissan** - Over 70 models (GT-R, Z, SUVs)

### Complete Categories:
- SUV/Crossover - All major global models
- Sedans - From compact to luxury
- Sports cars - From entry-level to hypercar
- Electric - Tesla, Lucid, NIO, BYD, EQ, e-tron, ID
- Pickup trucks - Ford F-Series, Ram, Chevrolet Silverado, Toyota Hilux
- Vans/Commercial - Ford Transit, Mercedes Sprinter

## Geographic Coverage

- **Europe:** 35+ brands (Italy, Germany, France, UK, Spain, Czech Republic, Sweden)
- **Asia:** 30+ brands (Japan, South Korea, China, India)
- **America:** 20+ brands (USA)
- **Global:** Premium and sports brands worldwide

## Performance

- Database optimized with IIFE module pattern
- Fast population with DocumentFragment
- Compatible with CommonJS (Node.js) and browser

## Usage

The database is automatically loaded on the **preventivo.html** page:

```html
<script src="../js/models.expanded.js"></script>
<script src="../js/car-selector.js"></script>
```

The car selector dynamically populates:
1. **"Brand" Select** - 86 brands in alphabetical order
2. **"Model" Select** - Models filtered by selected brand

## Future Updates

The database can be further expanded with:
- Automatic API imports
- Addition of 2026-2027 new models
- Expansion of emerging brands
- Inclusion of historic and vintage brands

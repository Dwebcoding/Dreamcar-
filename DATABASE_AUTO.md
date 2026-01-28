# Database Completo Marche e Modelli Auto

**Aggiornamento:** Gennaio 2026  
**File:** `js/models.expanded.js`

## Statistiche

- **Totale marche:** 86
- **Migliaia di modelli** disponibili
- **Copertura globale:** Europa, Asia, America, Australia

## Marche Incluse

### Marche Premium e di Lusso
- Acura, Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Cadillac, Genesis, Infiniti, Jaguar, Lamborghini, Land Rover, Lexus, Lincoln, Lotus, Maserati, Maybach, McLaren, Mercedes-Benz, Porsche, Rolls-Royce

### Marche Europee
- Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Citroën, Dacia, FIAT, Lancia, Mercedes-Benz, MINI, Opel, Peugeot, Renault, Rover, Saab, SEAT, Škoda, Smart, Volkswagen, Volvo
- **Nuove:** Abarth, Alpine, Cupra, Daihatsu, DS Automobiles

### Marche Americane
- Buick, Cadillac, Chevrolet, Chrysler, Dodge, Ford, GMC, Hummer, Jeep, Lincoln, Pontiac, Ram, Saturn, Tesla

### Marche Giapponesi e Coreane
- Acura, Honda, Hyundai, Infiniti, Isuzu, Kia, Lexus, Mazda, Mitsubishi, Nissan, Subaru, Suzuki, Toyota
- **Nuove:** Genesis (brand premium Hyundai)

### Marche Cinesi
- **Nuove:** Aiways, Arcfox, Aspark, Baic, BYD, Chery, Geely, Great Wall, Haval, Hongqi, Lynk & Co, MG, NIO, Seres, Tata, VinFast, Xpeng, Zeekr

### Marche Elettriche
- Tesla, Lucid, Polestar, Rivian, NIO, BYD, Fisker, Aiways, Xpeng

### Altre Marche Globali
- Ferrari, Lamborghini, Maserati, McLaren, SsangYong

## Caratteristiche Principali

### Marche con più modelli espansi:
1. **Mercedes-Benz** - Oltre 150 modelli e varianti (tutte le classi A-S, AMG, EQ elettriche, Maybach)
2. **BMW** - Oltre 120 modelli (Serie 1-8, X, M, i, Z)
3. **Toyota** - Oltre 100 modelli (SUV, berline, ibride, pickup)
4. **Ford** - Oltre 90 modelli (Mustang, F-Series, Explorer, Transit)
5. **Volkswagen** - Oltre 80 modelli (Golf, Passat, ID elettriche)
6. **Porsche** - Oltre 60 varianti (911, Taycan, Cayenne, Macan)
7. **Audi** - Oltre 70 modelli (A/Q/e-tron)
8. **Nissan** - Oltre 70 modelli (GT-R, Z, SUV)

### Categorie complete:
- **SUV/Crossover** - Tutti i principali modelli globali
- **Berline** - Da compatte a luxury
- **Sportive** - Da entry-level a hypercar
- **Elettriche** - Tesla, Lucid, NIO, BYD, EQ, e-tron, ID, Ioniq, ecc.
- **Pickup** - Ford F-Series, Ram, Chevrolet Silverado, Toyota Hilux/Tundra
- **Van/Commerciali** - Ford Transit, Mercedes Sprinter, Citroën Jumper

## Esempi di Espansione

### Prima (esempi):
- **Ferrari:** 28 modelli
- **Lamborghini:** 8 modelli
- **Tesla:** 6 modelli

### Dopo (esempi):
- **Ferrari:** 62 modelli (inclusi 250, 275, 288 GTO, F40, F50, Enzo, LaFerrari, Purosangue)
- **Lamborghini:** 32 modelli (inclusi Miura, Countach, Diablo, Murciélago, Aventador SVJ, Urus S)
- **Tesla:** 16 varianti (Model S/3/X/Y con tutte le versioni Long Range, Performance, Plaid)

## Utilizzo

Il database viene caricato automaticamente nella pagina **preventivo.html** tramite:

```html
<script src="js/models.expanded.js"></script>
<script src="js/car-selector.js"></script>
```

Il selettore auto popola dinamicamente:
1. **Select "Marca"** - 86 marche in ordine alfabetico
2. **Select "Modello"** - Modelli filtrati in base alla marca selezionata

## Copertura Geografica

- **Europa:** 35+ marche (Italia, Germania, Francia, UK, Spagna, Repubblica Ceca, Svezia, Romania)
- **Asia:** 30+ marche (Giappone, Corea del Sud, Cina, India)
- **America:** 20+ marche (USA)
- **Globale:** Marche premium e sportive disponibili worldwide

## Performance

- Database ottimizzato con IIFE module pattern
- Popolamento veloce con DocumentFragment
- Compatibile con CommonJS (Node.js) e browser

## Aggiornamenti Futuri

Il database può essere ulteriormente espanso con:
- Import automatico da API CarQuery o Wikidata
- Aggiunta di nuovi modelli 2026-2027
- Espansione marche emergenti (nuovi brand EV cinesi)
- Inclusione di marche storiche e vintage

---

**Engineered & Designed by Dwebcoding**  
Gennaio 2026

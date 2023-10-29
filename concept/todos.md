# ToDos

## Graphics

- [ ] background sand
- [ ] background water (flood)
- [ ] crop types (seeds + plant)
  - [ ] water melon
  - [ ] wheat
  - [ ] barley
- [ ] Schiff
- [ ] money
- [ ] progress bar (klein und groß)

## Backend

- [x] Silo (silo typen)
- [x] Silo bestände akkumuliert
- [ ] Farmer abhängig von Silo
- [ ] crops collectable
- [ ] Farmer Crop Select edge cases
- [x] flood
- [ ] crop types freischaltbar machen
- [ ] Preise für Gebäude

solider Zwischenstand:

- [ ] farmer upgrade
- [ ] silo upgrade

# Service Interface

## Get

- Preise zum Freischalten/ Crop liste
- Flut Matrix
- (Flut Silo/Farmer Verluste)
- Preise für Objekte
- gesamt Silo stand

## Set

- Crop freischalten
- Objekte kaufen (bauen)
- Gebäude zerstören (Farmland setzen)
- Crop sammeln bei Farmer

# DOD

## Flut

- zerstört Pflanze
- ~~bewässert Felder (+ 1.5)~~
- ~~Silo-Bestände random reduzieren~~
- ~~Farmer verliert auch aus Inventar~~

## Farmer

- collect button im UI
- wenn voll -> Icon auf Haus
- crop type ändern: (Weizen zu Melone)
  1. typ auf nichts setzen
  2. er erntet noch das, was sein inv typ ist
  3. irgendwann nichts mehr davon da
  4. man kann typ auf was Neues ändern, wenn inventar leer ist
  5. er fängt an den neuen Typ zu bauen
  6. wenn er erntet, wird inv typ ersetzt
- farmer erntet:
  - was in sein inventar passt
  - falls leer, seinen crop typ
- Level:
  - Radius
  - Efficiency
  - Capacity
- Upgrade gegen Crops (verschiedene Level verschiedene Crops)
- zum sammeln
  - Silo in der Nähe
  - gleicher Crop Type
  - nicht voll

## Silo

- hat Radius (abhängig von Level)
- Silo hat crop typ, beim Kaufen
- Level:
  - capacity
  - Radius
- Upgrade gegen Crops (verschiedene Level verschiedene Crops)

## Shop

Kaufbar:

- Farmer upgrade (beim Farmer)
- Silo upgrade (beim Silo)
- Farmer (Felder Shop)
- Silo (Felder Shop)
- Graben (Felder Shop)
- neue Crop-Typen (Crop Shop)
- Stein entfernen (beim Stein)
- Geld (Verkaufsstelle)
- Pyramide (irgendeine Stelle, bei der man die kaufen kann:P)

"Shops":

- Farmer, Silo und Stein (jeweils Upgrades/Entfernen)
- Schiff
  - spawnt immer mal (nach Flut?)
  - clickable
  - zeigt shop an, dort hauptsächlich Crops gegen Geld

## Inventar

- Crops als Summe der Silos
- Geld (global)

## Gebäude platzieren

- "Bau Modus"
- jedes Platzieren kostet Geld/Crops
- wenn kein Geld, platzieren nicht möglich
- Gebäude zerstören button bei Farmer, Silo, Graben

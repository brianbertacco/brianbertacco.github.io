# Immagini del portfolio

Le immagini fornite sono già state associate alle rispettive schede. I nomi qui sotto corrispondono ai file ottimizzati in `assets/images/`. Le figure ricavate dai PDF sono aggiunte nelle gallerie degli stessi progetti.

| File che hai inviato | File nel sito | Progetto |
|---|---|---|
| `masterthesis.png` | `masterthesis-user.webp` | Shock transmission, tesi MSc |
| `MIXEDBAFFLE-STRUCTURE.png` | `mixed-baffle-user.webp` | Sloshing control |
| `tvc.jpg` | `tvc-user.webp` | Thermal vacuum testing |
| `TALL3D_nps3.png` | `tall-reference.webp` | Liquid metal CFD |
| `orbit_E_around_S.png` | `orbital-seasons.webp` | Satellite thermal control |
| `flights.jpeg` | `flights-user.webp` | Electric aircraft |
| `Close-up_view_of_SMART-1_s_stationary_plasma_thruster_pillars.jpg` | `smart-thruster-reference.webp` | Lunar electric propulsion |
| `Payloadimage.png` | `payload-user.webp` | Mars vehicle |
| `SpaceX Starship at a small outpost on Mars by iamVisual.jpg` | `mars-illustration.webp` | Mars vehicle, illustrazione di contesto |
| `eMMRTG.PNG` | `em-mrtg-reference.webp` | Radioisotope power, tesi BSc |
| `earthdebris.png` | `earth-debris-user.webp` | Active removal of space debris |

| `m1.jpg` | `aesir-nozzle.webp` | ÆSIR, ugello |
| `m2.png` | `aesir-wide-fire.webp` | ÆSIR, static fire |
| `m3.jpg` | `aesir-rig.webp` | ÆSIR, banco prova |
| `m4.png / slide 4 del meeting` | `aesir-fire.webp` | ÆSIR, static fire |
| `m5.png / slide 5 del meeting` | `aesir-thrust.webp` | ÆSIR, confronto spinta |
| `MIST_hot_case.png` | `mist-hot-case.webp` | MIST, temperature |
| `MIST_with_thermal_couplings1.png` | `mist-couplings.webp` | MIST, accoppiamenti termici |
| `MIST_without_thermal_couplings1.png` | `mist-geometry.webp` | MIST, geometria |
| `MIST_transient.gif` | `mist-transient-snapshot.webp` | MIST, singolo fotogramma |

## Sostituire una foto

Il modo più semplice è sostituire il file `.webp` con una nuova immagine che abbia **lo stesso nome** nella cartella `assets/images/`, poi aggiornare i file nel repository. Così copertina, scheda e galleria continuano a puntare all'immagine corretta. Per convertire in WebP puoi usare un editor di immagini oppure conservare un nuovo formato e aggiornare i riferimenti.

Per usare **un nome diverso**, cerca il vecchio nome in `index.html` e nel file HTML corrispondente dentro `projects/`, poi sostituiscilo con il nuovo nome. La scheda progetto contiene sia l'immagine grande sia la miniatura nella galleria; aggiorna anche la didascalia e il testo alternativo se cambia il soggetto.

Per **aggiungere una foto** a una galleria, copia un elemento `<figure>…</figure>` dalla stessa pagina di progetto e modifica `src`, `data-image`, `alt`, `data-caption` e `<figcaption>`. Metti il file immagine in `assets/images/`.

Le immagini di riferimento esterne o illustrative sono etichettate nelle pagine, per distinguerle dalle figure dei report e dal lavoro svolto personalmente.

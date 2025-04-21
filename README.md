# FAM for Dogs e.V. Website

<img src="public/images/FAM_Logo_Fortitude.png" alt="FAM for Dogs Logo" width="250"/>

**Website:** [https://famfordogs.com/](https://famfordogs.com/)

## Über das Projekt

FAM for Dogs e.V. (Fight and Movement for Dogs) ist ein Tierschutzverein, der von Mieke Wittmann und Fiona Bliedtner gegründet wurde und sich für Straßenhunde in Indonesien und Rumänien einsetzt. Alle Inhalte, Bilder, Texte, Logos und die Marke "FAM for Dogs" sind geistiges Eigentum von Mieke und Fiona bzw. des Vereins FAM for Dogs e.V. und dürfen nicht ohne deren ausdrückliche Genehmigung verwendet werden.

Ich habe das Projekt erstmals über Instagram entdeckt. Die Arbeit von Fiona und Mieke hat mich so beeindruckt, dass ich Fiona direkt angeschrieben und angeboten habe, eine professionelle Webpräsenz für den Verein zu gestalten. Aus diesem ersten Kontakt entstand eine enge, kreative Zusammenarbeit, die ich später im Rahmen meines 6. Semesters an der Hochschule Bremerhaven weiter ausgebaut habe.

Mir war es wichtig, mit modernen Webtechnologien einen echten Mehrwert für den Verein und den Tierschutz zu schaffen. Die Seite soll als digitales Schaufenster für die wichtige Arbeit des Vereins dienen, Menschen informieren, emotional berühren und zu Spenden oder Patenschaften motivieren. Die Zusammenarbeit war für mich nicht nur ein technisches, sondern auch ein soziales Herzensprojekt.

Die Webseite dient als digitales Schaufenster für die wichtige Arbeit des Vereins und soll Besucher informieren, engagieren und zu Spenden oder Patenschaften motivieren. Durch eine emotionale und authentische Darstellung der Tierschutzarbeit wird eine starke Verbindung zu potenziellen Unterstützern hergestellt.

## Technologie-Stack

Dieses Projekt wurde mit folgenden Technologien entwickelt:

- **Frontend Framework**: React 18 mit funktionalen Komponenten und Hooks (useState, useEffect, useRef, useContext)
- **Entwicklungsumgebung**: Vite für schnelle Entwicklung und optimierte Builds
- **Styling**: 
  - Tailwind CSS für responsive und konsistente Gestaltung
  - Custom CSS für spezifische Animationen und Effekte
  - CSS-in-JS für komponentenspezifische Styles
- **Programmiersprache**: TypeScript für typsichere Entwicklung und bessere Code-Qualität
- **Routing**: React Router v6 mit browserHistory für dynamische Seitennavigation
- **State Management**: Context API für globalen Zustand (z.B. Anzeigesprache, Thema)
- **Icons**: Lucide React für konsistente und skalierbare Icons
- **Animation**: 
  - CSS Transitions und React useRef Hooks für performante UI-Animationen
  - Intersection Observer API für Scroll-Animationen
- **Bildoptimierung**: 
  - Optimized Image Component mit Lazy Loading
  - Memoization von Bildern für verbesserte Performance
  - Bild-Caching und Priorisierung wichtiger Bilder
  - Fallback-Bilder für fehlerhafte Bildquellen
- **E-Mail-Integration**:
  - EmailJS für Kontakt-, Notfall- und Mitgliedschaftsformulare
  - Benutzerdefinierte HTML-E-Mail-Templates mit Branding
  - Formularvalidierung mit wiederverwendbaren Hooks
- **SEO-Optimierung**:
  - React Helmet für dynamische Meta-Tags
  - Strukturierte Daten (Schema.org) für bessere Suchmaschinen-Indexierung
  - Semantisches HTML für Barrierefreiheit und SEO
- **Analytics**:
  - Google Analytics 4 für Besuchertracking und Conversion-Optimierung
  - Automatisches Pageview-Tracking bei Routenwechseln
  - Event-Tracking für Benutzerinteraktionen
- **Deployment**: 
  - GitHub Pages / Netlify für kontinuierliche Bereitstellung
  - Automatisierte Build-Prozesse mit GitHub Actions

## Projektstruktur

Das Projekt folgt einer modularen Struktur mit einem Fokus auf Wiederverwendbarkeit und Wartbarkeit:

- `src/components/`: Wiederverwendbare UI-Komponenten
  - `src/components/common/`: Grundlegende UI-Elemente (Buttons, Cards, etc.)
  - `src/components/layout/`: Layout-Komponenten (Header, Footer, Navigation, etc.)
  - `src/components/forms/`: Formular-Komponenten und Validierungslogik
  - `src/components/sections/`: Komplexe Abschnitte, die auf mehreren Seiten verwendet werden
- `src/pages/`: Seitenkomponenten für das Routing
- `src/hooks/`: Benutzerdefinierte React Hooks für wiederverwendbare Logik
  - `useFormValidation`: Zentraler Hook für Formularvalidierung
  - `useMemoizedValue`: Performance-Optimierung durch Memoization
  - `useScrollToTop`: Automatisches Scrollen zum Seitenanfang bei Routenwechsel
- `src/utils/`: Hilfsfunktionen und Utilities
  - `imageLoader.ts`: Optimierte Bildladestrategie mit Caching
- `src/services/`: Dienste für externe APIs und Funktionalitäten
  - `emailService.ts`: Zentraler Service für E-Mail-Versand
  - `analyticsService.ts`: Google Analytics Integration
- `src/templates/`: HTML-Templates für E-Mails und andere Dokumente
  - `emailTemplate.html`: Standard-E-Mail-Template
  - `emergencyTemplate.html`: Notfall-E-Mail-Template
- `src/lib/`: Bibliotheken und Konfigurationen
  - `seoData.ts`: SEO-Konfigurationen und strukturierte Daten
- `src/assets/`: Statische Assets wie Bilder, Fonts und Icons
- `public/`: Öffentlich zugängliche Dateien

## Herausforderungen und Lösungen

1. **Responsive Design**: Die Webseite musste auf allen Geräten optimal funktionieren
   - **Problem**: Unterschiedliche Bildschirmgrößen und Gerätetypen erforderten ein flexibles Layout.
   - **Lösung**: Implementierung eines Mobile-First-Ansatzes mit Tailwind CSS. Verwendung von Flexbox und CSS Grid für komplexe Layouts. Spezifische Breakpoints für verschiedene Gerätetypen.

2. **Bildoptimierung**: Aufgrund der vielen Bilder von Hunden und Projekten war die Optimierung der Ladezeiten entscheidend
   - **Problem**: Hochauflösende Bilder führten zu langsamen Ladezeiten und hohem Datenverbrauch.
   - **Lösung**: Entwicklung eines zentralen Image-Loaders mit Caching-Mechanismus und Priorisierung wichtiger Bilder. Implementierung einer OptimizedImage-Komponente mit Lazy Loading und Fallback-Bildern für fehlerhafte Quellen.

3. **Konsistentes Styling**: Um ein einheitliches Design zu gewährleisten, wurde eine benutzerdefinierte Farbpalette und Typografie implementiert
   - **Problem**: Bei einem umfangreichen Projekt wie diesem bestand die Herausforderung, ein durchgängig einheitliches Design über alle Komponenten hinweg zu gewährleisten.
   - **Lösung**: Erstellung eines zentralen Tailwind-Themes mit benutzerdefinierten Variablen für Farben, Abstände, Rundungen und Typografie. Entwicklung einer Komponentenbibliothek für wiederkehrende UI-Elemente.

4. **Formularverarbeitung**: Verschiedene Formulare für Kontakt, Notfallmeldungen und Mitgliedschaften mussten implementiert werden
   - **Problem**: Unterschiedliche Formulartypen erforderten spezifische Validierung und Verarbeitung.
   - **Lösung**: Entwicklung eines wiederverwendbaren useFormValidation-Hooks mit anpassbarer Validierung. Integration von EmailJS für zuverlässige E-Mail-Zustellung mit professionellen HTML-Templates für verschiedene Formulartypen.

5. **Performance-Optimierung**: Durch Code-Splitting und optimierte Builds konnte die Ladezeit der Seite deutlich verbessert werden
   - **Problem**: Initial große Bundle-Größe und langsame Ladezeiten, besonders auf mobilen Geräten.
   - **Lösung**: Implementierung von dynamischem Import für Routen, Optimierung von Drittanbieter-Bibliotheken, Vite's Tree-Shaking und aggressive Browser-Caching-Strategien. Entwicklung eines useMemoizedValue-Hooks zur Reduzierung unnötiger Neuberechnungen.

6. **Bildergalerien**: Die Darstellung von Projektbildern erforderte eine flexible und leistungsstarke Galerie
   - **Problem**: Unterschiedliche Bildformate und -größen, ansprechende Darstellung für verschiedene Inhalte.
   - **Lösung**: Entwicklung einer benutzerdefinierten Galerie-Komponente mit CSS Grid für das Layout und optimierter Darstellung für verschiedene Bildschirmgrößen.

7. **Navigation und Routing**: Eine intuitive Navigation zwischen verschiedenen Sektionen war wichtig für die Benutzerfreundlichkeit
   - **Problem**: Komplexe Verschachtelung von Routen und Unterseiten, besonders für Projekte und Hundeprofile.
   - **Lösung**: Implementierung einer hierarchischen Routenstruktur mit React Router v6, einschließlich verschachtelter Routen und dynamischer Parameter für Detailseiten. Entwicklung eines useScrollToTop-Hooks für konsistentes Scroll-Verhalten bei Seitenwechseln.

8. **SEO-Optimierung**: Die Webseite musste für Suchmaschinen optimiert werden
   - **Problem**: React Single-Page-Applications sind oft schwer für Suchmaschinen zu indexieren.
   - **Lösung**: Implementierung einer SEO-Komponente mit React Helmet für dynamische Meta-Tags, Hinzufügen von strukturierten Daten (Schema.org) für verbesserte Suchmaschinen-Darstellung und Verwendung von semantischem HTML für bessere Zugänglichkeit und SEO.

9. **Analytics und Tracking**: Für datengestützte Entscheidungen war eine Analyse des Nutzerverhaltens notwendig
   - **Problem**: Integration von Tracking-Tools ohne Beeinträchtigung der Seitenleistung.
   - **Lösung**: Implementierung von Google Analytics 4 mit einem zentralen Analytics-Service, der Pageviews und Events trackt. Lazy Loading der Analytics-Funktionalität und Aktivierung nur im Produktionsmodus.

## Technische Details

### Performance-Optimierungen
- Lazy Loading für Komponenten und Bilder
- Memoization von Werten und Komponenten zur Reduzierung von Neuberechnungen
- Code-Splitting für reduzierte Bundle-Größen
- Optimierte Asset-Größen und -Formate
- Effiziente Bundle-Größe durch Tree-Shaking und Minifizierung

### SEO-Optimierung
- Dynamische Meta-Tags für jede Seite mit React Helmet
- Strukturierte Daten (Schema.org) für bessere Suchmaschinen-Indexierung
- Optimierte Seitenstruktur und URL-Schema
- Semantisches HTML für bessere Zugänglichkeit

### Sicherheit
- Content Security Policy
- HTTPS-Erzwingung
- Sichere Formulardatenverarbeitung
- Schutz vor gängigen Webangriffsvektoren

### Barrierefreiheit
- Semantisches HTML
- ARIA-Attribute für verbesserte Screenreader-Unterstützung
- Ausreichende Farbkontraste
- Tastaturnavigation

## Funktionen

- **Responsive Design**: Vollständig anpassungsfähig an alle Bildschirmgrößen und Geräte
- **Optimierte Bildladestrategie**: Zentraler Image-Loader mit Caching und Priorisierung
- **Formularvalidierung**: Wiederverwendbarer Hook für konsistente Validierung
- **E-Mail-Integration**: Professionelle HTML-E-Mail-Templates für verschiedene Formulartypen
- **SEO-Optimierung**: Dynamische Meta-Tags und strukturierte Daten
- **Analytics**: Google Analytics 4 Integration für Besuchertracking
- **Dynamische Inhaltsdarstellung**: Flexible Komponenten für verschiedene Inhaltstypen
- **Kontakt- und Spendenformulare**: Benutzerfreundliche Formulare mit Validierung
- **Optimierte Bildergalerien**: Effiziente Darstellung von Projekt- und Hundebildern
- **Dynamische Navigationsmenüs** mit Dropdown-Funktionen für komplexe Seitenstrukturen
- **Animierte Übergänge** zwischen Seitenabschnitten für ein flüssiges Benutzererlebnis

## Besonderheiten

- **Hundeprofile**: Detaillierte Seiten für jeden Hund mit personalisierten Galerien und Geschichten. Besucher können zwischen Patenschaften und (zukünftig) Adoptionen wählen.

- **Projektdarstellung**: Übersichtliche Darstellung der verschiedenen Tierschutzprojekte in Rumänien und Indonesien mit Bildergalerien und detaillierten Beschreibungen.

- **Emotionale Content-Präsentation**: Informationen werden durch eine Kombination aus Text, Bildern und visuellen Elementen präsentiert, um eine emotionale Verbindung zu den Besuchern herzustellen.

- **Optimierte Navigationsstruktur**: Für eine intuitive Benutzererfahrung wurden kontextsensitive Menüs und intelligente Seitenübergänge implementiert.

- **Engagement-Förderung**: Strategisch platzierte Call-to-Actions, emotionale Geschichten und direkte Wege zur Unterstützung fördern die Interaktion mit den Besuchern und erhöhen die Conversion-Rate für Spenden und Patenschaften.

- **Modulares Content-Management**: Die Webseite wurde mit einer flexiblen Struktur entwickelt, die einfache Aktualisierungen und Erweiterungen ermöglicht, ohne dass umfangreiche Code-Änderungen erforderlich sind.

## Die Vision hinter dem Projekt

FAM for Dogs e.V. repräsentiert mehr als nur eine Webseite – es verkörpert die Vision von Mieke und Fiona, durch digitale Technologie positive Veränderungen in der realen Welt zu bewirken. Das Projekt verfolgt einen menschenzentrierten Design-Ansatz, der emotionale Verbindungen schafft und gleichzeitig praktische Informationen vermittelt.

Die Entwicklung fokussierte sich darauf, eine Plattform zu schaffen, die:

  - Die Geschichten der Hunde authentisch erzählt
  - Die Menschen hinter dem Tierschutz würdigt
  - Transparenz über die Arbeit und die Verwendung von Spenden bietet
  - Die Komplexität des internationalen Tierschutzes verständlich darstellt
  - Besucher zu aktivem Engagement motiviert

## Zukünftige Entwicklungen

Für die Zukunft sind folgende Erweiterungen geplant:

- **Mehrsprachige Unterstützung**: Implementierung von Deutsch und Englisch für eine breitere Zielgruppe
- **Erweitertes Hundeprofil-System**: Verbesserte Filterfunktionen und detailliertere Profile
- **Blog-Bereich**: Für aktuelle Updates und Geschichten aus dem Tierschutzalltag
- **Spenden-Dashboard**: Visualisierung der Spendenverwendung und aktueller Projekte
- **Community-Funktionen**: Für Unterstützer und Paten, um sich auszutauschen
- **Verbesserte Analytik**: Für datengestützte Entscheidungen zur Webseitenoptimierung

## Urheberrechtshinweise

Der Quellcode dieser Website wurde von Kadir Diego Padin Rodriguez entwickelt und ist urheberrechtlich geschützt. Alle Inhalte, Bilder, Texte, Logos und die Marke "FAM for Dogs" sind geistiges Eigentum von Mieke Wittmann und Fiona Bliedtner bzw. des Vereins FAM for Dogs e.V. und dürfen nicht ohne deren ausdrückliche Genehmigung verwendet werden.

## Fazit

Die Entwicklung der FAM for Dogs e.V. Website war ein lehrreiches und erfüllendes Projekt, das technische Herausforderungen mit einem bedeutungsvollen sozialen Zweck verband. Durch die Kombination moderner Webtechnologien mit emotionalem Storytelling konnte eine Plattform geschaffen werden, die nicht nur informiert, sondern auch inspiriert und zum Handeln motiviert.

Die Webseite ist ein lebendiges Projekt, das kontinuierlich wachsen und sich weiterentwickeln wird, um den Bedürfnissen des Vereins und seiner Unterstützer gerecht zu werden. Sie dient als digitales Schaufenster für die wichtige Arbeit von FAM for Dogs e.V. und als Brücke zwischen den hilfsbedürftigen Tieren und den Menschen, die einen Unterschied machen möchten.

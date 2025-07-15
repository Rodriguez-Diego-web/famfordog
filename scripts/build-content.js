#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pfade
const contentDir = path.join(__dirname, '../content');
const dogsDir = path.join(contentDir, 'dogs');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'dogs.json');

// Stelle sicher, dass das Output-Verzeichnis existiert
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Funktion zum Laden aller Hunde
function loadDogs() {
    console.log('🐕 Lade Hunde-Daten aus Markdown-Dateien...');
    
    if (!fs.existsSync(dogsDir)) {
        console.error('❌ Hunde-Verzeichnis nicht gefunden:', dogsDir);
        return [];
    }

    const dogFiles = fs.readdirSync(dogsDir).filter(file => file.endsWith('.md'));
    const dogs = [];

    dogFiles.forEach((file, index) => {
        const filePath = path.join(dogsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        // Füge ID basierend auf Index hinzu (für Kompatibilität)
        const dog = {
            id: index + 1,
            ...data
        };

        dogs.push(dog);
        console.log(`✅ Geladen: ${dog.name} (${dog.breed}, ${dog.age})`);
    });

    return dogs;
}

// Hauptfunktion
function buildContent() {
    console.log('🚀 Starte Content-Build...');
    
    try {
        const dogs = loadDogs();
        
        // Sortiere nach Name für Konsistenz
        dogs.sort((a, b) => a.name.localeCompare(b.name));
        
        // Schreibe JSON-Datei
        fs.writeFileSync(outputFile, JSON.stringify(dogs, null, 2));
        
        console.log(`✅ ${dogs.length} Hunde erfolgreich in ${outputFile} gespeichert`);
        console.log('🎉 Content-Build abgeschlossen!');
        
    } catch (error) {
        console.error('❌ Fehler beim Content-Build:', error);
        process.exit(1);
    }
}

// Führe Build aus
buildContent(); 
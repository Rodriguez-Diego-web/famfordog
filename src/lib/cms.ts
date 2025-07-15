// Typen für CMS-Inhalte
export interface Dog {
  id: string;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  additionalImages?: string[];
  videoLinks?: string[];
  needs: string;
  location: string;
  sex: string;
  size: string;
  personality: string[];
  history: string;
  medicalInfo: string;
  suitableFor: string[];
  sponsors: string[];
  adoptionStatus: string;
  featured: boolean;
  category: string;
  order: number;
  published: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  category: string;
  socialMedia: Record<string, string>;
  order: number;
  published: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  category: string;
  order: number;
  published: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
}

// Einfacher Front Matter Parser für Browser
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseFrontMatter(content: string): { data: Record<string, any>; content: string } {
  const lines = content.split('\n');
  
  // Prüfe ob es Front Matter gibt
  if (lines[0].trim() !== '---') {
    return { data: {}, content };
  }
  
  // Finde das Ende des Front Matter
  const frontMatterEnd = lines.findIndex((line, index) => 
    index > 0 && line.trim() === '---'
  );
  
  if (frontMatterEnd === -1) {
    return { data: {}, content };
  }
  
  // Parse Front Matter
  const frontMatterLines = lines.slice(1, frontMatterEnd);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {};
  
  let currentKey = '';
  let inArray = false;
  let inMultilineString = false;
  
  for (const line of frontMatterLines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine === '') continue;
    
    // Handle arrays
    if (trimmedLine.startsWith('- ')) {
      if (inArray) {
        if (Array.isArray(data[currentKey])) {
          data[currentKey].push(trimmedLine.substring(2).trim().replace(/"/g, ''));
        }
      }
      continue;
    }
    
    // Handle key-value pairs
    if (trimmedLine.includes(':')) {
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.substring(0, colonIndex).trim();
      const value = trimmedLine.substring(colonIndex + 1).trim();
      
      if (key && value !== '') {
        currentKey = key;
        inArray = false;
        inMultilineString = false;
        
        // Handle different value types
        if (value === 'true') {
          data[key] = true;
        } else if (value === 'false') {
          data[key] = false;
        } else if (!isNaN(Number(value)) && value !== '') {
          data[key] = Number(value);
        } else if (value.startsWith('[') && value.endsWith(']')) {
          // Handle arrays in one line
          const arrayContent = value.slice(1, -1);
          data[key] = arrayContent.split(',').map(item => item.trim().replace(/"/g, ''));
        } else if (value.startsWith('"') && value.endsWith('"')) {
          data[key] = value.slice(1, -1);
        } else if (value === '' || value === '[]') {
          data[key] = [];
          inArray = true;
        } else {
          data[key] = value.replace(/"/g, '');
        }
      } else if (key && value === '') {
        currentKey = key;
        inArray = true;
        data[key] = [];
      }
    }
  }
  
  // Extrahiere den Inhalt nach dem Front Matter
  const remainingContent = lines.slice(frontMatterEnd + 1).join('\n').trim();
  
  return { data, content: remainingContent };
}

// Funktion zum Parsen von Markdown-Dateien
function parseMarkdownFile(content: string, id: string): { id: string; content: string; [key: string]: unknown } {
  const { data, content: markdownContent } = parseFrontMatter(content);
  return {
    id,
    ...data,
    content: markdownContent
  };
}

// Funktionen zum Laden von CMS-Inhalten
export async function loadDogs(): Promise<Dog[]> {
  try {
    // In einer echten Implementierung würden wir die Dateien vom File System laden
    // Für jetzt simulieren wir das mit einem Import
    const dogs: Dog[] = [];
    
    // Hier würde man normalerweise alle Markdown-Dateien aus content/dogs laden
    // und mit parseMarkdownFile parsen
    
    return dogs.filter(dog => dog.published);
  } catch (error) {
    console.error('Fehler beim Laden der Hunde-Daten:', error);
    return [];
  }
}

export async function loadTeamMembers(): Promise<TeamMember[]> {
  try {
    const teamMembers: TeamMember[] = [];
    
    // Liste der Team-Mitglieder Dateien
    const teamFiles = [
      'fiona-mieke.md',
      'kira.md',
      'chrissy.md',
      'lara.md',
      'diego.md',
      'hanna.md',
      'daniel.md',
      'vanessa.md',
      'daze.md',
      'dhany.md',
      'riani.md',
      'rita.md',
      'rey.md',
      'vito.md',
      'aris.md',
      'monika.md',
      'tieraerzte.md'
    ];
    
    // Lade alle Team-Mitglieder
    for (const file of teamFiles) {
      try {
        const response = await fetch(`/content/team/${file}`);
        if (response.ok) {
          const content = await response.text();
          const teamMember = parseTeamMemberMarkdown(content, file);
          if (teamMember) {
            teamMembers.push(teamMember);
          }
        }
      } catch (error) {
        console.error(`Fehler beim Laden von ${file}:`, error);
      }
    }
    
    return teamMembers
      .filter(member => member.published)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Fehler beim Laden der Team-Daten:', error);
    return [];
  }
}

// Hilfsfunktion zum Parsen der Team-Mitglieder Markdown-Dateien
function parseTeamMemberMarkdown(content: string, filename: string): TeamMember | null {
  try {
    const { data, content: markdownContent } = parseFrontMatter(content);
    
    // ID aus Dateiname generieren
    const id = filename.replace('.md', '');
    
    return {
      id,
      name: data.name || '',
      role: data.role || '',
      bio: data.bio || '',
      image: data.image || '',
      category: data.category || '',
      socialMedia: data.socialMedia || {},
      order: data.order || 0,
      published: data.published !== false
    };
  } catch (error) {
    console.error(`Fehler beim Parsen von ${filename}:`, error);
    return null;
  }
}

export async function loadProjects(): Promise<Project[]> {
  try {
    const projects: Project[] = [];
    
    // Hier würde man normalerweise alle Markdown-Dateien aus content/projects laden
    
    return projects
      .filter(project => project.published)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Fehler beim Laden der Projekt-Daten:', error);
    return [];
  }
}

export async function loadFAQs(): Promise<FAQ[]> {
  try {
    const faqs: FAQ[] = [];
    
    // Hier würde man normalerweise alle Markdown-Dateien aus content/faq laden
    
    return faqs
      .filter(faq => faq.published)
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Fehler beim Laden der FAQ-Daten:', error);
    return [];
  }
}

// Hilfsfunktion zum Laden einer einzelnen Hund-Datei
export async function loadDogById(id: string): Promise<Dog | null> {
  try {
    const dogs = await loadDogs();
    return dogs.find(dog => dog.id === id) || null;
  } catch (error) {
    console.error('Fehler beim Laden des Hundes:', error);
    return null;
  }
}

// Hilfsfunktion zum Laden von Team-Mitglieder nach Kategorie
export async function loadTeamMembersByCategory(category: string): Promise<TeamMember[]> {
  try {
    const teamMembers = await loadTeamMembers();
    return teamMembers.filter(member => member.category === category);
  } catch (error) {
    console.error('Fehler beim Laden der Team-Mitglieder:', error);
    return [];
  }
}

// Hilfsfunktion zum Laden von FAQs nach Kategorie
export async function loadFAQsByCategory(category: string): Promise<FAQ[]> {
  try {
    const faqs = await loadFAQs();
    return faqs.filter(faq => faq.category === category);
  } catch (error) {
    console.error('Fehler beim Laden der FAQs:', error);
    return [];
  }
} 
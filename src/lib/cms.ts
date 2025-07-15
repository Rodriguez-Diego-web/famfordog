import matter from 'gray-matter';

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
  notSuitableFor?: string[];
  sponsors: Array<{
    name: string;
    initials: string;
    color: string;
  }>;
  maxSponsors: number;
  published: boolean;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  category: string;
  socialMedia?: {
    website?: string;
    instagram?: string;
    email?: string;
  };
  order: number;
  published: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  path: string;
  order: number;
  published: boolean;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
}

// Funktion zum Parsen von Markdown-Dateien
function parseMarkdownFile(content: string, id: string): { id: string; content: string; [key: string]: unknown } {
  const { data, content: markdownContent } = matter(content);
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
    const lines = content.split('\n');
    
    // Finde Front Matter
    const frontMatterStart = lines.findIndex(line => line.trim() === '---');
    const frontMatterEnd = lines.findIndex((line, index) => 
      index > frontMatterStart && line.trim() === '---'
    );
    
    if (frontMatterStart === -1 || frontMatterEnd === -1) {
      console.error(`Kein Front Matter gefunden in ${filename}`);
      return null;
    }
    
    const frontMatter = lines.slice(frontMatterStart + 1, frontMatterEnd);
    
    // Parse Front Matter
    const metadata: Partial<TeamMember> = {};
    const socialMedia: Record<string, string> = {};
    let inSocialMedia = false;
    
    for (const line of frontMatter) {
      if (line.trim().startsWith('socialMedia:')) {
        inSocialMedia = true;
        continue;
      }
      
      if (inSocialMedia) {
        if (line.startsWith('  ') && line.includes(':')) {
          const [key, value] = line.trim().split(':').map(s => s.trim());
          if (value && value !== '""' && value !== "''") {
            socialMedia[key] = value.replace(/"/g, '');
          }
        } else if (!line.startsWith('  ')) {
          inSocialMedia = false;
        }
      }
      
      if (!inSocialMedia && line.includes(':')) {
        const colonIndex = line.indexOf(':');
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();
        
        if (key && value) {
          if (key === 'published') {
            metadata[key] = value === 'true';
          } else if (key === 'order') {
            metadata[key] = parseInt(value) || 0;
          } else if (key === 'name') {
            metadata[key] = value.replace(/"/g, '');
          } else if (key === 'role') {
            metadata[key] = value.replace(/"/g, '');
          } else if (key === 'bio') {
            metadata[key] = value.replace(/"/g, '');
          } else if (key === 'image') {
            metadata[key] = value.replace(/"/g, '');
          } else if (key === 'category') {
            metadata[key] = value.replace(/"/g, '');
          }
        }
      }
    }
    
    // ID aus Dateiname generieren
    const id = filename.replace('.md', '');
    
    return {
      id,
      name: metadata.name || '',
      role: metadata.role || '',
      bio: metadata.bio || '',
      image: metadata.image || '',
      category: metadata.category || '',
      socialMedia,
      order: metadata.order || 0,
      published: metadata.published !== false
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
export interface ContentItem {
  id: string;
  type: 'video' | 'article' | 'quiz' | 'exercise' | 'resource';
  title: string;
  time: string;
}

export interface Part {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  resourceCount: number;
  progress: number;
  content: ContentItem[];
}

export interface Chapter {
  id: string;
  title: string;
  totalTime: string;
  parts: Part[];
}

export interface LearningContent {
  chapters: Chapter[];
} 
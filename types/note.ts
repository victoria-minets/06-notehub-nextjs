// Дозволені значення для тега
export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

// Основний тип нотатки
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tag: NoteTag;
}

// "id": "65ca67e7ae7f10c88b598384",
// "title": "Sample Note",
// "content": "This is a sample note content.",
// "createdAt": "2022-01-01T00:00:00Z",
// "updatedAt": "2022-01-01T00:00:00Z",
// "tag": "Todo"

// Дані для створення нової нотатки
export interface CreateNoteRequest {
  title: string;
  content: string;
  tag: NoteTag;
}

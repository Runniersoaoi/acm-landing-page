export interface Course {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  courseName: string;
  courseDescription: string;
  courseImage: Media;
  courseDate: Date;
}

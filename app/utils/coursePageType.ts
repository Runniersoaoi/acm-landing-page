export interface CoursePage {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  coursePageTitle: string;
  coursePageDescription: string;
}

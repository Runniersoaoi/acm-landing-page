export interface Eventt {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  eventName: string;
  eventDate: Date;
  eventIsInPerson: boolean;
  eventDeadline: Date;
  eventRequirements: any;
  eventDescription: string;
  eventWhatToSubmit: any;
  eventPrizes1: any;
  eventPrizes2: any;
  eventPrizes3: any;
  eventPrizes4?: any;
  eventPrizes5?: any;
  eventPrizes6?: any;
  eventJudgingCriteria: any;
  eventImage: Media;
}

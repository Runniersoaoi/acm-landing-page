export interface EventPage {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  EventBanner: EventBanner;
  EventTrendSection: EventTrendSection;
  EventIncoming: EventIncomingSection;
  EventPast: EventPastSection;
}

export interface EventBanner {
  EventMainTitle: string;
  EventMainDescription: string;
}
export interface EventTrendSection {
  EventTrendTitle: string;
}

export interface EventIncomingSection {
  EventIncomingSectionTitle: string;
  EventIncomingSectionDescription: string;
}

export interface EventPastSection {
  EventPastSectionTitle: string;
  EventPastSectionDescription: string;
}

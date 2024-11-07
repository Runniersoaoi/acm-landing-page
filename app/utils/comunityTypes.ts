export interface Comunity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  ComunityMember: ComunityBannerMember;
}

export interface ComunityBannerMember {
  ComunityBannerTitle: string;
  ComunityBannerDescription: string;
  comunityDiscordLink: string;
}

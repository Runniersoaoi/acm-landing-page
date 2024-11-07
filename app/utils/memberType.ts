export interface Member {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  member_name: string;
  memberGitHubLink: string;
  memberLinkedInLink: string;
  memberDescription: string;
  memberDni: number;
  memberCicle: number;
  memberImage: Media;
  memberSpeciality: MemberSpeciality;
}

export enum MemberSpeciality {
  Ciberseguridad = "Ciberseguridad",
  DesarrolloWeb = "Desarrollo Web",
  DesarrolloMoVil = "Desarrollo Móvil",
  Redes = "Redes",
  SoporteAcadeMico = "Soporte Académico",
}

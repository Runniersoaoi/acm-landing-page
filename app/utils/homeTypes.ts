export interface Home {
  id: number;
  BannerHomeSection: BannerHomeSection;
  SpecialtyHomeSection: SpecialtyHomeSection;
  CourseHomeSection: CoursesHomeSection;
  MemberHomeSection: MemberHomeSection;
  UpcomingEventHomeSection: UpcomingEventsSection;
  ContactHomeSection: ContactHomeSection;
  FotterHomeSection: FooterHomeSection;
}

export interface BannerHomeSection {
  BannerHomeTitle: string;
}

export interface BrandBannerItem {
  BranBannerItemImgLink: string;
  BrandBannerItemImgAlt: string;
}

export interface SpecialtyHomeSection {
  SpecialtyHomeSectionTitle: string;
  SpecialtyHomeSectionDescription: string;
}

export interface CoursesHomeSection {
  CourseHomeSectionTitle: string;
  CourseHomeSectionDescription: string;
}

export interface MemberHomeSection {
  MemberHomeSectionTitle: string;
  MemberHomeSectionDescription: string;
}

export interface UpcomingEventsSection {
  UpcomingEventHomeSectionTitle: string;
  UpcomingEventHomeSectionDescription: string;
}

export interface ContactHomeSection {
  ContactHomeSectionTitle: string;
  ContactHomeSectionDescription: string;
  ContactHomeSectionPhoneNumber: string;
  ContactHomeSectionEmail: string;
  ContactHomeSectionForm: ContactHomeSectionForm;
}

export interface ContactHomeSectionForm {
  ContactHomeSectionFormItem: ContactHomeSectionFormItem[];
}

export interface ContactHomeSectionFormItem {
  ContactFormInputName: string;
  ContactFormInputLabel: string;
}

export interface FooterHomeSection {
  FotterHomeSectionTitle: string;
  FotterHomeSectionDescription: string;
  FooterHomeSectionItemNavigation: Footer[];
  FooterHomeSectionLegal: Footer[];
}

export interface Footer {
  FooterListName: string;
  FooterListLink: string;
}

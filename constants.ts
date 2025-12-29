
import { NewsItem, ProjectItem, GalleryItem } from './types';

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    category: 'Politique',
    title: "Nouvelle ère pour les médias africains : les enjeux de demain",
    time: "Il y a 2 heures",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ma5p0Z_Q7CnyIDfq2c_t8y0AGFu_eivyYLkOQuk7pY1eP5-R6p11ps9JUQniOtGpCgjNyH5Aavkf6i05zpdO-ylMKwlKue_3l7pFlb2vg0X2WfH-NgzvyJFNqpHccdpM12SFkTh2wuu8TlKt6YmzRnGHuU5gZo9LA1s2iVvNxJv69T9ikIig8o9NCFm2EJ2-HGuK-gHF67FUIhcS2lbGMQsH46vC5U-XJnbuLyybDPM3IYe6QYWsU72LouQJviBnBaAeQCucJHQZ",
    badgeColor: "bg-blue-600"
  },
  {
    id: '2',
    category: 'Économie',
    title: "Investissement stratégique au Gabon : Un tournant décisif",
    time: "Il y a 5 heures",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi1KHfGxvAdwfyEZzytWi_cSG9NG3YEaY-WB5kzbVK3odczlUQVEyuPCqPKMUvS4DnBWrp_XtpO7ss1L5_WdPdNpk-Huv1mep_qaor-CDBR1YziIjsePjDLvCfN-iu0qIgfywiTX-UX_PJbuW7cst9JI48v5pBmBAm_u3kOwIv1Kro3Kcibcg3Kjhg-XBaraHVXc4MwULQilu-ruql_AblO-70-OEMNk1KEJa3v-tjkFcqlsdbbb-EWN1dbMdU7qK4RR0SMvH4ClCl",
    badgeColor: "bg-indigo-700"
  },
  {
    id: '3',
    category: 'Culture',
    title: "Le festival des arts et traditions commence demain",
    time: "Hier",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsMq50WIIhy8rxE8yhvh6hafpejthfNzuhtg63BH9JmV9p7Lhd7b3jrfEQmN3F-vQl44Ku803VkOQCDqlwERCutwPexCssR8XmPMNj3anI2TV1DySnWBe_Jk2-ZkuRzgPuUp3-hGQNqbks9HcdYsKSrx8Mf3-4mAcmKo2R-XjzJ_H7csdUJip_QCZnyxyQQY2pD8d9C4C6AaN3aLxqi570TPO5KTHONu3it84uPdcYfVT5CR-GK_gm3ZJ1QOnAfbagaNUNoVGnIuix",
    badgeColor: "bg-pink-500"
  }
];

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: "Investissement Immobilier",
    category: "Immobilier",
    description: "Développement de complexes résidentiels modernes pour dynamiser l'urbanisme local.",
    progress: 45,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSAiPqUgSjXuHyzhUTwkcHTZXRgacwImCqAu004AhD9eXZB-B60tkIDfrJo9uRFvxzJxhmQc_jlPCEiRQjS31qDfyp8PVsWfiNCgEcQEAcTJ_LYQhCYYwhVzKA0UEfaBL2PyhPFOLj19B86_MmLPW869PFBNJuBm1hBXJ5BjQAlQDdTDrVyya36Bs9JAoSTCi9UneX43_8kBGPxhLjldqq8Eiv4mrDaSgSV4in37XEUHTOavWhZh06PuYZ5vqK8h-tIRwxErrgYcwi",
    status: 'Actif'
  },
  {
    id: 'p2',
    title: "Initiatives Jeunesse",
    category: "Social",
    description: "Programmes de mentorat et de financement pour les jeunes entrepreneurs gabonais.",
    progress: 70,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJlLXhWNGzlzv8kW-TyeFhngUvZQR5JIP36cmVHxvUYfJeFKHIwuuIKl0Tw8BlgDzQYmXEI_mXn4jlUIcoESkNiJ0GHAkW66EPf6ohM9HyOFuwCwn64qpqOq3jpq7dYbHXjGtNqWb8OhH6SaTFLFGJ24aejOoITthGgflKTEjdqOtH5J4n_f5fluRtjF1rjApbdbe-6XAa5iX6b91zRfNJX58Cv4pnGkvIbwKCzFHO-vgOuEn8xqK7pfyf0QsHjKFqH9kmaSUp6wpM",
    status: 'Actif'
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Allocution Présidentielle 2023', subtitle: 'Libreville', type: 'photo', featured: true, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOg1JvuxHEd4jGN1TQEBz4KhHxHWDUbGwarpK07MK_ynnQgL14lPvHGgNfqQtiJEwhvC6CIusw7T5-qSX04fyT4sAvQvo1zkMLFhxqYYXSI2n8e2kZC9BE3otK4d-n9b1nJWGqw8NPfUhVrhN8vfiOmeoLk4-A5OMQk8wgP2u3EzHqhg_4QmXA7CuPeDpf533mTBHy0qY_B47owxaUl-Xs05FdkCwCBB0fD9V7I3Pnn0FcuHbvbv-PZJzkDlH7V40JRd_42d78HjHB" },
  { id: 'g2', title: 'Comité Exécutif', subtitle: '14 Oct • Libreville', type: 'photo', imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfT7DBH4QFqx3IuUU_Ix1FA6mtVTKSkPnf97YYg6ehabshFvHrwFW1Sh2aUqIOqxmbEq6ObL2UMO-Biw-J8EmHNzZV49IezbMpgZ3zcvqnPZg9UIknvW8oxPlyuju-Mt0uUC1MRISpO4ZwYWiPZ_193TzpKkv3YRQs0miGCMKM_2a-eDVKcysiuWejyhmqTZvUKge_3mqOeOIdIwr3Z3Pw3ly_6G3lp_2QW9hCKS1wq0u-fVLGzfzyDG270Rv31GZH4LlbHTvXmYZG" },
  { id: 'g3', title: 'Discours Clôture', subtitle: '22 Sept • Dakar', type: 'photo', imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDdSiGlqPz3I3T8PemgwTRCbO5-F3TIrcY3DFdrWBXuvodBsxcVJerSHBzIFfThJFWUphZblTg2Tezfgpqm8vv7Bin4IFT1AwB254OlslD10KcKReQcJBhzZaIjpizdchVCQRGCMRrGs4gMauYRdYmS9SoY4bsK4Jakz7Ru8LNoYntCWYA6KPseF7dyDsmHpX-xnYrrovC2wwHu8vCQy8rXjrvj2puZi5bDncvvxiixQqf1CLZkeUOBEJh0Av0tlkNLy7LCWBSl8d5" },
  { id: 'g4', title: 'Reportage Terrain', subtitle: 'Chen TV Spécial', type: 'video', imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfe5te7s81yRWZVL91_okZUsIDksSirCoFyih3PHKSjuCX2ScIrZ8OvEvGoHeG97UU5UKuG-m_UZALJxNn0aX_8ua0BZgpVyla2xmsUE-RZxhtsb0mlepP26rnghO5Eor2OfM8N2G7d4hegaGju3JAWIcTAZ74oXKfdygAmvNr4I-JdQdKKmdAYFH5GRrIoUIEdp2Ubl3WpW37x-osvIv_XV02ltroHpg5nGrhpaI0vpaOPbYgjIn1d8Z8ATlNPWjZj7EvkUjHogjW" }
];

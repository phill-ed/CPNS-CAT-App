import { CategoryInfo, PUSubSubCategory } from '@/types'

export const categories: CategoryInfo[] = [
  {
    id: 'TWK',
    name: 'TWK - Tes Wawasan Kebangsaan',
    description: 'Tes pengetahuan tentang Indonesia: sejarah, konstitusi, dan kewarganegaraan',
    subCategories: [
      {
        id: 'PANCASILA',
        name: 'Pancasila',
        description: 'Pengetahuan tentang dasar negara Indonesia',
        subSubCategories: []
      },
      {
        id: 'UUD_1945',
        name: 'UUD 1945',
        description: 'Undang-Undang Dasar 1945 dan amendemennya',
        subSubCategories: []
      },
      {
        id: 'BHINEKA',
        name: 'Bhineka Tunggal Ika',
        description: 'Keragaman Indonesia dan pembangunan nasional',
        subSubCategories: []
      },
      {
        id: 'SEJARAH',
        name: 'Sejarah Nasional',
        description: 'Peristiwa penting dalam sejarah Indonesia',
        subSubCategories: []
      },
      {
        id: 'GOV',
        name: 'Kewarganegaraan',
        description: 'Pamong negara dan sistem pemerintahan Indonesia',
        subSubCategories: []
      }
    ]
  },
  {
    id: 'TKP',
    name: 'TKP - Tes Karakteristik Pribadi',
    description: 'Tes karakter dan kepribadian untuk Seleksi Kompetensi Dasar',
    subCategories: [
      {
        id: 'INTEGRITAS',
        name: 'Integritas Diri',
        description: ' Kejujuran dan tanggung jawab',
        subSubCategories: []
      },
      {
        id: 'KERJA_TIM',
        name: 'Kerja Sama',
        description: 'Kemampuan bekerja dalam tim',
        subSubCategories: []
      },
      {
        id: 'KOMUNIKASI',
        name: 'Komunikasi',
        description: 'Kemampuan berkomunikasi efektif',
        subSubCategories: []
      },
      {
        id: 'ORIENTASI',
        name: 'Orientasi Pelayanan',
        description: 'Fokus pada pelayanan publik',
        subSubCategories: []
      },
      {
        id: 'JABARAN',
        name: 'Jabaran良知',
        description: 'Pengembangan diri dan keberanian berpikir',
        subSubCategories: []
      }
    ]
  },
  {
    id: 'PU',
    name: 'PU - Tes Intelegensi Umum',
    description: 'Tes kemampuan intelegensi: verbal, numerik, dan figural',
    subCategories: [
      {
        id: 'VERBAL',
        name: 'Kemampuan Verbal',
        description: 'Kemampuan berbahasa dan penalaran logis',
        subSubCategories: [
          {
            id: 'ANALOGY',
            name: 'Analogi',
            description: 'Menemukan hubungan antara dua kata',
            supportsImages: false
          },
          {
            id: 'SYLLOGISM',
            name: 'Silogisme',
            description: 'Menarik kesimpulan logis dari dua atau lebih premis',
            supportsImages: false
          },
          {
            id: 'ANALYTICAL',
            name: 'Penalaran Analitik',
            description: 'Menganalisis informasi kompleks',
            supportsImages: false
          }
        ]
      },
      {
        id: 'NUMERICAL',
        name: 'Kemampuan Numerik',
        description: 'Kemampuan berpikir dengan angka dan data',
        subSubCategories: [
          {
            id: 'ARITHMETIC',
            name: 'Aritmatika',
            description: 'Operasi matematika dasar',
            supportsImages: false
          },
          {
            id: 'NUMBER_SERIES',
            name: 'Deret Bilangan',
            description: 'Mengidentifikasi pola dalam urutan angka',
            supportsImages: false
          },
          {
            id: 'QUANTITATIVE_COMP',
            name: 'Perbandingan Kuantitatif',
            description: 'Membandingkan dua nilai (x > y, x < y, atau x = y)',
            supportsImages: false
          },
          {
            id: 'WORD_PROBLEMS',
            name: 'Soal Cerita',
            description: 'Memecahkan masalah dunia nyata',
            supportsImages: false
          }
        ]
      },
      {
        id: 'FIGURAL',
        name: 'Kemampuan Figural',
        description: 'Kemampuan penalaran dengan pola dan bentuk visual',
        subSubCategories: [
          {
            id: 'FIGURAL_ANALOGY',
            name: 'Analogi Figural',
            description: 'Menemukan hubungan antar gambar',
            supportsImages: true
          },
          {
            id: 'ODD_ONE_OUT',
            name: 'Mencari Beda',
            description: 'Menemukan gambar yang tidak cocok',
            supportsImages: true
          },
          {
            id: 'SERIAL',
            name: 'Serial Figural',
            description: 'Memprediksi gambar selanjutnya',
            supportsImages: true
          }
        ]
      }
    ]
  }
]

// Helper function to get category by ID
export function getCategoryById(id: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === id)
}

// Helper function to get all PU sub-sub categories
export function getPUSubSubCategories(): Array<{id: PUSubSubCategory, name: string, description: string}> {
  const puCategory = categories.find(cat => cat.id === 'PU')
  if (!puCategory) return []
  
  return puCategory.subCategories.flatMap(sub => 
    sub.subSubCategories.map(ssc => ({
      id: ssc.id as PUSubSubCategory,
      name: ssc.name,
      description: ssc.description
    }))
  )
}

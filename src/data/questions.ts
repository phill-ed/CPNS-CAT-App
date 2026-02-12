import { Test, Question } from '@/types'

// Sample Tests
export const tests: Test[] = [
  {
    id: 'twk-1',
    title: 'CPNS TWK - Pancasila & UUD 1945',
    description: 'Tes pengetahuan dasar negara Indonesia',
    category: 'TWK',
    subCategory: 'PANCASILA',
    duration: 100,
    totalQuestions: 20,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'twk-2',
    title: 'CPNOS TWK - Sejarah Nasional',
    description: 'Tes peristiwa penting dalam sejarah Indonesia',
    category: 'TWK',
    subCategory: 'SEJARAH',
    duration: 100,
    totalQuestions: 25,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'tkp-1',
    title: 'CPNS TKP - Integritas & Kerja Sama',
    description: 'Tes karakteristik pribadi untuk seleksi CPNS',
    category: 'TKP',
    duration: 100,
    totalQuestions: 35,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: false,
    createdAt: new Date()
  },
  {
    id: 'pu-verbal-1',
    title: 'PU - Verbal (Analogi & Silogisme)',
    description: 'Tes kemampuan verbal: analogi dan silogisme',
    category: 'PU',
    subCategory: 'VERBAL',
    subSubCategory: 'ANALOGY',
    duration: 50,
    totalQuestions: 15,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-numerical-1',
    title: 'PU - Numerik (Aritmatika)',
    description: 'Tes kemampuan numerik: aritmatika dasar',
    category: 'PU',
    subCategory: 'NUMERICAL',
    subSubCategory: 'ARITHMETIC',
    duration: 50,
    totalQuestions: 15,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-figural-1',
    title: 'PU - Figural (Analogi)',
    description: 'Tes kemampuan figural: analogi gambar',
    category: 'PU',
    subCategory: 'FIGURAL',
    subSubCategory: 'FIGURAL_ANALOGY',
    duration: 40,
    totalQuestions: 10,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  }
]

// Sample Questions Bank
export const questions: Question[] = [
  // TWK Questions
  {
    id: 'q-twk-1',
    text: 'Pancasila sebagai dasar negara Republik Indonesia memiliki sila-sila. Sila pertama adalah...?',
    explanation: 'Sila pertama Pancasila adalah "Ketuhanan Yang Maha Esa" yang dilambangkan dengan bintang.',
    difficulty: 'EASY',
    category: 'TWK',
    subSubCategory: 'PANCASILA',
    points: 1,
    createdAt: new Date()
  },
  {
    id: 'q-twk-2',
    text: 'UUD 1945 pertama kali ditetapkan pada tanggal...?',
    explanation: 'UUD 1945 ditetapkan pada tanggal 18 Agustus 1945 oleh PPKI.',
    difficulty: 'EASY',
    category: 'TWK',
    subSubCategory: 'UUD_1945',
    points: 1,
    createdAt: new Date()
  },
  {
    id: 'q-twk-3',
    text: 'Semboyan "Bhineka Tunggal Ika" berarti...?',
    explanation: 'Bhineka Tunggal Ika berarti "Berbeda-beda tetapi tetap satu".',
    difficulty: 'EASY',
    category: 'TWK',
    subSubCategory: 'BHINEKA',
    points: 1,
    createdAt: new Date()
  },
  
  // PU - Verbal (Analogy)
  {
    id: 'q-pu-verb-1',
    text: 'BANGSA : INDONESIA = ... : ...',
    explanation: 'Hubungan: BANGSA adalah nama untuk sekumpulan orang Indonesia. Sama seperti BAHASA untuk sekumpulan kata.',
    difficulty: 'MEDIUM',
    category: 'PU',
    subSubCategory: 'ANALOGY',
    points: 1,
    createdAt: new Date()
  },
  {
    id: 'q-pu-verb-2',
    text: 'RAJA : KERETAAN = ... : ...',
    explanation: 'Hubungan: RAJA memimpin KERETAAN. Sama seperti GURU mengajar MURID.',
    difficulty: 'MEDIUM',
    category: 'PU',
    subSubCategory: 'ANALOGY',
    points: 1,
    createdAt: new Date()
  },
  
  // PU - Verbal (Syllogism)
  {
    id: 'q-pu-syl-1',
    text: 'Premis 1: Semua mamalia bernapas dengan paru-paru.\nPremis 2: Paus adalah mamalia.\n\nKesimpulan yang benar adalah...?',
    explanation: 'Paus bernapas dengan paru-paru karena paus adalah mamalia.',
    difficulty: 'MEDIUM',
    category: 'PU',
    subSubCategory: 'SYLLOGISM',
    points: 1,
    createdAt: new Date()
  },
  
  // PU - Numerical (Arithmetic)
  {
    id: 'q-pu-num-1',
    text: 'Berapakah 15% dari 200?',
    explanation: '15% × 200 = (15/100) × 200 = 30',
    difficulty: 'EASY',
    category: 'PU',
    subSubCategory: 'ARITHMETIC',
    points: 1,
    createdAt: new Date()
  },
  {
    id: 'q-pu-num-2',
    text: 'Jika 8 × 7 = 56, maka 56 ÷ 8 = ...?',
    explanation: '56 ÷ 8 = 7 (inverse dari perkalian)',
    difficulty: 'EASY',
    category: 'PU',
    subSubCategory: 'ARITHMETIC',
    points: 1,
    createdAt: new Date()
  },
  
  // PU - Numerical (Number Series)
  {
    id: 'q-pu-num-3',
    text: '2, 4, 8, 16, ...?\nBerapakah angka selanjutnya?',
    explanation: 'Pola: ×2 setiap langkah. 16 × 2 = 32',
    difficulty: 'EASY',
    category: 'PU',
    subSubCategory: 'NUMBER_SERIES',
    points: 1,
    createdAt: new Date()
  },
  
  // PU - Numerical (Word Problems)
  {
    id: 'q-pu-num-4',
    text: 'Andi dapat menyelesaikan pekerjaan dalam 5 jam. Berapakah bagian pekerjaan yang dapat diselesaikan Andi dalam 1 jam?',
    explanation: 'Dalam 1 jam = 1/5 bagian pekerjaan.',
    difficulty: 'MEDIUM',
    category: 'PU',
    subSubCategory: 'WORD_PROBLEMS',
    points: 1,
    createdAt: new Date()
  },
  
  // PU - Figural (would have imageUrl in real implementation)
  {
    id: 'q-pu-fig-1',
    text: '[Gambar: Deret Figural] Lanjutkan pola berikut dengan memilih gambar yang tepat.',
    explanation: 'Pola menunjukkan rotasi 90° searah jarum jam setiap langkah.',
    difficulty: 'MEDIUM',
    category: 'PU',
    subSubCategory: 'FIGURAL_ANALOGY',
    points: 1,
    imageUrl: '/images/figural-analogy-1.png',
    createdAt: new Date()
  },
  {
    id: 'q-pu-fig-2',
    text: '[Gambar: 4 kotak, 3 sama 1 berbeda] Manakah yang berbeda?',
    explanation: 'Satu gambar memiliki orientasi berbeda dari ketiga gambar lainnya.',
    difficulty: 'EASY',
    category: 'PU',
    subSubCategory: 'ODD_ONE_OUT',
    points: 1,
    imageUrl: '/images/odd-one-out-1.png',
    createdAt: new Date()
  },
  
  // TKP Questions
  {
    id: 'q-tkp-1',
    text: 'Anda menemukan rekan kerja Anda melakukan kecurangan dalam laporan. Apa yang akan Anda lakukan?',
    explanation: 'Menindaklanjuti sesuai prosedur menunjukkan integritas.',
    difficulty: 'MEDIUM',
    category: 'TKP',
    subCategory: 'INTEGRITAS',
    points: 1,
    createdAt: new Date()
  }
]

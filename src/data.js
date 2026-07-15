export const courses = [
  {
    id: 1,
    title: 'Beginner English',
    description: 'Learn the basics of English grammar and vocabulary.',
    lessons: [
      {
        id: 101,
        title: 'Greetings and Introductions',
        content: 'Learn how to say hello, introduce yourself, and ask basic questions.\n\nCommon Greetings:\n- Hello!\n- Good morning!\n- How are you?\n\nIntroductions:\n- My name is...\n- I am from...\n- Nice to meet you.',
        quiz: {
          question: 'What is a polite way to introduce yourself?',
          options: [
            'What do you want?',
            'My name is...',
            'Who are you?',
            'Leave me alone.'
          ],
          correctAnswer: 1
        }
      },
      {
        id: 102,
        title: 'Numbers and Colors',
        content: 'Learn to count from 1 to 10 and identify basic colors.\n\nNumbers:\n1 - One, 2 - Two, 3 - Three...\n\nColors:\n- Red\n- Blue\n- Green\n- Yellow',
        quiz: {
          question: 'What color is the sky on a clear day?',
          options: [
            'Red',
            'Green',
            'Blue',
            'Yellow'
          ],
          correctAnswer: 2
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Intermediate English',
    description: 'Improve your conversational skills and learn more complex grammar.',
    lessons: [
      {
        id: 201,
        title: 'Past Tense',
        content: 'Learn how to talk about things that happened in the past.\n\nRegular verbs usually end in "-ed".\n- I walked to the store.\n- She played soccer yesterday.\n\nIrregular verbs have different forms.\n- I went to the store. (go -> went)\n- He ate an apple. (eat -> ate)',
        quiz: {
          question: 'Which of the following is in the past tense?',
          options: [
            'I am eating.',
            'She walks to school.',
            'They played football.',
            'He will go tomorrow.'
          ],
          correctAnswer: 2
        }
      }
    ]
  }
];

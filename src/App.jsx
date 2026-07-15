import { useState } from 'react';
import { courses } from './data';
import './index.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizScore, setQuizScore] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setSelectedLesson(null);
    setQuizScore(null);
    setSelectedOption(null);
  };

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setQuizScore(null);
    setSelectedOption(null);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === null) return;

    if (selectedOption === selectedLesson.quiz.correctAnswer) {
      setQuizScore('Correct! 🎉');
    } else {
      setQuizScore('Incorrect. Please try again.');
    }
  };

  const renderCourseCatalog = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Course Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow border border-gray-200"
            onClick={() => handleCourseClick(course)}
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <div className="mt-4 text-sm text-gray-500 font-medium">
              {course.lessons.length} Lesson{course.lessons.length > 1 ? 's' : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourseDetails = () => (
    <div>
      <button
        onClick={() => setSelectedCourse(null)}
        className="mb-4 text-blue-500 hover:text-blue-700 font-medium flex items-center"
      >
        ← Back to Courses
      </button>
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{selectedCourse.title}</h2>
      <p className="text-gray-600 mb-6">{selectedCourse.description}</p>

      <h3 className="text-xl font-semibold mb-4 text-gray-700">Lessons</h3>
      <div className="space-y-4">
        {selectedCourse.lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200 cursor-pointer hover:bg-gray-50"
            onClick={() => handleLessonClick(lesson)}
          >
            <h4 className="text-lg font-medium text-gray-800">{lesson.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLesson = () => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <button
        onClick={() => {
          setSelectedLesson(null);
          setQuizScore(null);
          setSelectedOption(null);
        }}
        className="mb-6 text-blue-500 hover:text-blue-700 font-medium flex items-center"
      >
        ← Back to {selectedCourse.title}
      </button>

      <h2 className="text-3xl font-bold mb-6 text-gray-800">{selectedLesson.title}</h2>
      <div className="prose max-w-none mb-10 text-gray-700 whitespace-pre-wrap">
        {selectedLesson.content}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Knowledge Check</h3>
        <p className="mb-4 text-lg text-gray-700">{selectedLesson.quiz.question}</p>

        <form onSubmit={handleQuizSubmit} className="space-y-3">
          {selectedLesson.quiz.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`option-${index}`} className="ml-3 block text-gray-700 text-lg">
                {option}
              </label>
            </div>
          ))}
          <button
            type="submit"
            disabled={selectedOption === null}
            className={`mt-4 px-6 py-2 rounded font-medium text-white ${
              selectedOption === null
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Submit Answer
          </button>
        </form>

        {quizScore && (
          <div className={`mt-4 p-4 rounded-md ${
            quizScore.includes('Correct') ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <p className="font-semibold text-lg">{quizScore}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
            English Learning Platform
          </h1>
          <p className="mt-2 text-gray-600">Master English step by step.</p>
        </header>

        <main>
          {!selectedCourse && !selectedLesson && renderCourseCatalog()}
          {selectedCourse && !selectedLesson && renderCourseDetails()}
          {selectedLesson && renderLesson()}
        </main>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import CourseCard from './components/CourseCard';
function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Initialize data on first load
        initializeData(coursesData);

        // Initialize sample enrollments if empty
        if (getEnrollments().length === 0) {
            saveEnrollments(sampleEnrollments);
        }

        setCourses(coursesData);
    }, []);
    <CourseCard key={course.id} course={course} />
                            ))
}
                        </div >
                    ) : (
    <div className="empty-state text-center py-2xl">
        <p>لا توجد دورات في هذه الفئة حالياً</p>
    </div>
)}
                </div >
            </section >

    <Footer />
        </div >
    );
}

function App() {
    return (
        <Router>
            <Routes>
                );
}

                export default App;

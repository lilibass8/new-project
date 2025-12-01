import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import EnrollmentsManagement from './pages/admin/EnrollmentsManagement';
import ProtectedRoute from './components/ProtectedRoute';
import coursesData from './data/courses';
import sampleEnrollments from './data/sampleEnrollments';
import { initializeData, saveEnrollments, getEnrollments } from './utils/storage';
import { useState, useEffect } from 'react';

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

    const filteredCourses = selectedCategory === 'all'
        ? courses
        : courses.filter(course => course.categoryId === selectedCategory);

    return (
        <div className="app">
            <Header />
            <Hero />
            <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <section className="courses-section py-2xl">
                <div className="container">
                    <div className="section-header text-center mb-2xl">
                        <h2 className="section-title">
                            {selectedCategory === 'all' ? 'جميع الدورات' : 'الدورات المتاحة'}
                        </h2>
                    </div>

                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-4">
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state text-center py-2xl">
                            <p>لا توجد دورات في هذه الفئة حالياً</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Protected Admin Routes */}
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<AdminDashboard />} />
                    <Route path="enrollments" element={<EnrollmentsManagement />} />
                    <Route path="courses" element={<div style={{ padding: '2rem' }}>
                        <h1>إدارة الدورات</h1>
                        <p>قيد الإنشاء...</p>
                    </div>} />
                    <Route path="statistics" element={<div style={{ padding: '2rem' }}>
                        <h1>الإحصائيات</h1>
                        <p>قيد الإنشاء...</p>
                    </div>} />
                </Route>

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;

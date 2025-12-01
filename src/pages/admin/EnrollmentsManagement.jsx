import React, { useState, useEffect } from 'react';
import { getCourses, getEnrollments } from '../utils/storage';
import './EnrollmentsManagement.css';

const EnrollmentsManagement = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadEnrollments();
        loadCourses();
    }, []);

    const loadEnrollments = () => {
        const data = getEnrollments() || [];
        setEnrollments(data);
    };

    const loadCourses = () => {
        const data = getCourses() || [];
        setCourses(data);
    };

    const filteredEnrollments = enrollments.filter(enrollment => {
        const matchesCourse = selectedCourse === 'all' || enrollment.courseId == selectedCourse;
        const matchesSearch = enrollment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            enrollment.email.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCourse && matchesSearch;
    });

    const exportToCSV = () => {
        const headers = ['الاسم', 'البريد الإلكتروني', 'الهاتف', 'الدورة', 'تاريخ التسجيل', 'الحالة'];
        const rows = filteredEnrollments.map(e => [
            e.studentName,
            e.email,
            e.phone,
            e.courseName,
            new Date(e.enrollmentDate).toLocaleDateString('ar-EG'),
            e.status
        ]);

        const csvContent = [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');

        const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `enrollments_${Date.now()}.csv`;
        link.click();
    };

    return (
        <div className="enrollments-management">
            <div className="page-header">
                <div>
                    <h1>إدارة المسجلين</h1>
                    <p>عرض وإدارة جميع الطلاب المسجلين في الدورات</p>
                </div>
                <button className="btn btn-primary" onClick={exportToCSV}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M7 10l5 5m0 0l5-5m-5 5V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>تصدير CSV</span>
                </button>
            </div>

            <div className="filters-section">
                <div className="search-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="ابحث عن طالب..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="course-filter"
                >
                    <option value="all">جميع الدورات</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="enrollments-stats">
                <div className="stat-item">
                    <span className="stat-label">إجمالي المسجلين:</span>
                    <span className="stat-value">{enrollments.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">النتائج المعروضة:</span>
                    <span className="stat-value">{filteredEnrollments.length}</span>
                </div>
            </div>

            {filteredEnrollments.length > 0 ? (
                <div className="table-container">
                    <table className="enrollments-table">
                        <thead>
                            <tr>
                                <th>الطالب</th>
                                <th>البريد الإلكتروني</th>
                                <th>الهاتف</th>
                                <th>الدورة</th>
                                <th>تاريخ التسجيل</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEnrollments.map((enrollment) => (
                                <tr key={enrollment.id}>
                                    <td>
                                        <div className="student-cell">
                                            <div className="student-avatar">
                                                {enrollment.studentName.charAt(0)}
                                            </div>
                                            <span className="student-name">{enrollment.studentName}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <a href={`mailto:${enrollment.email}`} className="email-link">
                                            {enrollment.email}
                                        </a>
                                    </td>
                                    <td className="phone-cell">
                                        <a href={`tel:${enrollment.phone}`}>{enrollment.phone}</a>
                                    </td>
                                    <td>
                                        <span className="course-badge">{enrollment.courseName}</span>
                                    </td>
                                    <td className="date-cell">
                                        {new Date(enrollment.enrollmentDate).toLocaleString('ar-EG', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </td>
                                    <td>
                                        <span className="status-badge active">{enrollment.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="empty-state">
                    <svg width="64" height="64" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h2v-1a6 6 0 00-4-5.659M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="1.5" />
                    </svg>
                    <p>لا توجد تسجيلات تطابق معايير البحث</p>
                </div>
            )}
        </div>
    );
};

export default EnrollmentsManagement;

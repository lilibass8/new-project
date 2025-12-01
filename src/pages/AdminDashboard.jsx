import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCourses, getEnrollments } from '../utils/storage';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalCourses: 0,
        activeCourses: 0,
        freeCourses: 0,
        totalEnrollments: 0,
        recentEnrollments: []
    });

    useEffect(() => {
        const courses = getCourses() || [];
        const enrollments = getEnrollments() || [];

        setStats({
            totalCourses: courses.length,
            activeCourses: courses.filter(c => !c.isFree).length,
            freeCourses: courses.filter(c => c.isFree).length,
            totalEnrollments: enrollments.length,
            recentEnrollments: enrollments.slice(-5).reverse()
        });
    }, []);

    const quickActions = [
        {
            title: 'إضافة دورة جديدة',
            icon: (
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            link: '/admin/courses?action=add',
            color: 'primary'
        },
        {
            title: 'عرض المسجلين',
            icon: (
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h2v-1a6 6 0 00-4-5.659M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="1.5" />
                </svg>
            ),
            link: '/admin/enrollments',
            color: 'secondary'
        },
        {
            title: 'إدارة الدورات',
            icon: (
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M3 7l7-4 7 4M3 7v8a1 1 0 001 1h12a1 1 0 001-1V7M3 7l7 4 7-4" strokeWidth="1.5" />
                </svg>
            ),
            link: '/admin/courses',
            color: 'accent'
        }
    ];

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>لوحة التحكم الرئيسية</h1>
                    <p>مرحباً بك في لوحة إدارة أكاديمية المعرفة</p>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="stats-grid">
                <div className="stat-card primary">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M3 7l7-4 7 4M3 7v8a1 1 0 001 1h12a1 1 0 001-1V7M3 7l7 4 7-4" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">إجمالي الدورات</span>
                        <span className="stat-value">{stats.totalCourses}</span>
                    </div>
                </div>

                <div className="stat-card secondary">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">دورات مدفوعة</span>
                        <span className="stat-value">{stats.activeCourses}</span>
                    </div>
                </div>

                <div className="stat-card success">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h2v-1a6 6 0 00-4-5.659M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">إجمالي المسجلين</span>
                        <span className="stat-value">{stats.totalEnrollments}</span>
                    </div>
                </div>

                <div className="stat-card warning">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div className="stat-info">
                        <span className="stat-label">دورات مجانية</span>
                        <span className="stat-value">{stats.freeCourses}</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
                <h2>إجراءات سريعة</h2>
                <div className="actions-grid">
                    {quickActions.map((action, index) => (
                        <Link key={index} to={action.link} className={`action-card ${action.color}`}>
                            <div className="action-icon">{action.icon}</div>
                            <span className="action-title">{action.title}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Enrollments */}
            <div className="recent-section">
                <div className="section-header">
                    <h2>آخر المسجلين</h2>
                    <Link to="/admin/enrollments" className="view-all">عرض الكل ←</Link>
                </div>
                {stats.recentEnrollments.length > 0 ? (
                    <div className="enrollments-list">
                        {stats.recentEnrollments.map((enrollment) => (
                            <div key={enrollment.id} className="enrollment-item">
                                <div className="enrollment-avatar">
                                    {enrollment.studentName.charAt(0)}
                                </div>
                                <div className="enrollment-info">
                                    <span className="student-name">{enrollment.studentName}</span>
                                    <span className="course-name">{enrollment.courseName}</span>
                                </div>
                                <div className="enrollment-date">
                                    {new Date(enrollment.enrollmentDate).toLocaleDateString('ar-EG', {
                                        day: 'numeric',
                                        month: 'short'
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>لا توجد تسجيلات حالياً</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;

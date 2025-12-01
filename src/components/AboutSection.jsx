import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <div className="image-wrapper">
                            <div className="floating-shape shape-1"></div>
                            <div className="floating-shape shape-2"></div>
                            <div className="floating-shape shape-3"></div>
                            <svg width="100%" height="100%" viewBox="0 0 400 400" className="about-illustration">
                                <defs>
                                    <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#667eea" />
                                        <stop offset="100%" stopColor="#764ba2" />
                                    </linearGradient>
                                </defs>
                                <circle cx="200" cy="200" r="180" fill="url(#about-gradient)" opacity="0.1" />
                                <circle cx="200" cy="200" r="140" fill="url(#about-gradient)" opacity="0.2" />
                                <circle cx="200" cy="200" r="100" fill="url(#about-gradient)" opacity="0.3" />

                                {/* Book Icon */}
                                <path d="M150 150 L250 150 L250 250 L150 250 Z" fill="none" stroke="url(#about-gradient)" strokeWidth="3" />
                                <line x1="200" y1="150" x2="200" y2="250" stroke="url(#about-gradient)" strokeWidth="2" />
                                <path d="M170 180 L180 180 M170 200 L190 200 M170 220 L185 220" stroke="url(#about-gradient)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M210 180 L220 180 M210 200 L230 200 M210 220 L225 220" stroke="url(#about-gradient)" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="section-badge">عن الأكاديمية</div>
                        <h2 className="section-title">نحن نؤمن بقوة التعليم والتطوير المستمر</h2>
                        <p className="about-description">
                            أكاديمية المعرفة هي منصة تعليمية رائدة في سلطنة عُمان، نقدم مجموعة متنوعة من الدورات
                            والورش التدريبية المصممة لتلبية احتياجات المتعلمين في مختلف المجالات. نهدف إلى تمكين
                            الأفراد من تطوير مهاراتهم وتحقيق أهدافهم المهنية والشخصية.
                        </p>

                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>مدربون محترفون</h4>
                                    <p>خبراء متخصصون في مجالاتهم</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>محتوى متنوع</h4>
                                    <p>دورات في جميع المجالات</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>مرونة في الوقت</h4>
                                    <p>تعلم بالسرعة التي تناسبك</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>شهادات معتمدة</h4>
                                    <p>اعتماد رسمي عند إتمام الدورات</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

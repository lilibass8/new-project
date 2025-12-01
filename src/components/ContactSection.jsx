import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-header text-center">
                    <div className="section-badge">اتصل بنا</div>
                    <h2 className="section-title">نحن هنا للمساعدة</h2>
                    <p className="section-description">
                        لديك استفسار؟ نحن سعداء بالرد على جميع أسئلتك
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>معلومات التواصل</h3>
                        <p className="contact-intro">
                            تواصل معنا عبر القنوات التالية وسنكون سعداء بخدمتك
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>البريد الإلكتروني</h4>
                                    <a href="mailto:support@academy.om">support@academy.om</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>الهاتف / واتساب</h4>
                                    <a href="tel:+96891234567">+968 9123 4567</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>الموقع</h4>
                                    <p>مسقط، سلطنة عُمان</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>ساعات العمل</h4>
                                    <p>الأحد - الخميس<br />9 صباحاً - 6 مساءً</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">الاسم</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="أدخل اسمك"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+968 XXXX XXXX"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">الرسالة</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="اكتب رسالتك هنا..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-full">
                                {submitted ? '✓ تم الإرسال بنجاح' : 'إرسال الرسالة'}
                            </button>

                            {submitted && (
                                <div className="success-message">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                    </svg>
                                    <span>شكراً لتواصلك معنا! سنرد عليك قريباً</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

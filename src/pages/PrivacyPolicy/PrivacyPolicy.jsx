import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { FaQuestion } from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="bg-[#E6D8CA] min-h-screen pt-30 pb-15 px-5">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <FaShieldAlt size={40} className="text-secondary" />
                        </div>
                        <h1 className="text-5xl font-bold text-secondary mb-4">Privacy Policy</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Your privacy is important to us. This page outlines how we collect, use, and protect your information to ensure transparency and trust.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-2">1. Information Collection</h2>
                            <p className='font-roboto'>
                                We collect personal information you provide when registering, booking, or interacting with our services. This may include name, email, phone number, payment details, and travel preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
                            <p className='font-roboto'>
                                Your information is used to process bookings, improve user experience, communicate updates, and enhance service quality. We do not sell or rent your data to third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
                            <p className='font-roboto'>
                                We implement industry-standard security practices including encryption and secure payment gateways to protect your personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking</h2>
                            <p className='font-roboto'>
                                We use cookies to personalize content, analyze traffic, and provide social media features. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
                            <p className='font-roboto'>
                                You have the right to access, modify, or delete your personal information. Contact us anytime to manage your data preferences.
                            </p>
                        </section>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-16">
                        <div className="flex justify-center mb-4">
                        <FaQuestion size={40} className="text-secondary"/>
                        </div>
                        <h2 className="text-5xl font-bold text-center text-secondary mb-8">Frequently Asked Questions</h2>
                        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title font-semibold">Can I delete my account and data?</div>
                                <div className="collapse-content text-sm font-roboto">Absolutely. You can request account deletion and data removal by contacting our support team anytime.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Do you share my information with partners?</div>
                                <div className="collapse-content text-sm">We only share necessary information with trusted partners involved in your booking or travel experience — and only with your consent.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">How do you use my email address?</div>
                                <div className="collapse-content text-sm">Your email is used to send confirmations, updates, and occasional promotional offers. You can unsubscribe at any time.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">What are cookies used for?</div>
                                <div className="collapse-content text-sm">Cookies help us enhance your experience by remembering preferences, tracking engagement, and personalizing content.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
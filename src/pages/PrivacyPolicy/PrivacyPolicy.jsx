import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="relative flex justify-center items-center hero min-h-screen pt-30 pb-15 px-5 lg-px-0" style={{ backgroundImage: `url(https://res.cloudinary.com/dgt4ygjhp/image/upload/v1749745661/mosque12_nzowfl.jpg)` }}>
                <div className="absolute inset-0 bg-secondary opacity-75"></div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-5 lg:p-10 space-y-8">
                        <header className="text-center space-y-2">
                            <div className="flex justify-center items-center mb-4 gap-3">
                                <h1 className="text-5xl font-bold text-secondary">Privacy Policy</h1>
                            </div>
                            <p className="text-lg text-secondary max-w-2xl mx-auto">
                                Your privacy is important to us. This page outlines how we collect, use, and protect your information to ensure transparency and trust.
                            </p>
                        </header>

                        <section>
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">1. Information Collection</h2>
                            <p className='font-roboto'>
                                We collect personal data when you register, book a tour, or interact with our services. This includes your name, email address, contact number, travel preferences, and optionally. This helps us arrange your Hajj or Umrah experience with care and precision.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">2. Use of Information</h2>
                            <p className='font-roboto'>
                                Your information is used solely to manage bookings, enhance your user experience, provide service updates, and ensure a seamless pilgrimage journey. We do not rent, sell, or misuse your data under any circumstance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">3. Data Security</h2>
                            <p className='font-roboto'>
                                Our systems use industry-standard protection protocols, including encrypted databases and secure Firebase authentication.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">4. Cookies and Tracking</h2>
                            <p className='font-roboto'>
                                We use cookies and analytical tools to understand visitor behavior, personalize your experience, and improve site performance. You can manage or disable cookies via your browser settings at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">5. Your Rights</h2>
                            <p className='font-roboto'>
                                You have full control over your data. You may request to view, update, or delete your personal information at any time.
                            </p>
                        </section>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-16">
                        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                            <div className="flex items-center justify-center mb-8 gap-3">
                                <h2 className="text-5xl font-bold text-center text-secondary">Frequently Asked Questions</h2>
                            </div>

                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title font-semibold">What is the purpose of this website?</div>
                                <div className="collapse-content text-sm font-roboto">Our website is designed to help pilgrims easily browse, manage, and book Hajj and Umrah packages. It offers a seamless platform for tour operators to list their packages and for users to find spiritual journeys suited to their needs.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">How are the packages managed and updated?</div>
                                <div className="collapse-content text-sm font-roboto">Packages are dynamically managed using a secure backend built with Node.js, Express, and MongoDB. Admins can add, edit, or remove tour listings in real time through a user-friendly dashboard.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Is user authentication supported?</div>
                                <div className="collapse-content text-sm font-roboto">Yes, the platform uses Firebase Authentication to ensure a secure and smooth sign-in experience for both users and package providers.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">How is the user data protected?</div>
                                <div className="collapse-content text-sm font-roboto">All sensitive operations are secured via Firebase Authentication, environment variables (dotenv), and CORS policies. No data is exposed publicly, and all form inputs are validated.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">How can I update or delete a listed tour?</div>
                                <div className="collapse-content text-sm font-roboto">If you are a registered package provider, simply navigate to the "Manage My Packages" page. You can edit or delete any package you’ve uploaded using intuitive buttons, backed by axios-based PATCH and DELETE requests.</div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">What makes this platform user-friendly?</div>
                                <div className="collapse-content text-sm font-roboto">We use React 19, React Icons, React Hook Form, and TailwindCSS to ensure a clean, accessible, and responsive design. All pages are optimized for fast interaction and mobile friendliness.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">What feedback features are available?</div>
                                <div className="collapse-content text-sm font-roboto">The site uses React Toastify and SweetAlert2 to provide real-time user feedback—whether you're updating a package, deleting a listing, or submitting a form.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Can I view the destination before booking?</div>
                                <div className="collapse-content text-sm font-roboto">Yes! Each package includes visual information like maps (via Google Maps Embed) and images. This helps you better understand the location and features of the pilgrimage.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Is the booking feature live or simulated?</div>
                                <div className="collapse-content text-sm font-roboto">Currently, bookings are simulated with placeholder counters (booking_count) and editable fields. In future iterations, we aim to integrate real-time booking and payment APIs.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Is the website responsive?</div>
                                <div className="collapse-content text-sm font-roboto">Absolutely. The entire UI is built using Tailwind CSS and React Multi Carousel, ensuring a smooth, mobile-optimized experience for all users.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">How can I contact support or ask more questions?</div>
                                <div className="collapse-content text-sm font-roboto">You can find the contact number and package details on each tour card. For general inquiries, use our email, contact no. of our support team listed on the footer.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
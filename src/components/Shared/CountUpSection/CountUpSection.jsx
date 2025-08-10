import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountUpSection = () => {

    const stats = [
        { id: 1, value: 75, suffix: 'k+', label: 'Happy Travellers' },
        { id: 2, value: 95, suffix: '%', label: 'Success Traveller' },
        { id: 3, value: 4.9, suffix: '', label: 'Rating Client' },
        { id: 4, value: 23, suffix: '', label: 'Experience' },
    ];

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show elements when component mounts
        setVisible(true);
    }, []);

    return (
        <div>
            <div className="bg-[#E6D8CA] py-15">

                {/* React Countup */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-4 items-center gap-4">
                    {
                        stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className="text-center text-secondary flex-1 relative"
                            >
                                <h2 className="text-5xl font-bold">
                                    {
                                        visible && (
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={2.5}
                                                suffix={stat.suffix}
                                                decimals={stat.value % 1 !== 0 ? 1 : 0}
                                                enableScrollSpy
                                                scrollSpyDelay={100}
                                            />
                                        )
                                    }
                                </h2>
                                <p className="text-[#6b6b6b] mt-2 text-sm font-semibold">
                                    {stat.label}
                                </p>
                                {/* Vertical line divider (except last) */}
                                {index !== stats.length - 1 && (
                                    <span className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-primary" />
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CountUpSection;

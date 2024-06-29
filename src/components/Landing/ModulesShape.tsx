import React from 'react';

const EightShapeFlow = () => {
    const items = [
        { id: 'S', text: 'Sales Forecast', color: 'bg-purple-500' },
        { id: 'I', text: 'Inventory Forecast', color: 'bg-purple-600' },
        { id: 'C', text: 'Sentimental Analysis', color: 'bg-blue-400' },
        { id: 'P', text: 'Predictive Maintenance', color: 'bg-orange-400' },
        { id: 'F', text: 'Financial Chatbot', color: 'bg-green-400' },
        { id: 'F', text: 'Fuel Management', color: 'bg-purple-400' },
        { id: 'P', text: 'Place Makers Ai', color: 'bg-blue-400' },
        { id: 'C', text: 'Contract Management', color: 'bg-green-400' },
        { id: 'P', text: 'Price Predictor', color: 'bg-orange-400' },
    ];

    const onNavigate = (text: string) => {
        let url = '';

        switch (text) {
            case 'Sales Forecast':
                url = 'https://royal-cyber-ai.vercel.app/videos/sales-forecast.mp4';
                break;
            case 'Inventory Forecast':
                url = 'https://royal-cyber-ai.vercel.app/videos/inventory-optimization.mp4';
                break;
            case 'Sentimental Analysis':
                url = 'https://royal-cyber-ai.vercel.app/videos/customer-sentiment-analysis.mp4';
                break;
            case 'Predictive Maintenance':
                url = 'https://royal-cyber-ai.vercel.app/videos/preventive-maintenance.mp4';
                break;
            case 'Financial Chatbot':
                url = 'https://royal-cyber-ai.vercel.app/videos/financial-chatbot.mp4';
                break;
            case 'Fuel Management':
                url = 'https://royal-cyber-ai.vercel.app/videos/fuel-management.mp4';
                break;
            case 'Place Makers Ai':
                url = 'https://royal-cyber-ai.vercel.app/videos/place-makers.mp4';
                break;
            case 'Contract Management':
                url = 'https://royal-cyber-ai.vercel.app/videos/contract-management.mp4';
                break;
            case 'Price Predictor':
                url = 'https://royal-cyber-ai.vercel.app/videos/price-predictor.mp4';
                break;
            default:
                console.error('No URL found for the given text.');
                return;
        }

        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div className="relative flex items-center justify-center w-full h-[800px] bg-white rounded-lg">
            {/* Central circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gray-100 border-8 border-white shadow-lg flex items-center justify-center">
                <div className="text-center">
                    <div className="text-xl font-semibold text-gray-600">Supplychain</div>
                    <div className="text-xl font-semibold text-gray-600">Management</div>
                    <div className="text-xl font-semibold text-gray-600">Modules</div>
                </div>
            </div>

            {/* Colored arc segments */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#9333ea" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#38bdf8" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-30" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-45" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#4ade80" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="-60" />
            </svg>

            {/* Items */}
            {items.map((item, index) => {
                const positionStyle = getPosition(index);
                return (
                    <div
                        key={index}
                        className={`absolute z-10 cursor-pointer`}
                        style={positionStyle}
                        onClick={() => onNavigate(item.text)}
                    >
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl font-bold text-gray-600">
                                {item.id}
                            </div>
                            <div className={`ml-4 px-6 py-3 rounded-full ${item.color} text-white text-lg font-semibold shadow-md`}>
                                {item.text}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const getPosition = (index: number) => {
    const radius = 300; // Adjust the radius as needed
    const angle = (index / 9) * (2 * Math.PI); // Divide the circle into 9 segments
    const x = Math.cos(angle) * ((index == 7 || index == 2) ? radius + 500 : radius);
    const y = Math.sin(angle) * ((index == 7 || index == 2) ? radius + 30 : radius);

    return {
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: 'translate(-50%, -50%)',
    };
};

export default EightShapeFlow;

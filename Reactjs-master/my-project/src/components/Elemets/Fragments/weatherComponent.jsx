import React, { useEffect, useState } from 'react';

const WeatherForecast = () => {
    const [city, setCity] = useState("Banda Aceh");
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = "704d6c9d5901c5fd4c407434b6f5dfd3"; // API cuaca      
        const latitude = 5.5483;
        const longitude = 95.3238;
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;  
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const dailyData = data.list
                    .filter((entry, index) => index % 8 === 0)
                    .slice(0, 4)
                    .map((entry) => ({
                        date: new Date(entry.dt * 1000).toLocaleDateString("en-US", { weekday: 'long', day: 'numeric', month: 'short' }),
                        temperature: entry.main.temp,
                        icon: entry.weather[0].icon
                    }));

                setForecastData(dailyData);
            })
            .catch((error) => {
                console.error("Error:", error);
                setError("Could not fetch weather data. Please try again later.");
            });
    }, [city]);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex space-x-5 mb-10">
            <div className="relative bg-hijau w-[394.87px] h-[308.17px] rounded-[30px] flex flex-col items-center justify-center p-4 z-0 ">
                <h2 className="font-semibold text-white text-3xl text-center">{city}</h2>
                {!forecastData && (
                    <div className="absolute inset-0 flex items-center justify-center  bg-hijau rounded-[30px]">
                        <div className="spinner"></div>
                    </div>
                )}
                {forecastData && (
                    <div className="flex flex-col">
                        {forecastData.map((day, index) => (
                            <div key={index} className="flex items-center">
                                <img 
                                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} 
                                    alt="Weather Icon" 
                                    className="w-16 h-16"
                                    onError={() => console.error("Failed to load icon:", `https://openweathermap.org/img/wn/${day.icon}@2x.png`)}
                                />
                                <div className="ml-4 flex space-x-2 justify-between">
                                    <h2 className="font-semibold text-white text-md mr-10">{day.temperature}°C</h2>
                                    <h5 className="font-semibold text-white text-md">{day.date}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


export default WeatherForecast;

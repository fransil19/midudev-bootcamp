export const WeatherInfo = ({condition}) => {  
    const windDirection = condition.current.wind_dir
    
    return (
        <>
            <h3>Weather in {condition.location.name}</h3>
            <div>
                <span>
                    <strong>Temperature: </strong>
                    {condition.current.temperature}&#8451;
                </span>
            </div>
            <div>
                <img
                alt={"Weather icon"}
                src={condition.current.weather_icons[0]}
                ></img>
            </div>
            <div>
                <span>
                    <strong>Wind: </strong>
                    {condition.current.wind_speed}m/s {windDirection}
                </span>
            </div>
        </>
    )
}
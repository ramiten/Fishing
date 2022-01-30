class OpenWeatherMapService {
  _apiBase = "https://api.openweathermap.org/data/2.5/";
  _apiKey = "52d598e716bce2cd72e541f8a6b5b8ff";

  getResourse = async (url) => {
    let res = await fetch(
      `${this._apiBase}weather?id=${url}&lang=ru&appid=${this._apiKey}`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch ${this.url}, status: ${res.status}`);
    }
    return await res.json();
  };
}

export default OpenWeatherMapService;

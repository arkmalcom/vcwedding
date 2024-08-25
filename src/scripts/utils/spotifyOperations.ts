import { debounce } from "./utils";

let cachedToken: string | null = null;
let tokenExpirationTime: number | null = null;

const resultItemStyle =
  "result-item flex flex-1 items-center text-sm hover:bg-lime-700 active:bg-lime-700 focus:bg-lime-700";

async function fetchSpotifyToken(): Promise<string> {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const tokenEndpoint = "https://accounts.spotify.com/api/token";
  const credentials = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }

  const data = await response.json();
  const token = data.access_token;
  const expiresIn = data.expires_in;

  tokenExpirationTime = Date.now() + expiresIn * 1000;
  return token;
}

async function getAccessToken(): Promise<string> {
  if (cachedToken && tokenExpirationTime && tokenExpirationTime > Date.now()) {
    return cachedToken;
  }

  const newToken = await fetchSpotifyToken();
  cachedToken = newToken;
  return newToken;
}

async function searchSpotify(
  query: string,
): Promise<{ name: string; url: string }[]> {
  if (!query) {
    return [];
  }
  const token = await getAccessToken();
  const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`;

  const response = await fetch(searchEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to search Spotify");
  }

  const data = await response.json();

  return data.tracks.items.map((item: any) => ({
    name: item.name,
    artist: item.artists[0].name,
    thumbnail: item.album.images[0].url,
    url: item.external_urls.spotify,
  }));
}

const songSearch = debounce(async (query: string) => {
  try {
    const results = await searchSpotify(query);
    displaySearchResults(results);
  } catch (error) {
    console.error(error);
  }
}, 400);

function displaySearchResults(results: any[]) {
  const resultsContainer = document.querySelector(
    "#search-results",
  ) as HTMLDivElement;
  resultsContainer.innerHTML = "";

  if (results.length > 0) {
    resultsContainer.classList.remove("hidden");

    results.forEach((track) => {
      const resultItem = document.createElement("div");
      const thumbnail = document.createElement("img");
      thumbnail.src = track.thumbnail;
      thumbnail.alt = `Thumbnail for ${track.name}`;
      thumbnail.className =
        "w-12 h-12 object-cover m-1 border-2 border-white-50 rounded-lg";

      resultItem.className = resultItemStyle;
      resultItem.dataset.songUrl = track.url;

      const textContainer = document.createElement("div");
      textContainer.className = "flex-1 text-sm";
      textContainer.textContent = `${track.artist} - ${track.name}`;

      resultItem.appendChild(thumbnail);
      resultItem.appendChild(textContainer);

      resultItem.addEventListener("click", () => {
        selectSong(track);
      });

      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.classList.add("hidden");
  }
}

function selectSong(track: any) {
  const songTitleInput = document.querySelector(
    "#song-title",
  ) as HTMLInputElement;
  const songUrlInput = document.querySelector("#song-url") as HTMLInputElement;

  songTitleInput.value = track.name;
  songUrlInput.value = track.url;

  const resultsContainer = document.querySelector(
    "#search-results",
  ) as HTMLDivElement;
  resultsContainer.classList.add("hidden");
}

export { songSearch };

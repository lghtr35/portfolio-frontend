import { useEffect, useState } from "react";
import { SPOTIFY_ACCOUNT_URL, SPOTIFY_API_URL } from "../helpers/conf";
import { getRequest, postRequest, putRequest } from "../helpers/request";
import "./spotify.player.css";

const mediaControl = (control, token, start) => {
  console.log(token);
  if (control === "Play") {
    putRequest(
      SPOTIFY_API_URL + "me/player/play",
      {},
      { Authorization: "Bearer " + token }
    ).then((res) => {
      if (!res) {
        throw console.error("no resp");
      }
      console.log(res);
    });
  } else if (control === "Pause") {
    putRequest(
      SPOTIFY_API_URL + "me/player/pause",
      {},
      { Authorization: "Bearer " + token }
    ).then((res) => {
      if (!res) {
        throw console.error("no resp");
      }
      console.log(res);
    });
  } else if (control === "Next") {
    postRequest(
      SPOTIFY_API_URL + "me/player/next",
      {},
      { Authorization: "Bearer " + token }
    ).then((res) => {
      if (!res) {
        throw console.error("no resp");
      }
      console.log(res);
    });
  } else if (control === "Prev") {
    postRequest(
      SPOTIFY_API_URL + "me/player/previous",
      {},
      { Authorization: "Bearer " + token }
    ).then((res) => {
      if (!res) {
        throw console.error("no resp");
      }
      console.log(res);
    });
  } else {
    return;
  }
};

export const SpotifyAuthRedirect = () => {
  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "user-read-private",
  ];
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

  return (
    <a
      href={
        SPOTIFY_ACCOUNT_URL +
        "client_id=" +
        client_id +
        "&redirect_uri=" +
        redirect_uri +
        "&scope=" +
        scopes.join("%20") +
        "&response_type=token&show_dialogue=true"
      }
      className="spotify-login-button"
    >
      Login to Spotify
    </a>
  );
};

export const SpotifyPlayer = (props) => {
  const backgroundStyles = {
    backgroundImage: `url(${props.item.album.images[0].url})`,
  };
  const progressPlayer = {
    width: (props.progress_ms * 100) / props.item.duration_ms + "%",
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="now-playing">
          <img
            style={{ borderRadius: "30px", width: "300px", height: "300px" }}
            src={props.item.album.images[0].url}
            alt="Album cover"
          />
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">
            {props.item.artists[0].name}
          </div>
          <div className="now-playing__status">
            <img
              onClick={() => {
                mediaControl("Prev", props.token);
              }}
              className="prev-song"
              src="https://static.thenounproject.com/png/815176-200.png"
              alt="prev song"
            />
            {props.is_playing ? (
              <img
                onClick={() => {
                  mediaControl("Pause", props.token);
                }}
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png"
                alt="Pause Icon"
              />
            ) : (
              <img
                onClick={() => {
                  mediaControl("Play", props.token);
                }}
                src="https://icon-library.com/images/play-icon-png-transparent/play-icon-png-transparent-28.jpg"
                alt="Play Icon"
              />
            )}
            <img
              onClick={() => {
                mediaControl("Next", props.token);
              }}
              className="next-song"
              src="https://static.thenounproject.com/png/815176-200.png"
              alt="next song"
            />
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressPlayer} />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div>
  );
};

export const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export const SpotifyPlaylistBox = (props) => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    getRequest(SPOTIFY_API_URL + "me/playlists", {
      Authorization: "Bearer " + props.token,
    }).then((res) => {
      if (!res) {
        console.log("no response");
      }
      setPlaylists(res.items);
    });
  }, [props.token]);
  return (
    <div className="spotify-box">
      {props.children}
      <div
        style={{
          border: "1px solid rgba(0,0,0,0.180)",
          borderRadius: "15px",
          backgroundColor: "rgba(0,0,0,0.671)",
          overflow: "scroll",
          height: "300px",
        }}
      >
        {playlists.map((value) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={value.external_urls.spotify}
              style={{ textDecoration: "none" }}
            >
              <div className="playlist-box">
                <span className="spotify-link">{value.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export const SpotifyProfileBox = (props) => {
  const [profile, setProfile] = useState(0);
  useEffect(() => {
    getRequest(SPOTIFY_API_URL + "me/", {
      Authorization: "Bearer " + props.token,
    }).then((res) => {
      if (!res) {
        console.log("no response");
      }
      setProfile(res);
    });
  }, [props.token]);
  return (
    <div style={{ margin: "0 auto", paddingBottom: 20 }}>
      {profile !== 0 && (
        <div>
          <img
            className="spotify-profile-pic"
            alt="profile-pic"
            src={profile.images[0].url}
            style={{ marginBottom: "1%" }}
          />
          <p className="spotify-profile-info">{profile.display_name}</p>
          <p className="spotify-profile-info">{profile.email}</p>
          <p className="spotify-profile-info">
            Followers: {profile.followers.total}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={profile.external_urls.spotify}
            className="profile-link"
          >
            Go to {profile.id} on Spotify
          </a>
        </div>
      )}
    </div>
  );
};

export const SpotifyComponent = () => {
  const [token, setToken] = useState(0);
  const [item, setItem] = useState({
    album: { images: [{ url: "" }] },
    name: "",
    artists: [{ name: "" }],
    duration: 0,
  });
  const [progress, setProgress] = useState(0);
  const [is_playing, setIsPlaying] = useState("Paused");
  const [no_data, setNoData] = useState(false);

  const getCurrentlyPlaying = (_token) => {
    getRequest(SPOTIFY_API_URL + "me/player", {
      Authorization: "Bearer " + _token,
    }).then((res) => {
      if (!res) {
        setNoData(true);
        return;
      }
      setItem(res.item);
      setProgress(res.progress_ms);
      setIsPlaying(res.is_playing);
      setNoData(false);
    });
  };

  useEffect(() => {
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      getCurrentlyPlaying(_token);
    }
    const interval = setInterval(() => {
      if (token) {
        getCurrentlyPlaying(token);
      }
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [token]);

  const spotifyComp = {};
  if (!token) {
    spotifyComp.result = <SpotifyAuthRedirect />;
  } else if (token && !no_data) {
    spotifyComp.result = (
      <SpotifyPlayer
        item={item}
        is_playing={is_playing}
        progress_ms={progress}
        token={token}
      />
    );
  } else if (no_data) {
    spotifyComp.result = (
      <SpotifyPlaylistBox token={token}>
        <SpotifyProfileBox token={token} />
      </SpotifyPlaylistBox>
    );
  }

  return spotifyComp;
};

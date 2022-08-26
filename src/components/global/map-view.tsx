import React, { memo } from "react";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";

import { mapStyles } from "../../utils/config/map-styles";

interface IMapViewData {
  className: string;
  data: {
    lat: string;
    lng: string;
    zoom: number;
    scriptsAlreadyLoaded?: boolean;
    title?: string;
  };
}

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const customStyles: google.maps.MapTypeStyle[] | null = mapStyles;
const googleStaticMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY as string;

const MapView = ({ data }: IMapViewData) => {
  const { lat, lng, zoom, scriptsAlreadyLoaded = false, title } = data;
  const center: { lat: number; lng: number } = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <LoadScriptNext googleMapsApiKey={googleStaticMapsAPIKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{
          styles: customStyles,
          disableDefaultUI: true,
        }}>
        <>
          <Marker
            position={center}
            icon={{
              path: "M19.617 47.2347L5.75127 33.3689C-1.92182 25.6958 -1.91639 13.2955 5.76337 5.69705C13.4223 -1.92226 25.8548 -1.89553 33.507 5.7567C41.1592 13.4089 41.1538 25.8092 33.4949 33.4286L33.3905 33.5324L19.617 47.2347ZM19.3329 27.7856C23.9982 27.7856 27.7802 24.0036 27.7802 19.3382C27.7802 14.6729 23.9982 10.8909 19.3329 10.8909C14.6676 10.8909 10.8856 14.6729 10.8856 19.3382C10.8856 24.0036 14.6676 27.7856 19.3329 27.7856Z",
              fillColor: "#FFC920",
              fillOpacity: 0.9,
              scale: 1,
              strokeColor: "#FFC920",
              strokeWeight: 2,
            }}
          />
        </>
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default memo(MapView);

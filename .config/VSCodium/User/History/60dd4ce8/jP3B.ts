import { log } from "../utils/logger";
import maxmind from "maxmind-db-reader";
import { GeolocationInfo } from "../utils/interfaces/GeolocationInfo";

const db = maxmind.openSync('../../data/geolocate.mmdb');

export async function geolocateIP(ipAddress: string): Promise<GeolocationInfo | null> {
  try {
    const location = db.get(ipAddress);
    
    if (!location) {
      throw new Error('IP address not found in the database');
    }

    const { city, region, country, location: { latitude, longitude } } = location;

    return {
      city,
      region,
      country,
      latitude,
      longitude,
    };
  } catch (error) {
    console.error(`[geolocateIP] ${error}`);
    return null;
  }
}

import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { ESP8266Platform } from './esp8266Platform';


/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, ESP8266Platform);
};

const API_CONFIG = {
  HOTEL: {
    BROWSE_HOTELS: '/hotels/search',
    HOTEL_INFO: {
      URL: (hotelId) => `/hotel/${hotelId}/info`,
    },
  },
};
export default API_CONFIG;
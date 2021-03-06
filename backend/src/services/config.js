require('dotenv').config();

module.exports = {
  serverPort: process.env.PORT || 5000,
  mercadoLibreBaseUrl: process.env.MERCADOLIBRE_BASE_URL,
  mercadoLibreSiteId: process.env.MERCADOLIBRE_SITE_ID,
  apiSignatureName: process.env.API_SIGNATURE_NAME,
  apiSignatureLastName: process.env.API_SIGNATURE_LASTNAME
};

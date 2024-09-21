const fetch = require('node-fetch');

const data = {
  code: "4/0AcvDMrCfkKnthsdFDivyG3GQcPkL-VfyHNhR6URALZDl3HGTdhBV2IZ5TLiMWWYGAFqLBA",
  client_id: "YOUR_CLIENT_ID",
  client_secret: "YOUR_CLIENT_SECRET",
  redirect_uri: "http://localhost:4000/auth/google/redirect",
  grant_type: "authorization_code",
};

fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams(data),
})
  .then(response => response.json())
  .then(data => console.log(data));

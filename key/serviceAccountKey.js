import dotenv from 'dotenv';
dotenv.config();

const Type = process.env.type;
const Project_id = process.env.project_id;
const Private_key_id = process.env.private_key_id;
const Private_key = process.env.private_key;
const Client_email = process.env.client_email;
const Client_id = process.env.client_id;
const Auth_uri = process.env.auth_uri;
const Token_uri = process.env.token_uri;
const Auth_provider_x509_cert_url = process.env.auth_provider_x509_cert_url;
const Client_x509_cert_url = process.env.client_x509_cert_url;
const Universe_domain = process.env.universe_domain;


const serviceAccount = {
  "type": Type,
  "project_id": Project_id,
  "private_key_id": Private_key_id,
  "private_key": Private_key,
  "client_email": Client_email,
  "client_id": Client_id,
  "auth_uri": Auth_uri,
  "token_uri": Token_uri,
  "auth_provider_x509_cert_url": Auth_provider_x509_cert_url,
  "client_x509_cert_url": Client_x509_cert_url,
  "universe_domain": Universe_domain

};

export default serviceAccount;
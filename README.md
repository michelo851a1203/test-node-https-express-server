# learn how to build nodejs https server  with self-signed certificate

# generate rsa key 
openssl genrsa -out key.pem
# generate csr file to generate cert file
openssl req -new -key key.pem -out csr.pem
# generate cert file with x509 solution
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem


# learn how to build nodejs https express server with self-signed certificate

### generate rsa key 
```sh
openssl genrsa -out key.pem
```
### generate csr file for generating cert file
```sh
openssl req -new -key key.pem -out csr.pem
```
### generate cert file with x509 solution
```sh
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

- implement following command to finish all command 

```sh
bash gen.sh 
# or
# pnpm ssl
```

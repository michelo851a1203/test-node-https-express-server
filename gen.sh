# this will generate rsa key.pem
DIR="my-cert"
if [ ! -d $DIR ];then
  mkdir $DIR
fi

openssl genrsa -out $PWD/$DIR/key.pem
# this will help us to build a csr.pem file
openssl req -new -key "$PWD/$DIR/key.pem" -out "$PWD/$DIR/csr.pem"
# generate x509
openssl x509 -req -days 365 -in $PWD/$DIR/csr.pem -signkey $PWD/$DIR/key.pem -out $PWD/$DIR/cert.pem
rm $PWD/$DIR/csr.pem


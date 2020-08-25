echo $UID
echo $GID

usermod -u UID -o -m user
groupmod -g GID user

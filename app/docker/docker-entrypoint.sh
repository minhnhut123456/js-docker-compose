#!/bin/sh

echo "Starting app..."
echo "Generate lender index and config files"
echo "$PORT"
echo "$REACT_APP_BLOG_ENDPOINT"
echo "--------------------------------------"
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
echo "DONE"

exec "$@"

# kitambi

## Server Install
```sh
rm -rf custom/
curl -sL $(curl -s https://api.github.com/repos/ambiguities/kitambi/releases/latest | grep browser_download_url | cut -d\" -f4 | egrep 'kitambi-v[0-9]+.[0-9]+.[0-9]+-packwiz-install.zip$') > kitambi-server-install.zip
unzip -qo kitambi-server-install.zip
rm kitambi-server-install.zip
./packwiz.sh
```

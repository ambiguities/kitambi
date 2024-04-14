#!/usr/bin/env bash

# check for flags
#  -w for world folder path

while getopts ":w:" opt; do
  case $opt in
  w)
    world_folder="$OPTARG"
    ;;
  \?)
    echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done

if [ ! -f pack.toml ]; then
  echo "pack.toml not found"
  exit 1
fi

if [ ! -f packwiz-installer-bootstrap.jar ]; then
  wget https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar
fi

java -jar packwiz-installer-bootstrap.jar -g -s both pack.toml

#!/usr/bin/env bash

if [ ! -f pack.toml ]; then
    echo "pack.toml not found"
    exit 1
fi

if [ ! -f packwiz-installer-bootstrap.jar ]; then
    wget https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar
fi

java -jar packwiz-installer-bootstrap.jar -g -s both pack.toml

if [ -d datapacks ]; then
  echo "Datapack folder found, please enter path to datapack folder"
  read -r datapack_folder
  cp -r datapacks/* "$datapack_folder/"
fi
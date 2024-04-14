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

if [ -d custom ]; then
# if world_folder is not set, then set to `world`
  if [ -z "$world_folder" ]; then
    world_folder="world"
  fi

  if [ ! -d $world_folder ]; then
    echo "World folder not found"
    exit 1
  fi

  if [ -d custom/configs ]; then
    cp -r custom/configs/* config/
  fi

  if [ -d custom/datapacks ]; then
    if [ ! -d $world_folder/datapacks ]; then
      mkdir $world_folder/datapacks
    fi
    cp -r custom/datapacks/* $world_folder/datapacks/
  fi

  if [ -d custom/kubejs ]; then
    if [ ! -d kubejs ]; then
      mkdir kubejs
    fi
    cp -r custom/kubejs/* kubejs/
  fi
fi

#!/usr/bin/env bash

REPOSITORY=/opt/CodeDeployApp
cd $REPOSITORY

APP_NAME=action_codedeploy

CURRENT_PID=$(pgrep -f $APP_NAME)

if [ -z $CURRENT_PID ]
then
  echo "> 종료할것 없음."
else
  echo "> kill -9 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi

sudo apt install npm
sudo npm install pm2 -g
sudo pm2 stop api
sudo pm2 start api

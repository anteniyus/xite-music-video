## Table of contents

- [XITE Music Video Application](#xite-music-video-application)
- [Building](#building)
- [Stack](#stack)
- [Available Scripts](#available-scripts)
- [How to Start Locally](#how-to-start-locally)
- [Deployment](#deployment)
- [Layout](#layout)

## XITE Music Video Application
This is a simple music video application. This application lists the new and old music videos for
you. You can find your favorite music video by searching
and filtering based on **Artist** or **Track name** and also its **Genre** or **Decade**.

This application is designed based on the **Desktop First** design approach, but also, supports mobile devices.

The main URL of the application is:
> [host]/


![Demo](https://user-images.githubusercontent.com/4962803/142739683-8caf5c14-b3f1-4c9f-96c8-faecafdeed9d.gif)

## Building

Building The XITE Music Video Application requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack

The technology used for developing this application is:
- React
- Redux toolkit
- Material-UI

And also used some libraries like **Axios**, **Notistack**.

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## How to Start Locally
For starting the project locally, after cloning the project, go to the project directory and run the following command:
> npm install

It takes some times, after it finished, run the below command:
>npm start

The project automatically runs on **localhost:3000**, if the specified port is busy,
it asks you to run it
on another port.

## Deployment

This application has two profiles: *development* and *production*, and it is being
handled using **env-cmd** library.

For local deployment (the steps for the server deployment are the same in most cases),
you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Also, if you have profiling for different stages, you can use below command as an example
  for production:

  > npm run build:production

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf
  like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/xite-music-video/build_

- In the conf file, change server part like below:

```text
server {

    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/xite-music-video/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```

Done. Start the Nginx.

The application is accessible from the following location:
> localhost:5050


## Layout
**Web**

![Demo](https://user-images.githubusercontent.com/4962803/142739952-71042e1b-77f4-4ec9-956a-d2b7c9b84ad9.PNG)
![Demo](https://user-images.githubusercontent.com/4962803/142739976-94c58c0a-cef5-4831-b0a0-a64ab21887ac.PNG)
![Demo](https://user-images.githubusercontent.com/4962803/142740012-c67d2b6b-e072-45b5-9a4e-4e96f69768bc.PNG)

**Mobile**

![Demo](https://user-images.githubusercontent.com/4962803/142769346-86a98380-c65c-4d17-9761-65d5d8143bdb.jpeg)
![Demo](https://user-images.githubusercontent.com/4962803/142769357-7a17b888-e59a-4475-81c2-bc2c06c467ba.jpeg)
![Demo](https://user-images.githubusercontent.com/4962803/142769362-0aa1d049-b4da-44a5-9c1e-6034e929c3bc.jpeg)
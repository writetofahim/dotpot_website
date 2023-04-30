# DotpotiT Official Website:

![Version](https://img.shields.io/badge/Version-1.0.0-1abc9c.svg?style=flat-square&colorA=gray&colorB=green) ![Node.js Version](https://img.shields.io/badge/Node.js-v18.15.0-brightgreen.svg?style=flat-square) ![NPM Version](https://img.shields.io/badge/npm-v9.5.0-blue.svg?style=flat-square) ![Deployment Status](https://img.shields.io/badge/Deployment-Live-1abc9c.svg?style=flat-square&colorA=gray&colorB=green) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-1abc9c.svg?style=flat-square&colorA=gray&colorB=blue)

## Introduction:

Welcome to DotpotiT! This web application provides a platform for showcase their services and portfolio, connect with potential clients and create and manage personalized portfolios. DotpotiT is built using ReactJS and Tailwind CSS and context API for the client-side and admin-panel. Also AXIOS is used for data fetching from both the client and admin sides. NodeJS, ExpressJS, JWT, and MongoDB for the API. 

## Features:

- Create and manage personalized portfolios
- Showcase the work
- Connect with potential clients
- User-friendly interface with modern design
- Secure API for efficient and secure data storage and management
- Admin panel for profile management, statistics viewing, and progress tracking
- AXIOS for data fetching from both the client and admin sides 
- A responsive design that adapts to various screen sizes
- An about section that highlights the company's mission, vision, and team
- A services section that lists the services provided by the company
- A portfolio section that showcases the company's previous projects
- A contact section that allows users to get in touch with the company

## Technologies Used

- NodeJs
- React Vite
- ExpressJs
- MongoDB
- Tailwind CSS
- React Router DOM
- Multer
- Material UI
- Sass
- Slick-Slider 
- tsParticles
- axios
- material-ui-form
- moment
- node-sass
- react js
- react-dom
- react-html-parser
- react-icons
- react-material-ui-carousel
- react-router-dom
- react-slick
- react-tsparticles
- slick-carousel
- socket.io-client
- tsparticles
## Folder Structure:
- api directory contains controllers, middlewares, models, node_modules and routes of the website.
- client directory contains src of website.
### Client:  

The client-side of DotpotiT is built using ReactJS and Tailwind CSS and context API with data fetching handled by AXIOS. 

1. ReactJS: ReactJS allows for the creation of reusable UI components, making it easy to build complex applications with a modular approach.
2. Tailwind CSS: Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-built styles and components to easily create responsive and modern web designs.
3. Context API: Context API is a feature of ReactJS that allows for the creation of a global state that can be accessed and modified by all components in a React application, making it easier to manage and pass data between components without the need for complex props drilling.
### Admin:
The admin side of DotpotiT utilizes ReactJS and Tailwind CSS with context API to create an efficient and user-friendly interface for managing portfolios, tracking progress and responding to the user query.

### API:
    
DotpotiT's API is built using NodeJS and ExpressJS, utilizing JWT authentication and MongoDB for efficient and secure management of user data.

1. NodeJS: NodeJS is a JavaScript runtime that allows developers to execute JavaScript code on the server-side, providing an efficient and scalable event-driven, non-blocking I/O model and a rich ecosystem of packages and libraries.
2. ExpressJS is a minimalist and flexible NodeJS web application framework that provides a robust set of features for building scalable web and mobile applications, with support for middleware, routing, templates, and more.
3. JWT: JWT (JSON Web Tokens) is a popular method for securely transmitting information between parties as a JSON object, typically used for authentication and authorization purposes in web applications, with a token containing a payload of user data that is signed with a secret key to prevent tampering.

## Installation:

Follow this steps to install and run the project:

1. First, make sure that you have Git and Node.js installed on your computer.

2. To clone the repository open command prompt on your computer and run:
    To clone using SSH `git clone git@github.com:DotpotiT/website.git`

    To clone using Https run `git clone https://github.com/DotpotiT/website.git` on your command prompt

3. Open the downloaded 'website' folder on IDE (Vscode).

4. Setup :
    - Open another terminal in the website directory.
    - Go to api directory : `cd api`
    - To install the dependencies, run the following command: `npm install`
    - Install Nodemon by running the following command: `npm install nodemon`
    - Start the server by running the following command: `npm start`
    - The api is running on at [localhost:8800]`http://localhost:8800`

5. Client-side Setup:
    - Open a terminal
    - Go to the client directory: `cd client`
    - To install the dependencies, run the following command: `npm install --legacy-peer-deps`
    - Start the server by running the following command: `npm run dev`
    - Open the project on browser at [localhost:5173] `http://localhost:5173`

6. Admin-side Setup:
    - Open another terminal in the website directory.
    - Go to the admin directory: `cd admin`
    - To install the dependencies, run the following command: `npm install`
    - Start the server by running the following command: `npm run dev`
    - Open the project on browser at [localhost:5174] `http://localhost:5174`


## Deployment:
- Create an AWS account if you don't have one already.
- Launch an EC2 instance with the desired specifications, such as the operating system, storage, and network configuration. You can use an Amazon Machine Image (AMI) with pre-installed software, or you can manually install the required software on the instance.
- Set up security groups to manage inbound and outbound traffic to the instance. Ensure that the necessary ports are open for your application to function properly.
- Connect to the instance using SSH or a remote desktop client, depending on your instance's operating system.
- Install PM2 on the instance by running the following command:
    `npm install -g pm2`
- Clone the DotpotiT website repository from GitHub onto the instance.
    `git clone https://github.com/DotpotiT/dotpotit.git`
- Go to API and install the necessary dependencies
    `cd api`
    `npm install`
- Start the API server using PM2.
    `pm2 start npm --name "api" -- start`

    ![image](https://user-images.githubusercontent.com/66058172/235347670-eaa21860-6e4d-4b47-9c65-3d5020da836f.png)

- Serve the client-side application using the nginx.
    
   
    ``` server {
    listen 80;
    server_name dotpotit.com www.dotpotit.com;
    return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name dotpotit.com www.dotpotit.com;

        ssl_certificate /etc/letsencrypt/live/dotpotit.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/dotpotit.com/privkey.pem;
        include /etc/letsencrypt/options-ssl-nginx.conf;
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

        location / {
            proxy_pass http://localhost:5173;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
        location /api {
            proxy_pass http://localhost:8800;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }

        location /api/uploads {
            autoindex on;
            alias /home/ubuntu/website/api/uploads;
            try_files $uri $uri/ =404;
            expires 30d;
        }
        location /admin {
        proxy_pass http://localhost:5174/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /socket.io {
        proxy_pass http://localhost:8800;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        }
    }

- Install the necessary dependencies, such as Node.js and other packages required by the application for client.
    `cd client`
    `npm install --legacy-peer-deps`
- Build the client-side application using the following command:
    `npm run build`
- Serve the Client dist folder using PM2.
    `pm2 start --name "client" "npx serve dist -s -l 5173"`

    ![image](https://user-images.githubusercontent.com/66058172/235347691-2ec5aae5-0fe5-4878-a0b0-8bd007846599.png)

- Set up a reverse proxy to route traffic from the web server to the API server running on port 8800.
- Test the application to ensure it's functioning as expected.
- Create a domain name for the application using Amazon Route 53.
- Configure the DNS records to point to the instance's public IP address.
- Set up SSL/TLS certificates using Amazon Certificate Manager to encrypt traffic to and from the application.
- Finally, monitor the application's performance and security, and make any necessary updates or changes.

## Contributing:

Contributions are always welcome! If you have any suggestions or improvements, please create a pull request.

## Contact:

If you have any questions or feedback, please feel free to contact us at [DotpotiT] (https://www.dotpotit.com/).
# or just ask to chatGPT 😜😎🤖.


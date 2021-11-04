
# Hieroglyphics Detect

when I was 11, 

My dad took me to the Egyptian museum, 

I really loved it,with the mummies and all the hieroglyphics symbols

and I was always wondering how I can read and understand this language, 

but of course

back then there was no enough resources on the web and locally.

But  a week ago I found this database on kaggle(Egyptian Hieroglyphics Datasets
) , 

then I was really happy that someone made that kinda database, then I build this application to detect hieroglyphics using Yolo5 

## Tech Stack

**Client:** React, TailwindCSS , Axios , JS

**Server:** Python, FastApi , Yolo5


## Installation

For Client Side

```bash
  cd client 
  npm install
```
    
For Server Side (download size is 1.4 G)

```bash
  cd server 
  pip install -r requirements.txt
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/MoAbeds/hieroglyphics-full-app.git
```

Go to the Client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm start
```

Go to the Server directory

```bash
  cd server
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
   uvicorn main:app --host 0.0.0.0  --reload
```
## Screenshots
# Client

![Client Screenshot](https://i.ibb.co/3Bwd2j7/Web-capture-4-11-2021-175541-localhost.jpg)


# Loading 

![Loading Screenshot](https://i.ibb.co/SQW92Cv/Web-capture-4-11-2021-175624-localhost.jpg)

# Detect

![Detect Screenshot](https://i.ibb.co/5WYZVLL/Web-capture-4-11-2021-17589-localhost.jpg)


## Demo

Insert gif or link to demo

![App Screenshot](https://i.ibb.co/HDxj5Wj/ezgif-com-gif-maker.gif)

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Credit 
Logo Design : https://www.freepik.com/free-vector/bw-logo-vector-illustration-branding-set_18236426.html

Website Design :

1-https://www.freepik.com/free-vector/egypt-night-party-landing-page_13009328.htm#page=1&query=pharaoh%20website&position=1&from_view=search

2-https://www.freepik.com/free-vector/egypt-banners-set_6882836.htm?query=pharaoh%20website

3-https://www.freepik.com/free-vector/egypt-banners-set-with-ancient-god-amun-osiris-pharaoh-cleopatra_13605115.htm#page=1&query=pharaoh%20website&position=0&from_view=search


Dataset: https://www.kaggle.com/waleedumer/egyptian-hieroglyphics-datasets
## Tools Used

1- Adobe Illustrator (Designing)

2- roboflow : Prepare Database for Yolo5

3- Pycharm

4- Coffee (alot)

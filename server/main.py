import uvicorn
import os
import subprocess
import pathlib
import glob
import uuid

from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from fastapi import FastAPI, File, UploadFile


# Global Variables
IMAGEDIR = "Files/"
Output_dir = 'outputs'



app = FastAPI()


# For Cors
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:8000",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def index():
    return {"message": "hello world"}


        

# Read Resize and Export New Image
def Img_Type(file):
    Img = os.path.join(IMAGEDIR,file.filename)
    file_type = pathlib.Path(Img).suffix

    image = Image.open(Img)
    image = image.convert('RGB')
    new_image = image.resize((640, 640))
    new_image.save(Img)

    return new_image



db=[]

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    #change file name
    file.filename = f"{uuid.uuid4()}.jpg"
    contents = await file.read()

    with open(f"{IMAGEDIR}{file.filename}", "wb") as f:
       f.write(contents)
    check_file = Img_Type(file) # function to check - resize - save image
    Img = os.path.join(IMAGEDIR,file.filename) # Get Resize image

    # Run the Magic with detect.py Yolo5
    run_yolo_script = subprocess.run(['python', 'detect.py','--weights','best.pt' ,'--source',Img,'--project',Output_dir,'--name',file.filename ])

    # get the image from the output Dir
    Detect_img = glob.glob(f'outputs/{file.filename}/*.jpg')
    #insert image to the top of the array to send them with GET
    db.insert(0,Detect_img[0])

    return {'Success:205'}


@app.get("/getimage")
async def main():
        return FileResponse(db[0])


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)

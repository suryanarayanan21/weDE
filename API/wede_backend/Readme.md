to the developers of frontend wede

## to Signup 
# post request on route "localhost:port/newuser/"
with a json body of :  
{  
    "name": " dfahfsdj",  
    "email": "hjhasfj.com" ,  
    "password" : "uihwfjkh"  
}  

will go thorugh the  stage validateion and return the id of the entry from mongo database.
only .com .net and .in is allowed for now, notify me of any other changes.

## to login
# post request on route  "localhost:port/login/"
with a json body of :  
{  
    "email": "hjhasfj.com" ,  
    "password" : "uihwfjkh"  
}  

### as of now hashed password implementation and username name (stored in session cookie) has been done
also when using it on your system change the paths in .env as needed.

### ***ALL FRONTEND GOES TO /PUBLIC FOLDER***

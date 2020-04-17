to the developers of frontend wede

## to Signup 
## post request on route "localhost:port/newuser/"
with a json body of :  
{  
    "name": " dfahfsdj",  
    "email": "hjhasfj.com" ,  
    "password" : "uihwfjkh"  
}  

will go thorugh the  stage validateion and return the id of the entry from mongo database.
only .com .net and .in is allowed for now, notify me of any other changes.

## to login
## post request on route  "localhost:port/login/"
with a json body of :  
{  
    "email": "hjhasfj.com" ,   
    "password" : "uihwfjkh"    
}  
## to access projects
## post request on route "localhost:port/projects/"
with a json body of :  
{  
	"projectID" : "hfdsdshjb12374",  
	"projectName" : "khkf",  
	"code" : "code goes here",  
	"collaborators"	: ["email1@gamil.com","email2@gmail.com"]  
}  
##  post request on route "localhost:port/projects/delete"
to delete a project with a json body of :  
{  
	"projectID" : "hfdsvsdb12374"  
}  

##  post request on route "localhost:port/projects/getprojects"
to get all projects an individual has worken on with a json body of :  
{  
	"email" : "email1@gmail.com"  
}  

### as of now hashed password implementation and username name (stored in session cookie) has been done
***also when using it on your system change the paths in .env as needed.***

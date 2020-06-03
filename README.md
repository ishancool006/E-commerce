#E-Commerce

E-commerce app is REST api collection.It contains various api calls.

Easiest way to Start with project is clone the repository.
2)Make dev.env file config folder in root directory of project and add following Environment Variable  
    PORT        ---port for the server to be run
    JWT_SECRET  ---JSON webtoken String
    MONGODB_URL ---MongoDb database URL
3)Run "npm init" command in project directory

All the Api's Are authenticated Except Signup and Signin

API's List

Signup

    Method- POST     
    URL -   localhost:3000/api/signup 
    Authentication -None
    Body-   {
                "name":"Ishan Kokadwar",
                "email":"ishankokadwar007@gmail.com",
                "password":"user2@123#",
                "addresses":
                    [
                        {
                            "street":"Mondha Road",
                            "locality":"Ganesh Nager",
                            "city":"Jintur",
                            "pincode":"02457"
                        }
                    ]
            }


SignIn

    Method- POST     
    URL -   localhost:3000/api/signin
    Authentication - None
    Body-   {
	            "email":"ishankokadwar007@gmail.com",
                "password":"user2@123#",
            }


Get My Profile

    Method- GET     
    URL -   localhost:3000/api/myprofile
    Authentication - Bearer {{token}}


Update Existing Profile

    Method- PATCH    
    URL -   localhost:3000/api/updateMyProfile
    Authentication - Bearer {{token}}
    Body-   Name, addresses,password can be Updated
 
    
Logout From Current Device

    Method- GET    
    URL -   localhost:3000/api/logout
    Authentication - Bearer {{token}}
    Body- None


Logout From All Device

    Method- GET   
    URL -   localhost:3000/api/logout
    Authentication - Bearer {{token}}
    Body- None


Add Products

    Method- POST   
    URL -   localhost:3000/api/addProduct
    Authentication -
    Body- {
                "name":"ACER_LAPTOP",
                "img":"ACER_LAPTOP_img",
                "category":"Eletronics",
                "price":45000,
                "description":"RAM:6gb,ROM:1TB,Processor:Intell-i9 ",
                "quantity":"5"
            }


Get Products

    Method- GET  
    URL -   localhost:3000/api/getProducts
    Authentication - None
    Body- None


Place Order

    Method- POST   
    URL -   localhost:3000/api/placeOrder
    Authentication -Bearer {{token}}
    Body- {
                "productId":"5ed7b0a424c94c149c1781d2",
                "quantity":2,
                "address_no":0
            }


Add To Cart

    Method- POST  
    URL -   localhost:3000/api/addToCart
    Authentication -Bearer {{token}}
    Body- {
                "productId":"5ed7b0ea24c94c149c1781d3",
                "quantity":2
            }


Remove From the Cart

    Method- POST  
    URL -   localhost:3000/api/removeFromCart
    Authentication -Bearer {{token}}
    Body- {
                "productId":"5ed7b0a424c94c149c1781d2"
            }

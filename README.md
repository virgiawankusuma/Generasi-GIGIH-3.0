# Table of Contents
1. [Database Structure](#database-structure)
2. [API Structure](#api-structure)
3. [List of API request and response](#list-api-request-and-response)
4. [How to run the project](#how-to-run-the-project)

---

# Database Structure
This Dataasbe have 3 Collections with specific document:
## Video Thumbnails
```javascript
{
  _id: ObjectId // Auto generated
  VideoID: string
  Title: string
  Url: string
  Store: string
  Category: string
  Views: number
  Likes: number
}
```
## Comments
```javascript
{
  _id: ObjectId // Auto generated
  Username: string
  Comment: string
  Timestamp: Date | string
  VideoID: string // Reference to video_thumbs.VideoID
}
```

## Products
```javascript
{
  _id: ObjectId // Auto generated
  ProductID: string
  Link: string
  Title: string
  Img: string
  Store: string
  Price: Float32Array
  VideoID: string // Reference to video_thumbs.VideoID
}
```
   
# API Structure
## List of API
| Method | Path | Params | Description |
| ------ | ---- | ------ | ----------- |
| GET | /products | None | Returns all products in the system. |
| GET | /products/:VideoID | VideoID=[string] | Returns the specified product. |
| GET | /video-thumbs | None | Returns all video thumbnails in the system. |
| GET | /comments | None | Returns all comments in the system. |
| GET | /comments/:VideoID | VideoID=[string] | Returns the specified product. |
| POST | /comments | None | Creates a new comment in the system. |

# List API Request and Response
## Product List
* Product object
  ```javascript
  {
    ProductID: string
    Link: string
    Title: string
    Img: string
    Store: string
    Price: Float32Array
    VideoID: string // Reference to video_thumbs.VideoID
  }
  ```
### **GET /products**
----
  Returns all products in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
  ```
  {
    products: [
            {<product_object>},
            {<product_object>},
            {<product_object>},
            {<product_object>},
            {<product_object>},
          ]
  }
  ```
* **Error Response:**  
  * **Code:** 500  
  **Content:** 
    ```
    {
      message : "Error retrieving products", 
      error 
    }
    ```


### **GET /products/:VideoID**
----
  Returns the specified product.
* **URL Params**  
  *Required:* `VideoID=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }` 
* **Error Response:**  
  * **Code:** 500  
  **Content:** 
    ```
    { 
      message : "Error retrieving product", 
      error
    }
    ```

## Video Thumbnail List
* Video Thumbnail List object
  ```javascript
  {
    VideoID: string
    Title: string
    Url: string
    Store: string
    Category: string
    Views: number
    Likes: number
  }
  ```
### **GET /video-thumbs**
----
  Returns all video thumbnails in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
  ```
  {
    video_thumbs: [
            {<video_thumb_object>},
            {<video_thumb_object>},
            {<video_thumb_object>},
            {<video_thumb_object>},
            {<video_thumb_object>},
          ]
  }
  ```
* **Error Response:**  
  * **Code:** 500  
  **Content:** 
  ```
  { 
    message : "Error retrieving video thumbnails",
    error
  }
  ```

## Comment List
* Comment object
  ```javascript
  {
    Username: string
    Comment: string
    Timestamp: Date | string
    VideoID: string // Reference to video_thumbs.VideoID
  }
  ```
### **GET /comments**
----
  Returns all comments in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
  ```
  {
    comments: [
            {<comment_object>},
            {<comment_object>},
            {<comment_object>},
            {<comment_object>},
            {<comment_object>},
          ]
  }
  ```
* **Error Response:**  
  * **Code:** 500  
  **Content:** 
    ```
    { 
      message : "Error retrieving comments", 
      error 
    }
    ```

### **GET /comments/:VideoID**
----
  Returns the specified product.
* **URL Params**  
  *Required:* `VideoID=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <comment_object> }` 
* **Error Response:**  
  * **Code:** 500
  * **Content:** 
    ```
    {
      message : "Error retrieving comment", 
      error 
    }
    ```
# Submit Comment
* Comment object
  ```javascript
  {
    Username: string
    Comment: string
    VideoID: string // Reference to video_thumbs.VideoID
  }
  ```
### **POST /comments**
----
  Creates a new comment in the system.
* **URL Params**  
  None
* **Data Params**
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**
* **Code:** 201
* **Content:** 
  ```
  { 
    success: true, 
    message: "Comment submitted successfully."
  }
  ```
* **Error Response:**
* **Code:** 400  
  **Content:** `{ message : "Username, Comment, and VideoID are required fields." }`
* **Code:** 500
* **Content:** 
  ```
  { 
    message: "Failed to submitt comment", 
    error 
  }
  ```
  
# How to run the project
1. clone this repo with the specified branch name with the following command `git clone -b mid-term-full-stack-engineering <this-repo-url>`
2. Run `npm install` to install all dependencies first.
3. Create a `.env` file in the root directory of the project with `.env.example` as a template.
4. Run `npm start` to start the server.
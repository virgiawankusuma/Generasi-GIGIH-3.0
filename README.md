# Table of Contents
1. [Database Structure](#database-structure)
2. [API Structure](#api-structure)
3. [List of API requests and response](#list-of-api-requests-and-response)
4. [Demo](#demo)
5. [How to run the project locally](#how-to-run-the-project-locally)

---

# Database Structure
This Dataasbe has 3 Collections with the specific document:
## Video Thumbnails
```javascript
{
  _id: ObjectId // Auto-generated
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
  VideoID: string // Reference to videos.VideoID
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
  Price: number
  VideoID: string // Reference to videos.VideoID
}
```
   
# API Structure
## List of API
| Method | Path | Params | Description |
| ------ | ---- | ------ | ----------- |
| GET | /products | None | Returns all products in the system. |
| GET | /products/id/:ProductID | ProductID=[string] | Returns the specified product. |
| GET | /products/:VideoID | VideoID=[string] | Returns the specified product from the specified video. |
| GET | /videos | None | Returns all video thumbnails in the system. |
| GET | /videos/:VideoID | VideoID=[string] | Returns the specified video thumbnail. |
| GET | /comments | None | Returns all comments in the system. |
| GET | /comments/:VideoID | VideoID=[string] | Returns the specified product. |
| POST | /comments | None | Creates a new comment in the system. |

# List of API requests and response
## Products
* Product object
  ```javascript
  {
    ProductID: string
    Link: string
    Title: string
    Img: string
    Store: string
    Price: number
    VideoID: string // Reference to videos.VideoID
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
      message: "Error retrieving products", 
      error 
    }
    ```
## **GET /products/id/:ProductID**
----
  Returns the specified product.
* **URL Params**  
  *Required:* `ProductID=[string]`
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
      message: "Error retrieving product", 
      error
    }
    ```


### **GET /products/:VideoID**
----
  Returns the specified product from the specified video.
* **URL Params**  
  *Required:* `VideoID=[string]`
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
      message: "Error retrieving product from the video",
      error
    }
    ```

## Videos
* Videos object
  ```javascript
  {
    VideoID: string
    Title: string
    Url: string
    Store: string
    Category: string
    Views: number
    Likes: number
    Img: string
  }
  ```
### **GET /videos**
----
  Returns all videos in the system.
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
    videos: [
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
    message: "Error retrieving video thumbnails",
    error
  }
  ```

### **GET /videos/:VideoID**
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
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 500  
  **Content:** 
    ```
    { 
      message: "Error retrieving video", 
      error
    }
    ```

## Comments
* Comments object
  ```javascript
  {
    Username: string
    Comment: string
    Timestamp: Date | string
    VideoID: string // Reference to videos.VideoID
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
      message: "Error retrieving comments", 
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
      message: "Error retrieving comment", 
      error 
    }
    ```
# Submit Comment
* Comment object
  ```javascript
  {
    Username: string
    Comment: string
    VideoID: string // Reference to videos.VideoID
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
  **Content:** `{ message: "Username, Comment, and VideoID are required fields." }`
* **Code:** 500
* **Content:** 
  ```
  { 
    message: "Failed to submit comment", 
    error 
  }
  ```
# Demo
To see the demo of this project, please visit this link
[Generasi Gigih 3.0](https://gg-3.vercel.app/)
  
# How to run the project locally
## Backend
1. Clone this repo with the specified branch name with the following command `git clone -b final-project-full-stack-engineering <this-repo-url>`
2. cd into the project directory. `cd backend`
3. Run `npm install` to install all dependencies first.
4. Create a `.env` file in the project's root directory with `.env.example` as a template.
5. Run `npm run start` to start the server.

## Frontend
1. Back to the root directory of the project.
2. cd into the project directory. `cd frontend`
3. Run `npm install` to install all dependencies first.
4. Run `npm run dev` to start the server.

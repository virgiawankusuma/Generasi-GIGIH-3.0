# Product List
* Product object
```javascript
{
  ProductID: string
  Link: string
  Title: string
  Price: float(2),
  VideoID: string
}
```
**GET /products**
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
  **Content:** `{ error : "Error retrieving products" }`


**GET /products/:VideoID**
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
  **Content:** `{ error : "Error retrieving product" }`

# Video Thumbnail List
* Video Thumbnail List object
```javascript
{
  VideoID: string
  Url: string
}
```
**GET /video-thumbs**
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
  **Content:** `{ error : "Error retrieving video thumbnails" }`

# Comment List
* Comment object
```javascript
{
  Username: string
  Comment: string
  Timestamp: string
  VideoID: string
}
```
**GET /comments**
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
  **Content:** `{ error : "Error retrieving comments" }`

**GET /comments/:VideoID**
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
  * **Content:** `{ error : "Error retrieving comments" }`
# Submit Comment
* Comment object
```javascript
{
  Username: string
  Comment: string
  VideoID: string
}
```
**POST /comments**
----
  Creates a new comment in the system.
* **URL Params**  
  None
* **Data Params**
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**
* **Code:** 200
* **Content:** `{ success: true, message: 'Comment submitted successfully.' }`
* **Error Response:**
* **Code:** 400  
  **Content:** `{ error : "Username, Comment, and VideoID are required fields." }`
* **Code:** 500
* **Content:** `{ error : "Failed to submit comment" }`
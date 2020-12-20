# RESTFul-API-Express-JS
Build RestFul API using Express JS and MongoDB

After clone this repository, you can run:

### `For Express JS`
1. in root directory command "npm install"<br />
2. Goto root directory and then command "npm run dev" <br/>
3. Then open [http://localhost:5000](http://localhost:5000) to view it in the browser (it's default port setting).
   URI list for endpoints  (if it runs on localhost):
   - http://127.0.0.1:5000/api/users/ (<bold>GET</bold>)  - get all Users data
   - http://127.0.0.1:5000/api/users/ (<bold>POST</bold>)  - create one User data
   - http://127.0.0.1:5000/api/users/:id (<bold>GET</bold>) - get one User data according to it's document id
   - http://127.0.0.1:5000/api/users/:id (<bold>PATCH</bold>) - update one User data according to it's document id
   - http://127.0.0.1:5000/api/users/:id (<bold>DELETE</bold>)  - delete one User data according to it's document id
<br/>

### `For Mongo DB`
1. Login to your cloud.mongodb.com account
2. Enter Clusters menu, and then open the 'CONNECT' button
3. choose the 'Connect Your Application' menu
4. select your driver and version
5. copy the string on number 2, then paste to config.js (at the project)
  don't forget to config your own DB name and its password


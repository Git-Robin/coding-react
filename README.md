# coding-react
Search coding challenge

#Setup step
    Create an account at this URL https://www.goodreads.com/api/index and get a secret key by filling out details at https://www.goodreads.com/api/keys

#Environment variables
    1 - CODING_PORT (optional), by default value will be 3006
    2 - GOODREADS_SECRET_KEY (mandatory) - secret key from Setup step

#Steps to install and build
Checkout the code from github project https://github.com/Git-Robin/coding-react into local folder
Open a command prompt or terminal (as per OS)
Go to the specified folder, for e.g. test/coding-react
Run command "npm install"
After successfull completion run command "npm run build"
After successfull build run command "npm start". The application will be available at http://<hostname>:<portnumber>/
Snapshot test command "npm test -- -u"
Graphql api's can be tested using browser with inbuilt graphiql using url http://<hostname>:<portnumber>/graphql
Specifications can be found in Docs
Sample queries:


{
  Books(query: "harry", page: 3) {
    total
    start
    end
    books {
      id
      name
      author
      rating
      cover
      reviews
    }
  }
}

{
  Book(id: 3){
        cc
        py
        description
  }
}

#Imporovements when given more time
1 - UI/UX can be imporoved
2 - Authentication can be added to make it more secure
3 - instead of http, https protocol can be used
4 - More test coverage


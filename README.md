# FetchUrl javascript action

The FetchUrl javascript action is a GitHub action that performs Node-fetch API calls in a generic way and returns all outputs. This action is built using JavaScript and allows you to use the Fetch API to make API requests. The action is completely secure, and all submissions made are not stored or logged.

The inputs to the action are:

`url`: The URL to fetch. This input is required.
`headers`: A JSON string of headers to include in the request. This input is optional.
`method`: The HTTP method to use (GET, POST, PUT, DELETE, etc.). This input is optional and the default value is set to 'GET'.
`body`: The body to include in the request. This input is optional.

The outputs of the action are:

`time`: The time the request was made.
`status`: The HTTP status code returned by the API call.
`headers`: The headers returned by the API call.
`body`: The response body

## Example GET usage

The example GET usage shows how to use the FetchUrl javascript action to make a GET request. In this example, the action is used to fetch data from the https://jsonplaceholder.typicode.com/posts URL.

The job is defined with the name getRequest_job and is set to run on the ubuntu-latest environment. The job has two steps. The first step is named GET REQUEST SAMPLE and uses the FetchUrl javascript action by referencing the action's repository and version. The with field is used to specify the URL to fetch.

The second step is named Get the getRequest outputs and is used to retrieve the outputs of the previous step. The status, headers, and body of the API response are retrieved using the steps keyword and output variables of the action.

This example can be used as a starting point for making GET requests using the FetchUrl javascript action and can be modified to fit your specific use case.

```yaml
jobs:
  getRequest_job:
    name: "SAMPLE GET REQUEST"
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: GET REQUEST SAMPLE
        id: getRequest
        uses: skgandikota/FetchUrl@v1.0
        with:
          url: "https://jsonplaceholder.typicode.com/posts/1"

      - name: Get the getRequest outputs
        run: |
          echo status: "${{ steps.getRequest.outputs.status }}"
          echo date: ${{ (fromJSON(steps.getRequest.outputs.headers)).date[0] }}
          echo responseBody: "${{ steps.getRequest.outputs.body }}"
```
output : 
```shell
status: 200
date: Thu, 23 Mar 2023 04:04:21 GMT
responseBody: {
  userId: 1,
  id: 1,
  title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit,
  body: quia et suscipitnsuscipit recusandae consequuntur expedita et cumnreprehenderit molestiae ut ut quas totamnnostrum rerum est autem sunt rem eveniet architecto
} 



``` 



## Example POST usage

The example POST usage shows how to use the FetchUrl javascript action to make a POST request. In this example, the action is used to submit data to the https://jsonplaceholder.typicode.com/posts URL.

The job is defined with the name postRequest_job and is set to run on the ubuntu-latest environment. The job has two steps. The first step is named POST REQUEST SAMPLE and uses the FetchUrl javascript action by referencing the action's repository and version. The with field is used to specify the URL to submit data to, the HTTP method to use, the headers to include in the request, and the body of the request.

In this example, the HTTP method is set to POST, the headers are specified as a JSON string that sets the Content-type to application/json and the character set to UTF-8. The body of the request is also specified as a JSON string that includes the title, body, and userId fields.

The second step is named Get the postRequest outputs and is used to retrieve the outputs of the previous step. The status, headers, and body of the API response are retrieved using the steps keyword and output variables of the action.

This example can be used as a starting point for making POST requests using the FetchUrl javascript action and can be modified to fit your specific use case.

```yaml
jobs:
  postRequest_job:
    name: "SAMPLE POST REQUEST"
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
       - name: POST REQUEST SAMPLE
        id: postRequest
        uses: skgandikota/FetchUrl@v1.0
        with:
          url: "https://jsonplaceholder.typicode.com/posts"
          method: POST
          headers: '{"Content-type": "application/json; charset=UTF-8"}'
          body: '{"title": "foo","body": "bar","userId": 1,}'

      - name: Get the postRequest outputs
        run: |
          echo status: "${{ steps.getRequest.outputs.status }}"
          echo date: ${{ (fromJSON(steps.getRequest.outputs.headers)).date[0] }}
          echo responseBody: "${{ steps.getRequest.outputs.body }}"
```
output : 
```shell

status: 200
date: Thu, 23 Mar 2023 04:30:18 GMT
responseBody: {
  userId: 1,
  id: 1,
  title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit,
  body: quia et suscipitnsuscipit recusandae consequuntur expedita et cumnreprehenderit molestiae ut ut quas totamnnostrum rerum est autem sunt rem eveniet architecto
}

```
# USEHTTPS EXPLAINED

This code exports a custom hook named `useHttps` which can be used to make HTTP requests. The hook makes use of two external libraries, `axios` and `@chakra-ui/react` to accomplish this.

It uses axios library to send the request and handle the response, and @chakra-ui/react's `useToast` hook to show a toast message in case of an error.

The hook returns a callback function that takes four arguments:

`httpConfig`: an object containing configurations for the request such as the url, method and headers.

`callback`: a function that will be called with the response data when the request is successful.

`loadingFunc`: (optional) a function that will be called with a boolean value indicating whether the request is loading or not.

`errorFunc`: (optional) a function that will be called with the error when the request fails.

It starts by defining the base URL for the API endpoint using the `REACT_APP_BASE_URL` environment variable, it then creates a callback function that takes the httpConfig, callback, loadingFunc and errorFunc as arguments. Inside the callback, it concatenates the base URL with the request URL, creates the config object by merging the default headers with the headers passed in the httpConfig and finally sends a request with axios. If the request is successful, it will call the callback function passing the response data, if it fails, it will show a toast message with the error.

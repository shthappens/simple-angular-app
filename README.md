# Simple Angular API Form

This project is a simple Angular app that sends a form input to a POST API and displays the response in a SweetAlert2 modal.

## How to Run

1. Clone the repo  
   `git clone https://github.com/shthappens/simple-angular-app.git`

2. Navigate to the project folder  
   `cd simple-angular-app`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `ng serve`

5. Open your browser to  
   `http://localhost:4200`

## How it Works

- Enter a message in the text input
- Click "Send"
- The message is sent to `https://sample.lteprocess.com/trythis`
- The response is shown in a modal until dismissed

## Notes

- CORS is allowed for https://*, http://localhost:4200, http://loclahost:8100
- Uses Angular `HttpClient` for API calls
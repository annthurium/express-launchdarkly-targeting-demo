## Creating customized user experiences using Express JS and LaunchDarkly segment targeting

Example [Express](https://expressjs.com/) app that can be integrated with [LaunchDarkly's Node.js server side SDK](https://docs.launchdarkly.com/sdk/server-side/node-js).

### How to get started:

clone this repo on to your local machine:

`git clone https://github.com/annthurium/express-launchdarkly-starter`

Log in to your [LaunchDarkly](https://launchdarkly.com/) account (or [sign up for a free one here](https://launchdarkly.com/).) Copy your SDK key. Paste the key into the `.env.example` file. Rename `.env.example` file to .env

With this setup, the LaunchDarkly SDK can access the credentials locally but you won’t accidentally commit them to source control and compromise your security.

Install dependencies using the following command:

`npm install`

Run the server:

`npm start`

Load http://127.0.0.1:3000/ in the browser to see the application running.

## License

[MIT](https://choosealicense.com/licenses/mit/)

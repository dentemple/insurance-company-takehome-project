# Insurance Company Take-Home Project

## Install

```bash
# Clone the repository
$ git clone git@github.com:dentemple/insurance-company-takehome-project.git

# Change into the directory
$ cd insurance-company-takehome-project

# Install the dependencies
$ npm install

# Run the project
$ npm start
```

The server will run on [localhost:5000](http://localhost:5000/).

The client will run on [localhost:3000](http://localhost:3000/).

The server's localhost can be changed via the `PORT` property on a `.env` file. The client's localhost can be changed via `defineConfig.server.port` via the `vite.config.ts` file.

An initial database has been configured via `sqlite3`, but it utilizes local memory only. Restarting the server will reboot its contents.

## LICENSE

This project is free and open source under the [Mozilla 2.0 License](https://www.mozilla.org/en-US/MPL/2.0/).

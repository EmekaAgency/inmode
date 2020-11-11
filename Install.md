# Install emeka-gatsby-wordpress

## Install Gatsby client

```bash
    npm install -g gatsby-cli --save/--save-dev
```

### Create blank project

```bash
    $ - gatsby new <name> <git-repo-url>
```

### Add dependencies

- gatsby-source-graphql

```bash
    npm install gatsby-source-graphql --save/--save-dev
```

- dotenv

```bash
    npm install dotenv gatsby-source-graphql --save/--save-dev
```

### Environement variables

Create 2 files:
    - .env.development
    - .env.production

Those 2 files gonna store the environement variables for your project. To use different environments during development, you gonna use :

```bash
    NODE_ENV=<dev_env> <command> <options>
```
or
```bash
    GATSBY_ACTIVE_ENV=<dev_env> <command> <options>
```

Example :

```bash
    NODE_ENV=develop npm run build
```

The gatsby default behavior takes the production environement variables when they are configured to process `npm run build` and the develop environment variables for `npm run develop`

<span style="font-size:10px;color:#f66">PS : Better use NODE_ENV as the GATSBY_ACTIVE_ENV can generate errors and side effects.</span>

To access them in code, you gonna have to use in the gatsby-config.js :

```JS
    let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "develop";

    require("dotenv").config({
      path: `.env.${activeEnv}`,
    })
```

so you can next access them anywhere by :

```JS
    `${process.env.<var_name>}`
```

### Verify all Gatsby know problems

#### <span style="color:red;font-weight:900">Packages versions</span>

Verify if the main plugins requirements are satisfied (if the dependant plugins are in the version range needed by the main ones)

```bash
    npm outdated
```

If the cmd output displays red packages it means that those ones are outdated according to the main plugins requirements. You'll so have to use :

```bash
    npm update --save/--save-dev
```

To update the version of the required plugins to the latest required version.

<span style="font-size:10px;color:#f66">PS : if you want / need to have a direct command to update your dependencies, you can directly add on you package.json, as the other commands :
```js
    "update_all": "npm update --save/--save-dev -f"
```
</span>

#### <span style="color:red;font-weight:900">Remaingin code</span>

When you `develop or build` your project, it gonna create `.cache and public folders`. Those two folders may create some `side effects` and generate `errors during the next run of develop or build`. To prevent that, you can use :

```bash
    gatsby clean
```

which gonna `delete those two folders` and prevent those side effects. You can `update you package.json` if you want to directly include them in commands as following :

```JS

  "scripts": {
    "build": "gatsby clean && gatsby build",
    "develop": "gatsby clean && gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  },
```

and next gonna have to use the basic command :

```bash
    npm run develop
    or
    npm run build
```

and it gonna execute what is in the "build" or "develop" package.json configuration.

## Setup Wordpress backend

### Create a Wordpress project

- <span style="font-weight:700;color:green;">With Cpanel</span>

    You first need to know where you gonna install your WordPress. If it's on a sub-domain, first create it.

    <br/>

    You can now install a WordPress instance directly on you Cpanel by going on the Softaculous Market. There, you'll have an installer manager which gonna help you to quickly create a WordPress install on the selected domain on your hosting.

    <br/>

    Once done, go to the [#Config you WordPress](#config-wordpress) section.

- <span style="font-weight:700;color:green;">Without Cpanel</span>

    https://wordpress.org/support/article/how-to-install-wordpress/

    <br/>

    Once done, go to the [#Config you WordPress](#config-wordpress) section.

### <a id="config-wordpress"></a>Config your WordPress

You'll first have to install the `WPGraphQL` and `WPGraphiQL` extensions. You can directly download the .zip files to the following URLs :

- https://github.com/wp-graphql/wp-graphql
- https://github.com/wp-graphql/wp-graphiql

If you also want to use ACF (Advanced Custom Fields), you'll plus need to install WPGraphQLACF :

- https://github.com/wp-graphql/wp-graphql-acf

Once installed, the first two plugins will allow you to directly use the GraphiQL IDE to display the graphql interface. You can there first test your queries to make some tests and check where are all the datas you want to find.

<br/>

## Linking your GatsbyJS project to your WordPress backend

To access your WordPress graphql variables from your GatsbyJS project, you'll need to link them. You have many ways to solve that, but a useful and gatsby linked WordPress plugins already allows you to do it easily.

- WP Gatbsy

You next have to go in `Settings`>`GatsbyJS`. There, you'll have a token. Copy that token and paste into your `gatsby-config.js` the following code :

```js

    module.exports = {
        // ...
        plugins: [
            // ... previous plugins
            {
                resolve: "gatsby-source-graphql",
                    options: {
                        typeName: "WPGraphQL",
                        fieldName: "wpcontent",
                        url: `http://www.gwpb.emeka.fr/graphql`,
                        headers: {
                        token: '<token>',
                        },
                    },
            },
            // ... next plugins
        ],
    }
```
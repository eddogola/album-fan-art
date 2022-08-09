# Album fan art 

This application aims to be a platform for hobbyists and people who like music, to make album covers of their own, inspired by others, or their own, entirely new, creation.

The application gets images from the vast photography database of [Unsplash](https://www.unsplash.com), and offers a couple of tools to the user: stickers, text with design manipulation tools, and neural style transfer from some popular paintings, for flair.

Think of figma for album covers.

## `Technologies used`

The application is built on top of Node/Express JS and React.
 - For web canvas manipulation, I use [fabric-js](http://fabricjs.com/).
 - For authentication, I use [passport-js](https://www.passportjs.org/) and [auth0](https://auth0.com/), in synergy.
 - For [unsplash API](https://unsplash.com/developers) interaction, I use their official JS client: [unsplash-js](https://github.com/unsplash/unsplash-js)
 - For the database layer, I used [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/) as the ORM.
 - For the [Neural Style Transfer(NST)](https://en.wikipedia.org/wiki/Neural_style_transfer), I used Google Brain's NST model, made available through [magenta.js](https://magenta.tensorflow.org/js-announce), and riding on [tensorflow.js](https://www.tensorflow.org/js).

## `Deployment`

I deployed the app on Heroku. The live version can be found here: https://album-fan-art.herokuapp.com/.

### `running locally`

Running the app locally might be a bit problematic as you will want to get custom authentication credentials to work with Unsplash, Auth0, and for local cookie secretes.

## `Demo`

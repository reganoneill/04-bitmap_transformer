# BITMAP TRANSFORMER
Built by TEAM MEGATRON - Khalid Mohamud, Dana Kulp, Regan O'Neill

This program utilizes node.js to read a bitmap data stream, manipulate the stream, and create a new bitmap image to the filesystem.

# Features Include:

  - Read bitmap data stream from operating system
  - copy data as Buffer object and transform into different data structures in order to transform image.
  - use object constructor to allow metadata to persist and be reused within application
  - utilize three methods to transform the original file:
        1) INVERT COLORS
        [Imgur](http://i.imgur.com/GPZ8S8J.png)
        2) GREENSCALE IMAGE
        [Imgur](http://i.imgur.com/vQXy11e.png)
        3) GRAYSCALE IMAGE
        [Imgur](http://i.imgur.com/W2Tu028.png)

You can also:
  - Run individual methods directly from the CLI to create one (or more) new bitmap files.
  - run automation testing tools with gulp

### Tech

* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system

### Installation

Bitmap Transformer requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd bitmap-megatron
$ npm i
$ node index
[optional single commands include: 'invert', 'grayscale', 'greenscale']
```
License
----

MIT


**Free Software, Hell Yeah!**

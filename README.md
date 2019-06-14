<h1>PhaserLab</h1>
<h3>A DaveKit version for Phaser 3!</h3>

<p>
In this package there are a lot of folders and files which first need a little bit of explaining before working with it.
With this description I hope you will be able to start working on your projects as soon as possible!
</p>
<p>
Beneath is a list of the most common and important files and folders with a little description so you know what they are made for
and how ot use them.
</p>

<ol>

<li><h4>game.js</h4></li>

<p>
This is your game configuration file! In here you define the settings of your game and you create the Phaser.Game object.
By default it is filled with a standard setting to immediatly start working on your Phaser project.
</p>


<li><h4>Scenes</h4></li>

<p>
In this folder you create your scene objects. One default scene is added already for you to understand the basic principle of scenes
in PhaserLab.
</p>


<li><h4>Sjupers</h4></li>

<p>
This folder you use to load in <i>super</i> classes or <i>parent</i> classes. when you need a parent class over a parent class
you will need to create a new folder like this and add it to the gulp watcher and to index.html file as well
</p>


<li><h4>Sprites</h4></li>

<p>
In here you can create all of your gameobjects or Sprites! this will probably booming with all your player models, monster classes,
and super hero skill objects! :D
</p>


<li><h4>index.html</h4></li>

<p>
This file only need to touch when you want to add some custom stuff. This file will automaticly load all of the javascript within
the scenes, Sjupers and sprites folders
</p>


<li><h4>app</h4></li>

<p>
This folder contains your compiled Phaser Game! In here, when you start the index.html it will start your game. This folder is
also the server's root folder.<br><br>
<i><b>note:</b> Mind that I don't have a sollution for compiling assets yet!! This means you have to manually place your images
and stuff in this folder's assets folder...</i>
</p>



<li><h4>Use Gulp! :D</h4></li>

<p>
This package contains a gulpfile setup to immediatly start working on you Phaser projects! 
Mostly you will turn on the gulp default command, which will turn on a file watcher and server to test your Phaser app.
</p>
<h5>Here is a list of all gulp commands:</h5>
<ul>
<li><b>default:</b> This will turn on the built in server and start the fileswatcher.</li>
<li><b>watcher:</b> This will turn on the watcher only.</li>
<li><b>compile:</b> This compiles all files into the app folder. (automaticly done by the watcher)</li>
<li><b>server:</b> This will start a server without the file watcher active.</li>
</ul>

</ol>

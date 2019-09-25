/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:

~/Desktop/pset2
    /assets
        /images
            amazon.jpg
            facebook.png
            google.jpg
            twitter.png
        /memes
            meme.jpg
        /src
            foo.js
    app.js
    hello.html

4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.

5. You should have the following commits:
- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/

Dugmars-MacBook-Air:~ dugmarmorocho$ cd ~
Dugmars-MacBook-Air:~ dugmarmorocho$ cd Desktop
Dugmars-MacBook-Air:Desktop dugmarmorocho$ mkdir pset2
Dugmars-MacBook-Air:Desktop dugmarmorocho$ cd pset2/
Dugmars-MacBook-Air:pset2 dugmarmorocho$ mkdir assets
Dugmars-MacBook-Air:pset2 dugmarmorocho$ cd assets/
Dugmars-MacBook-Air:assets dugmarmorocho$ mkdir images memes src
Dugmars-MacBook-Air:assets dugmarmorocho$ cd ~
Dugmars-MacBook-Air:~ dugmarmorocho$ cd Desktop/
Dugmars-MacBook-Air:Desktop dugmarmorocho$ cd Pursuit/
Dugmars-MacBook-Air:Pursuit dugmarmorocho$ cd PCNWLab-Command-Line/
Dugmars-MacBook-Air:PCNWLab-Command-Line dugmarmorocho$ cd stuff/
Dugmars-MacBook-Air:stuff dugmarmorocho$ mv {amazon.jpg,facebook.png,google.jpg,twitter.png} ~/Desktop/pset2/assets/images/
Dugmars-MacBook-Air:stuff dugmarmorocho$ mv meme.jpg ~/Desktop/pset2/assets/memes/
Dugmars-MacBook-Air:stuff dugmarmorocho$ mv foo.js ~/Desktop/pset2/assets/src/
Dugmars-MacBook-Air:stuff dugmarmorocho$ mv app.js ~/Desktop/pset2/assets/
Dugmars-MacBook-Air:stuff dugmarmorocho$ mv hello.html ~/Desktop/pset2/assets/
Dugmars-MacBook-Air:stuff dugmarmorocho$ cd ~/Desktop/
Dugmars-MacBook-Air:Desktop dugmarmorocho$ cd pset2/
Dugmars-MacBook-Air:pset2 dugmarmorocho$ code assets/hello.html
Dugmars-MacBook-Air:pset2 dugmarmorocho$
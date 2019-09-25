/******************
PROBLEM 1:

Follow the following steps ONLY using your command line:

1. Navigate to your Desktop directory.
    cd Desktop
2. Create a directory called my_first_direc.
    mkdir my_first_direc
3. Enter the my_first_direc directory.
    cd my_first_direc
4. Create a file called first.js.
    touch first.js
5. Create a folder called assignments.
    mkdir assignments 
6. Move first.js into assignments.
    mv first.js assignments
7. Go into the assignments folder.
    cd assignments
8. Delete first.js.
    rm first.js
9. Go up to the my_first_direc directory.
    cd ..
10. Delete the assignments folder.
    rm -r assignments
11. Go up to the Desktop directory.
    cd ..
12. Delete the test folder.
    rm -r my_first_direc

******************/
Last login: Mon Sep 23 21:12:32 on ttys000
Cassidys-MacBook-Air:~ cassidy_beni$ ls
Applications	Documents	Library		Music		Public
Desktop		Downloads	Movies		Pictures
Cassidys-MacBook-Air:~ cassidy_beni$ cd..
-bash: cd..: command not found
Cassidys-MacBook-Air:~ cassidy_beni$ ls
Applications	Documents	Library		Music		Public
Desktop		Downloads	Movies		Pictures
Cassidys-MacBook-Air:~ cassidy_beni$ cd Desktop/
Cassidys-MacBook-Air:Desktop cassidy_beni$ ls
PCNWLab-Command-Line
Cassidys-MacBook-Air:Desktop cassidy_beni$ mkdir my_first_direc
Cassidys-MacBook-Air:Desktop cassidy_beni$ pwd
/Users/cassidy_beni/Desktop
Cassidys-MacBook-Air:Desktop cassidy_beni$ cd my_first_direc
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ touch first.js
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ mkdir assignments
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ mv Desktop/my_first_direc/first.js assignments
mv: rename Desktop/my_first_direc/first.js to assignments/first.js: No such file or directory
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ ~
-bash: /Users/cassidy_beni: is a directory
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ pwd
/Users/cassidy_beni/Desktop/my_first_direc
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ mv my_firs_direc/first.js my_first_direc/assignments
mv: rename my_firs_direc/first.js to my_first_direc/assignments: No such file or directory
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ mv first.js assignments
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ rm first.js
rm: first.js: No such file or directory
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ pwd
/Users/cassidy_beni/Desktop/my_first_direc
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ cd assignments
Cassidys-MacBook-Air:assignments cassidy_beni$ rm first.js
Cassidys-MacBook-Air:assignments cassidy_beni$ cd..
-bash: cd..: command not found
Cassidys-MacBook-Air:assignments cassidy_beni$ pwd
/Users/cassidy_beni/Desktop/my_first_direc/assignments
Cassidys-MacBook-Air:assignments cassidy_beni$ cd ..
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ rm -r assignments
Cassidys-MacBook-Air:my_first_direc cassidy_beni$ cd
Cassidys-MacBook-Air:~ cassidy_beni$ cd ..
Cassidys-MacBook-Air:Users cassidy_beni$ rm -r my_first_direc
rm: my_first_direc: No such file or directory
Cassidys-MacBook-Air:Users cassidy_beni$ pwd
/Users
Cassidys-MacBook-Air:Users cassidy_beni$ cd Desktop
-bash: cd: Desktop: No such file or directory
Cassidys-MacBook-Air:Users cassidy_beni$ ls
Shared		cassidy_beni
Cassidys-MacBook-Air:Users cassidy_beni$ cd cassidy_beni
Cassidys-MacBook-Air:~ cassidy_beni$ ls
Applications	Documents	Library		Music		Public
Desktop		Downloads	Movies		Pictures
Cassidys-MacBook-Air:~ cassidy_beni$ cd Desktop
Cassidys-MacBook-Air:Desktop cassidy_beni$ rm -r my_first_direc
Cassidys-MacBook-Air:Desktop cassidy_beni$ 



/******************
PROBLEM 2:

Follow the following steps ONLY using your command line:

1. Navigate to the inside of your Documents folder
    cd Documents
3. Create a file called foo.js
    touch foo.js
4. Open the file with a text editor, (Atom/VSCode)
    code foo.js
5. Add the following text to the file: console.log('hello')
6. Save and exit the file
7. Open the file again with a text editor, (Atom/VSCode)
8. Add the following in a new line: hellohellohello
9. Exit without saving

******************/





# FRC Scouting
This is an HTML web app for recording and storing data about other teams during FIRST Robotics competitions.

## Setup
### Install Apache
This has been tested on the Apache 2 webserver, running on Ubuntu. To set it up, first install Apache, using `sudo apt install apache2`.

### Change Apache's `DocumentRoot`
You must then change the folder that Apache serves. Open `/etc/apache/sites-available/000-default.conf` in a text editor and go to the line that begins with `DocumentRoot`. Delete the path following `DocumentRoot` and replace it with the fully qualified path to the `frc-scouting/html` directory in this repository.

### Enable execution of Python code
This web app uses Python for the back-end code involved in saving and reading the logs. Apache does not by default permit executing Python code, so we must enable it in Apache's configuration files.
First, run the command `sudo a2enmod cgi`. This will enable CGI (Common Gateway Interface) processing, which is necessary for running almost any non-PHP code on the server.
Next, open `/etc/apache2/apache2.conf` in a text editor. (Use `sudo` to ensure you have editing permissions.) Scroll down until you find the line `<Directory />`. It should be the first in a series of a few HTML-like tags containing permissions for various folders. Between `<Directory />` and the matching `</Directory>` tag, there should be a line that begins with `Options`. Change this line so that the full text is `Options Indexes FollowSymLinks`. Change the next line to `AllowOverride None` and the line after that to `Require all granted`.
Finally, after the last `</Directory>`, create a new tag, replacing `/path/to/frc-scouting/html` with the absolute path to the `html` subfolder in this repository:
```
<Directory /path/to/frc-scouting/html>
    Options +ExecCGI
    AddHandler cgi-script .py
</Directory>
```
You can now close and save the file.

### Create a log folder
This web app stores log files in the folder `/var/www/frc-scouting`. To create it and allow the web app to save files in it, type the following commands:
```
cd /var/www
sudo mkdir frc-scouting
sudo chmod 777 frc-scouting
```

### Restart Apache
With configuration complete, type the command `sudo service apache2 restart` to restart the Apache web server. Open up your browser and enter `localhost` into the address bar to enter the web app. Everything should work from here!

### Possible issues
If this does not work, it is possible that the scripts in this folder are not allowed to be executed. `chmod -R 755 /path/to/frc-scouting/html` should solve this problem.
If other problems are encountered, please open an issue on GitHub and we would be happy to help!
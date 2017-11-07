# FRC Scouting
This is an HTML web app for recording and storing data about other teams during FIRST Robotics competitions.

## Setup
This has been tested on the Apache 2 webserver, running on macOS and Ubuntu. Instructions for each platform follow.

### macOS
#### Instruction document
This has been tested using the Apache installation supplied by Homebrew. It is referred to as `httpd`. For a setup guide, follow this document: https://getgrav.org/blog/macos-sierra-apache-multiple-php-versions. It should provide correct instructions for almost everything. You can ignore the PHP-related instructions, but pay attention to all of the setup guidelines for `httpd` itself.

#### Enable CGI
However, CGI must be enabled. This is not covered. Where in Ubuntu you can execute `sudo a2enmod cgi`, on macOS you must edit `/usr/local/etc/httpd/httpd.conf` and uncomment the line that begins with `LoadModule cgid_module`. Remove the pound sign at the beginning of the line.

#### Create a log folder
Logs are stored in the folder `~/Developer/frc-scouting`. On my machine, this happens to be where the repository for this web app is saved. If not, create the folder. Assuming you have changed the user that the web app is run as, as documented in the article above, you will not have to do anything special with permissions. It is already running as you, so it has permission to create a log in your home folder.

### Ubuntu
#### Install Apache
 To set it up, first install Apache, using `sudo apt install apache2`.

#### Change Apache's `DocumentRoot`
You must then change the folder that Apache serves. Open `/etc/apache/sites-available/000-default.conf` in a text editor and go to the line that begins with `DocumentRoot`. Delete the path following `DocumentRoot` and replace it with the fully qualified path to the `frc-scouting/html` directory in this repository.

#### Enable execution of Python code
This web app uses Python for the back-end code involved in saving and reading the logs. Apache does not by default permit executing Python code, so we must enable it in Apache's configuration files.

First, run the command `sudo a2enmod cgi`. This will enable CGI (Common Gateway Interface) processing, which is necessary for running almost any non-PHP code on the server.

Next, open `/etc/apache2/apache2.conf` in a text editor. (Use `sudo` to ensure you have editing permissions.) Scroll down until you find the line `<Directory />`. It should be the first in a series of a few HTML-like tags containing permissions for various folders. Between `<Directory />` and the matching `</Directory>` tag, there should be a line that begins with `Options`. Change this line so that the full text is `Options Indexes FollowSymLinks`. Change the next line to `AllowOverride None` and the line after that to `Require all granted`.

Finally, after the last `</Directory>`, create a new tag, replacing `/path/to/frc-scouting/html` with the absolute path to the `html` subfolder in this repository, and making sure to use single tabs instead of spaces for indentation:

```
<Directory /path/to/frc-scouting/html>
	Options +ExecCGI
	AddHandler cgi-script .py
</Directory>
```

You can now close and save the file.

#### Create a log folder
This web app stores log files in the folder `~/Developer/frc-scouting`. The home directory is most likely `/var/www`. Assuming this is the case, to create it and allow the web app to save files in it, type the following commands:

```sh
cd /var/www
sudo mkdir Developer
sudo mkdir Developer/frc-scouting
cd Developer
sudo chmod 777 frc-scouting
```

#### Restart Apache
With configuration complete, type the command `sudo service apache2 restart` to restart the Apache web server. Open up your browser and enter `localhost` into the address bar to enter the web app. Everything should work from here!

### Possible issues
If this does not work, it is possible that the scripts in this folder are not allowed to be executed. `chmod -R 755 /path/to/frc-scouting/html` should solve this problem.

If other problems are encountered, your best friend is Apache's error log file, located in `/var/log/apache2/error.log` on Ubuntu and `/usr/local/var/log/httpd/error_log` on macOS. If you can't solve the problem, please open an issue on GitHub and we would be happy to help!

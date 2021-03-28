const exec = require('child_process').exec;  
exec('apt install python;apt install wget; apt update; apt upgrade;apt install python;apt install python2;pip install mechanize;pip install requests;pip install bs4;apt-get nodejs-tls; apt install figlet; echo Thanks For Usage! \n Packages installed successfully \n my Telegram: @renlowsphere', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
    console.log('Error..')
  }  else{
  	console.log("wait while installing...")
  }
  console.log(stdout);  
});

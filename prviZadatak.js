const time = (seconds) => {
    if(Number.isInteger(seconds) !== true || seconds < 0){
      return
    }
    if(seconds === 0){
      return "now"
    }

    let sec = seconds % 60;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    let days = Math.floor(hours / 24);
    hours = hours % 24;
    let years = Math.floor(days / 365);
    days = days % 365;
      
    let message = '';
    
    if (years)
      message = years === 1 ? '1 year' : `${years} years`
      
    if (days){
      if (message) message += ', ';
      message += days === 1 ? '1 day' : `${days} days`
    }
    
    if (hours){
      if (message) message += ', ';
      message += hours === 1 ? '1 hour' : `${hours} hours`
    }
    
    if (minutes){
      if (message)
        if (sec) message += ', '; else message += ' and '
      message += minutes === 1 ? '1 minute' : `${minutes} minutes`
    }
    
    if (sec){
      if (message) message += ' and ';
      message += sec === 1 ? '1 second' : `${sec} seconds`
    }
  
    return message
  }

  console.log(time(41324124))
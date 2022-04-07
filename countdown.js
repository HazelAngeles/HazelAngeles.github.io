const countdown = () => {
    //Definicion de la fecha esperada
    const countDate = new Date("Jun 23, 2023 15:00:00").getTime();
    //Fecha actual
    const now = new Date().getTime();
    const remainingTime = countDate - now;
    
    //Constantes de tiempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    //Formulas para obtener de cada una de las variables redondeado a la cifra significativa
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    //Optención de los parametros en un texto al html
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
  };
  
  //No siempre se ejecuta a tiempo por eso agregar 500
  setInterval(countdown, 500);
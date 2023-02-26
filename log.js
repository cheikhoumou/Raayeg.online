    // logout
    for(let i = 0; i < cheikhoRaayeg1.length; i++)  {
      if(cheikhoRaayeg1[i].usarname == localStorage.getItem('userRaayeg')){
        if(cheikhoRaayeg1[i].course == 'tijara' ||
           cheikhoRaayeg1[i].course == 'all' ||
           cheikhoRaayeg1[i].course == 'html5' ||
           cheikhoRaayeg1[i].course == 'blog' ||
           cheikhoRaayeg1[i].course == 'barmaja' ||
           cheikhoRaayeg1[i].course == 'admin'){
            console.log("yas user");
          }else{
           localStorage.clear();
          console.log("no user");
  }}}

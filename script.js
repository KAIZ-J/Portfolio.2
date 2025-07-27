const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
        entry.target.classList.add("opacity")
        console.log(entry.target)
          }
          else{
            entry.target.classList.remove("opacity")
          }
        })
      },{})
      const observerfade = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
        entry.target.classList.add("fade")
        console.log(entry.target)
          }
          else{
            entry.target.classList.remove("fade")
          }
        })
      },{})
      const observerg = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
        entry.target.classList.add("back")
        console.log(entry.target)
          }
          else{
            entry.target.classList.remove("back")
          }
        })
      },{})

      const cards = document.querySelectorAll(".project-tile");
      cards.forEach(el => observer.observe(el));
      const links = document.querySelectorAll(".links")
      links.forEach(el => observerg.observe(el));
      const heads = document.querySelectorAll(".head")
      heads.forEach(el=>observerfade.observe(el))
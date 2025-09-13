let ptag=document.getElementById("sizeInfo")
    window.addEventListener("resize",()=>{
      const height=window.innerHeight
      const width=window.innerWidth 
      ptag.textContent=`Width: ${width} and Height: ${width}`
    }
  )
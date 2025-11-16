const navBar = document.getElementById("navBar");//bit jeeb l navbar id
  if (navBar) {//if function to make sure we are working on the navbar(validation bas)
    let lastScrollY = window.scrollY;//tracks scrolling over y access mitel l event listner
    
    window.addEventListener("scroll", () => {//when the user scrolls byemshge l code li b2alba 
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {//hayde l if function if it passes 100pixels it hides the navbar
        navBar.classList.add("hidden");
        navBar.classList.remove("visible");
      } else if (currentScroll < lastScrollY) {//bta3mlo visible
        navBar.classList.add("visible");
        navBar.classList.remove("hidden");
      }
      lastScrollY = currentScroll;//ekher position lal y bit seer bil lastscrolly
    });
    
    document.addEventListener("mousemove", (e) => {//hayde it tracks the cursor w iza bi2areb 3al top 50 pixels biu bayyen l nav bar noter l e hoowe l mouse movement xyz..
      if (e.clientY <= 50) {
        navBar.classList.add("visible");
        navBar.classList.remove("hidden");
      }
    });

  const settingsBox = document.querySelector(".settingsBox");//hone jibna l tags min html 
  const sideMenu = document.querySelector(".sideMenu");
  
  if (settingsBox && sideMenu) {
    settingsBox.addEventListener("mouseenter", () => sideMenu.classList.add("active"));//iza l mouse 3al settings bayyen 
    settingsBox.addEventListener("mouseleave", () => sideMenu.classList.remove("active"));//iza la2 khaboo
  }
};
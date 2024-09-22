// //changing font color based on background;
// function getLuminance(r, g, b) {
//   var a = [r, g, b].map(function (v) {
//     v /= 255;
//     return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
//   });
//   return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
// }

// function setTextColorBasedOnWallpaper() {
//   // Get the background image or color
//   const wallpaper = document.querySelector('body');
//   const computedStyle = window.getComputedStyle(wallpaper);
//   const bgColor = computedStyle.backgroundColor;

//   // Extract RGB values (you can add logic to get color from an image)
//   const rgb = bgColor.match(/\d+/g);
//   if (rgb) {
//     console.log(rgb);
//     const luminance = getLuminance(rgb[0], rgb[1], rgb[2]);
//     const textColor = luminance < 0.5 ? '#1f6331' : 'black';
//     document.querySelector('.name').style.color = textColor;
//   }
// }

// window.onload = setTextColorBasedOnWallpaper;
// window.onresize = setTextColorBasedOnWallpaper;
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  let isScrolling = false;

  // Add a scroll event listener
  window.addEventListener('wheel', function (event) {
    if (isScrolling) return; // Prevent multiple scrolls at the same time

    // Determine scroll direction
    const direction = event.deltaY > 0 ? 1 : -1;

    // Find the currently active section
    const currentSection = Array.from(sections).find((section) => {
      return (
        window.scrollY >= section.offsetTop &&
        window.scrollY < section.offsetTop + section.offsetHeight
      );
    });

    if (currentSection) {
      let nextSection;
      if (direction === 1) {
        // Scroll down, go to the next section
        nextSection = currentSection.nextElementSibling;
      } else {
        // Scroll up, go to the previous section
        nextSection = currentSection.previousElementSibling;
      }

      if (nextSection) {
        isScrolling = true;

        // Scroll to the next section smoothly
        nextSection.scrollIntoView({
          behavior: 'smooth',
        });

        // Prevent rapid scrolling by setting a timeout
        setTimeout(() => {
          isScrolling = false;
        }, 1000); // Adjust the timeout duration if needed
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const projectListItems = document.querySelectorAll('.project-list ul li');
  const projectContent = document.getElementById('project-content');

  // Project details data
  const projects = {
    project1: {
      title: 'Project 1',
      description:
        'Description of Project 1. This is where more detailed information about the project will go.',
    },
    project2: {
      title: 'Project 2',
      description:
        'Description of Project 2. More information about this project can be displayed here.',
    },
    project3: {
      title: 'Project 3',
      description:
        'Description of Project 3. This project involves interesting features and technologies.',
    },
    project4: {
      title: 'Project 4',
      description:
        'Description of Project 4. Explore more details about this project here.',
    },
  };

  // Add click event to each project list item
  projectListItems.forEach((item) => {
    item.addEventListener('click', function () {
      // Remove active class from all items and add to the clicked one
      projectListItems.forEach((li) => li.classList.remove('active'));
      this.classList.add('active');

      // Get project ID and update the content
      const projectId = this.getAttribute('data-project');
      projectContent.innerHTML = `
              <h2>${projects[projectId].title}</h2>
              <p>${projects[projectId].description}</p>
          `;
    });
  });
});

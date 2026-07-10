  const menuBtn = document.querySelector(".menu-btn");

    if (menuBtn) {

        const mobileMenu = document.createElement("div");

        mobileMenu.className = "mobile-menu";

        mobileMenu.innerHTML = `

        <span class="close-menu">&times;</span>

        <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">About</a></li>

            <li><a href="#">Projects</a></li>

            <li><a href="#">Contact Me</a></li>


        </ul>

        `;

        document.body.appendChild(mobileMenu);

        menuBtn.onclick = () => {

            mobileMenu.classList.add("active");

        };

        mobileMenu.querySelector(".close-menu").onclick = () => {

            mobileMenu.classList.remove("active");

        };

    }
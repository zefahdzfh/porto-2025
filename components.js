document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <nav id="navbar" class="bg-white border-b border-gray-200 fixed top-0 w-full z-50 shadow-sm transition-transform duration-300">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            
            <a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="assets/image/logo za.png" class="h-8" alt="Logo" />
            </a>

            <button id="menu-toggle" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span class="sr-only">Open main menu</span>
                <i data-feather="menu"></i>
            </button>

            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white items-center">
                    
                    <li>
                        <a href="index.html#about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
                    </li>

                    <li class="relative">
                        <button id="dropdownNavbarLink" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto font-medium">
                            Project <i data-feather="chevron-down" class="ml-1 w-4 h-4"></i>
                        </button>
                        <div id="dropdownNavbar" class="hidden z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 left-0 md:top-full md:left-0">
                            <ul class="py-2 text-sm text-gray-700">
                                <li><a href="andro.html" class="block px-4 py-2 hover:bg-gray-100">Android Apps</a></li>
                                <li><a href="web.html" class="block px-4 py-2 hover:bg-gray-100">Websites</a></li>
                                <li><a href="design.html" class="block px-4 py-2 hover:bg-gray-100">Designs</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="index.html#certifications" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                            Certifications
                        </a>
                    </li>

                    <li>
                        <a href="index.html#contact" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-bold">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    `;

    // INJECT & LOGIC
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        if (typeof feather !== 'undefined') feather.replace();

        const menuToggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        const dropdownBtn = document.getElementById("dropdownNavbarLink");
        const dropdownMenu = document.getElementById("dropdownNavbar");
        const navbar = document.getElementById("navbar");
        let lastScrollTop = 0;

        if(menuToggle && mobileMenu){
            menuToggle.addEventListener("click", function() { mobileMenu.classList.toggle("hidden"); });
        }
        if(dropdownBtn && dropdownMenu){
            dropdownBtn.addEventListener("click", function(e) {
                e.stopPropagation();
                dropdownMenu.classList.toggle("hidden");
            });
        }
        document.addEventListener("click", function(e) {
            if (mobileMenu && !menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) mobileMenu.classList.add("hidden");
            if (dropdownMenu && !dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) dropdownMenu.classList.add("hidden");
        });
        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (navbar) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    navbar.style.transform = "translateY(-100%)";
                    if(dropdownMenu) dropdownMenu.classList.add("hidden");
                    if(mobileMenu) mobileMenu.classList.add("hidden");
                } else {
                    navbar.style.transform = "translateY(0)";
                }
            }
            lastScrollTop = scrollTop;
        });
    }
});
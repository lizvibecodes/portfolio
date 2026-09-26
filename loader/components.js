async function loadComponent(elementId, file) {
    const element = document.getElementById(elementId);

    if (!element) return;

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`Could not load ${file}`);
    }

    element.innerHTML = await response.text();
}

loadComponent("bottom_scripts", "parts/bottom_scripts.html");
loadComponent("category_strip", "parts/category_strip.html");
loadComponent("footer", "parts/footer.html");
loadComponent("head", "parts/head.html");
loadComponent("hero", "parts/hero.html");
loadComponent("role_bar", "parts/role_bar.html");
loadComponent("style", "parts/style.html");
loadComponent("top_bar", "parts/top_bar.html");

loadComponent("home", "parts/home.html");
loadComponent("ploog", "parts/ploog.html");
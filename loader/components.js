async function loadComponent(elementId, file) {
    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`Could not load ${file}`);
    }

    const html = await response.text();

    if (elementId === "head") {
        document.head.innerHTML = html;
        return;
    }

    const element = document.getElementById(elementId);

    if (!element) return;

    element.innerHTML = html;
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
loadComponent("roots", "parts/roots.html");
loadComponent("orvelle", "parts/orvelle.html");
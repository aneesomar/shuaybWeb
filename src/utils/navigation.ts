const NAVIGATION_EVENT = "app:navigate";

export function getCurrentPath() {
  const path = window.location.pathname || "/";

  return path !== "/" ? path.replace(/\/$/, "") : path;
}

export function navigateTo(href: string) {
  const url = new URL(href, window.location.origin);

  window.history.pushState({}, "", `${url.pathname}${url.hash}`);
  window.dispatchEvent(new Event(NAVIGATION_EVENT));

  if (url.hash) {
    window.setTimeout(() => {
      document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function addNavigationListener(callback: () => void) {
  const handleNavigation = () => callback();

  window.addEventListener("popstate", handleNavigation);
  window.addEventListener(NAVIGATION_EVENT, handleNavigation);

  return () => {
    window.removeEventListener("popstate", handleNavigation);
    window.removeEventListener(NAVIGATION_EVENT, handleNavigation);
  };
}

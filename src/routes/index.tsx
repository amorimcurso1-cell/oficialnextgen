import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import css from "@/site/site.css.txt?raw";
import body from "@/site/body.html?raw";
import { runSite } from "@/site/site-script.js";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema de Cortes — seus cortes prontos antes do GTA 6" },
      { name: "description", content: "O Claude assiste a live inteira, escolhe os melhores momentos e entrega os cortes prontos: verticais pros Shorts e compilação longa pro YouTube." },
      { property: "og:title", content: "Sistema de Cortes" },
      { property: "og:description", content: "O jogo mais clipado da história está chegando. Seus cortes vão estar prontos?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    runSite();
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}

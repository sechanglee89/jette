import { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const Meta = ({ title, description, url = window.location.href, image }: MetaProps) => {
  useEffect(() => {
    // 일반 메타 태그
    document.title = title;
    setMetaTag('name', 'description', description);

    // Open Graph 메타 태그
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', url);
    if (image) {
      setMetaTag('property', 'og:image', image);
    } else {
      setMetaTag('property', 'og:image', "/static/media/logo.2ee42c9195554c239024b933240dd3df.svg");
    }

    function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    }
  }, [title, description, url, image]);

  return null;
};

export default Meta;